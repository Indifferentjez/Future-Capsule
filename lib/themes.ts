export const THEME_IDS = ["purple", "ocean", "emerald", "aurora"] as const;
export type ThemeId = (typeof THEME_IDS)[number];

export const THEME_LABELS: Record<ThemeId, string> = {
  purple: "Muted Violet",
  ocean: "Deep Ocean Glass",
  emerald: "Botanical",
  aurora: "Aurora Noir (Black)",
};

/** Swatch colors for theme switcher: [background, surface, accent] */
export const THEME_SWATCHES: Record<ThemeId, [string, string, string]> = {
  purple: ["#0b0c12", "#1a1b24", "#786eab"],
  ocean: ["#0D2B5B", "#142B4D", "#2F7BFF"],
  emerald: ["#0b1410", "#2d4d35", "#8bd749"],
  aurora: ["#000000", "#131314", "#3d6ef7"],
};

export function isThemeId(value: string): value is ThemeId {
  return THEME_IDS.includes(value as ThemeId);
}
