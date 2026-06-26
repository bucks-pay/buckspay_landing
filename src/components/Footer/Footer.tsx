"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { OPEN_ACCOUNT_EVENT } from "@/lib/account-modal";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaArrowRight,
} from "react-icons/fa6";
import {
  CinematicFooter,
  type FooterLink,
} from "@/components/ui/motion-footer";
import AccountModal from "@/components/ui/account-modal";

export const Footer = () => {
  const { t } = useTranslation(["footer"]);
  const [modalOpen, setModalOpen] = useState(false);

  // Allow any CTA across the page to open this modal.
  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener(OPEN_ACCOUNT_EVENT, handler);
    return () => window.removeEventListener(OPEN_ACCOUNT_EVENT, handler);
  }, []);

  const primary: FooterLink[] = [
    {
      label: t("primary.createAccount"),
      onClick: () => setModalOpen(true),
      icon: (
        <FaArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
      ),
    },
  ];

  const social: FooterLink[] = [
    {
      label: "X",
      href: "https://x.com/buckspay_",
      icon: <FaXTwitter className="h-4 w-4" />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/buckspay_",
      icon: <FaInstagram className="h-4 w-4" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/bucks-pay/",
      icon: <FaLinkedinIn className="h-4 w-4" />,
    },
    {
      label: "Telegram",
      href: "https://t.me/buckspay",
      icon: <FaTelegram className="h-4 w-4" />,
    },
  ];

  const marquee = t("marquee", { returnObjects: true }) as string[];

  return (
    <>
      <CinematicFooter
        heading={t("heading")}
        primary={primary}
        social={social}
        marquee={marquee}
        labels={{
          rights: t("rights"),
          backToTop: t("backToTop"),
        }}
      />
      <AccountModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Footer;
