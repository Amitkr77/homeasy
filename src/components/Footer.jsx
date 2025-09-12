"use client";

import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";
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

      {/* Hero Section: Heading + CTA centered */}

      <div className="flex flex-col items-center gap-10 bg-black/5 px-6 py-16 rounded-3xl">
  <div className="max-w-3xl text-white text-center">
    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6">
      Ready to Turn Your Home Smart? <br className="hidden sm:block" />
      Book Your Free Consultation
    </h1>
    <p className="text-lg sm:text-xl text-white/75">
      Redefining the art of smart living through intelligent design and futuristic comfort.
    </p>
  </div>

  {/* Free Consultation Button always centered */}
  <div className="flex justify-center mt-8" ref={buttonRef}>
    <FreeConsultationModal
      triggerText="Get Your Free Consultation"
      buttonClass="bg-gray-600 text-white block rounded-none"
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
        </div>

        {/* Email Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Email</h2>
          <p className="text-gray-100">info@homeasy.io</p>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/company/homeasyautomationiot/"
              className="text-gray-100 hover:text-blue-500 transition duration-300 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/homeasyautomation/"
              className="text-gray-100 hover:text-blue-500 transition duration-300 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com/homeasyautomation/"
              className="text-gray-100 hover:text-blue-500 transition duration-300 focus:outline-none"
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
