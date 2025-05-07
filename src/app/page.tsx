"use client";

import "./globals.css";
import HeroSection from "@/components/Sections/Hero/Hero";
import ServicesSection from "@/components/Sections/Services/Services";
import AboutSection from "@/components/Sections/About/About";
import ContactSection from "@/components/Sections/Contact/Contact";
import BenefitsSection from "@/components/Sections/Benefits/Benefits";
import HowWorksSection from "@/components/Sections/HowWorks/HowWorks";
import TestimonialsSection from "@/components/Sections/Testimonials/Testimonials";
import { useState } from "react";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [textLoading, setTextLoading] = useState("");
  return (
    <>
      {isLoading && <Loading text={textLoading} />}
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BenefitsSection />
      <HowWorksSection />
      <TestimonialsSection />
      <ContactSection
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setTextLoading={setTextLoading}
      />
    </>
  );
}