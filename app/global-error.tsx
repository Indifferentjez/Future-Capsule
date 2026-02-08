"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("[Global Error]", error.message, error.digest);
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
    <html lang="en">
      <body style={{ fontFamily: "system-ui", padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Something went wrong</h1>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          This might be a temporary issue. Try again or refresh.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: "0.5rem 1rem",
            marginRight: "0.5rem",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
        <button type="button" onClick={copyDebug} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Copy debug info
        </button>
        {process.env.NODE_ENV === "development" && (
          <pre style={{ marginTop: "1rem", padding: "0.75rem", background: "#f5f5f5", fontSize: "0.75rem", textAlign: "left", overflow: "auto" }}>
            {debugInfo}
          </pre>
        )}
      </body>
    </html>
  );
}
