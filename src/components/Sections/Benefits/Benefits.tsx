"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBolt, FaPercent, FaGlobe, FaCircle } from "react-icons/fa";
import { GeometricBackdrop } from "@/components/ui/shape-landing-hero";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.12, ease: "easeOut" },
  }),
};

const cards = [
  { key: "instantSettlement", icon: FaBolt },
  { key: "lowerFees", icon: FaPercent },
  { key: "globalReach", icon: FaGlobe },
] as const;

const Benefits: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden bg-background py-20 text-foreground lg:py-28"
    >
      {/* Decorative floating shapes (brand palette, prefers-reduced-motion aware). */}
      <GeometricBackdrop />
      {/* Fade top/bottom so the section blends with its neighbours. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/[0.08] bg-foreground/[0.03] px-3 py-1"
          >
            <FaCircle className="h-2 w-2 text-[#21dba9]" />
            <span className="text-sm font-medium tracking-wide text-foreground/60">
              {t("benefitsSection.badge")}
            </span>
          </motion.span>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-6 text-balance text-3xl font-bold tracking-tight lg:text-5xl"
          >
            {t("benefitsSection.titleLead")}{" "}
            <span className="bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-transparent">
              {t("benefitsSection.titleHighlight")}
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground lg:text-lg"
          >
            {t("benefitsSection.description")}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-foreground/10 bg-card/70 p-6 backdrop-blur-sm transition-colors hover:bg-muted/80 lg:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-gradient-to-br from-[#2194db]/20 to-[#21dba9]/20">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground lg:text-xl">
                {t(`benefitsSection.cards.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`benefitsSection.cards.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="https://dashboard.buckspay.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#2194db] to-[#21dba9] px-6 py-3 font-semibold text-white shadow-[0_0_40px_-10px_rgba(33,219,169,0.45)] transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9]"
          >
            {t("benefitsSection.cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
