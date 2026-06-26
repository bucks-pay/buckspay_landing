"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { cn } from "@/lib/utils";

// Dark-first variants for the BucksPay palette (see design-system §3). The
// original light pastels are swapped for a dark surface with a subtle
// brand-tinted glow in the top-left corner.
const cardVariants = cva(
  "relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-foreground/10 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_8px_40px_-12px_rgba(33,219,169,0.25)]",
  {
    variants: {
      gradient: {
        blue: "bg-gradient-to-br from-[#2194db]/[0.14] to-card",
        teal: "bg-gradient-to-br from-[#21dba9]/[0.14] to-card",
        violet: "bg-gradient-to-br from-[#6d5dfc]/[0.14] to-card",
        mix: "bg-gradient-to-br from-[#2194db]/[0.12] via-[#21dba9]/[0.06] to-card",
      },
    },
    defaultVariants: {
      gradient: "blue",
    },
  }
);

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badgeText: string;
  /** Hex color for the badge dot, e.g. "#2194db". */
  badgeColor: string;
  title: string;
  description: string;
  /** Optional CTA — omit for purely informational cards (e.g. flow steps). */
  ctaText?: string;
  ctaHref?: string;
  /** Large, faded decorative graphic pinned to the bottom-right corner. */
  icon?: React.ReactNode;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    {
      className,
      gradient,
      badgeText,
      badgeColor,
      title,
      description,
      ctaText,
      ctaHref,
      icon,
      ...props
    },
    ref
  ) => {
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.03, y: -4 },
    };

    const iconAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 3 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-full"
        ref={ref}
      >
        <div className={cn(cardVariants({ gradient }), className)} {...props}>
          {/* Decorative graphic with animation. */}
          {icon ? (
            <motion.div
              aria-hidden
              variants={iconAnimation}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="pointer-events-none absolute -bottom-6 -right-6 text-foreground/[0.06]"
            >
              {icon}
            </motion.div>
          ) : null}

          {/* Card content. */}
          <div className="z-10 flex h-full flex-col">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-foreground/10 bg-background/50 px-3 py-1 text-sm font-medium text-foreground/80 backdrop-blur-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              {badgeText}
            </div>

            {/* Title and description */}
            <div className="flex-grow">
              <h3 className="mb-2 text-2xl font-bold text-foreground">{title}</h3>
              <p className="max-w-xs text-foreground/70">{description}</p>
            </div>

            {/* Optional CTA */}
            {ctaText && ctaHref ? (
              <a
                href={ctaHref}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                {ctaText}
                <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
