"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  ShieldCheck,
  Lightbulb,
  Thermometer,
  BatteryCharging,
  BarChart2,
} from "lucide-react";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
    {
      title: "24/7 Smart Security",
      icon: ShieldCheck,
      description: "Get real-time alerts and remote access for peace of mind.",
      direction: "right",
    },
    {
      title: "Adaptive Lighting",
      icon: Lightbulb,
      description: "Lighting that changes with your mood and routine.",
      direction: "right",
    },
    {
      title: "Remote Control",
      icon: Smartphone,
      description: "Manage all your devices from anywhere via app.",
      direction: "right",
    },
    {
      title: "Auto Climate Control",
      icon: Thermometer,
      description: "Stay comfortable with smart temperature adjustments.",
      direction: "left",
    },
    {
      title: "Energy Monitoring",
      icon: BatteryCharging,
      description: "Track usage and save on energy bills effortlessly.",
      direction: "left",
    },
    {
      title: "Usage Insights",
      icon: BarChart2,
      description: "View real-time stats on your device activity.",
      direction: "left",
    },
  ];

const FeatureCardMobile = ({
  icon: Icon,
  title,
  description,
  direction,
  forwardedRef,
}) => (
  <div
    ref={forwardedRef}
    data-direction={direction}
    className="bg-white rounded-2xl shadow-md p-5 max-w-xs mx-auto my-6 transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
  >
    <h2 className="flex items-center justify-center gap-2 font-semibold mb-2">
      {Icon && <Icon className="w-6 h-6" />} {title}
    </h2>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function PhoneScreenMobile() {
  const phoneRef = useRef(null);
  const featureEls = useRef([]);
  featureEls.current = [];

  const addToRefs = (el) =>
    el && !featureEls.current.includes(el) && featureEls.current.push(el);

  useLayoutEffect(() => {
    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, y: 80, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "top 90%",
        },
      }
    );

    featureEls.current.forEach((el, index) => {
      const dir = el.dataset.direction;
      const x = dir === "left" ? -50 : dir === "right" ? 50 : 0;
      const y = dir === "bottom" ? 50 : 0;

      gsap.fromTo(
        el,
        { opacity: 0, x, y, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="md:hidden w-full px-4 py-10 bg-gray-100 flex flex-col items-center">
      {/* Phone Screen */}
      <div ref={phoneRef} className="mx-auto mb-8 max-w-xs">
        <div className="h-[320px] w-full rounded-3xl shadow-2xl border-4 border-gray-700 overflow-hidden">
          <video
            src="/Video/app_video.mp4"
            muted
            playsInline
            autoPlay
            loop
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Feature Cards Below Phone */}
      <div className="flex flex-wrap justify-center w-full space-x-4 space-y-6">
        {features.map((f, i) => (
          <FeatureCardMobile key={i} {...f} forwardedRef={addToRefs} />
        ))}
      </div>
    </div>
  );
}
