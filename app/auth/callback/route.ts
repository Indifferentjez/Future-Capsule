import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

const DEBUG_ENDPOINT = "http://127.0.0.1:7245/ingest/f8e7f2d9-6acb-412e-aa62-ecdc1a46b856";

function debugLog(data: { location: string; message: string; data?: Record<string, unknown>; hypothesisId?: string }) {
  if (process.env.NODE_ENV !== "development") return;
  fetch(DEBUG_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      timestamp: Date.now(),
      sessionId: "debug-session",
    }),
  }).catch(() => {});
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  // #region agent log
  debugLog({
    location: "auth/callback/route.ts",
    message: "callback hit",
    data: { hasCode: !!code },
    hypothesisId: "H2-callback",
  });
  // #endregion

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=oauth_callback_failed", request.url));
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    // #region agent log
    debugLog({
      location: "auth/callback/route.ts",
      message: "exchange result",
      data: { error: error?.message ?? null },
      hypothesisId: "H2-callback",
    });
    // #endregion

    if (error) {
      return NextResponse.redirect(new URL("/login?error=oauth_callback_failed", request.url));
    }
    return NextResponse.redirect(new URL("/inbox", request.url));
  } catch (e) {
    debugLog({
      location: "auth/callback/route.ts",
      message: "exchange threw",
      data: { err: String((e as Error).message) },
      hypothesisId: "H2-callback",
    });
    return NextResponse.redirect(new URL("/login?error=oauth_callback_failed", request.url));
  }
}
