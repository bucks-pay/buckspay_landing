"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HowWorksSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      image: "/kyc.png",
      title: "KYC/KYT Verification",
      description: "Verify your identity in minutes and start using Buckspay securely."
    },
    {
      number: "2",
      image: "/wallet.png",
      title: "Connect your wallet",
      description: "Deposit your cryptos or make a transfer to pay."
    },
    {
      number: "3",
      image: "/qr.png",
      title: "Scan QR & Pay",
      description: "Enjoy the simplicity of a platform that makes every transaction seamless in real-time."
    }
  ];


  const textVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }, 
  };

  return (
    <motion.section
      id="how-works"
      className="font-display relative flex flex-col items-center justify-center w-full min-h-[50vh] bg-[#08070E] text-white p-4 md:p-6 lg:px-16 xl:px-40 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
      <motion.div
        className="max-w-5xl w-full"
        variants={textVariants} 
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center"
          variants={textVariants}
        >
          How It Works
        </motion.h2>
        
        <motion.p
          className="text-base md:text-lg mb-8 md:mb-12 text-center"
          variants={textVariants}
        >
          Start using Buckspay in just a few taps — no banks, no hassle, no limits.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          variants={stepVariants} 
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={stepVariants} 
            >
              <div className="relative aspect-square w-full mb-3 md:mb-4 overflow-hidden rounded-lg">
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />

                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-black"></div>
                </div>

                <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20">
                  <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                    <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-[#090812] border border-white/20">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                      <span className="text-lg md:text-xl font-bold text-white relative z-10">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-1 text-center md:text-left">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-300 text-center md:text-left">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowWorksSection;