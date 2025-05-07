"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-start w-full bg-black text-white px-40 py-8">
      {/* Left Section */}
      <div className="flex flex-col items-start">
        {/* Text Above Logo */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Pay safely</p>
          <p className="text-lg font-semibold">no matter where u are</p>
        </div>
        {/* Logo */}
        <Image
          src="/logos/newBPlogo.png"
          alt="New Logo"
          width={190}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold mb-4">Social</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="https://x.com/buckspay_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Twitter (X)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/buckspay_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
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