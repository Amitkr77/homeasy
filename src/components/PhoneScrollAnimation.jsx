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

  const featureTexts = [
    {
    title: "Smart Security with 24/7 Monitoring and Alerts",
    icon: "🔐",
    color: "text-white bg-blue-600/25"
  },
  {
    title: "Intelligent Lighting That Adapts to Your Mood",
    icon: "💡",
    color: "text-black bg-yellow-300/25"
  },
  {
    title: "Control Your Home Devices from Anywhere via App",
    icon: "📱",
    color: "text-white bg-green-600/25"
  },
  {
    title: "Automated Temperature & Climate Adjustments",
    icon: "🌡️",
    color: "text-white bg-orange-500/25"
  },
  {
    title: "Energy Monitoring to Reduce Bills Efficiently",
    icon: "🔋",
    color: "text-white bg-lime-500/25"
  },
  {
    title: "Real-Time Device Usage Insights & Stats",
    icon: "📊",
    color: "text-black bg-amber-400/25"
  },
  {
    title: "Customizable Routines for Daily Automation",
    icon: "🛠️",
    color: "text-white bg-gray-600/25"
  }
  ];

  useLayoutEffect(() => {
    const glow = {
      boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
    };

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

    // Phone entry animation (smooth zoom & glow)
    tl.set(phoneRef.current, {
      transformStyle: "preserve-3d",
    })
      .fromTo(
        phoneRef.current,
        {
          y: 300,
          z: -300,
          rotationX: 35,
          opacity: 0,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        },
        {
          y: 0,
          z: 0,
          rotationX: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 2.5,
          boxShadow: glow.boxShadow,
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

    // Animate bar glow separately
    gsap.from(".bar", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      delay: 2,
      ease: "back.out(1.7)",
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

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
          className="absolute h-screen w-full md:w-[55%] right-0  flex flex-col justify-center items-start px-6 md:px-16 space-y-6 md:space-y-4"
        >
          {/* {featureTexts.map((text, i) => (
            <h1
              key={i}
              ref={(el) => (headingsRef.current[i] = el)}
              className="text-base md:text-xl font-semibold leading-snug text-gray-800 ml-4 md:ml-10 bg-gray-200 p-4 min-w-xl"
            >
              {text}
            </h1>
          ))} */}
          {featureTexts.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (headingsRef.current[index] = el)}
              className="flex items-center space-x-4 p-2 border bg-gray-50 hover:bg-gray-100 min-w-lg rounded-lg pl-4"
            >
              <span
                className={`w-10 h-10 flex items-center justify-center rounded-full text-xl ${feature.color} `}
              >
                {feature.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
