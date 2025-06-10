"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Location = () => {
  const contentRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 500, duration: 0.5 },
        {
          y: 0,

          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Overlay Content */}
      <div
        ref={contentRef}
        className="absolute right-0 top-0 h-full w-full md:w-2/5 bg-white bg-opacity-90 px-10 py-16 flex flex-col justify-center space-y-10"
      >
        <h2
          id="contact-heading"
          className="text-4xl md:text-5xl text-gray-900 leading-tight "
        >
          Visit Us
        </h2>

        {/* Address Block */}
        <address className="not-italic">
          <h3 className="text-2xl font-semibold mb-2">
            23, B-Hub, 5th Floor, <br />
            Mauryalok Complex
          </h3>

          <div className="mb-4">
            <p className="uppercase text-xl text-gray-400 mb-1">Office</p>
            <p className="text-2xl font-medium">
              Homeasy Automation Pvt Ltd <br />
              Morya Lok Complex, Patna, Bihar 800001
            </p>
          </div>

          <div className="mb-4">
            <p className="uppercase text-xl text-gray-400 mb-1">Contact</p>
            <a
              href="tel:+919117379099"
              className="text-2xl font-medium text-blue-700 hover:underline"
            >
              9117379099
            </a>
          </div>

          <div>
            <p className="uppercase text-xl text-gray-400 mb-1">Email</p>
            <a
              href="mailto:info@homeasy.io"
              className="text-2xl font-medium text-blue-700 hover:underline"
            >
              info@homeasy.io
            </a>
          </div>
        </address>
      </div>
    </section>
  );
};

export default Location;
