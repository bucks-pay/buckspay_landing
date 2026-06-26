"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import i18n from "../../i18n";

const LANGS = [
  { code: "es", label: "Español", short: "ES", flag: "/icons/colombia.png" },
  { code: "en", label: "English", short: "EN", flag: "/icons/usa.png" },
] as const;

const LanguageSwitcher = () => {
  const [lang, setLang] = useState<string>(i18n.language || "es");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Keep in sync with i18next (e.g. changes from elsewhere).
  useEffect(() => {
    const onChange = (lng: string) => setLang(lng);
    i18n.on("languageChanged", onChange);
    return () => i18n.off("languageChanged", onChange);
  }, []);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LANGS.find((l) => l.code === lang.split("-")[0]) ?? LANGS[0];

  const select = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current.label}
        className="flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-2.5 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9]"
      >
        <Image
          src={current.flag}
          alt=""
          width={20}
          height={14}
          className="h-3.5 w-5 rounded-[2px] object-cover"
        />
        <span className="hidden sm:inline">{current.short}</span>
        <FaChevronDown
          className={`h-2.5 w-2.5 text-foreground/50 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-foreground/10 bg-card/95 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          {LANGS.map((l) => {
            const isActive = l.code === current.code;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => select(l.code)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-foreground/10 text-foreground"
                      : "text-foreground/75 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  <Image
                    src={l.flag}
                    alt=""
                    width={20}
                    height={14}
                    className="h-3.5 w-5 rounded-[2px] object-cover"
                  />
                  {l.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
