"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroAmbient } from "@/components/ui/hero-ambient";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

interface CtaLink {
  label: string;
  href: string;
}

interface NetworkItem {
  name: string;
  logo: string;
  /** Logo has no brand color (black) — force it to adapt to the theme. */
  mono?: boolean;
  /** Raster logo with a solid background — round its corners like a tile. */
  rounded?: boolean;
}

export interface HeroSectionProps {
  /** First part of the headline (default foreground color). */
  titleLead?: string;
  /** Highlighted part of the headline (rendered with the brand gradient). */
  titleHighlight?: string;
  description?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  /** Caption above the supported-networks strip. */
  trustLabel?: string;
  /** Networks shown in the trust strip. */
  networks?: NetworkItem[];
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * BucksPay marketing hero (adapted from tailark "hero-section-2").
 *
 * The original ships its own header; we drop it because the landing already
 * renders a global <Header>. Copy comes in via props (driven by i18n in the
 * Sections/Hero wrapper) and the dashboard screenshot lives in /public.
 */
export function HeroSection({
  titleLead = "Accept crypto payments under",
  titleHighlight = "your own brand",
  description = "BucksPay is the white-label infrastructure for your business to get paid in stablecoins across Ethereum, Polygon, Base, Arbitrum and Stellar. Non-custodial — funds settle straight to your wallet.",
  primaryCta,
  secondaryCta,
  trustLabel = "Works with the chains and wallets you already use",
  networks = [
    { name: "Ethereum", logo: "/logos/ethereum.svg", mono: true },
    { name: "Polygon", logo: "/logos/polygon-icon-primary-purple.svg" },
    { name: "Base", logo: "/logos/Base.jpeg", rounded: true },
    { name: "Arbitrum", logo: "/logos/arbitrum-arb-logo.svg" },
    { name: "Avalanche", logo: "/logos/Avalanche_Logomark_Red.svg" },
    { name: "Stellar", logo: "/logos/stellar-xlm-logo.svg", mono: true },
  ],
  imageSrc = "/capturadashboard.png",
  imageAlt = "BucksPay dashboard",
}: HeroSectionProps) {
  return (
    <>
      <section className="bg-background">
        <div className="relative pt-24">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
          <HeroAmbient />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
              >
                <h1 className="mx-auto mt-8 max-w-3xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
                  {titleLead}{" "}
                  <span className="bg-gradient-to-r from-[#2194db] to-[#21dba9] bg-clip-text text-transparent">
                    {titleHighlight}
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
                  {description}
                </p>
                {(primaryCta || secondaryCta) && (
                  <div className="mt-12 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                    {primaryCta && (
                      <div className="bg-foreground/10 rounded-[14px] border border-border p-0.5">
                        <Button asChild size="lg" className="rounded-xl px-5 text-base">
                          <Link
                            href={primaryCta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="text-nowrap">{primaryCta.label}</span>
                          </Link>
                        </Button>
                      </div>
                    )}
                    {secondaryCta && (
                      <Button
                        asChild
                        size="lg"
                        variant="ghost"
                        className="h-[42px] rounded-xl px-5 text-base"
                      >
                        <Link href={secondaryCta.href}>
                          <span className="text-nowrap">{secondaryCta.label}</span>
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="inset-shadow-2xs ring-[#0e0d17] bg-[#0e0d17] relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 p-2 shadow-lg shadow-zinc-950/15 ring-1">
                <Image
                  className="relative h-auto w-full rounded-2xl border border-white/10"
                  src={imageSrc}
                  alt={imageAlt}
                  width={1919}
                  height={912}
                  priority
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      <section className="bg-background pb-16 pt-12 md:pb-28">
        <div className="m-auto max-w-5xl px-6">
          <p className="text-center text-base text-muted-foreground">
            {trustLabel}
          </p>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {networks.map((network) => (
              <div key={network.name} className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={network.logo}
                  alt={network.name}
                  className={`h-7 w-7 object-contain md:h-8 md:w-8 ${
                    network.mono ? "logo-mono" : ""
                  } ${network.rounded ? "rounded-md" : ""}`}
                />
                <span className="text-lg font-semibold text-foreground/80">
                  {network.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
