"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaWallet, FaGlobeAmericas, FaExchangeAlt, FaMobileAlt } from "react-icons/fa";

const AboutSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  const features = [
    {
      icon: FaWallet,
      title: t("Blockchain technology"),
      description: t(
        "This infrastructure reduces the risk of fraud and maintains a reliable record of your financial transactions."
      ),
    },
    {
      icon: FaGlobeAmericas,
      title: t("International payments"),
      description: t(
        "Buckspay offers a practical and secure solution to manage your payments and personal finances from anywhere in the world."
      ),
    },
    {
      icon: FaExchangeAlt,
      title: t("Currency conversion"),
      description: t(
        "Buckspay makes currency conversion easy. It lets you store your balance digitally and pay using any local payment method."
      ),
    },
    {
      icon: FaMobileAlt,
      title: t("Mobile website"),
      description: t(
        "Manage your finances from any mobile device and keep constant track of your expenses and transactions—wherever you are."
      ),
    },
  ];


  const textVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }, 
  };

  return (
    <motion.section
      id="about"
      className="font-display relative flex flex-col items-center justify-center w-full min-h-[60vh] bg-[#08070E] text-white p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
      <motion.div
        className="max-w-7xl mx-auto w-full px-4"
        variants={textVariants} 
      >
        <motion.h2
          className="text-4xl font-bold text-center lg:text-5xl mb-8"
          variants={textVariants}
        >
          {t("Why Buckspay?")}
        </motion.h2>
        <motion.p
          className="text-base text-center max-w-3xl mx-auto lg:text-lg mb-15"
          variants={textVariants}
        >
          {t(
            "Benefits designed to provide a seamless, secure, and accessible experience for all users."
          )}
        </motion.p>
        <motion.div
          className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
          variants={featureVariants} 
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start text-left space-y-4"
              variants={featureVariants} 
            >
              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-md"></div>
                <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-[#090812] border border-white/10">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-base text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;