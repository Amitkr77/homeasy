"use client";

import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";  // Import Link from next/link
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
      className="bg-gradient-to-t from-blue-950 to-white text-white py-16 px-8 md:px-24 space-y-12"
    >

{/* Hero Section: Heading on Left + CTA on Right */}

<div className="flex flex-col lg:flex-row items-center justify-between bg-black/5 px-6 py-16 rounded-3xl gap-10">
  {/* Left: Text Section */}
  <div className="max-w-3xl text-white text-left">
    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6">
      Ready to Turn Your Home Smart? <br className="hidden sm:block" />
      Book Your Free Consultation
    </h1>
    <p className="text-lg sm:text-xl text-white/75">
      Redefining the art of smart living through intelligent design and futuristic comfort.
    </p>
  </div>

  {/* Right: Free Consultation Button */}
  <div className="mt-8 lg:mt-0 flex justify-center" ref={buttonRef}>
    <FreeConsultationModal
      triggerText="Get Your Free Consultation"
      buttonClass="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
    />
  </div>
</div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-sm m-auto max-w-6xl">
        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition duration-300">
              <Link href="/whyChoose">Work</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Company</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition duration-300">
              <Link href="/career">Career</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-300">
              <Link href="/whyChoose">Why Homeasy</Link>
            </li>
          </ul>
        </div>

        
        {/* Address Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-300">Address</h2>
          <p className="text-gray-100">Maurya Lok, Bhub<br className="hidden sm:block" />
          Patna - 800001, Bihar
          </p>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-gray-300">Email</h2>
          <p className="text-gray-100">info@homeasy.io</p>
        </div>
        </div>

        {/* Email Section */}
       {/* <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Email</h2>
          <p className="text-gray-100">info@homeasy.io</p>
        </div> */}

       
    
    {/* Social Media Section (center in footer) */}
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-lg font-semibold text-gray-200">Follow Us</h2>
      <div className="flex gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/company/homeasyautomationiot/"
          className="text-gray-100 hover:text-blue-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.facebook.com/homeasyautomation/"
          className="text-gray-100 hover:text-blue-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://instagram.com/homeasyautomation/"
          className="text-gray-100 hover:text-blue-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
           <a
          href="https://youtube.com/@homeasyautomation"
          className="text-gray-100 hover:text-blue-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube />
        </a>

      </div>
    </div> 

    {/* Subscribe Section (on right side) */}
    <div className="space-y-3 text-center">
      <h2 className="text-lg font-semibold text-gray-200">Stay Connected</h2>
      <p className="text-white text-right">
        Subscribe to our newsletter for updates, news, and insights.
      </p>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-64 py-2 px-3 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold w-64 py-2 px-4 rounded-md transition duration-300">
          Subscribe
        </button>
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
