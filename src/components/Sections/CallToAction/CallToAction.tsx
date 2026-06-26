"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GradientBars } from "@/components/ui/gradient-bars-background";

// Brand equalizer palette (blue ↔ teal), cycled per bar.
const BRAND_BARS = ["rgb(33, 148, 219)", "rgb(33, 219, 169)"];

const CallToAction: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="call"
      className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-background py-32"
    >
      {/* Animated equalizer bars (brand colors). */}
      <GradientBars
        numBars={15}
        colors={BRAND_BARS}
        animationDuration={2}
        className="opacity-70"
      />

      {/* Soft fades into the neighbouring sections. The bottom fade dissolves the
          bars into the page background so the curtain-reveal footer — also on
          --background — flows in without a hard seam. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1/4 bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {t("callToActionSection.titleLead")}{" "}
          <span className="bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-transparent">
            {t("callToActionSection.titleHighlight")}
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          {t("callToActionSection.subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://dashboard.buckspay.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2194db] to-[#21dba9] px-8 py-4 font-semibold text-white shadow-[0_0_50px_-12px_rgba(33,219,169,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9]"
          >
            {t("callToActionSection.ctaPrimary")}
            <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="https://t.me/buckspay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-8 py-4 font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
          >
            {t("callToActionSection.ctaSecondary")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
