"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);


  const textVariants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, 
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }, 
  };

  return (
    <motion.section
      id="services"
      className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-[60vh] bg-[#08070E] p-4 md:p-8 lg:p-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
      <motion.div
        className="relative z-10 max-w-3xl text-center md:text-left text-white mb-8 md:mb-0 md:ml-8 lg:ml-40"
        variants={textVariants}
      >
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          {t("Pay with crypto — no more manual currency conversions to worry about.")}
        </h2>
      </motion.div>


      <motion.div
        className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] aspect-square"
        variants={imageVariants}
      >
        <Image 
          src={"/phone.png"} 
          alt="services" 
          fill
          className="object-contain"
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
          priority
        />
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;