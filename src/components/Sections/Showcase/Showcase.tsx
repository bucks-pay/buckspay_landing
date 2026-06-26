"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

// Lazy-load the Three.js hills so `three` stays out of the initial page bundle.
const GLSLHills = dynamic(
  () => import("@/components/ui/glsl-hills").then((m) => m.GLSLHills),
  { ssr: false }
);

const ShowcaseSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="showcase"
      className="relative flex h-[90vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated GLSL hills background (transparent canvas over the dark bg). */}
      <div className="absolute inset-0 z-0">
        <GLSLHills width="100%" height="100%" />
      </div>

      {/* Subtle vignette so the copy stays readable over the lines. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklch, var(--background) 85%, transparent), transparent 70%)",
        }}
      />

      {/* Blend the hills into the neighbouring sections so the edges aren't hard. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent md:h-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background to-transparent md:h-56"
      />

      {/* Copy overlay — pointer-events-none keeps the canvas untouched. */}
      <div className="pointer-events-none relative z-20 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold text-foreground drop-shadow-lg md:text-4xl lg:text-5xl">
          {t("showcaseSection.title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground drop-shadow md:text-lg">
          {t("showcaseSection.subtitle")}
        </p>
      </div>
    </section>
  );
};

export default ShowcaseSection;
