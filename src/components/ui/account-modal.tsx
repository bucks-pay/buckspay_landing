"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaXmark, FaArrowRight, FaCircleCheck, FaBolt } from "react-icons/fa6";

interface AccountModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

const EMPTY = { name: "", lastName: "", email: "", phone: "", company: "" };

const apiBase =
  process.env.NEXT_PUBLIC_STAGE === "dev"
    ? "http://localhost:3000"
    : "https://apiv1.buckspay.xyz";

const AccountModal: React.FC<AccountModalProps> = ({ open, onClose }) => {
  const { t } = useTranslation(["landing"]);
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Reset to a clean state shortly after closing.
  useEffect(() => {
    if (open) return;
    const id = window.setTimeout(() => {
      setForm(EMPTY);
      setStatus("idle");
    }, 300);
    return () => window.clearTimeout(id);
  }, [open]);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isValid =
    form.name.trim() !== "" && emailValid && form.company.trim() !== "";

  const setField =
    (key: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          country: "",
          typeIdentification: "",
          identification: "",
          name: form.name,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
          message: `Solicitud de creación de cuenta${
            form.company ? ` — Empresa: ${form.company}` : ""
          }`,
        }),
      });
      setStatus(res.ok || res.status === 201 ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-[#21dba9]/50 focus:bg-foreground/[0.06] focus:outline-none focus:ring-2 focus:ring-[#21dba9]/25";
  const labelClass =
    "mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={t("accountModal.title")}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-foreground/10 bg-card p-6 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6)] sm:max-w-lg sm:p-8 lg:max-w-xl lg:p-10"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            {/* Brand top glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#21dba9]/20 blur-[80px]"
            />

            <button
              type="button"
              onClick={onClose}
              aria-label={t("accountModal.close")}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-foreground/10 bg-foreground/5 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9]"
            >
              <FaXmark className="h-4 w-4" />
            </button>

            {status === "success" ? (
              <div className="relative flex flex-col items-center py-6 text-center">
                <FaCircleCheck className="h-14 w-14 text-[#21dba9]" />
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {t("accountModal.successTitle")}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("accountModal.successMessage")}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 rounded-xl bg-gradient-to-r from-[#2194db] to-[#21dba9] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  {t("accountModal.done")}
                </button>
              </div>
            ) : (
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                  <FaBolt className="h-3 w-3 text-[#21dba9]" />
                  <span className="bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-transparent">
                    {t("accountModal.badge")}
                  </span>
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                  {t("accountModal.title")}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("accountModal.subtitle")}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="am-name" className={labelClass}>
                        {t("accountModal.name")}
                      </label>
                      <input
                        id="am-name"
                        type="text"
                        autoFocus
                        required
                        value={form.name}
                        onChange={setField("name")}
                        placeholder={t("accountModal.namePlaceholder")}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="am-lastName" className={labelClass}>
                        {t("accountModal.lastName")}
                      </label>
                      <input
                        id="am-lastName"
                        type="text"
                        value={form.lastName}
                        onChange={setField("lastName")}
                        placeholder={t("accountModal.lastNamePlaceholder")}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="am-email" className={labelClass}>
                      {t("accountModal.email")}
                    </label>
                    <input
                      id="am-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={setField("email")}
                      placeholder={t("accountModal.emailPlaceholder")}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="am-company" className={labelClass}>
                        {t("accountModal.company")}
                      </label>
                      <input
                        id="am-company"
                        type="text"
                        required
                        value={form.company}
                        onChange={setField("company")}
                        placeholder={t("accountModal.companyPlaceholder")}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="am-phone" className={labelClass}>
                        {t("accountModal.phone")}
                      </label>
                      <input
                        id="am-phone"
                        type="tel"
                        value={form.phone}
                        onChange={setField("phone")}
                        placeholder={t("accountModal.phonePlaceholder")}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-[#e5484d]">
                      {t("accountModal.errorMessage")}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!isValid || status === "loading"}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2194db] to-[#21dba9] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-12px_rgba(33,219,169,0.6)] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {status === "loading"
                      ? t("accountModal.submitting")
                      : t("accountModal.submit")}
                    {status !== "loading" && (
                      <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    {t("accountModal.disclaimer")}
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountModal;
