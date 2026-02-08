"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const GRADIENTS = {
  sunset: { start: "#facc15", end: "#f97316", textDark: true },
  aqua: { start: "#22d3ee", end: "#34d399", textDark: true },
  violet: { start: "#a855f7", end: "#ec4899", textDark: false },
  lime: { start: "#34d399", end: "#facc15", textDark: true },
  blueViolet: { start: "#3d6ef7", end: "#786eab", textDark: false },
} as const;

export type NeonGradientId = keyof typeof GRADIENTS;

export interface NeonGradientButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  gradient: NeonGradientId;
  variant?: "solid" | "outline";
  glow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  /** Use type="submit" for form primary submit */
  type?: "button" | "submit" | "reset";
  /** When true, render the single child (e.g. Link) with button styling */
  asChild?: boolean;
}

function hexToRgb(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `${r}, ${g}, ${b}`;
}

export const NeonGradientButton = React.forwardRef<HTMLButtonElement, NeonGradientButtonProps>(
  (
    {
      gradient,
      variant = "solid",
      glow = true,
      fullWidth,
      className,
      children,
      disabled,
      asChild,
      ...props
    },
    ref
  ) => {
    const config = GRADIENTS[gradient];
    const gradientStyle = `linear-gradient(90deg, ${config.start}, ${config.end})`;
    const glowStyle =
      glow && variant === "solid"
        ? {
            boxShadow: `0 0 18px rgba(${hexToRgb(config.start)}, 0.25), 0 0 28px rgba(${hexToRgb(config.end)}, 0.18)`,
          }
        : undefined;

    const outlineGlowStyle =
      glow && variant === "outline"
        ? {
            boxShadow: `0 0 14px rgba(${hexToRgb(config.start)}, 0.2), 0 0 22px rgba(${hexToRgb(config.end)}, 0.12)`,
          }
        : undefined;

    const textClass = config.textDark ? "text-black" : "text-white";
    const pillClass =
      "h-[52px] min-h-[52px] rounded-full px-5 font-semibold text-[15px] transition-all duration-[200ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:brightness-[1.06] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

    const gradientTextSpan = (content: React.ReactNode) => (
      <span
        className="inline-flex items-center justify-center gap-2"
        style={{
          backgroundImage: gradientStyle,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {content}
      </span>
    );

    if (variant === "outline") {
      const wrapperClass = cn("inline-flex rounded-full p-[2px]", fullWidth && "w-full");
      const innerClass = cn(pillClass, "w-full bg-background flex items-center justify-center", className);
      return (
        <span className={wrapperClass} style={{ background: gradientStyle, ...outlineGlowStyle }}>
          {asChild && React.isValidElement(children) ? (
            React.cloneElement(children as React.ReactElement<{ className?: string; style?: React.CSSProperties; children?: React.ReactNode }>, {
              className: cn(innerClass, (children as React.ReactElement<{ className?: string }>).props?.className),
              style: { background: "hsl(var(--background))" },
              children: gradientTextSpan((children as React.ReactElement<{ children?: React.ReactNode }>).props?.children ?? children),
            })
          ) : (
            <button
              ref={ref}
              type={props.type ?? "button"}
              disabled={disabled}
              className={innerClass}
              {...props}
            >
              {gradientTextSpan(children)}
            </button>
          )}
        </span>
      );
    }

    const solidBtn = (
      <button
        ref={ref}
        type={props.type ?? "button"}
        disabled={disabled}
        className={cn(pillClass, textClass, fullWidth && "w-full", className)}
        style={{ background: gradientStyle, ...glowStyle }}
        {...props}
      >
        {children}
      </button>
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string; style?: React.CSSProperties }>;
      return React.cloneElement(child, {
        className: cn(pillClass, textClass, fullWidth && "w-full", child.props?.className, className),
        style: { ...child.props?.style, background: gradientStyle, ...glowStyle },
        ref,
      });
    }

    return solidBtn;
  }
);
NeonGradientButton.displayName = "NeonGradientButton";
