"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { cn } from "@/lib/utils";

// Theme-adaptive styles (brand tokens from globals.css). Scoped to the footer
// via `.cinematic-footer-wrapper`. Reimplemented from a GSAP demo using
// framer-motion + CSS only — no extra animation dependency.
const STYLES = `
.cinematic-footer-wrapper {
  -webkit-font-smoothing: antialiased;
  --pill-bg-1: color-mix(in oklch, var(--foreground) 4%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 9%, transparent);
  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 9%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--primary) 45%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
}
@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}
@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--destructive) 80%, transparent)); }
  30% { transform: scale(1); }
}
.animate-footer-breathe { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }
.animate-footer-heartbeat { animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    color-mix(in oklch, var(--primary) 18%, transparent) 0%,
    color-mix(in oklch, var(--accent) 14%, transparent) 40%,
    transparent 70%
  );
}
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
    0 10px 30px -10px var(--pill-shadow),
    inset 0 1px 1px var(--pill-highlight),
    inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease, color 0.3s ease;
}
.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow:
    0 20px 40px -10px var(--pill-shadow-hover),
    inset 0 1px 1px var(--pill-highlight-hover);
}
.footer-giant-bg-text {
  font-size: 20vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 6%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--foreground) 10%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}
.footer-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 40%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--foreground) 15%, transparent));
}
@media (prefers-reduced-motion: reduce) {
  .animate-footer-breathe,
  .animate-footer-scroll-marquee,
  .animate-footer-heartbeat { animation: none !important; }
}
`;

// ---------------------------------------------------------------------------
// Magnetic pill — translates toward the cursor, springs back on leave.
// ---------------------------------------------------------------------------
interface MagneticProps {
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  "aria-label"?: string;
  className?: string;
  children: React.ReactNode;
}

function Magnetic({ as = "a", className, children, ...rest }: MagneticProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 150, damping: 15, mass: 0.3 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const common: any = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { x: sx, y: sy },
    className: cn("cursor-pointer", className),
    ...rest,
  };

  return as === "button" ? (
    <motion.button type="button" {...common}>
      {children}
    </motion.button>
  ) : (
    <motion.a {...common}>{children}</motion.a>
  );
}

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------
export interface FooterLink {
  label: string;
  /** Anchor target. Omit when using `onClick` (renders a button instead). */
  href?: string;
  icon?: React.ReactNode;
  external?: boolean;
  /** When set, the pill is a button that runs this instead of navigating. */
  onClick?: () => void;
}

export interface CinematicFooterProps {
  brandText?: string;
  heading: string;
  primary: FooterLink[];
  social: FooterLink[];
  marquee: string[];
  labels: { rights: string; backToTop: string };
}

export function CinematicFooter({
  brandText = "BUCKSPAY",
  heading,
  primary,
  social,
  marquee,
  labels,
}: CinematicFooterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end end"],
  });
  const giantY = useTransform(scrollYProgress, [0, 1], ["8vh", "0vh"]);
  const giantScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const giantOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const MarqueeRow = () => (
    <div className="flex items-center gap-12 px-6">
      {marquee.map((m, i) => (
        <React.Fragment key={`${m}-${i}`}>
          <span className="whitespace-nowrap">{m}</span>
          <span className={i % 2 === 0 ? "text-[#2194db]/60" : "text-[#21dba9]/60"}>
            ✦
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Curtain-reveal wrapper: clip-path confines the fixed footer's painting
          to this box, so it reveals from the bottom as you scroll into it. */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <footer className="cinematic-footer-wrapper fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground">
          {/* Ambient light + grid */}
          <div
            aria-hidden
            className="footer-aurora pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px]"
          />
          <div
            aria-hidden
            className="footer-bg-grid pointer-events-none absolute inset-0 z-0"
          />

          {/* Giant brand text with scroll parallax */}
          <motion.div
            aria-hidden
            style={{
              y: reduce ? 0 : giantY,
              scale: reduce ? 1 : giantScale,
              opacity: reduce ? 0.5 : giantOpacity,
            }}
            className="footer-giant-bg-text pointer-events-none absolute -bottom-[5vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
          >
            {brandText}
          </motion.div>

          {/* Diagonal marquee */}
          <div className="absolute left-0 top-12 z-10 w-full -rotate-2 scale-110 overflow-hidden border-y border-border/50 bg-background/60 py-4 shadow-2xl backdrop-blur-md">
            <div className="flex w-max animate-footer-scroll-marquee text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
              <MarqueeRow />
              <MarqueeRow />
            </div>
          </div>

          {/* Center content */}
          <div className="relative z-10 mx-auto mt-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="footer-text-glow mb-12 text-center text-5xl font-black tracking-tighter md:text-8xl"
            >
              {heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex w-full flex-col items-center gap-6"
            >
              {/* Primary CTAs */}
              <div className="flex w-full flex-wrap justify-center gap-4">
                {primary.map((l) => (
                  <Magnetic
                    key={l.label}
                    as={l.onClick ? "button" : "a"}
                    onClick={l.onClick}
                    href={l.onClick ? undefined : l.href}
                    target={l.external && !l.onClick ? "_blank" : undefined}
                    rel={
                      l.external && !l.onClick ? "noopener noreferrer" : undefined
                    }
                    className="footer-glass-pill group flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-foreground md:text-base"
                  >
                    {l.icon}
                    {l.label}
                  </Magnetic>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-2 flex w-full flex-wrap justify-center gap-3 md:gap-4">
                {social.map((l) => (
                  <Magnetic
                    key={l.label}
                    as="a"
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={l.label}
                    className="footer-glass-pill flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
                  >
                    {l.icon}
                    {l.label}
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 flex w-full flex-col items-center justify-between gap-6 px-6 pb-8 md:flex-row md:px-12">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:text-xs">
              © 2026 BucksPay. {labels.rights}
            </div>

            <Magnetic
              as="button"
              onClick={scrollToTop}
              aria-label={labels.backToTop}
              className="footer-glass-pill group flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
            >
              <FaArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </Magnetic>
          </div>
        </footer>
      </div>
    </>
  );
}
