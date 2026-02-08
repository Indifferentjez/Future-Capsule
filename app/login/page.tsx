"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { NeonGradientButton } from "@/components/ui/neon-gradient-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DEBUG_ENDPOINT = "http://127.0.0.1:7245/ingest/f8e7f2d9-6acb-412e-aa62-ecdc1a46b856";

function debugLog(payload: { location: string; message: string; data?: Record<string, unknown>; hypothesisId?: string }) {
  if (typeof window === "undefined" || process.env.NODE_ENV !== "development") return;
  fetch(DEBUG_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, timestamp: Date.now(), sessionId: "debug-session" }) }).catch(() => {});
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<"google" | "apple" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  useEffect(() => {
    const err = searchParams.get("error");
    if (err === "oauth_callback_failed") setError("Sign-in was cancelled or failed. Please try again.");
  }, [searchParams]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/inbox");
    router.refresh();
  };

  return (
    <main className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Access your time capsules</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <NeonGradientButton
              type="submit"
              gradient="blueViolet"
              variant="solid"
              glow
              fullWidth
              disabled={loading}
            >
              {loading ? "Signing in…" : "Log In"}
            </NeonGradientButton>
          </form>

          <div className="relative flex items-center gap-2">
            <span className="flex-1 border-t border-border" />
            <span className="text-xs text-muted-foreground">or continue with</span>
            <span className="flex-1 border-t border-border" />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <NeonGradientButton
              gradient="aqua"
              variant="outline"
              glow
              fullWidth
              type="button"
              disabled={!!oauthLoading}
              onClick={async () => {
                setError(null);
                setOauthLoading("google");
                debugLog({ location: "login/page.tsx", message: "Starting Google OAuth", hypothesisId: "H2-oauth" });
                const redirectTo = `${window.location.origin}/auth/callback`;
                const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
                  provider: "google",
                  options: { redirectTo },
                });
                debugLog({ location: "login/page.tsx", message: "signInWithOAuth result", data: { hasUrl: !!data?.url, error: oauthError?.message }, hypothesisId: "H2-oauth" });
                if (oauthError) {
                  setError(oauthError.message);
                  setOauthLoading(null);
                  return;
                }
                if (data?.url) window.location.href = data.url;
                else setOauthLoading(null);
              }}
            >
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              {oauthLoading === "google" ? "Redirecting…" : "Continue with Google"}
            </NeonGradientButton>
            <NeonGradientButton
              gradient="violet"
              variant="outline"
              glow
              fullWidth
              asChild
            >
              <Link href="/login">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Continue with Apple
              </Link>
            </NeonGradientButton>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            No account?{" "}
            <Link href="/signup" className="underline hover:text-foreground">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
