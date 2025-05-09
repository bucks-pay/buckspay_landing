import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-[450px] md:h-[820px] w-full bg-[#08070E]"
    >
      {/* Mobile GIF */}
      <div className="absolute inset-0 md:hidden flex items-center justify-center">
        <div className="relative w-full h-[100%]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/buckspay-92b3c.appspot.com/o/images%2Fmobile.gif?alt=media&token=c35768de-ae1e-4af9-bf08-26f827d8e1f2"
            alt="Mobile Banner"
            layout="fill"
            objectFit="cover"
            priority
            className="object-center"
          />
        </div>
      </div>

      {/* Desktop and Tablet Banner */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/buckspay-92b3c.appspot.com/o/images%2Fbanner.gif?alt=media&token=3fa337a7-d272-4473-9404-40209475442a"
          alt="Desktop and Tablet Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-semibold">{t("")}</h1>
        <p className="mt-4 text-lg lg:text-xl">{t("")}</p>
      </div>
    </section>
  );
};

export default HeroSection;
