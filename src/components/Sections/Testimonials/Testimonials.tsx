"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  TestimonialStack,
  type Testimonial,
} from "@/components/ui/testimonial-stack";

// Non-translatable presentation per testimonial (copy lives in i18n). The `id`
// maps to `testimonialsSection.items.<id>`.
// NOTE: placeholder testimonials — swap names/quotes for real customers.
const PEOPLE = [
  { id: "camila", initials: "CA", gradient: "from-[#2194db] to-[#21dba9]" },
  { id: "lucas", initials: "LM", gradient: "from-[#21dba9] to-[#2194db]" },
  { id: "juanjose", initials: "JJ", gradient: "from-[#6d5dfc] to-[#2194db]" },
  { id: "alejandro", initials: "AR", gradient: "from-[#2194db] to-[#6d5dfc]" },
] as const;

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  const testimonials: Testimonial[] = PEOPLE.map((p) => ({
    name: t(`testimonialsSection.items.${p.id}.name`),
    role: t(`testimonialsSection.items.${p.id}.role`),
    quote: t(`testimonialsSection.items.${p.id}.quote`),
    tags: t(`testimonialsSection.items.${p.id}.tags`, {
      returnObjects: true,
    }) as string[],
    initials: p.initials,
    gradient: p.gradient,
    verified: true,
  }));

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-background py-20 text-foreground lg:py-28"
    >
      {/* Aurora backdrop (decorative). */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2194db]/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-[#21dba9]/20 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6d5dfc]/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            {t("testimonialsSection.eyebrow")}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight lg:text-5xl">
            {t("testimonialsSection.title")}
          </h2>
          <p className="mt-5 text-pretty text-base text-muted-foreground lg:text-lg">
            {t("testimonialsSection.description")}
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <TestimonialStack
            testimonials={testimonials}
            labels={{
              prev: t("testimonialsSection.prev"),
              next: t("testimonialsSection.next"),
              helpful: t("testimonialsSection.helpful"),
              verified: t("testimonialsSection.verified"),
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
