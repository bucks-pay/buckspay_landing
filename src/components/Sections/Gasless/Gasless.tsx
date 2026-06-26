"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBolt, FaCheck, FaXmark } from "react-icons/fa6";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.12, ease: "easeOut" },
  }),
};

const GaslessSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  const withoutPoints = t("gaslessSection.without.points", {
    returnObjects: true,
  }) as string[];
  const withPoints = t("gaslessSection.with.points", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="gasless"
      className="relative w-full overflow-hidden bg-background py-20 text-foreground lg:py-28"
    >
      {/* Soft top fade so the section melts into the one above (no hard seam). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-background to-transparent"
      />
      {/* Ambient brand glow, centered so its blur isn't clipped at the top edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#21dba9]/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm font-semibold uppercase tracking-widest">
            <FaBolt className="h-3.5 w-3.5 text-[#21dba9]" />
            <span className="bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-transparent">
              {t("gaslessSection.badge")}
            </span>
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight lg:text-5xl">
            {t("gaslessSection.titleLead")}{" "}
            <span className="bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-transparent">
              {t("gaslessSection.titleHighlight")}
            </span>
          </h2>
          <p className="mx-auto mt-5 text-pretty text-base text-muted-foreground lg:text-lg">
            {t("gaslessSection.subtitle")}
          </p>
        </motion.div>

        {/* Hero stat: $0 gas */}
        <motion.div
          className="relative mx-auto mt-12 flex flex-col items-center"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute h-32 w-32 rounded-full bg-[#21dba9]/20 blur-3xl"
          />
          <span className="relative bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-7xl font-black leading-none text-transparent lg:text-8xl">
            $0
          </span>
          <span className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("gaslessSection.statLabel")}
          </span>
        </motion.div>

        {/* Comparison */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
          {/* Without gasless */}
          <motion.div
            className="rounded-2xl border border-foreground/10 bg-card/60 p-6 lg:p-8"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-muted-foreground">
              {t("gaslessSection.without.title")}
            </h3>
            <ul className="mt-5 space-y-4">
              {withoutPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e5484d]/15 text-[#e5484d]">
                    <FaXmark className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With BucksPay gasless — highlighted */}
          <motion.div
            className="relative rounded-2xl border border-[#21dba9]/40 bg-gradient-to-br from-[#2194db]/[0.1] to-[#21dba9]/[0.06] p-6 shadow-[0_0_50px_-15px_rgba(33,219,169,0.5)] lg:p-8"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-[#2194db] to-[#21dba9] px-3 py-1 text-xs font-bold text-white">
              {t("gaslessSection.with.badge")}
            </span>
            <h3 className="text-lg font-semibold text-foreground">
              {t("gaslessSection.with.title")}
            </h3>
            <ul className="mt-5 space-y-4">
              {withPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#21dba9]/20 text-[#21dba9]">
                    <FaCheck className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tech note */}
        <motion.p
          className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 text-center text-sm text-muted-foreground"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <FaBolt className="h-3.5 w-3.5 shrink-0 text-[#21dba9]" />
          {t("gaslessSection.techNote")}
        </motion.p>
      </div>
    </section>
  );
};

export default GaslessSection;
