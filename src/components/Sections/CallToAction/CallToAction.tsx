"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  // Variantes de animación
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
  };

  return (
    <motion.section
      id="call"
      className="font-display relative w-full py-40 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
 
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a1a2e_0%,#08070E_70%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-400/10 to-transparent"></div>
      </div>


      <motion.div
        className="relative z-10 container mx-auto px-4"
        variants={textVariants} 
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            variants={textVariants} 
          >
            Ready to pay with crypto?
          </motion.h2>
          <Link href="https://app.buckspay.xyz/" target="_blank">
            <motion.button
              className="relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#2194DB] to-[#21DBA9] text-black font-semibold rounded-full transition-transform duration-300 ease-out transform hover:scale-110 shadow-lg overflow-hidden group"
              variants={textVariants} 
            >
              <span className="absolute inset-0 bg-white/30 skew-x-[-45deg] -left-full transition-all duration-500 ease-out group-hover:left-full"></span>
              <span className="relative z-10 flex items-center">
                Get started now
                <FaArrowRight className="ml-2" />
              </span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;