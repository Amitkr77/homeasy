"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PhoneScrollAnimation() {
  const phoneRef = useRef(null);
  const subMainRef = useRef(null);
  const headingsRef = useRef([]);
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: "body",
          start: "top top",
          end: "+=2200",
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
        },
      });

      // Add a glow effect (temporary)
      const glow = {
        boxShadow: "0 0 0px rgba(0,0,0,0)",
      };

      tl.set(phoneRef.current, {
        transformStyle: "preserve-3d",
      });

      // Phone entry animation (smooth zoom & glow)
      tl.fromTo(
        phoneRef.current,
        {
          y: 300,
          z: -300,
          rotationX: 35,
          opacity: 0,
          boxShadow: glow.boxShadow,
        },
        {
          y: 0,
          z: 0,
          rotationX: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 2.5,
          boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
        }
      )

        // Slide phone to left with ease and fade glow
        .to(phoneRef.current, {
          x: -400,
          duration: 2,
          ease: "power2.inOut",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        });

      // Submain panel fade & slide in
      tl.from(subMainRef.current, {
        y: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // Animate each heading one by one with smooth slide
      tl.from(headingsRef.current, {
        x: 100,
        opacity: 0,
        stagger: 0.4,
        duration: 1.5,
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);

  useLayoutEffect(() => {
    // Animate bar glow separately
    gsap.from(".bar", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      delay: 2,
      ease: "back.out(1.7)",
    });

    // Animate bar glow separately
    gsap.from(".bar", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      delay: 2,
      ease: "back.out(1.7)",
    });

    return () => ctx.revert();
  }, []);
  const featureTexts = [
    "🔐 Smart Security with 24/7 Monitoring and Alerts",
    "💡 Intelligent Lighting That Adapts to Your Mood",
    "📱 Control Your Home Devices from Anywhere via App",
    "🌡️ Automated Temperature & Climate Adjustments",
    "🔋 Energy Monitoring to Reduce Bills Efficiently",
    "📊 Real-Time Device Usage Insights & Stats",
    "🛠️ Customizable Routines for Daily Automation",
  ];

  return (
    <div>
      {/* Pin container with scroll animations inside */}
      <div
        ref={containerRef}
        className="h-screen relative overflow-hidden perspective-[1500px] will-change-transform bg-gray-100"
      >
        <div
          ref={phoneRef}
          className="phone w-[65vw] max-w-[270px] aspect-[9/19] bg-white rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-8 outline-black"
        >
          {/* Blur Glow Background */}
          <div className="absolute inset-0 -z-10 blur-3xl rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-20 scale-150"></div>

          {/* Phone Video */}
          <video
            className="w-full h-full object-cover rounded-3xl"
            src="/Video/app_video.mp4"
            muted
            playsInline
            autoPlay
            loop
          ></video>

          {/* Top Bar */}
          <div className="bar w-16 md:w-24 h-2 md:h-5 rounded-full bg-black absolute top-3 md:top-5 left-1/2 -translate-x-1/2"></div>
        </div>

        <div
          ref={subMainRef}
          className="absolute h-screen w-full md:w-[55%] right-0 bg-white/80 flex flex-col justify-center items-start px-6 md:px-16 space-y-6 md:space-y-12"
        >
          {featureTexts.map((text, i) => (
            <h1
              key={i}
              ref={(el) => (headingsRef.current[i] = el)}
              className="text-base md:text-xl font-semibold leading-snug text-gray-800 ml-4 md:ml-10"
            >
              {text}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
