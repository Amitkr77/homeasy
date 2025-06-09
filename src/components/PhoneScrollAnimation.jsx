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
          end: "+=2000",
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
        },
      });

      // Phone animation
      tl.fromTo(
        phoneRef.current,
        {
          y: 100,
          rotateX: 25,
          scale: 2.5,
          opacity: 0.6,
        },
        {
          y: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "none",
        }
      ).to(phoneRef.current, {
        x: -400,
        duration: 2,
      });

      // Submain animation
      tl.from(subMainRef.current, {
        y: 500,
        duration: 1,
        opacity: 0,
      });

      // Headings animation
      tl.from(headingsRef.current, {
        x: 200,
        stagger: 0.9,
        duration: 3,
        opacity: 0,
      });
    });

    return () => ctx.revert(); // cleanup
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
      <div ref={containerRef} className="h-screen relative overflow-hidden ">
        <div
          ref={phoneRef}
          className="phone h-[70%] w-[300px] rounded-3xl bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-8 outline-black "
        >
          <video
            className="w-full h-full object-cover rounded-3xl "
            src="/Video/app_video.mp4"
            muted
            playsInline
            autoPlay
            loop
          ></video>
          <div className="bar w-24 h-5 rounded-full bg-black absolute top-5 left-1/2 -translate-x-1/2"></div>
        </div>

        <div
          ref={subMainRef}
          className="absolute h-screen w-[45%] right-10 bg-white flex flex-col justify-center items-start px-8 md:px-16 space-y-12 "
        >
          {featureTexts.map((text, i) => (
            <h1
              key={i}
              ref={(el) => (headingsRef.current[i] = el)}
              className="text-lg md:text-xl font-semibold leading-snug text-gray-800"
            >
              {text}
            </h1>
          ))}
        </div>
      </div>
    </div>

   


  );
}
