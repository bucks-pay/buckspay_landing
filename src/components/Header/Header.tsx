"use client";
import styles from "./header.module.css";
import Link from "next/link";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import Logo from "../Logo/Logo";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export const Header = () => {
  const { t } = useTranslation(["header"]);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.container} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <Link href={"/"} className={styles.logo}>
        <Image
          src="/logos/newBPlogo_fit.png"
          alt="Buckspay Logo"
          width={140}
          height={140}
        />
      </Link>

      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        {pathname === "/" && (
          <ul className={styles.menuList}>
            <li>
              <Link className={styles.navLink} href={"#about"}>
                Why Buckspay
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href={"#benefits"}>
                Benefits
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href={"#how-works"}>
                How it Works
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href={"#testimonials"}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href={"#call"}>
                Community
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className={styles.containerButtons}>
        <div className={`${styles.button}`}>
          <Link href="https://app.buckspay.xyz/" target="_blank">
            <button className={`${styles.getStartedButton}`}>
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

export default Header;