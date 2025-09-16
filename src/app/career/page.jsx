"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DollarSign, HeartPulse, BookOpen, Clock, Code, Server, Briefcase } from "lucide-react";

export default function Page() {
  const [expandedBenefit, setExpandedBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      title: "Competitive Compensation",
      icon: <DollarSign className="text-blue-500 w-6 h-6 mr-2" />,
      description:
        "Industry-leading salaries with annual performance bonuses and stock options eligibility.",
      details:
        "In addition to base salary, employees may receive yearly bonuses based on performance and can participate in stock options programs, giving them a stake in the company’s growth.",
    },
    {
      id: 2,
      title: "Health & Wellness",
      icon: <HeartPulse className="text-blue-500 w-6 h-6 mr-2" />,
      description:
        "Comprehensive medical, dental, vision, and mental health support, including gym memberships.",
      details:
        "Our wellness programs include access to mental health resources, on-site or virtual counseling, fitness memberships, and regular wellness workshops.",
    },
    {
      id: 3,
      title: "Professional Growth",
      icon: <BookOpen className="text-blue-500 w-6 h-6 mr-2" />,
      description:
        "Access to global conferences, certifications, and personalized career coaching.",
      details:
        "We invest in our employees’ careers through sponsored training programs, mentorship, and learning platforms to accelerate growth and skills development.",
    },
    {
      id: 4,
      title: "Flexible Work",
      icon: <Clock className="text-blue-500 w-6 h-6 mr-2" />,
      description:
        "Hybrid work options, unlimited PTO, and sabbatical programs after 5 years.",
      details:
        "Enjoy flexible schedules, remote work options, generous paid time off, and sabbatical leaves to balance work and life effectively.",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <header className="container h-screen flex flex-col justify-end items-center relative px-6 md:px-20 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight tracking-tight text-gray-800 z-50 mb-6 md:mb-8">
          Working on unique{" "}
          <span className="font-bitcount text-gradient">projects*</span> has
          never been more{" "}
          <span className="inline-flex mt-2">
            <span className="text-blue-600 font-bold">fun</span>{" "}
            <span className="text-xs md:text-lg text-red-500 font-medium mt-8 tracking-tighter">
              *while getting paid well
            </span>
          </span>
        </h1>
      </header>

      {/* Company Mission Section */}
      <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-100 clip-path-polygon-diagonal" />
        <div className="relative max-w-6xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            At InnovateTech, we are committed to driving technological
            advancement through cutting-edge solutions. Our mission is to
            empower our team to deliver impactful projects that shape the future
            of industries, fostering innovation while maintaining ethical and
            sustainable practices.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Employee Benefits Section (Expandable) */}
      <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Employee Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>

                {/* Expandable details */}
                {expandedBenefit === benefit.id && (
                  <p className="mt-4 text-gray-600">{benefit.details}</p>
                )}

                <button
                  onClick={() =>
                    setExpandedBenefit(
                      expandedBenefit === benefit.id ? null : benefit.id
                    )
                  }
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  {expandedBenefit === benefit.id
                    ? "Hide Details"
                    : "Explore Details"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our streamlined application process ensures a seamless experience.
            Submit your resume, complete a technical assessment, and attend a
            virtual interview with our leadership team.
          </p>
          <Link
            href="apply-now"
            className="inline-block px-8 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
