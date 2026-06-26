"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ElegantShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  /** Tailwind `from-*` gradient stop for the shape fill. */
  gradient?: string;
}

/**
 * A single floating, blurred capsule. Decorative only — callers wrap a group of
 * these in an `aria-hidden` container. Adapted from kokonutui "shape-landing-hero";
 * recolored to the BucksPay palette (see design-system §3) and made
 * `prefers-reduced-motion` aware.
 */
export function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-foreground/[0.08]",
}: ElegantShapeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-foreground/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Full-bleed decorative backdrop: a soft brand wash plus a set of floating
 * shapes in the BucksPay blue/teal palette. Drop it as the first child of a
 * `relative overflow-hidden` section; content goes in a sibling with `z-10`.
 */
export function GeometricBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2194db]/[0.06] via-transparent to-[#21dba9]/[0.06] blur-3xl" />

      <ElegantShape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        gradient="from-[#2194db]/[0.18]"
        className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
      />
      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        gradient="from-[#21dba9]/[0.18]"
        className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
      />
      <ElegantShape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        gradient="from-[#2194db]/[0.15]"
        className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
      />
      <ElegantShape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        gradient="from-[#21dba9]/[0.15]"
        className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
      />
      <ElegantShape
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        gradient="from-foreground/[0.10]"
        className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
      />
    </div>
  );
}
