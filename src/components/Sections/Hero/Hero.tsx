import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-[820px] w-full bg-gradient-to-r from-[#16205faf] to-[#64e1f4b7]"
    >
      <div className="absolute inset-0">
        <Image
          src="/banner.gif"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          {t("heroSection.title")}
        </h1>
        <p className="mt-4 text-lg lg:text-xl">
          {t("heroSection.paragraph")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;