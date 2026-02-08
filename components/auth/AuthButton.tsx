"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthButton() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const client = createClient();
    client.auth.getUser().then(({ data: { user } }) => setUser(user));
    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) =>
      setUser(session?.user ?? null)
    );
    return () => subscription.unsubscribe();
  }, []);

  const signOut = useCallback(() => {
    createClient().auth.signOut();
  }, []);

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <Link href="/inbox">Inbox</Link>
        </Button>
        <Button variant="outline" size="sm" onClick={signOut}>
          Sign out
        </Button>
      </div>
    );
  }
  return (
    <Button asChild size="sm">
      <Link href="/login">Sign in</Link>
    </Button>
  );
}
