"use client";
import React from "react";

export default function PhoneScrollAnimationMobile() {
  const featureItems = [
    {
      icon: "🔐",
      text: "Smart Security with 24/7 Monitoring and Alerts",
    },
    {
      icon: "💡",
      text: "Intelligent Lighting That Adapts to Your Mood",
    },
    {
      icon: "📱",
      text: "Control Your Home Devices from Anywhere via App",
    },
    {
      icon: "🌡️",
      text: "Automated Temperature & Climate Adjustments",
    },
    {
      icon: "🔋",
      text: "Energy Monitoring to Reduce Bills Efficiently",
    },
    {
      icon: "📊",
      text: "Real-Time Device Usage Insights & Stats",
    },
    {
      icon: "🛠️",
      text: "Customizable Routines for Daily Automation",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-12 space-y-10 bg-white">
      <div className="w-[250px] h-[500px] rounded-3xl overflow-hidden relative shadow-lg border-4 border-black">
        <video
          className="w-full h-full object-cover"
          src="/Video/app_video.mp4"
          muted
          playsInline
          autoPlay
          loop
        />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-black"></div>
      </div>

      <div className="w-full max-w-md space-y-6">
        {featureItems.map((item, index) => (
          <div key={index} className="feature-item flex gap-2">
            <span className="icon">{item.icon}</span>
            <h1 className="text">{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
