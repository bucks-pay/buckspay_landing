"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegThumbsUp,
  FaCheckCircle,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  /** 1–2 letter monogram for the avatar. */
  initials: string;
  /** Tailwind gradient stops for the avatar, e.g. "from-[#2194db] to-[#21dba9]". */
  gradient: string;
  tags: string[];
  verified?: boolean;
}

interface TestimonialStackProps {
  testimonials: Testimonial[];
  labels: { prev: string; next: string; helpful: string; verified: string };
  /** Auto-advance interval in ms. 0 disables autoplay. */
  autoplayMs?: number;
  className?: string;
}

// Position of a card relative to the active one → how it sits in the stack.
function stackStyle(offset: number) {
  switch (offset) {
    case 0:
      return { y: 0, scale: 1, opacity: 1, zIndex: 30 };
    case 1:
      return { y: -26, scale: 0.95, opacity: 0.55, zIndex: 20 };
    case 2:
      return { y: -48, scale: 0.9, opacity: 0.25, zIndex: 10 };
    default:
      return { y: -60, scale: 0.85, opacity: 0, zIndex: 0 };
  }
}

export function TestimonialStack({
  testimonials,
  labels,
  autoplayMs = 7000,
  className,
}: TestimonialStackProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = testimonials.length;

  const go = React.useCallback(
    (dir: 1 | -1) => setActive((a) => (a + dir + count) % count),
    [count]
  );

  // Autoplay — paused on hover/focus and when reduced motion is requested.
  React.useEffect(() => {
    if (!autoplayMs || paused || reduceMotion || count <= 1) return;
    const id = window.setInterval(() => go(1), autoplayMs);
    return () => window.clearInterval(id);
  }, [autoplayMs, paused, reduceMotion, count, go]);

  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 30 };

  return (
    <div
      className={cn("relative mx-auto w-full max-w-2xl", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label={labels.prev}
        className="absolute left-0 top-1/2 z-40 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/10 bg-card/80 text-foreground/70 backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9] md:-translate-x-[140%]"
      >
        <FaChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label={labels.next}
        className="absolute right-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-foreground/10 bg-card/80 text-foreground/70 backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9] md:translate-x-[140%]"
      >
        <FaChevronRight className="h-4 w-4" />
      </button>

      {/* Stacked cards */}
      <div className="relative min-h-[420px] sm:min-h-[360px]">
        {testimonials.map((t, i) => {
          const offset = (i - active + count) % count;
          const { y, scale, opacity, zIndex } = stackStyle(offset);
          const isActive = offset === 0;

          return (
            <motion.article
              key={t.name}
              aria-hidden={!isActive}
              initial={false}
              animate={{ y, scale, opacity }}
              transition={transition}
              style={{ zIndex }}
              className={cn(
                "absolute inset-x-0 top-0 rounded-2xl border border-foreground/10 bg-card/70 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8",
                !isActive && "pointer-events-none"
              )}
            >
              {/* Header: avatar + identity */}
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-semibold text-[#08070e]",
                    t.gradient
                  )}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>

              <hr className="mt-6 border-foreground/10" />

              {/* Footer: tags + actions */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <FaRegThumbsUp className="h-3.5 w-3.5" />
                    {labels.helpful}
                  </span>
                  {t.verified ? (
                    <span className="inline-flex items-center gap-1.5 text-[#21dba9]/90">
                      <FaCheckCircle className="h-3.5 w-3.5" />
                      {labels.verified}
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${i + 1}`}
            aria-current={i === active}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === active
                ? "w-6 bg-[#2194db]"
                : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
