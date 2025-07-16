"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Camera,
  Smartphone,
  BatteryFull,
  LockKeyholeOpen,
  Zap,
  ShieldCheck,
  Lightbulb,
  Thermometer,
  BatteryCharging,
  BarChart2,
  Settings,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  direction = "right",
  forwardedRef,
}) => {
  const isVertical = direction === "top" || direction === "bottom";
  const isReversed = direction === "right" || direction === "bottom";

  const gradientClass = {
    left: "bg-gradient-to-l from-white to-gray-400",
    right: "bg-gradient-to-r from-white to-gray-400",
    top: "bg-gradient-to-t from-white to-gray-400",
    bottom: "bg-gradient-to-b from-white to-gray-400",
  }[direction];

  const arrow = {
    left: (
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 border-y-8 border-r-10 border-transparent border-r-gray-400" />
    ),
    right: (
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 border-y-8 border-l-10 border-transparent border-l-gray-400" />
    ),
    top: (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 border-x-8 border-b-10 border-transparent border-b-gray-400" />
    ),
    bottom: (
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-x-8 border-t-10 border-transparent border-t-gray-400" />
    ),
  }[direction];

  const containerClasses = `flex items-center ${
    isVertical
      ? "flex-col space-y-4"
      : isReversed
      ? "flex-row-reverse space-x-reverse space-x-4"
      : "flex-row space-x-4"
  }`;

  return (
    <div ref={forwardedRef} className={containerClasses}>
      <div
        className={`relative ${
          isVertical ? "w-1 h-20" : "w-20 h-1"
        } ${gradientClass} rounded`}
        aria-hidden="true"
      >
        {arrow}
      </div>
      <div className="bg-white text-black p-5 rounded-xl shadow-lg w-72 text-center transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl">
        <h2 className="font-semibold text-lg flex justify-center items-center gap-2">
          {Icon && <Icon className="w-5 h-5" />} {title}
        </h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default function PhoneScreen() {
  const phoneRef = useRef(null);
  const containerRef = useRef(null);
  const featuresRefs = useRef([]);

  const features = [
    {
      title: "24/7 Smart Security",
      icon: ShieldCheck,
      description: "Get real-time alerts and remote access for peace of mind.",
      direction: "right",
      className: "top-1/12 left-1/12",
    },
    {
      title: "Adaptive Lighting",
      icon: Lightbulb,
      description: "Lighting that changes with your mood and routine.",
      direction: "right",
      className: "bottom-1/2 left-1/12",
    },
    {
      title: "Remote Control",
      icon: Smartphone,
      description: "Manage all your devices from anywhere via app.",
      direction: "right",
      className: "bottom-1/5 left-1/12",
    },
    {
      title: "Auto Climate Control",
      icon: Thermometer,
      description: "Stay comfortable with smart temperature adjustments.",
      direction: "left",
      className: "top-1/12 right-1/12",
    },
    {
      title: "Energy Monitoring",
      icon: BatteryCharging,
      description: "Track usage and save on energy bills effortlessly.",
      direction: "left",
      className: "bottom-1/2 right-1/12",
    },
    {
      title: "Usage Insights",
      icon: BarChart2,
      description: "View real-time stats on your device activity.",
      direction: "left",
      className: "bottom-1/5 right-1/12",
    },
  ];

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.set(phoneRef.current, { transformStyle: "preserve-3d" })
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
          duration: 4,
          ease: "power3.out",
          boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
        }
      )
      .from(
        featuresRefs.current,
        {
          opacity: 0,
          y: 50,
          stagger: 0.6,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=2"
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center px-6 py-16 overflow-hidden "
    >
      {/* Phone */}
      <div
        ref={phoneRef}
        className="relative z-10 text-center  rounded-4xl"
        style={{ willChange: "transform, opacity, box-shadow" }}
      >
        <div className="h-[586px] w-72 rounded-4xl shadow-2xl border-8 border-gray-700 mx-auto overflow-hidden">
          <video
            className="w-full h-full object-cover rounded-3xl"
            src="/Video/app_video.mp4"
            muted
            playsInline
            autoPlay
            loop
          />
        </div>
      </div>

      {/* Features */}
      <div>
        {features.map((feature, i) => (
          <div key={i} className={`absolute ${feature.className}`}>
            <FeatureCard
              {...feature}
              forwardedRef={(el) => (featuresRefs.current[i] = el)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
