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


{/* VISION SECTION */}
<section
  aria-labelledby="vision-heading"
  className="px-6 md:px-20 py-20 bg-gradient-to-br from-blue-100 via-white to-blue-100 overflow-hidden"
>
  <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 tracking-wider drop-shadow-lg">
    Our Vision
  </h2>
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    <div className="relative flex-1 max-w-2xl bg-white/80 rounded-3xl shadow-xl p-10 border-l-8 border-blue-200 hover:scale-105 transition-transform duration-300">
      <div className="absolute -left-8 top-8 h-8 w-8 bg-blue-400 rounded-full border-4 border-white shadow-lg"></div>
      <h3 className="text-2xl font-bold mb-4 text-blue-700">
        To become India’s most trusted home automation company,
      </h3>
      <p className="text-gray-700 text-lg">
        Empowering every household with intelligent, secure, and sustainable living solutions.
      </p>
    </div>
  </div>
</section>

{/* PROMISE SECTION */}
<section
  aria-labelledby="promise-heading"
  className="px-6 md:px-20 py-20 bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-hidden"
>
  <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 tracking-wider drop-shadow-lg">
    Our Promise
  </h2>
  <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
    {[
      {
        title: "Affordable solutions for every household",
        color: "from-green-200 to-blue-100",
        highlight: "Affordable",
      },
      {
        title: "Secure and connected home you can trust",
        color: "from-blue-200 to-blue-50",
        highlight: "Secure",
      },
      {
        title: "Simple setup and reliable performance",
        color: "from-yellow-100 to-blue-100",
        highlight: "Simple",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className={`flex-1 bg-gradient-to-br ${item.color} rounded-3xl shadow-xl p-8 m-2 transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300 border-t-4 border-blue-200`}
      >
        <h3 className="text-2xl font-bold mb-2">
          <span className="bg-blue-100 px-2 py-1 rounded-xl text-blue-700">{item.highlight}</span>{" "}
          {item.title.replace(item.highlight, "")}
        </h3>
        <div className="h-1 w-16 bg-blue-300 rounded-full my-4 mx-auto"></div>
        <p className="text-gray-600 text-lg">
          {idx === 0 && "Smart living shouldn’t be a luxury. We make it accessible for all."}
          {idx === 1 && "Your privacy and safety are at the heart of every feature."}
          {idx === 2 && "Easy to install, effortless to use, and built to last."}
        </p>
      </div>
    ))}
  </div>
</section>

{/* MISSION SECTION */}
<section
  aria-labelledby="mission-heading"
  className="px-6 md:px-20 py-20 bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-hidden"
>
  <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 tracking-wider drop-shadow-lg">
    Our Mission
  </h2>
  <div className="relative flex flex-col md:flex-row gap-10 justify-center items-stretch">
    {[
      "To make smart living simple, reliable, and affordable for all.",
      "To integrate diverse devices and technologies into one seamless ecosystem.",
      "To collaborate with industry partners to deliver futuristic yet practical home solutions.",
      "To continuously innovate while ensuring privacy, security, and user-friendliness.",
    ].map((text, idx) => (
      <div
        key={idx}
        className={`flex-1 bg-white/90 rounded-3xl shadow-xl p-8 m-2 border-l-8 border-blue-200 relative transition-transform hover:scale-105 hover:shadow-2xl duration-300`}
      >
        <div className="absolute -left-8 top-8 h-8 w-8 bg-blue-400 rounded-full border-4 border-white shadow-lg"></div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{text}</h3>
      </div>
    ))}
    {/* Timeline vertical line for desktop */}
    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-200 to-blue-400 rounded-full" style={{ left: '-32px', height: '100%' }}></div>
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
  <h2 className="text-4xl md:text-5xl font-bold mb-12">
    Our Leadership
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
    {leaders.map((leader, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
      >
        <div className="flex flex-col items-center text-center">
          {/* Leader Image */}
          <div className="w-36 h-36 mb-4 rounded-full overflow-hidden border-2 border-blue-400 transition-transform duration-300 hover:scale-105">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Leader Info */}
          <h3 className="text-lg md:text-xl font-semibold mb-1">{leader.name}</h3>
          <p className="text-blue-600 text-md md:text-lg mb-3">{leader.title}</p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {leader.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      
      {/* ✅ ADVANTAGE SECTION */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 text-center relative overflow-hidden">
  {/* Decorative background shapes */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 opacity-30 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
  <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
    Discover the Homeasy Advantage
  </h2>
  <p className="text-lg max-w-4xl mx-auto mb-10 text-gray-700">
    Why choose Homeasy? Because where technology meets comfort, and homes truly become smart.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left relative z-10">
    {[
      {
        title: "Real-Time Compatibility",
        desc: "Our system seamlessly works with devices from multiple brands, ensuring you don’t need to replace existing gadgets to go smart.",
        color: "from-blue-100 to-blue-50",
      },
      {
        title: "Personalized Living",
        desc: "From mood lighting to energy-saving schedules, our platform learns your lifestyle and adapts to make your everyday living more efficient and enjoyable.",
        color: "from-green-100 to-blue-50",
      },
      {
        title: "Secure & Seamless",
        desc: "Every feature is designed with data privacy and reliability at its core, giving you complete peace of mind.",
        color: "from-yellow-100 to-blue-50",
      },
      {
        title: "Expert Support & Guidance",
        desc: "Whether you’re a homeowner, architect, or builder, our expert team helps you design the right solution — from planning to installation and beyond.",
        color: "from-blue-100 to-green-50",
      },
      {
        title: "Smart Integration, Made Simple",
        desc: "Control lights, appliances, security cameras, and more — all from one easy-to-use platform. No technical know-how required.",
        color: "from-pink-100 to-blue-50",
      },
      {
        title: "Future-Ready Solutions",
        desc: "With continuous innovation, we ensure your home is not just smart today, but future-ready for tomorrow’s technology.",
        color: "from-purple-100 to-blue-50",
      },
    ].map((item, idx) => (
      <article
        key={idx}
        className={`
          group relative bg-gradient-to-br ${item.color}
          p-8 rounded-2xl shadow-xl border-t-4 border-blue-200
          hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300
          overflow-hidden
        `}
      >
        {/* Animated floating icon circle */}
        <span className="absolute -top-6 right-6 w-14 h-14 rounded-full bg-blue-100 opacity-60 blur-lg group-hover:scale-110 transition-transform duration-500"></span>
        <h3 className="text-xl font-bold mb-3 text-blue-700 group-hover:text-blue-500 transition-colors">
          {item.title}
        </h3>
        <div className="h-1 w-12 bg-blue-300 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="text-gray-700 text-base group-hover:text-blue-800 transition-colors duration-300">
          {item.desc}
        </p>
        {/* Animated badge on hover */}
        <span className="absolute bottom-6 right-6 bg-blue-200 text-blue-700 text-xs px-3 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-500">
          {idx % 2 === 0 ? "Smart" : "Easy"}
        </span>
      </article>
    ))}
  </div>
</section>
    </section>
  );
}