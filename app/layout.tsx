import type { Metadata } from "next";
import "@/styles/themes.css";
import "@/styles/opening-ceremony.css";
import "./globals.css";
import { AuthButton } from "@/components/auth/AuthButton";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";

export const metadata: Metadata = {
  title: "Future Self Time Capsule",
  description: "Send a message to your future self",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur">
            <div className="container flex h-14 items-center justify-end gap-2 px-4">
              <ThemeSwitcher />
              <AuthButton />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
