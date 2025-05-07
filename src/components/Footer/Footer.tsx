"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="font-display flex flex-col md:flex-row justify-between items-center md:items-start w-full bg-[#08070E] text-white p-6 md:px-8 lg:px-20 xl:px-40 py-8 border-t border-white/10">
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
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
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg md:text-xl font-bold mb-4">Social</h3>
        <ul className="space-y-2 text-center md:text-left">
          <li>
            <Link
              href="https://x.com/buckspay_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors inline-block"
            >
              Twitter (X)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/buckspay_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors inline-block"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors inline-block"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;