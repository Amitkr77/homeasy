"use client";
import AppScreenshots from "@/components/AppScreenshots";
import HeroSection from "@/components/HeroSection";
import InteractiveSmartHome from "@/components/InteractiveSmartHome";
import PhoneAnimationWrapper from "@/components/PhoneAnimationWrapper";
import PhoneScreen from "@/components/PhoneScreen";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Testimonial from "@/components/Testonomial";
import WhyChooseSection from "@/components/WhyChooseSection";
import React from "react";

export default function page() {
  return (
    <>
      <HeroSection />
      {/* <PhoneScreen /> */}
      <PhoneAnimationWrapper />
      <InteractiveSmartHome />
      <AppScreenshots />
      <WhyChooseSection />
      <Testimonial />
      <ScrollToTopButton />
    </>
  );
}
