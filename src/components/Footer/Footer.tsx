"use client";

import React from "react";
import { useTranslation } from "react-i18next";
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

export const Footer = () => {
  const { t } = useTranslation(["footer"]);

  const primary: FooterLink[] = [
    {
      label: t("primary.createAccount"),
      href: "https://dashboard.buckspay.xyz/",
      external: true,
      icon: (
        <FaArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
      ),
    },
    {
      label: t("primary.requestDemo"),
      href: "#contact",
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
  );
};

export default Footer;
