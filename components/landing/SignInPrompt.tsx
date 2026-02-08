"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SignInPrompt() {
  const searchParams = useSearchParams();
  if (searchParams.get("signin") !== "1") return null;
  return (
    <section className="py-8 px-6 border-t border-border">
      <Card className="max-w-md mx-auto bg-muted/50">
        <CardContent className="p-6 text-center">
          <p className="text-foreground font-medium mb-2">Sign in to create and manage your time capsules.</p>
          <Button asChild>
            <Link href="/login">Sign in</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
