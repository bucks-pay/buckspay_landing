import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-[820px] w-full bg-gradient-to-r from-[#16205faf] to-[#64e1f4b7]"
    >
      {/* Mobile GIF */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/mobile.gif"
          alt="Mobile Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Desktop and Tablet Banner */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/banner.gif"
          alt="Desktop and Tablet Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          {t("")}
        </h1>
        <p className="mt-4 text-lg lg:text-xl">
          {t("")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;