"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Page() {
  const ideasRef = useRef(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const cardRefs = useRef([]);
  const teamRef = useRef(null);
  const leadershipRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero animation with parallax effect
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Mission statement fade + scale
      gsap.from(missionRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        },
      });

      // Ideas section pop-in
      gsap.fromTo(
        ideasRef.current,
        { scale: 2, opacity: 0, rotate: -5 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ideasRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Values section pin with staggered card animation and blur in
      ScrollTrigger.create({
        trigger: valuesRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
      });

      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: `top+=${index * 30}% center`,
              end: "+=20%",
              scrub: true,
            },
          }
        );
      });

      // Team section fade + lift
      gsap.from(teamRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      });

      // Leadership scale with elastic effect
      gsap.from(leadershipRef.current.children, {
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const leaders = [
    {
      name: "Amit Sharma",
      title: "Founder & CEO",
      desc: "With a passion for real estate innovation and a vision to make home buying simple and transparent, Amit leads Homeasy with clarity and purpose.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGdmhNwPmtnQQ/profile-displayphoto-shrink_800_800/B4DZUErE8VGkAc-/0/1739540156872?e=1753315200&v=beta&t=j_x8aPaxHl4I8qgvUHdZdqzlUaTgyEcwywAch6kr3y8", // Make sure to provide valid paths for the images
    },
    {
      name: "Rohit kumar",
      title: "Developer",
      desc: "Rohit crafts intuitive and elegant designs that simplify complex housing decisions into delightful user experiences.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwZ3V5fGVufDB8fDB8fHww", // Image paths
    },
    {
      name: "Abhijeet kumar mishra",
      title: "Andriod developer",
      desc: "Abhijeet ensures the platform remains fast, secure, and future-ready — leading the charge in building our digital infrastructure.",
      image: "https://images.unsplash.com/photo-1707742453461-6855f0b8238c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvcnBvcmF0ZSUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D", // Image paths
    },
  ];

  return (
    <section className="text-gray-900">
      {/* Hero Section */}
      <main
        ref={heroRef}
        className="h-screen flex items-end p-10 bg-gradient-to-b from-blue-100 to-white"
      >
        <h1 className="text-7xl md:text-9xl font-bold leading-tight">
          From blueprint to key, <br /> we shape where you’ll be. <br />
          <span className="text-blue-500">Welcome to Homeasy.</span>
        </h1>
      </main>

      {/* Mission Statement */}
      <div
        ref={missionRef}
        className="flex justify-center items-center px-6 py-20 text-center bg-white"
      >
        <h2 className="text-3xl md:text-6xl leading-relaxed max-w-5xl">
          At Homeasy, our mission is to simplify your real estate experience.
          With future-ready design, reliable tech, and thoughtful strategies, we
          transform housing ideas into spaces people love to call home.
        </h2>
      </div>

      {/* Ideas Section */}
      <div
        ref={ideasRef}
        className="px-6 md:px-20 py-20 bg-gray-50 overflow-hidden"
      >
        <h2 className="text-5xl md:text-9xl font-bold text-center mb-16 tracking-wider">
          Ideas Made Home
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Your Dream, Our Blueprint
            </h3>
            <p className="text-lg">
              You bring a vision for a perfect home — we help make it real, step
              by step.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tech Meets Comfort</h3>
            <p className="text-lg">
              With clean code and smart design, we make property browsing and
              buying intuitive.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Built to Belong</h3>
            <p className="text-lg">
              We don't just build listings — we create trusted spaces to start
              your next chapter.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section ref={valuesRef} className="px-6 md:px-20 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((num, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="space-y-6"
            >
              <div className="text-4xl font-bold text-blue-500">{num}</div>
              <h3 className="text-2xl font-semibold">
                {num === 1
                  ? "We Deliver Quality"
                  : num === 2
                  ? "We Value People"
                  : "We Pursue Growth"}
              </h3>
              <p>
                {num === 1
                  ? "At Homeasy, we balance speed with craftsmanship. Our platform is built to be reliable, modern, and future-ready — all while keeping your user experience seamless."
                  : num === 2
                  ? "Home is a personal journey. That’s why we listen first, build with empathy, and collaborate like family. Our customers and partners are at the heart of every decision."
                  : "From improving user flows to integrating AI in property search, we're always evolving. Growth fuels us — and our progress is yours too."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <div
        ref={teamRef}
        className="px-6 md:px-20 py-20 bg-blue-50 text-center space-y-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Each of us brings value. Together, we bring vision to life.
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Meet the team behind Homeasy — a diverse group of designers,
          developers, and strategists passionate about turning housing into
          harmony.
        </p>
      </div>

      {/* Leadership Section */}
      <div
        ref={leadershipRef}
        className="px-6 md:px-20 py-20 bg-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                {/* Leader Image */}
                <div className="relative  mb-6  overflow-hidden ">
                  
                  <img src={leader.image} alt=""  className=" h-96 "/>
                </div>
                <div className="p-3">
                  {/* Leader Info */}
                  <h3 className="text-3xl font-bold text-gray-800">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 text-xl mb-4">{leader.title}</p>
                  <p className="text-gray-600 text-lg">{leader.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Carousel/Marquee Placeholder */}
      <div className="px-6 md:px-20 py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the Homeasy Advantage
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-700">
          Why choose Homeasy? Because we combine technology, trust, and design
          thinking to transform your property search into a delightful journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="bg-white outline p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Real-Time Listings
            </h3>
            <p>
              Get instant access to up-to-date listings across cities — no
              delays, no surprises.
            </p>
          </div>
          <div className="bg-white outline  p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Personalized Matching
            </h3>
            <p>
              Our smart system learns your preferences and curates homes
              tailored for you.
            </p>
          </div>
          <div className="bg-white outline  p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Secure & Seamless
            </h3>
            <p>
              From virtual tours to final documents, experience safe and smooth
              transactions.
            </p>
          </div>
          <div className="bg-white outline  p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Expert Support
            </h3>
            <p>
              Need help deciding? Our human team is just a click away — always
              ready to guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
