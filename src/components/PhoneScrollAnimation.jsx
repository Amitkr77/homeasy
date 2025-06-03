"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PhoneScrollAnimation() {
  const phoneRef = useRef(null);
  const section1Ref = useRef(null);
  const featuresRef = useRef([]);
  const featuresWrapperRef = useRef(null);

  // Animate Phone Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        phoneRef.current,
        {
          y: 100,
          rotateX: 25,
          scale: 2.5,
          opacity: 0.6,
        },
        {
          y: -100,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "none",
        }
      );

      tl.to(phoneRef.current, {
        x: -500,
        y: -400,
        ease: "power2.inOut",
        duration: 1,
      });
    }, section1Ref);

    return () => ctx.revert();
  }, []);

  // Animate Features Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        featuresRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresWrapperRef.current,
            start: "top 50%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, featuresWrapperRef);

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
    <>
      {/* Phone Section */}
      <section className="h-[200vh] bg-gradient-to-b from-white to-blue-50 pt-70 overflow-hidden">
        <div
          ref={section1Ref}
          className="perspective-[1200px] w-full flex justify-center items-center h-[100vh] relative "
        >
          <div
            ref={phoneRef}
            className="bg-white rounded-3xl shadow-2xl outline-8 outline-black w-[300px] h-[600px] flex items-center justify-center text-gray-800 text-2xl font-semibold relative"
          >
            <video
              className="w-full h-full object-cover rounded-3xl "
              src="/Video/app_video.mp4"
              muted
              playsInline
              autoPlay
              loop
            ></video>
            <div className="absolute w-24 h-5 rounded-full bg-black top-2"></div>
          </div>
        </div>
      </section>

      {/* Features Reveal Section */}
      <section
        ref={featuresWrapperRef}
        className="min-h-[100vh] bg-white flex flex-col justify-center items-end px-6 md:px-40"
      >
        <div>
          {featureTexts.map((text, index) => (
            <p
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="text-xl md:text-2xl font-medium text-gray-800 mb-6 opacity-0"
            >
              {text}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
