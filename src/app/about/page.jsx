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
        "https://media.licdn.com/dms/image/v2/D5603AQHKqnH4xIC4hg/profile-displayphoto-shrink_800_800/B56Zcqtg_OGoAk-/0/1748768264738?e=1754524800&v=beta&t=KzHirfs1yyzw8l-ihEAkK0MaHfTWohR97PbRQD7zOE0",
    },
    {
      name: "Rohit Kumar",
      title: "Developer",
      desc: "Rohit blends functionality with design, developing clean and efficient features that deliver seamless user experiences.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQH7MkUta_nzRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692389684635?e=1754524800&v=beta&t=cfzrsEtRc_WCuecvdDH12MfI6ykfWrv1HCs8M2Ln1Bk",
    },
    {
      name: "Abhijeet Kumar Mishra",
      title: "Android Developer",
      desc: "Abhijeet builds and optimizes Homeasy’s Android experience—ensuring performance, stability, and user-first functionality on every device.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEqh3FMKu1DLw/profile-displayphoto-shrink_400_400/B4DZPKV19qHcAg-/0/1734266544758?e=1754524800&v=beta&t=dEp9kgDNaaHkH5JaaAXpSvAyT3Zl1Y6Gl1u4UmsWqMo",
    },
    {
      name: "Rajnish Kumar",
      title: "Backend Developer",
      desc: "Rajnish architects scalable, secure, and reliable backend systems that power Homeasy’s robust infrastructure and real-time services.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFswjAYZ8wGpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693211935407?e=1755129600&v=beta&t=8KIrrDdtaECeKk5zBkdBTkyiD3mb50bmKGmMJ7yvN5E",
    },
    {
      name: "Aditya Kumar",
      title: "Social Media Manager",
      desc: "Aditya drives Homeasy’s online presence—creating engaging content and managing brand voice across all major social platforms.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D35AQG3Vt4pQjeK2A/profile-framedphoto-shrink_400_400/B4DZXM1tgNHwAg-/0/1742898387292?e=1750075200&v=beta&t=mrUeQVIMZEMxwuoTkFh17ibJ_ACyT5I1XBeoYpuegho",
    },
    {
      name: "Samarkant Pradhan",
      title: "UI/UX Designer",
      desc: "Samarkant crafts intuitive interfaces and seamless user flows—ensuring every interaction on Homeasy feels simple, smart, and human-centered.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGFJ5r14Frj-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720023996072?e=1755129600&v=beta&t=CP6X--YQQaWjkT1fkRZEwtaRbkLIWGdB6PNo_cwVshk",
    },
  ];

  return (
    <section className="text-gray-900">
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
        <h2 className="text-3xl md:text-6xl leading-relaxed max-w-5xl">
          At Homeasy, our mission is to simplify your real estate experience.
          With future-ready design, reliable tech, and thoughtful strategies, we
          transform housing ideas into spaces people love to call home.
        </h2>
      </section>

      {/* ✅ IDEA SECTION */}
      <section
        ref={ideasRef}
        aria-labelledby="ideas-heading"
        className="px-6 md:px-20 py-20 bg-gray-50 overflow-hidden"
      >
        <h2 className="text-5xl md:text-9xl font-bold text-center mb-16 tracking-wider">
          Ideas Made Home
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <article>
            <h3 className="text-xl font-semibold mb-4">
              Your Dream, Our Blueprint
            </h3>
            <p className="text-lg">
              You bring a vision for a perfect home — we help make it real, step
              by step.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-semibold mb-4">Tech Meets Comfort</h3>
            <p className="text-lg">
              With clean code and smart design, we make property browsing and
              buying intuitive.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-semibold mb-4">Built to Belong</h3>
            <p className="text-lg">
              We don't just build listings — we create trusted spaces to start
              your next chapter.
            </p>
          </article>
        </div>
      </section>

      {/* ✅ VALUE SECTION */}
      <section
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
      </section>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6">
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
      </section>

      {/* ✅ ADVANTAGE SECTION */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the Homeasy Advantage
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-700">
          Why choose Homeasy? Because we combine technology, trust, and design
          thinking to transform your property search into a delightful journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <article className="bg-white outline p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Real-Time Listings
            </h3>
            <p>
              Get instant access to up-to-date listings across cities — no
              delays, no surprises.
            </p>
          </article>
          <article className="bg-white outline  p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Personalized Matching
            </h3>
            <p>
              Our smart system learns your preferences and curates homes
              tailored for you.
            </p>
          </article>
          <article className="bg-white outline  p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Secure & Seamless
            </h3>
            <p>
              From virtual tours to final documents, experience safe and smooth
              transactions.
            </p>
          </article>
          <article className="bg-white outline  p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Expert Support
            </h3>
            <p>
              Need help deciding? Our human team is just a click away — always
              ready to guide.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
