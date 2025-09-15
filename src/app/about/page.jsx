"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Page() {
  const ideasRef = useRef(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const cardRefs = useRef([]);
  const teamRef = useRef(null);
  const leadershipRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (heroRef.current) {
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
      }

      if (missionRef.current) {
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
      }

      if (ideasRef.current) {
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
      }

      if (valuesRef.current) {
        ScrollTrigger.create({
          trigger: valuesRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
        });

        cardRefs.current.forEach((card, index) => {
          if (!card) return;
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
      }

      if (teamRef.current && teamRef.current.children.length) {
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
      }

      if (leadershipRef.current && leadershipRef.current.children.length) {
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
      }
    });

    return () => ctx.revert();
  }, []);

  const leaders = [
    {
      name: "Vishwjeet Narayanan",
      title: "Founder & CEO",
      desc: "Vishwjeet leads Homeasy with vision, innovation, and purpose—driving the mission to simplify and revolutionize the home buying experience.",
      image:
        "./Team/Vishwjeet.jpg",
    },
    {
      name: "Ashutosh Kumar",
      title: "IOT Engineer",
      desc: "Ashutosh is passionate about creating smart home solutions, integrating hardware and software for seamless automation.",
      image:
        "./Team/ashutosh.jpg",
    },
    {
      name: "Abhijeet Kumar Mishra",
      title: "Android Developer",
      desc: "Abhijeet builds and optimizes Homeasy’s Android experience—ensuring performance, stability, and user-first functionality on every device.",
      image:
        "./Team/Abhijeet.png",
    },
    {
      name: "Rajnish   Kumar",
      title: "Backend Developer",
      desc: "Rajnish architects scalable, secure, and reliable backend systems that power Homeasy’s robust infrastructure and real-time services.",
      image:
        "./Team/Rajnish.jpg",
    },
    {
      name: "Aditya Kumar",
      title: "Social Media Manager",
      desc: "Aditya drives Homeasy’s online presence—creating engaging content and managing brand voice across all major social platforms.",
      image:
        "./Team/Aditya.jpg",
    },
  ];

  return (
    <section className="text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <header
        ref={heroRef}
        className="h-screen flex items-end p-10 bg-gradient-to-b from-blue-100 to-white"
      >
        <h1 className="text-7xl md:text-9xl font-bold leading-tight">
          From blueprint to key, <br /> we shape where you’ll be. <br />
          <span className="text-blue-500">Welcome to Homeasy.</span>
        </h1>
      </header>

      {/* Mission Statement */}
      <section
        ref={missionRef}
        aria-labelledby="mission-heading"
        className="flex justify-center items-center px-6 py-20 text-center bg-white"
      >
        <h2
          id="mission-heading"
          className="text-xl md:text-2xl leading-relaxed max-w-8xl"
        >
          At <span className="text-blue-700 font-semibold">Homeasy Automation </span>,
          we are redefining the way people experience comfort, security, and convenience at home. Our mission is to make smart living accessible, affordable, and effortless for everyone.
          Founded with the vision of building India’s most intuitive home automation ecosystem, Homeasy integrates a wide range of smart devices – from lighting and climate control to security systems and appliances – all managed through a seamless, user-friendly platform.
          We believe technology should adapt to people, not the other way around. That’s why our solutions are designed to work with products from multiple brands, giving homeowners the flexibility to create a truly personalized smart home experience.
          With a passionate team, strong focus on innovation, and partnerships with architects, builders, and interior designers, Homeasy is bringing the future of living into today’s homes.
        </h2>
      </section>

      {/* ✅ IDEA SECTION */}
      <section
        ref={ideasRef}
        aria-labelledby="ideas-heading"
        className="px-6 md:px-20 py-20 bg-blue-100 overflow-hidden"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 tracking-wider">
          Our Promise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl mb-4">Affordable solutions for every household
            </h3>
            {/* <p className="text-lg">
              
            </p> */}
          </article>
          <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl mb-4">A secure and connected home you can trust</h3>
            {/* <p className="text-lg">
             
            </p>*/}
          </article>
          <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl mb-4">  Simple setup and reliable performance</h3>
            {/*  <p className="text-lg">
              We don't just build listings — we create trusted spaces to start
              your next chapter.
            </p> */}
          </article>
        </div>
      </section>


      {/* ✅ IDEA SECTION */}
      <section
        ref={ideasRef}
        aria-labelledby="ideas-heading"
        className="px-6 md:px-20 py-20 bg-blue-50 overflow-hidden"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 tracking-wider">
          Our Vision
        </h2>
        <div className="gap-10 text-center">
          <article>
            <h3 className="text-xl mb-4"> To become India’s most trusted home automation company, empowering every household with intelligent, secure, and sustainable living solutions.
            </h3>
          </article>
        </div>
      </section>


      {/* ✅ IDEA SECTION */}
      
      <section
  ref={ideasRef}
  aria-labelledby="ideas-heading"
  className="px-6 md:px-20 py-20 bg-blue-100 overflow-hidden"
>
  <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 tracking-wider">
    Our Mission
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
    <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl text-center mb-4">
        To make smart living simple, reliable, and affordable for all.
      </h3>
    </article>
    <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl mb-4">
        To integrate diverse devices and technologies into one seamless ecosystem.
      </h3>
    </article>
    <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl mb-4">
        To collaborate with industry partners to deliver futuristic yet practical home solutions.
      </h3>
    </article>
    <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl mb-4">
        To continuously innovate while ensuring privacy, security, and user-friendliness.
      </h3>
    </article>
  </div>
</section>


      {/* ✅ VALUE SECTION */}
      {/*<section
        ref={valuesRef}
        aria-labelledby="values-heading"
        className="px-6 md:px-20 py-20 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((num, index) => (
            <article
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
            </article>
          ))}
        </div>
      </section> */}

      {/* ✅ TEAM SECTION */}
      <section
        ref={teamRef}
        className="px-6 md:px-20 py-20 bg-blue-50 text-center space-y-6"
        aria-labelledby="team-heading"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Each of us brings value. Together, we bring vision to life.
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Meet the team behind Homeasy — a diverse group of designers,
          developers, and strategists passionate about turning housing into
          harmony.
        </p>
      </section>

      {/* ✅ LEADERSHIP SECTION */}
       <section
        ref={leadershipRef}
        className="px-6 md:px-20 py-20 bg-white text-center"
        aria-labelledby="leadership-heading"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10 px-6">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                {/* Leader Image */}
      <div className="relative  mb-6 overflow-hidden ">
                  <img
                    src={leader.image}
                    alt=""
                    className=" h-56 rounded-full"
                  />
                </div>
                <div className="p-3">
                  {/* Leader Info */}
       <h3 className="flex flex-col font-bold items-center text-m text-center p-4 bg-white shadow-lg rounded-3xl">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 text-xl mb-4">{leader.title}</p>
                  <p className="text-gray-600 text-s">{leader.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ✅ ADVANTAGE SECTION */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the Homeasy Advantage
        </h2>
        <p className="text-lg max-w-4xl mx-auto mb-10 text-gray-700">
          Why choose Homeasy? Because where technology meets comfort, and homes truly become smart.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <article className="bg-white outline p-6 shadow-md rounded-xl 
                        hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 
                        active:scale-95 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Real-Time Compatibility
            </h3>
            <p>
              Our system seamlessly works with devices from multiple brands, ensuring you don’t need to replace existing gadgets to go smart.
            </p>
          </article>

          <article className="bg-white outline p-6 shadow-md rounded-xl 
                        hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 
                        active:scale-95 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Personalized Living
            </h3>
            <p>
              From mood lighting to energy-saving schedules, our platform learns your lifestyle and adapts to make your everyday living more efficient and enjoyable.
            </p>
          </article>

          <article className="bg-white outline p-6 shadow-md rounded-xl 
                        hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 
                        active:scale-95 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Secure & Seamless
            </h3>
            <p>
              Every feature is designed with data privacy and reliability at its core, giving you complete peace of mind.
            </p>
          </article>

          <article className="bg-white outline p-6 shadow-md rounded-xl 
                        hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 
                        active:scale-95 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Expert Support & Guidance
            </h3>
            <p>
              Whether you’re a homeowner, architect, or builder, our expert team helps you design the right solution — from planning to installation and beyond.
            </p>
          </article>

          <article className="bg-white outline p-6 shadow-md rounded-xl 
                        hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 
                        active:scale-95 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Smart Integration, Made Simple
            </h3>
            <p>
              Control lights, appliances, security cameras, and more — all from one easy-to-use platform. No technical know-how required.
            </p>
          </article>

          <article className="bg-white outline p-6 shadow-md rounded-xl 
                        hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 
                        active:scale-95 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Future-Ready Solutions
            </h3>
            <p>
              With continuous innovation, we ensure your home is not just smart today, but future-ready for tomorrow’s technology.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}