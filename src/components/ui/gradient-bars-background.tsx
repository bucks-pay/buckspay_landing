"use client";

import React from "react";

interface GradientBarsProps {
  numBars?: number;
  /** Cycle these colors per bar (overrides gradientFrom). On-brand by default. */
  colors?: string[];
  gradientFrom?: string;
  gradientTo?: string;
  animationDuration?: number;
  className?: string;
}

/**
 * Animated "equalizer" bars: each bar is a vertical gradient that pulses on a
 * staggered loop, tallest toward the edges. Decorative background only.
 * Honors `prefers-reduced-motion`.
 */
export const GradientBars: React.FC<GradientBarsProps> = ({
  numBars = 15,
  colors,
  gradientFrom = "rgb(33, 148, 219)",
  gradientTo = "transparent",
  animationDuration = 2,
  className = "",
}) => {
  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    const distanceFromCenter = Math.abs(position - 0.5);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <>
      <style>{`
        @keyframes pulseBar {
          0% { transform: scaleY(var(--initial-scale)); }
          100% { transform: scaleY(calc(var(--initial-scale) * 0.7)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gradient-bar { animation: none !important; }
        }
      `}</style>

      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      >
        <div
          className="flex h-full w-full"
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {Array.from({ length: numBars }).map((_, index) => {
            const height = calculateHeight(index, numBars);
            const color =
              colors && colors.length ? colors[index % colors.length] : gradientFrom;
            const style: React.CSSProperties = {
              flex: `1 0 calc(100% / ${numBars})`,
              maxWidth: `calc(100% / ${numBars})`,
              height: "100%",
              background: `linear-gradient(to top, ${color}, ${gradientTo})`,
              transform: `scaleY(${height / 100})`,
              transformOrigin: "bottom",
              transition: "transform 0.5s ease-in-out",
              animation: `pulseBar ${animationDuration}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.1}s`,
              outline: "1px solid rgba(0, 0, 0, 0)",
              boxSizing: "border-box",
            };
            (style as Record<string, string | number>)["--initial-scale"] =
              height / 100;
            return <div key={index} className="gradient-bar" style={style} />;
          })}
        </div>
      </div>
    </>
  );
};

export interface GradientBarsBackgroundProps extends GradientBarsProps {
  /** Classes for the outer wrapper. */
  wrapperClassName?: string;
  children?: React.ReactNode;
}

/**
 * Convenience wrapper: bars behind, content (z-10) in front. The caller owns
 * the section sizing and background color so it can blend with neighbours.
 */
export function GradientBarsBackground({
  wrapperClassName = "",
  children,
  ...bars
}: GradientBarsBackgroundProps) {
  return (
    <div className={`relative w-full overflow-hidden ${wrapperClassName}`}>
      <GradientBars {...bars} />
      {children && (
        <div className="relative z-10 flex w-full items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

export default GradientBarsBackground;
