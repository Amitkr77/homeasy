"use client";

import React, { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const tagsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(tagsRef.current, {
        opacity: 0,
        y: -20,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(subHeadingRef.current, {
        y: 50,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden scroll-smooth"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-300 rounded-full blur-2xl opacity-20 animate-pulse"></div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 z-10">
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

      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4 tracking-tight z-10"
      >
        Simplify Your Home with
        <br /> Smart Automation
      </h1>

      {/* Subheading */}
      <p
        ref={subHeadingRef}
        className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed z-10"
      >
        Discover how Homeasy transforms everyday living through cutting-edge automation — enhancing your home's
        <span className="font-semibold"> comfort</span>, <span className="font-semibold">security</span>, and
        <span className="font-semibold"> energy efficiency</span>, all at your fingertips.
      </p>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-blue-500 z-10">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
