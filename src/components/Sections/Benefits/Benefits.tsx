"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Benefits: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <motion.section
      id="benefits"
      className="font-display relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-[#08070E] text-white p-4 md:p-8 lg:px-20 xl:px-80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="max-w-3xl text-center md:text-left mb-12 md:mb-0"
        variants={textVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Benefits of using cCOP
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Exclusive Discounts & Perks
            </h3>
            <p className="mt-2 text-base md:text-lg">
              Unlock special offers available only for CCOP users.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Support Local Innovation
            </h3>
            <p className="mt-2 text-base md:text-lg">
              {
                "By paying with cCOP, youre helping boost Colombia's digital economy."
              }
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="https://app.buckspay.xyz/"
            target="_blank"
            className="inline-block text-base md:text-lg text-blue-400 hover:underline"
          >
            Pay with cCOP now →
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px]"
        variants={imageVariants}
      >
        <div className="hidden lg:block absolute -top-0 -right-0 w-[200px] h-[200px] z-10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/buckspay-92b3c.appspot.com/o/images%2FCCOP.png?alt=media&token=09635c41-f9cb-4d51-83c2-52eee435f814"
            alt="ccop small"
            fill
            className="object-contain"
            sizes="200px"
          />
        </div>

        <div className="relative w-full aspect-square">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/buckspay-92b3c.appspot.com/o/images%2FCCOP.png?alt=media&token=09635c41-f9cb-4d51-83c2-52eee435f814"
            alt="ccop large"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
            priority
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Benefits;
