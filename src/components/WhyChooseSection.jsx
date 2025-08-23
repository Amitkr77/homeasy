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
  const titleRef = useRef(null);
  cardRefs.current = [];

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const cards = cardRefs.current;

  //     // Animate section background with a subtle particle-like effect
  //     gsap.to(sectionRef.current, {
  //       background: "linear-gradient(120deg, #1e3a8a 0%, #0f172a 50%, #334155 100%)",
  //       duration: 3,
  //       ease: "sine.inOut",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 90%",
  //         end: "bottom top",
  //         scrub: 1.5,
  //       },
  //     });

  //     // Add pseudo-particle effect with a subtle overlay
  //     gsap.to(sectionRef.current, {
  //       "--particle-opacity": 0.3,
  //       duration: 2,
  //       ease: "sine.inOut",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     });

  //     // Split title for glitch effect
  //     const title = titleRef.current;
  //     const titleText = title.textContent;
  //     title.innerHTML = titleText
  //       .split("")
  //       .map(
  //         (char) =>
  //           `<span class="letter inline-block" style="position: relative;">${char}</span>`
  //       )
  //       .join("");

  //     // Glitch effect for title
  //     gsap.from(".letter", {
  //       opacity: 0,
  //       x: () => gsap.utils.random(-50, 50),
  //       y: () => gsap.utils.random(-50, 50),
  //       scale: 0.8,
  //       stagger: {
  //         each: 0.03,
  //         from: "random",
  //       },
  //       duration: 0.8,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //     });

  //     // Secondary glitch overlay for title
  //     gsap.to(".letter", {
  //       x: () => gsap.utils.random(-5, 5),
  //       repeat: 3,
  //       yoyo: true,
  //       duration: 0.1,
  //       delay: 0.5,
  //       stagger: 0.02,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //     });

  //     // Animate cards with layered cinematic reveal
  //     cards.forEach((card, i) => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 85%",
  //           toggleActions: "play none none none",
  //         },
  //       });

  //       tl.fromTo(
  //         card,
  //         {
  //           opacity: 0,
  //           y: 150,
  //           scale: 0.7,
  //           rotationX: 45,
  //           transformPerspective: 1200,
  //         },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           scale: 1,
  //           rotationX: 0,
  //           duration: 1.4,
  //           ease: "expo.out",
  //           delay: i * 0.2,
  //         }
  //       ).to(
  //         card,
  //         {
  //           "--glow-opacity": 0.5,
  //           duration: 1,
  //           ease: "sine.inOut",
  //           repeat: -1,
  //           yoyo: true,
  //         },
  //         0.5
  //       );

  //       // Magnetic hover effect
  //       card.addEventListener("mousemove", (e) => {
  //         const rect = card.getBoundingClientRect();
  //         const x = (e.clientX - rect.left - rect.width / 2) / 10;
  //         const y = (e.clientY - rect.top - rect.height / 2) / 10;
  //         gsap.to(card, {
  //           x: x,
  //           y: y,
  //           rotationY: x * 0.5,
  //           rotationX: -y * 0.5,
  //           scale: 1.06,
  //           boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)",
  //           "--glow-opacity": 0.8,
  //           duration: 0.4,
  //           ease: "power3.out",
  //         });
  //       });

  //       card.addEventListener("mouseleave", () => {
  //         gsap.to(card, {
  //           x: 0,
  //           y: 0,
  //           rotationY: 0,
  //           rotationX: 0,
  //           scale: 1,
  //           boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  //           "--glow-opacity": 0.5,
  //           duration: 0.4,
  //           ease: "power3.out",
  //         });
  //       });
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 py-24 px-6 overflow-hidden"
      style={{
        position: "relative",
        "--particle-opacity": 0,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
          opacity: "var(--particle-opacity)",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
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
                className="group relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full shadow-lg transition-all duration-300"
                style={{
                  transformPerspective: 1200,
                  "--glow-opacity": 0,
                  boxShadow:
                    "0 0 20px rgba(59, 130, 246, var(--glow-opacity))",
                }}
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