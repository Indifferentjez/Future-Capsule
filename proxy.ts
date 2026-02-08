import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseUrl, getSupabaseKey } from "@/lib/supabase/env";

const protectedPaths = ["/compose", "/inbox"];
const authPaths = ["/login", "/signup"];
const GET_CLAIMS_TIMEOUT_MS = 3000;
const RETRY_DELAY_MS = 200;

function genRid(): string {
  return `rid_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function isTransientError(e: unknown): boolean {
  const msg = String((e as Error)?.message ?? e).toLowerCase();
  const cause = (e as Error)?.cause;
  const causeMsg = cause ? String((cause as Error)?.message ?? cause).toLowerCase() : "";
  return (
    msg.includes("econnreset") ||
    msg.includes("fetch failed") ||
    msg.includes("network") ||
    msg.includes("timeout") ||
    causeMsg.includes("econnreset") ||
    causeMsg.includes("fetch failed")
  );
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("getClaims timeout")), ms);
    promise.then(
      (v) => {
        clearTimeout(t);
        resolve(v);
      },
      (err) => {
        clearTimeout(t);
        reject(err);
      }
    );
  });
}

export async function proxy(request: NextRequest) {
  const rid = genRid();
  const path = request.nextUrl.pathname;
  const response = NextResponse.next({ request });

  let url: string;
  let key: string;
  try {
    url = getSupabaseUrl();
    key = getSupabaseKey();
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[proxy] Supabase env missing, skipping auth:", (e as Error).message);
    }
    return response;
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value);
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  let user: { id: string } | null = null;
  const start = Date.now();

  const runGetClaims = async () => {
    await withTimeout(supabase.auth.getClaims(), GET_CLAIMS_TIMEOUT_MS);
    const { data } = await supabase.auth.getUser();
    return data.user;
  };

  try {
    try {
      user = await runGetClaims();
    } catch (firstErr) {
      user = null;
      if (isTransientError(firstErr)) {
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
        try {
          user = await runGetClaims();
        } catch {
          user = null;
        }
      }
    }
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      const duration = Date.now() - start;
      const code = (e as Error)?.cause ? String((e as Error).cause) : (e as Error)?.message;
      console.warn(`[proxy] getClaims failed path=${path} rid=${rid} duration=${duration}ms`, code ?? e);
    }
    return response;
  }

  if (process.env.NODE_ENV === "development" && path !== "/_next/webpack-hmr" && !path.startsWith("/_next")) {
    const duration = Date.now() - start;
    if (duration > 500) {
      console.info(`[proxy] getClaims slow path=${path} rid=${rid} duration=${duration}ms`);
    }
  }

  const isProtected = protectedPaths.some((p) => path.startsWith(p));
  const isAuthPage = authPaths.some((p) => path.startsWith(p));

  if (isProtected && !user) {
    const redirect = new URL("/", request.url);
    redirect.searchParams.set("signin", "1");
    return NextResponse.redirect(redirect);
  }
  if (isAuthPage && user) {
    return NextResponse.redirect(new URL("/inbox", request.url));
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|assets|fonts|auth/callback|api).*)",
  ],
};
