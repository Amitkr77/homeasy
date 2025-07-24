"use client";

import React, { useEffect, useRef, useLayoutEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const tagsRef = useRef([]);
  const scrollRef = useRef(null);
  const secondSectionRef = useRef(null); // Reference for second section

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut", duration: 1 },
      });

      // Tags animation (scale + fade + stagger)
      tl.from(tagsRef.current, {
        autoAlpha: 0,
        y: -40,
        scale: 0.8,
        rotate: -10,
        stagger: 0.15,
        duration: 0.6,
      });

      // Heading animation (clipPath + bounce-like effect)
      tl.from(
        headingRef.current,
        {
          y: 60,
          autoAlpha: 0,
          clipPath: "inset(0 0 100% 0)",
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.2"
      );

      // Subheading animation (with delay and slight shift)
      tl.from(
        subHeadingRef.current,
        {
          y: 30,
          autoAlpha: 0,
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
        },
        "-=0.6"
      );
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        scrollRef.current,
        { y: 0 },
        {
          y: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 0.8,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Scroll to second section on arrow click
  const handleScrollDown = () => {
    if (secondSectionRef.current) {
      secondSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden scroll-smooth"
      role="banner"
    >
      {/* Decorative Background Blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-300 rounded-full blur-2xl opacity-20 animate-pulse"
        aria-hidden="true"
      ></div>

      {/* Tags */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-6 z-10"
        aria-label="Feature tags"
      >
        {["Comfort First", "Smarter Living", "Effortless Control"].map(
          (tag, index) => (
            <Badge
              key={index}
              ref={(el) => (tagsRef.current[index] = el)}
              className="px-4 py-1 text-sm md:text-base rounded-full bg-blue-100 text-blue-700"
            >
              {tag}
            </Badge>
          )
        )}
      </div>

      {/* Motto */}
      <p className="text-blue-600 text-base md:text-lg font-medium mb-3 tracking-wide z-10">
        Live Smart. Live Easy.
      </p>

      {/* Main Heading */}
      <h1
        ref={headingRef}
        className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4 tracking-tight z-10"
      >
        Simplify Your Home with
        <br />
        Smart Automation
      </h1>

      {/* Subheading */}
      <p
        ref={subHeadingRef}
        className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed z-10"
      >
        Discover how Homeasy transforms everyday living through cutting-edge
        automation — enhancing your home's{" "}
        <span className="font-semibold">comfort</span>,{" "}
        <span className="font-semibold">security</span>, and{" "}
        <span className="font-semibold">energy efficiency</span>, all at your
        fingertips.
      </p>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        onClick={handleScrollDown} // Scroll on click
        className="absolute bottom-10 text-blue-500 z-10 cursor-pointer"
        aria-hidden="true"
      >
        <ChevronDown size={32} />
      </div>
    </header>
  );
}

