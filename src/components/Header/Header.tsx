"use client";
import styles from "./header.module.css";
import Link from "next/link";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import Logo from "../Logo/Logo";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export const Header = () => {
  const { t } = useTranslation(["header"]);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <Image src="/logos/newBPlogo_fit.png" alt="Buckspay Logo" width={140} height={140} />
      </Link>

      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        {pathname === "/" && (
          <ul className={styles.menuList}>
            <li>
              <Link className={styles.link} href={"#about"}>
                Why Buckspay
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"#benefits"}>
                Benefits
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"#how-works"}>
                How it Works
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"#testimonials"}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"#call"}>
                Community
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className={styles.containerButtons}>
        <div className={`${styles.button}`}>
        <Link href="https://app.buckspay.xyz/" target="_blank">
            <button className="flex items-center justify-center px-4 py-2 bg-[#2194DB] hover:bg-blue-600 text-black font-semibold rounded-full transition-colors duration-300 transform hover:scale-105 cursor-pointer">
              Get started now
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
        <HamburgerMenu onClick={toggleMenu} />
      </div>
    </header>
  );
};
