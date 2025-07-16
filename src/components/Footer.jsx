"use client";

import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react"; 
import FreeConsultationModal from "./FreeConsultationModal";

function Footer() {
  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP Animation for button and footer
  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-t from-gray-800 to-black text-white py-16 px-8 md:px-24 space-y-12 "
    >
      {/* Hero Section: Heading + CTA centered */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between  gap-10 bg-black px-6 py-16 rounded-3xl">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Have a World-Changing Idea? <br className="hidden sm:block" />
            Say It Out Loud!
          </h1>
          <p className="text-lg sm:text-xl text-white/80">
            Turn your vision into reality. Let’s talk strategy, growth, and
            impact.
          </p>
        </div>

        <FreeConsultationModal
          triggerText=" Get Your Free Consultation"
          buttonClass="border border-white text-indigo-700 hover:bg-gray-600 text-white block rounded-none "
        />
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm m-auto max-w-6xl">
        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition duration-300">
              Home
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              Work
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              About Us
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              Backstage
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Company</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition duration-300">
              Career
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              Contact
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              Why homeasy
            </li>
          </ul>
        </div>

        {/* Email Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Email</h2>
          <p className="text-gray-400">info@homeasy.io</p>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/company/homeasyautomationiot/"
              className="text-gray-400 hover:text-blue-500 transition duration-300 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/homeasyautomation/"
              className="text-gray-400 hover:text-blue-500 transition duration-300 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com/homeasyautomation/"
              className="text-gray-400 hover:text-blue-500 transition duration-300 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Legal Section */}
      <div className="text-center text-sm mt-12 border-t border-gray-600 pt-6">
        <p className="text-gray-400">© 2025 homeasy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
