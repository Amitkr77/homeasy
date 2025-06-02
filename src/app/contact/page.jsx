"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MoveUpRight,
} from "lucide-react";
import Location from "@/components/Location";
import FreeConsultationModal from "@/components/FreeConsultationModal";

export default function page() {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const headingAnim = gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    const buttonAnim = gsap.fromTo(
      buttonRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, delay: 0.5 }
    );

    return () => {
      headingAnim.kill();
      buttonAnim.kill();
    };
  }, []);

  return (
    <div>
      {/* Hero section */}
      <section className="container mx-auto bg-white min-h-screen flex flex-col justify-center px-6 md:px-10 py-24 text-left">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6"
        >
          Let's start something new together
        </h1>
        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-10"
        >
          {/* <button className="bg-black text-white py-3 px-6 rounded-md transition">
            Contact for Free Consultation
          </button> */}
          <FreeConsultationModal buttonClass="bg-black text-white py-3 px-6 rounded-md outline-none hover:bg-black " />
          <button className="border border-black text-black py-3 px-6 rounded-md transition cursor-pointer">
            Browse Our Services
          </button>
        </div>
      </section>

      {/* Info section */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-screen flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 uppercase leading-snug">
              Drop us a line, and we’ll get in <br /> touch with you.
            </h2>
            <p className="mb-6 text-gray-600 text-lg sm:text-xl">
              We’ll see if we’re a match and how we can help each other. <br />{" "}
              Still not sure?{" "}
              <a
                href="/why-homeasy"
                aria-label="See why Homeasy"
                className="inline-flex items-center gap-2 text-indigo-600 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full group ml-2"
              >
                <MoveUpRight
                  size={18}
                  className="rotate-45 group-hover:rotate-0 transition-all duration-300"
                />
                See Why Homeasy
              </a>
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 grid gap-6 text-left ml-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium uppercase">
                Office Mail
              </h3>
              <p className="text-gray-600 text-lg sm:text-xl">
                info@homeasy.io
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-medium uppercase">
                Tech Team
              </h3>
              <p className="text-gray-600 text-lg sm:text-xl">
                amitkumar@homeasy.io
              </p>
            </div>
          </div>
        </div>
      </section>

      <Location />

      {/* follow us */}
      <section className="py-20 bg-gray-50 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-left">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-2">
            Follow Us.
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
            Stay connected and follow our journey. We share updates,
            inspiration, and behind-the-scenes moments from our team.
          </p>

          <div className="flex flex-wrap gap-10 sm:gap-16 lg:gap-20">
            {[
              {
                name: "Facebook",
                icon: <Facebook size={32} />,
                link: "https://www.facebook.com/homeasyautomation/",
              },
              {
                name: "LinkedIn",
                icon: <Linkedin size={32} />,
                link: "https://www.linkedin.com/company/homeasyautomationiot/",
              },
              {
                name: "Instagram",
                icon: <Instagram size={32} />,
                link: "https://instagram.com/homeasyautomation/",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full flex items-center text-2xl sm:text-7xl font-medium text-gray-800"
              >
                {item.name}
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-black text-white text-left px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Let's Create Something Exceptional, Together.
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-light mb-10 text-white/90 leading-relaxed">
            We help teams unlock their potential with creative solutions and
            expert collaboration.
            <br className="hidden sm:block" />
            Let’s connect and explore how we can bring your ideas to life.
          </p>
          <button className="text-base sm:text-lg md:text-xl font-semibold py-4 px-8 sm:px-10 rounded-md border-2 border-white bg-black transition duration-300 hover:bg-white hover:text-black hover:border-black">
            Book a Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
}
