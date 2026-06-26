"use client";

import React from "react";

/**
 * Subtle ambient fill for the hero's side gutters: a faint dot grid, masked
 * away from the center so it never sits behind the copy. Static and low-key.
 */
export function HeroAmbient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--foreground) 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 46% 50% at 50% 36%, transparent 55%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 46% 50% at 50% 36%, transparent 55%, black 100%)",
        }}
      />
    </div>
  );
}
