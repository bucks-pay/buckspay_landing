"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaPalette, FaShieldAlt, FaGlobeAmericas } from "react-icons/fa";
import { GlowCard } from "@/components/ui/spotlight-card";

const AboutSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  const cards = [
    { key: "whiteLabel", icon: <FaPalette className="h-5 w-5 text-foreground" /> },
    { key: "nonCustodial", icon: <FaShieldAlt className="h-5 w-5 text-foreground" /> },
    { key: "multichain", icon: <FaGlobeAmericas className="h-5 w-5 text-foreground" /> },
  ];

  return (
    <section id="about" className="w-full bg-background py-20 text-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-transparent">
            {t("aboutSection.eyebrow")}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight lg:text-5xl">
            {t("aboutSection.title")}
          </h2>
          <p className="mt-5 text-pretty text-base text-muted-foreground lg:text-lg">
            {t("aboutSection.description")}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ key, icon }) => (
            <GlowCard
              key={key}
              glowColor="brand"
              customSize
              className="h-[420px] w-full max-w-[360px]"
            >
              <div className="flex h-full flex-col p-2">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t(`aboutSection.cards.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`aboutSection.cards.${key}.description`)}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
