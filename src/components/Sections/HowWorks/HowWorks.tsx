"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaLink, FaShareAlt, FaWallet, FaCheckCircle } from "react-icons/fa";
import { GradientCard } from "@/components/ui/gradient-card";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.12, ease: "easeOut" },
  }),
};

const steps = [
  {
    key: "createLink",
    gradient: "blue",
    badgeColor: "#2194db",
    icon: <FaLink className="h-40 w-40" />,
  },
  {
    key: "share",
    gradient: "teal",
    badgeColor: "#21dba9",
    icon: <FaShareAlt className="h-40 w-40" />,
  },
  {
    key: "customerPays",
    gradient: "violet",
    badgeColor: "#6d5dfc",
    icon: <FaWallet className="h-40 w-40" />,
  },
  {
    key: "settle",
    gradient: "mix",
    badgeColor: "#21dba9",
    icon: <FaCheckCircle className="h-40 w-40" />,
  },
] as const;

const HowWorksSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="how-works"
      className="w-full bg-background py-20 text-foreground lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            {t("howWorksSection.eyebrow")}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight lg:text-5xl">
            {t("howWorksSection.title")}
          </h2>
          <p className="mt-5 text-pretty text-base text-muted-foreground lg:text-lg">
            {t("howWorksSection.description")}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {steps.map(({ key, gradient, badgeColor, icon }, i) => (
            <motion.div
              key={key}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <GradientCard
                gradient={gradient}
                badgeColor={badgeColor}
                badgeText={t(`howWorksSection.steps.${key}.badge`)}
                title={t(`howWorksSection.steps.${key}.title`)}
                description={t(`howWorksSection.steps.${key}.description`)}
                icon={icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorksSection;
