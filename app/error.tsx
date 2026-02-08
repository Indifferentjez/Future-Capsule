"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("[App Error]", error.message, error.digest);
    }
  }, [error]);

  const debugInfo = [
    `path: ${typeof window !== "undefined" ? window.location.pathname : "unknown"}`,
    `message: ${error.message}`,
    error.digest ? `digest: ${error.digest}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const copyDebug = () => {
    navigator.clipboard.writeText(debugInfo);
  };

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6">
      <h2 className="text-lg font-semibold text-foreground mb-2">Something went wrong</h2>
      <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
        This might be a temporary network issue. Try again or go back.
      </p>
      <div className="flex gap-2">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant="outline" onClick={copyDebug}>
          Copy debug info
        </Button>
      </div>
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-4 p-3 rounded bg-muted text-xs text-left max-w-md overflow-auto">
          {debugInfo}
        </pre>
      )}
    </div>
  );
}
