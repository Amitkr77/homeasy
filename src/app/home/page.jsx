"use client";

import React from "react";
import Head from "next/head";

import HeroSection from "@/components/HeroSection";
import PhoneScrollAnimation from "@/components/PhoneScrollAnimation";
import Testimonial from "@/components/Testonomial";
import WhyChooseHomeasySection from "@/components/WhyChooseCheckPlotSection";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Homeasy | Smart Home Automation for Effortless Living</title>
        <meta
          name="description"
          content="Homeasy transforms your lifestyle with smart automation that enhances comfort, energy efficiency, and control — all at your fingertips."
        />
        <meta
          name="keywords"
          content="smart home, home automation, energy efficiency, IoT devices, smart living, Homeasy"
        />
        <meta name="author" content="Homeasy Team" />
        <link rel="canonical" href="https://www.homeasy.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.homeasy.com/" />
        <meta
          property="og:title"
          content="Homeasy | Smart Home Automation for Effortless Living"
        />
        <meta
          property="og:description"
          content="Discover Homeasy — smart home solutions that simplify your life with advanced automation for comfort, security, and control."
        />
        <meta property="og:image" content="/images/homeasy-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Homeasy | Smart Home Automation for Effortless Living"
        />
        <meta
          name="twitter:description"
          content="Experience smarter living with Homeasy's intuitive automation systems designed for modern homes."
        />
        <meta name="twitter:image" content="/images/homeasy-og.png" />
      </Head>

      {/* Homepage Sections */}
      <div>
        <HeroSection />
        <PhoneScrollAnimation />
        <WhyChooseHomeasySection />
        <Testimonial />
      </div>
    </>
  );
}
