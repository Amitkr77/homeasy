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
            delay: index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <main className="bg-white py-20">
      {/* ✅ HEADER SECTION */}
      <header
        ref={(el) => (sectionsRef.current[0] = el)}
        className="container h-screen text-black flex flex-col md:flex-row items-center relative px-6 md:px-20"
      >
        <h1 className="text-5xl md:text-9xl font-medium z-50 leading-tight mt-10 md:mt-16 text-center md:text-left">
          Empower your{" "}
          <span className="text-blue-700">
            {" "}
            <br />
            vision
          </span>{" "}
          with <br />
          Homeasy — where <br /> finding your dream{" "}
          <br className="hidden md:block" />
          home gets smarter
        </h1>
        <figure className="absolute bottom-20 md:bottom-56 right-10 md:right-40">
          <img
            src="https://images.unsplash.com/photo-1655194827229-a1d3192b533e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Smart home real estate illustration"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-lg"
          />
        </figure>
      </header>

      {/* ✅ MISSION SECTION */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        aria-labelledby="our-mission"
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-stretch px-6 md:px-20 py-20 gap-10"
      >
        <figure>
          <img
            src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d607dfa5e595d5958d4ff8_4c9702e1-f6b5-46fc-bd84-79366254e7cc%20Large-p-500.webp"
            alt="illustration"
            className="w-56 h-40 object-cover"
          />
        </figure>
        <div>
          <h2 id="our-mission" className="sr-only">
            our mission
          </h2>
          <p className="text-lg md:text-xl leading-8 text-gray-500 tracking-wide">
            At Homeasy, we empower your real estate ideas by offering seamless
            digital solutions. From showcasing properties to smart bookings and
            virtual tours — let's redefine how people discover homes.
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
              Unmatched <br className="hidden md:block" />
              user experience
            </span>
          </div>
          <figure className="mt-8 md:mt-0">
            <img
              src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d894a86089076174c586e5_img_15.webp"
              alt="interface"
              className="h-44 w-full max-w-xs object-cover rounded"
            />
          </figure>
        </div>

        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="flex flex-col md:flex-row gap-12 my-24 w-full"
        >
          <img
            src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d8a1f188cc8061ff186811_img_4.webp"
            alt="product"
            className="w-full md:w-[50%] h-80 object-cover rounded"
          />
          <div>
            <p className="text-2xl md:text-3xl leading-9 mb-10">
              From first search to final signature, we prioritize flawless
              experience and speed. Our platform keeps users engaged and agents
              empowered.
            </p>
            <p className="text-lg md:text-2xl text-gray-400">
              Learn more from our{" "}
              <span className="text-blue-500">client reviews</span> and{" "}
              <span className="text-blue-500">project success stories</span>.
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
              Ownership <br className="hidden md:block" />
              Approach
            </span>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-2xl md:text-4xl">
              Homeasy becomes an extension of your mission. We invest our
              creativity, engineering, and effort as if the platform were our
              own.
            </p>
          </div>
        </div>

        <figure
          ref={(el) => (sectionsRef.current[5] = el)}
          className="flex flex-col md:flex-row gap-10 mt-20"
        >
          <img
            src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d607ea832dd33a591eb628_IMG_8399%202%20Large.webp"
            alt="team work"
            className="w-full md:w-[50%] h-80 object-cover rounded"
          />
          <img
            src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d8a1f1588bc63d28a16b3a_img_5.webp"
            alt="collaboration"
            className="w-full md:w-[50%] h-80 object-cover rounded"
          />
        </figure>

        <div
          ref={(el) => (sectionsRef.current[6] = el)}
          className="mt-28 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between"
        >
          <div className="flex items-start">
            <h1 className="text-gray-500 text-5xl md:text-6xl mr-6">3</h1>
            <span className="text-4xl md:text-7xl">
              Long-term <br className="hidden md:block" />
              relationship
            </span>
          </div>
          <figure>
            <img
              src="https://cdn.prod.website-files.com/659d5e6e563605a98d408358/65d607e08ba8b48e8542e3ec_A7324E12-CF9A-4ECF-BF7B-0ADA69B50C4A%20Large.webp"
              alt=""
              className="h-72 w-xl object-cover rounded"
            />
          </figure>
        </div>

        {/* Enhanced & Responsive Section */}
        <div
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
        </div>
      </section>
    </main>
  );
}
