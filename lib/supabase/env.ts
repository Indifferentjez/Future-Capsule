/**
 * Supabase env validation. Throws a clear error listing missing vars.
 * Use one key: publishable (new) or anon (legacy).
 */

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const PUBLISHABLE = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const SUPABASE_URL = URL?.trim() || null;
export const SUPABASE_KEY = (PUBLISHABLE ?? ANON)?.trim() ?? null;

export function getSupabaseUrl(): string {
  if (!SUPABASE_URL) {
    const missing = ["NEXT_PUBLIC_SUPABASE_URL"];
    throw new Error(
      `Supabase URL is required. Missing env: ${missing.join(", ")}. Set them in .env.local at project root.`
    );
  }
  return SUPABASE_URL;
}

export function getSupabaseKey(): string {
  if (!SUPABASE_KEY) {
    const missing = [
      ...(PUBLISHABLE === undefined && ANON === undefined
        ? ["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY"]
        : []),
      ...(PUBLISHABLE === "" && ANON === ""
        ? ["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY (empty)"]
        : []),
    ];
    if (missing.length === 0)
      missing.push("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY");
    throw new Error(
      `Supabase key is required. Missing or empty env: ${missing.join(", ")}. Set them in .env.local at project root.`
    );
  }
  return SUPABASE_KEY;
}

/** Development-only: log whether URL/key are set (booleans only). */
export function logSupabaseEnvCheck(): void {
  if (process.env.NODE_ENV !== "development") return;
  // eslint-disable-next-line no-console
  console.log("[Supabase env check]", {
    hasUrl: Boolean(SUPABASE_URL),
    hasKey: Boolean(SUPABASE_KEY),
  });
}

const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

export function getSupabaseServiceRoleKey(): string {
  if (!SERVICE_ROLE) {
    throw new Error(
      "Supabase service role key is required. Missing env: SUPABASE_SERVICE_ROLE_KEY. Set it in .env.local at project root (server-side only)."
    );
  }
  return SERVICE_ROLE;
}
