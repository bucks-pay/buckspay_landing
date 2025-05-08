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
import { motion } from "framer-motion";

export const Header = () => {
  const { t } = useTranslation(["header"]);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId?: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 100; // Ajusta este valor según la altura de tu header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                className={styles.navLink}
                href={"#about"}
                onClick={(e) => handleLinkClick(e, "about")}
              >
                Why Buckspay
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                className={styles.navLink}
                href={"#benefits"}
                onClick={(e) => handleLinkClick(e, "benefits")}
              >
                Benefits
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                className={styles.navLink}
                href={"#how-works"}
                onClick={(e) => handleLinkClick(e, "how-works")}
              >
                How it Works
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                className={styles.navLink}
                href={"#testimonials"}
                onClick={(e) => handleLinkClick(e, "testimonials")}
              >
                Testimonials
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                className={styles.navLink}
                href="https://t.me/buckspay"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community
              </Link>
            </motion.li>
          </ul>
        )}
      </div>

      <div className={styles.containerButtons}>
        <motion.div
          className={`${styles.button}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="https://app.buckspay.xyz/" target="_blank">
            <button className={`${styles.getStartedButton}`}>
              Get started now
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </motion.div>
        <HamburgerMenu onClick={toggleMenu} />
      </div>
    </motion.header>
  );
};

export default Header;
