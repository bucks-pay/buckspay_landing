"use client";
import styles from "./header.module.css";
import Link from "next/link";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import Logo from "../Logo/Logo";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
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
        <Logo />
      </Link>

      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        {pathname === "/" && (
          <ul className={styles.menuList}>
            <li>
              <Link className={styles.link} href={"#services"}>
                {t("services")}
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"#about"}>
                {t("about")}
              </Link>
            </li>
            {/* <li>
              <Link className={styles.link} href={"#contact"}>
                {t("contact")}
              </Link>
            </li> */}
          </ul>
        )}
      </div>
      <div className={styles.containerButtons}>
        <div className={`${styles.button} `}>
          <LanguageSwitcher />
          <Link
            className={styles.goApp}
            href={
              process.env.NEXT_PUBLIC_STAGE == "dev"
                ? "https://localhost:3001"
                : "https://app.buckspay.xyz"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("goApp")}
          </Link>
        </div>
        <HamburgerMenu onClick={toggleMenu} />
      </div>
    </header>
  );
};
