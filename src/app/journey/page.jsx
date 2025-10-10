"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Lightbulb, Users, Wrench, Award, Building2, ShieldCheck, Zap } from "lucide-react";

const journeyData = [
  {
    year: "2014",
    title: "The Spark",
    description:
      "A small group of engineers and dreamers met at a tech conference, united by a vision: to make homes and businesses smarter, safer, and more efficient through automation.",
    icon: <Lightbulb className="w-7 h-7 text-yellow-400" />,
    image: "/spark.png",
  },
  {
    year: "2015",
    title: "Company Founded",
    description:
      "Homeasy Automation was officially founded. The first office was a tiny garage, but the ambition was sky-high.",
    icon: <Rocket className="w-7 h-7 text-blue-500" />,
    image: "/front.png",
  },
  {
    year: "2016",
    title: "First Product Launch",
    description:
      "Launched our first smart lighting system, allowing users to control lights from their phones. Early adopters loved the convenience and energy savings.",
    icon: <Zap className="w-7 h-7 text-green-500" />,
    image: "/spark.png",
  },
  {
    year: "2017",
    title: "Building the Team",
    description:
      "Expanded the team with talented developers, designers, and support staff. Our culture of innovation and collaboration began to flourish.",
    icon: <Users className="w-7 h-7 text-pink-500" />,
    image: "/spark.png",
  },
  {
    year: "2018",
    title: "Smart Security Solutions",
    description:
      "Introduced smart locks and surveillance systems, making homes and offices more secure. Our customer base grew rapidly.",
    icon: <ShieldCheck className="w-7 h-7 text-blue-700" />,
    image: "/spark.png",
  },
  {
    year: "2019",
    title: "Automation for Businesses",
    description:
      "Expanded into commercial automation—helping offices, hotels, and hospitals save energy and improve safety with centralized control.",
    icon: <Building2 className="w-7 h-7 text-purple-500" />,
    image: "/spark.png",
  },
  {
    year: "2020",
    title: "Innovation During Adversity",
    description:
      "Despite global challenges, we launched contactless automation and remote monitoring features, supporting customers through uncertain times.",
    icon: <Wrench className="w-7 h-7 text-gray-500" />,
    image: "/spark.png",
  },
  {
    year: "2021",
    title: "Award-Winning Growth",
    description:
      "Recognized as one of the fastest-growing automation companies in India. Won the National Smart Living Award.",
    icon: <Award className="w-7 h-7 text-orange-400" />,
    image: "/spark.png",
  },
  {
    year: "2023",
    title: "AI & IoT Integration",
    description:
      "Integrated AI-driven routines and IoT device compatibility, making automation more intelligent and adaptive than ever.",
    icon: <Zap className="w-7 h-7 text-green-600" />,
    image: "/spark.png",
  },
  {
    year: "2024",
    title: "A Connected Future",
    description:
      "Now serving thousands of homes and businesses, Homeasy Automation continues to innovate—empowering people to live and work smarter, safer, and more sustainably.",
    icon: <Rocket className="w-7 h-7 text-blue-500" />,
    image: "/spark.png",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 opacity-30 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-25 mt-15 text-blue-800 drop-shadow-lg"
        >
          Our Journey
        </motion.h2>
          <div className="relative flex flex-col md:grid md:grid-cols-9 gap-8">
  {journeyData.map((item, idx) => (
    <React.Fragment key={idx}>
      {/* Even: Image left, Content right */}
      {idx % 2 === 0 ? (
        <>
          {/* Image left */}
          <div className="md:col-span-4 flex justify-center items-center">
            <motion.img
              src={item.image}
              alt={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="w-56 h-40 object-cover rounded-2xl shadow-lg border-4 border-blue-100"
            />
          </div>
          {/* Timeline and icon */}
          <div className="md:col-span-1 flex flex-col items-center relative">
            {idx !== journeyData.length - 1 && (
              <span className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-blue-400 rounded-full z-0"></span>
            )}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-300 shadow-lg"
            >
              {item.icon}
            </motion.span>
          </div>
          {/* Content right */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white/90 rounded-2xl shadow-xl p-8 mb-8 md:mb-0 border-l-8 border-blue-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
                <span className="text-gray-400">{item.year}</span> — {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.description}</p>
            </motion.div>
          </div>
        </>
      ) : (
        /* Odd: Content left, Image right */
        <>
          {/* Content left */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white/90 rounded-2xl shadow-xl p-8 mb-8 md:mb-0 border-r-8 border-blue-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
                <span className="text-gray-400">{item.year}</span> — {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.description}</p>
            </motion.div>
          </div>
          {/* Timeline and icon */}
          <div className="md:col-span-1 flex flex-col items-center relative">
            {idx !== journeyData.length - 1 && (
              <span className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-blue-400 rounded-full z-0"></span>
            )}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-300 shadow-lg"
            >
              {item.icon}
            </motion.span>
          </div>
          {/* Image right */}
          <div className="md:col-span-4 flex justify-center items-center">
            <motion.img
              src={item.image}
              alt={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="w-56 h-40 object-cover rounded-2xl shadow-lg border-4 border-blue-100"
            />
          </div>
        </>
      )}
    </React.Fragment>
  ))}
</div>
      </div>
    </section>
  );
}
