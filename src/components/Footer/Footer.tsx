"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
  };

  const linkVariants = {
    hover: { 
      scale: 1.1, 
      color: "#21DBA9", 
      transition: { duration: 0.3, ease: "easeInOut" }, 
    },
  };

  return (
    <motion.footer
      className="font-display flex flex-col md:flex-row justify-between items-center md:items-start w-full bg-[#08070E] text-white p-6 md:px-8 lg:px-20 xl:px-40 py-8 border-t border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >

      <motion.div
        className="flex flex-col items-center md:items-start mb-8 md:mb-0"
        variants={itemVariants} 
      >
        <div className="text-center md:text-left mb-4">
          <p className="text-base md:text-lg">Pay safely</p>
          <p className="text-base md:text-lg">no matter where u are</p>
        </div>
        <Image
          src="/logos/newBPlogo.png"
          alt="New Logo"
          width={190}
          height={50}
          className="object-contain w-[150px] md:w-[190px]"
          priority
        />
      </motion.div>


      <motion.div
        className="flex flex-col items-center md:items-start"
        variants={itemVariants} 
      >
        <h3 className="text-lg md:text-xl font-bold mb-4">Social</h3>
        <ul className="space-y-2 text-center md:text-left">
          <motion.li variants={itemVariants}>
            <motion.a
              href="https://x.com/buckspay_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors inline-block"
              whileHover="hover"
              variants={linkVariants} 
            >
              Twitter (X)
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <motion.a
              href="https://www.instagram.com/buckspay_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors inline-block"
              whileHover="hover"
              variants={linkVariants} 
            >
              Instagram
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors inline-block"
              whileHover="hover"
              variants={linkVariants} 
            >
              LinkedIn
            </motion.a>
          </motion.li>
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;