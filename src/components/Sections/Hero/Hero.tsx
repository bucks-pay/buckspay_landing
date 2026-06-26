"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { HeroSection } from "@/components/ui/hero-section-2";

const HeroSectionWrapper: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <HeroSection
      titleLead={t("heroSection.titleLead")}
      titleHighlight={t("heroSection.titleHighlight")}
      description={t("heroSection.description")}
      trustLabel={t("heroSection.trust")}
    />
  );
};

export default HeroSectionWrapper;
