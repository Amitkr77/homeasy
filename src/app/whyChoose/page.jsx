"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function page() {
  const sectionsRef = useRef([]);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            rotate: 2,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "back.out(1.7)",
            rotate: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <main className="bg-white py-20 overflow-hidden">
      {/* ✅ HEADER SECTION */}
      <header
        ref={(el) => (sectionsRef.current[0] = el)}
        className="container h-screen text-black flex flex-col md:flex-row items-center relative px-8 md:px-10"
      >
        <h1 className="text-5xl absolute bottom-10 md:bottom-37 md:text-9xl font-medium z-50 leading-tight mt-100 md:mt-100 text-center md:text-left">
          The Future of{" "}
          <span className="text-blue-700">
            {" "}
            <br />
            Living
          </span>{" "}
          Today. <br />
          {" "}

          <p className="text-lg md:text-xl leading-8 text-gray-500 tracking-wide">
            At Homeasy, we believe a smart home isn’t just about gadgets — it’s about<br />
            creating a lifestyle that is seamless, secure, and truly connected. <br />
          </p>
          <br className="hidden md:block" />
        </h1>
        <figure className="absolute bottom-50 md:bottom-72 right-0 md:right-0">
          <img
            src="\oneapp.png"
            alt="Smart home real estate illustration"
            className="w-120 h-100 md:w-110 md:h-96 object-cover rounded-lg"
          />
        </figure>
      </header>

      {/* ✅ WHY CHOOSE US SECTION */}
      <div className="px-6 md:px-20 py-20 -mt-10 bg-gradient-to-r from-blue-100 via-white to-blue-100 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 tracking-wider">
          Why Choose Homeasy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <article>
            <h3 className="text-xl font-semibold mb-4">
              A complete ecosystem-from hardware to software.
            </h3>
          </article>
          <article>
            <h3 className="text-xl font-semibold mb-4">A unified app
              that works with all major smart device brands.
            </h3>
          </article>
          <article>
            <h3 className="text-xl font-semibold mb-4">Expert support from consultation to installation. </h3>
          </article>
          <article>
            <h3 className="text-xl font-semibold mb-4">A future-proof solution  designed to evolve with technology.</h3>
          </article>
        </div>
      </div>



      {/* ✅ MISSION SECTION */}
      <section ref={(el) => (sectionsRef.current[1] = el)} aria-labelledby="our-mission" className="w-full max-w-9xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-stretch px-6 md:px-20 py-20 gap-5" >
        <figure> <img src="\front.png"
          alt="illustration"
          className="w-320 h-120 object-cover" />
        </figure>
        <div>
          <h2 id="our-mission" className="sr-only">
            our mission
          </h2>
          <p className="text-lg md:text-xl leading-8 text-black tracking-wide">
            <span className="font-bold text-2xl text-blue-700">
              {" "}
              <br />
              Our mission is simple:<br />
            </span>{" "} to transform traditional homes into intelligent living spaces where
            comfort, convenience, and control come together in one powerful solution.
          </p>
        </div>
      </section>

      {/* ✅ FEATURE SECTION -1 */}
      <section aria-labelledby="feature-ux" className="my-20 px-6 md:px-40">
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="flex flex-col md:flex-row justify-between w-full items-start md:items-center"
        >
          <div className="flex items-start ">
            <h1 className="text-gray-500 text-5xl md:text-6xl mr-6">1</h1>
            <span className="text-4xl md:text-7xl">
              One App.
              <br className="hidden md:block" />
              Infinite Possibilities.
            </span>
          </div>
          <figure className="mt-8 md:mt-0">
            <img
              src="Appliances.png"
              alt="interface"
              className="h-90 w-100 max-w-xl object-cover rounded"
            />
          </figure>
        </div>

        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="flex flex-col md:flex-row items-center gap-12 my-24 w-full px-6 py-12 bg-gradient-to-r shadow-md"
        >
          {/* Image with hover effect */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="\Mission.png"
              alt="product"
              className="w-80 md:w-[90%] h-60 object-cover rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl leading-9 text-gray-700">
              Most smart home systems work in silos — one app for lighting, another for security,
              and yet another for entertainment. <span className="font-semibold text-blue-600">Homeasy changes that.</span>
              With our unified platform, you can control every smart device — regardless of brand —
              from a single, intuitive app.
            </p>
          </div>
        </div>

        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          className="flex flex-col md:flex-row gap-12 items-start md:items-center"
        >
          <div className="flex items-start">
            <h1 className="text-gray-500 text-5xl md:text-6xl mr-6">2</h1>
            <span className="text-4xl md:text-7xl">
              From Traditional to <br className="hidden md:block" />
              Smart — Made Effortless
            </span>
          </div>
        </div>
        <figure
          ref={(el) => (sectionsRef.current[5] = el)}
          className="flex flex-col md:flex-row gap-10 mt-20"
        >
          <img
            src="tradition.png"
            alt="team work"
            className="w-100 md:w-[90%] h-100 object-cover rounded"
          />
          <div>
            <p className="text-2xl md:text-2xl leading-9 mb-10">
              We don’t just provide an app — we provide an end-to-end solution.
              From hardware installation to seamless integration,
              <span className="font-semibold text-blue-600"> Homeasy</span> takes care of everything.
            </p>

            <p className="text-2xl md:text-xl leading-9 mb-10 space-y-4">
          
              <span className="font-bold">Smart Conversion </span> – Upgrade your existing home without rebuilding.<br/>
              <span className="font-bold">Tailored Setup</span> – Solutions customized to your lifestyle and needs.<br />
              <span className="font-bold">Expert Installation</span> – Certified professionals who ensure everything works perfectly.
            </p>
          </div>


          {/* <img
            src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d8a1f1588bc63d28a16b3a_img_5.webp"
            alt="collaboration"
            className="w-full md:w-[50%] h-80 object-cover rounded"
          />*/}
        </figure>

        <div
          ref={(el) => (sectionsRef.current[5] = el)}
          className="mt-28 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between"
        >
          <div className="flex items-start">
            <h1 className="text-gray-500 text-5xl md:text-6xl mr-6">3</h1>
            <span className="text-4xl md:text-7xl">
              Security That Puts You in Control
            </span>
          </div>
        </div>
        <figure ref={(el) => (sectionsRef.current[6] = el)}
          className="flex flex-col md:flex-row gap-10 mt-20"
        >
          <img
            src="\security.png"
            alt=""
            className="h-88 w-7xl object-cover rounded"
          />
          <div>
            <p className="text-2xl md:text-2xl leading-9 mb-10">
              Your home is your sanctuary, and Homeasy makes it safer than ever.
              Our smart security solutions ensure you’re always in control.
            </p>
            {/*  <p className="text-2xl md:text-2xl leading-9 mb-10">
            Real-Time Alerts – Get instant notifications of unusual activity.
Smart Locks & Cameras – Monitor and secure your home remotely.
Peace of Mind – Know your family and home are always protected.
</p>*/}
            <p className="text-xl md:text-xl leading-9 mb-10">
              <span className="font-bold text-gray-800">
                Real-Time Alerts
              </span> – Get instant notifications of unusual activity.<br />
              <span className="font-bold text-gray-800">
                Smart Locks & Cameras
              </span> – Monitor and secure your home remotely.<br />

              <span className="font-bold text-gray-800">
                Peace of Mind
              </span> – Know your family and home are always protected.
            </p>

          </div>
        </figure>

        <div
          ref={(el) => (sectionsRef.current[6] = el)}
          className="mt-28 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between"
        >
          <div className="flex items-start">
            <h1 className="text-gray-500 text-5xl md:text-6xl mr-6">4</h1>
            <span className="text-4xl md:text-7xl">
              Designed Around You
            </span>
          </div>
        </div>

        <figure
          ref={(el) => (sectionsRef.current[7] = el)}
          className="flex flex-col md:flex-row gap-10 mt-20"
        >
          {/* Text first (left) */}
          <div className="mt-6 md:mt-0 md:w-1/2">
            <br />
            <p className="text-2xl md:text-2xl">
              Technology should never feel complicated — it should feel natural.
              That’s why Homeasy is built with simplicity, elegance, and user comfort at its core.
            </p>
            <br />
            <p className="text-2xl md:text-xl leading-9 mb-10">
              <span className="font-bold">Intuitive Design</span> – Easy-to-use interface for every age group.<br />
              <span className="font-bold">Aesthetic Integration</span> – Smart devices that blend seamlessly with your interiors.<br />
              <span className="font-bold">Personalized Living</span> – Create routines, moods, and automations that fit your lifestyle.
            </p>
          </div>

          {/* Image second (right) */}
          <img
            src="\desgin.png"
            alt=""
            className="h-99 w-6xl object-cover rounded md:w-1/2"
          />
        </figure>

        {/* Enhanced & Responsive Section */}
        {/*<div
          ref={(el) => (sectionsRef.current[7] = el)}
          className="mt-20 flex flex-col md:flex-row gap-12 px-6 md:px-20 items-center justify-center"
        >
          <img
            src="./startUp.jpg"
            alt="Startup"
            className="h-72 w-full md:w-1/3 object-cover rounded"
          />
          <div className="max-w-md mt-10 md:mt-0 text-center md:text-left">
            <h1 className="text-2xl font-semibold">
              Great success doesn't come overnight.
            </h1>
            <p className="text-lg text-gray-500 mt-4">
              Lasting cooperation on a project allows us to fully understand the
              product and apply our know-how.
            </p>
            <p className="text-blue-500 text-xl mt-2">
              We're happy to tell you more{" "}
              <span className="underline">About us</span>.
            </p>
          </div>
          <img
            src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d607df1dafe9cffe4759d5_96beef12-51f5-4272-82ba-e097445b0ff5%20Large.webp"
            alt="Success"
            className="h-72 w-full md:w-1/3 object-cover rounded"
          />
        </div>

        <div
          ref={(el) => (sectionsRef.current[8] = el)}
          className="mt-28 flex flex-col md:flex-row gap-12 items-center px-6 md:px-20"
        >
          <div className="flex items-start">
            <h1 className="text-gray-500 text-5xl md:text-6xl mr-6">4</h1>
            <span className="text-4xl md:text-6xl font-semibold">
              Business
              <br className="hidden md:block" /> thinking
            </span>
          </div>
          <img
            src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d607df3ae2e4d431a3d3ab_02896456-8143-4716-94ea-81cc27bc3fe7%20Large.webp"
            alt="Business Thinking"
            className="h-72 w-full md:w-1/2 object-cover rounded"
          />
        </div>

        <div
          ref={(el) => (sectionsRef.current[9] = el)}
          className="mt-28 flex flex-col md:flex-row gap-12 items-center px-6 md:px-20"
        >
          <img
            src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d607e03a8e1b5f22288fdf_a59f81ed-15d8-43a2-bcda-dcd7113756a2%20Large.webp"
            alt="Growth Support"
            className="h-72 w-full md:w-1/2 object-cover rounded"
          />
          <div className="max-w-xl">
            <h1 className="text-2xl font-semibold">
              When you grow, we grow. We support our strategies with data,
              feedback and facts that help you avoid setbacks and save resources
              in the long run.
            </h1>
            <p className="text-blue-500 text-xl mt-4">
              Learn more <span className="underline">About us</span> and see how
              we operate.
            </p>
          </div>
        </div>

        <div
          ref={(el) => (sectionsRef.current[10] = el)}
          className="mt-28 flex flex-col md:flex-row gap-12 px-6 md:px-20 items-center"
        >
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-start">
              <h1 className="text-gray-500 text-5xl md:text-6xl mr-6">5</h1>
              <span className="text-4xl md:text-6xl font-semibold">
                Healthy
                <br className="hidden md:block" /> relationships
              </span>
            </div>
            <div>
              <h1 className="text-xl">
                We like to keep our partners close. Transparent communication
                helps us build a relationship where we grow your business
                together.
              </h1>
              <p className="text-blue-500 mt-2">
                Want to help us? Check out our{" "}
                <span className="underline">Career</span> page.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-6">
            <img
              src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d8a1f222e51e12584e151d_img_12.webp"
              alt="Team"
              className="h-72 w-full md:w-1/2 object-cover rounded"
            />
            <img
              src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d607e9e512c6c035a87335_IMG_7885%20Large.webp"
              alt="Culture"
              className="h-96 w-full md:w-1/2 object-cover rounded"
            />
          </div>
        </div>

        <div
          ref={(el) => (sectionsRef.current[11] = el)}
          className="mt-28 flex flex-col md:flex-row gap-12 items-start px-6 md:px-20"
        >
          <div className="flex items-start">
            <h1 className="text-gray-500 text-5xl md:text-6xl mr-6">6</h1>
            <span className="text-4xl md:text-6xl font-semibold">
              Acknowledged
              <br className="hidden md:block" /> experience
            </span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-xl">
              A functional product is a great satisfaction, but being recognized
              is cool too. Our work has been awarded by organizations like
              Awwwards, FWA or CSSDA.
            </h1>
            <p className="text-blue-500 mt-2">
              See the best picks from{" "}
              <span className="underline">Our work</span>.
            </p>
          </div>
        </div>*/}
      </section>
    </main>
  );
}


