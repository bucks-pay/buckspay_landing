"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import ThemeToggle from "../themeSwitcher/ThemeSwitcher";

const DASHBOARD_URL = "https://dashboard.buckspay.xyz/";
const DOCS_URL = "https://buckspay.mintlify.site";
const COMMUNITY_URL = "https://t.me/buckspay";
const HEADER_OFFSET = 96;

// Section anchors → i18n label keys. Order = display order.
const NAV_ITEMS = [
  { id: "about", key: "nav.why" },
  { id: "benefits", key: "nav.benefits" },
  { id: "how-works", key: "nav.howItWorks" },
  { id: "gasless", key: "nav.gasless" },
] as const;

export const Header = () => {
  const { t } = useTranslation(["header"]);
  const pathname = usePathname();
  const onLanding = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Hide on scroll-down, reveal on scroll-up; flag a scrolled state for styling.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > lastY && y > 80 && !menuOpen);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Scroll-spy: highlight the nav item for the section in view.
  useEffect(() => {
    if (!onLanding) return;
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onLanding]);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const el = document.getElementById(id);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    },
    []
  );

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-foreground/10 bg-card/80 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
            : "border-foreground/5 bg-card/50 shadow-none"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="BucksPay"
          className="flex shrink-0 items-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9]"
        >
          {/* Full logo, white wordmark for the dark theme. */}
          <Image
            src="/logos/buckspay-logo-white.png"
            alt="BucksPay"
            width={185}
            height={100}
            priority
            className="logo-light h-20 w-auto -my-3"
          />
          {/* Full logo, black wordmark for the light theme. */}
          <Image
            src="/logos/buckspay-logo-black.png"
            alt="BucksPay"
            width={185}
            height={100}
            priority
            className="logo-dark h-20 w-auto -my-3"
          />
        </Link>

        {/* Desktop nav */}
        {onLanding && (
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => scrollTo(e, item.id)}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground/65 hover:text-foreground"
                    }`}
                  >
                    {t(item.key)}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#2194db] to-[#21dba9]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
              >
                {t("nav.docs")}
              </Link>
            </li>
            <li>
              <Link
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
              >
                {t("nav.community")}
              </Link>
            </li>
          </ul>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />

          <Link
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#2194db] to-[#21dba9] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_-12px_rgba(33,219,169,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9] sm:inline-flex"
          >
            {t("cta")}
            <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile menu toggle */}
          {onLanding && (
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={t("menu")}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9] lg:hidden"
            >
              {menuOpen ? (
                <FaXmark className="h-4 w-4" />
              ) : (
                <FaBars className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {onLanding && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-foreground/10 bg-card/90 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => scrollTo(e, item.id)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={DOCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {t("nav.docs")}
                </Link>
              </li>
              <li>
                <Link
                  href={COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {t("nav.community")}
                </Link>
              </li>
              <li className="p-2">
                <Link
                  href={DASHBOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2194db] to-[#21dba9] px-4 py-3 text-sm font-semibold text-white"
                >
                  {t("cta")}
                  <FaArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
