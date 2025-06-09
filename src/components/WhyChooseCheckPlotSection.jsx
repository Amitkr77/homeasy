"use client";

import {
  Lock,
  Lightbulb,
  Wifi,
  Smartphone,
  Clock,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Smart Security",
    description:
      "Advanced surveillance, smart locks, and motion detectors ensure your home stays protected 24/7.",
    icon: Lock,
    badge: "End-to-End Encryption",
  },
  {
    title: "Intelligent Lighting",
    description:
      "Automated lighting that adjusts to your preferences, mood, and daylight to maximize comfort and efficiency.",
    icon: Lightbulb,
    badge: "Energy Efficient",
  },
  {
    title: "Seamless Connectivity",
    description:
      "Integrated systems across devices, powered by fast and secure Wi-Fi networks and IoT hubs.",
    icon: Wifi,
    badge: "IoT Enabled",
  },
  {
    title: "Centralized Control",
    description:
      "Control all your home devices through a single app — lights, security, temperature, and more.",
    icon: Smartphone,
    badge: "One-Touch Control",
  },
  {
    title: "Automated Routines",
    description:
      "Set up daily automation routines — from waking up to bedtime, everything works on your schedule.",
    icon: Clock,
    badge: "Custom Scenes",
  },
  {
    title: "Energy Management Solutions",
    description:
      "Monitor and manage your energy consumption to reduce bills and increase efficiency.",
    icon: Zap,
    badge: "Smart Consumption",
  },
];

export default function WhyChooseHomeasySection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔹 Animate each card with stagger + depth effect
      gsap.fromTo(
        cardRefs.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotateX: 15,
          transformPerspective: 1000,
          delay: 0.2,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15, // <--- Smooth stagger
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            scrub: true,
          },
        }
      );

      // 🔹 Title animation with skew + scale for energy
      gsap.from(".why-title", {
        opacity: 0,
        y: -40,
        skewY: 6,
        scale: 0.95,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="why-title text-4xl md:text-5xl font-extrabold text-white">
            Why Choose <span className="text-blue-400">Homeasy</span>
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Discover the ultimate smart living experience designed to simplify,
            secure, and supercharge your everyday life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-blue-500/10 text-blue-400 rounded-full mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs text-green-200 bg-green-600/30 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  {feature.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
