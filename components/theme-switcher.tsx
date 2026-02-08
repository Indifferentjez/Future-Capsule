"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  THEME_LABELS,
  THEME_SWATCHES,
  type ThemeId,
} from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NeonGradientButton } from "@/components/ui/neon-gradient-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = (resolvedTheme ?? theme ?? "purple") as ThemeId;
  const themes: ThemeId[] = ["purple", "ocean", "emerald", "aurora"];

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="gap-2" disabled>
        <span className="h-4 w-4 rounded-full bg-muted" />
        Theme
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <span className="flex gap-0.5">
            {THEME_SWATCHES[current].map((color, i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-full border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </span>
          Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {themes.map((id) => {
          const [bg, surface, accent] = THEME_SWATCHES[id];
          const isSelected = current === id;
          return (
            <DropdownMenuItem
              key={id}
              onClick={() => setTheme(id)}
              className="flex items-center gap-3 py-2"
            >
              <span className="flex gap-0.5 shrink-0">
                <span
                  className="h-4 w-4 rounded border border-border"
                  style={{ backgroundColor: bg }}
                />
                <span
                  className="h-4 w-4 rounded border border-border"
                  style={{ backgroundColor: surface }}
                />
                <span
                  className="h-4 w-4 rounded border border-border"
                  style={{ backgroundColor: accent }}
                />
              </span>
              <span className={cn(isSelected && "font-medium")}>
                {THEME_LABELS[id]}
              </span>
            </DropdownMenuItem>
          );
        })}
        <div className="border-t border-border pt-3 mt-1 px-2 pb-1">
          <p className="text-xs text-muted-foreground mb-2">Auth button preview</p>
          <NeonGradientButton
            gradient="blueViolet"
            variant="solid"
            glow
            fullWidth
            className="!h-9 !min-h-9 text-xs"
          >
            Log In
          </NeonGradientButton>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
