"use client";

import HeroSection from "@/components/HeroSection";
import PhoneScrollAnimation from "@/components/PhoneScrollAnimation";
import Testimonial from "@/components/Testonomial";
import WhyChooseHomeasySection from "@/components/WhyChooseCheckPlotSection";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection />
      <PhoneScrollAnimation />
      <WhyChooseHomeasySection />
      <Testimonial />
    </div>
  );
}
