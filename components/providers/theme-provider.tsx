"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { THEME_IDS } from "@/lib/themes";

const themeIds = THEME_IDS as unknown as string[];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="purple"
      enableSystem={false}
      storageKey="time-capsule-theme"
      themes={themeIds}
    >
      {children}
    </NextThemesProvider>
  );
}
