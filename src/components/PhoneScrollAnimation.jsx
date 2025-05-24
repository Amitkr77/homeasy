
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function PhoneScrollAnimation() {
//   const phoneRef = useRef(null);
//   const section1Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: section1Ref.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//           pin: true,
//         },
//       });

//       // First animation: zoom in, rotate
//       tl.fromTo(
//         phoneRef.current,
//         {
//           y: 100,
//           rotateX: 25,
//           scale: 2.5,
//           opacity: 0.6,
//         },
//         {
//           y: -150,
//           rotateX: 0,
//           scale: 1,
//           opacity: 1,
//           ease: "none",
//         }
//       );

//       // Second animation: slide phone to the right
//       tl.to(phoneRef.current, {
//         x: -500,
//         y: 50,
//         ease: "power2.inOut",
//         duration: 0.5,
//       });
//     }, section1Ref);

//     return () => ctx.revert();
//   }, []);

//   const featureTexts = [
//     "🔍 Search Verified Properties Instantly",
//     "📅 Schedule Home Visits Easily",
//     "🔐 Secure Online Booking System",
//     "📊 Real-Time Price Trends & Insights",
//   ];

//   return (
//     <>
//       <section className="h-[200vh] bg-gradient-to-b from-white to-blue-50 pt-70 overflow-hidden">
//         <div
//           ref={section1Ref}
//           className="perspective-[1200px] w-full flex justify-center items-center h-[500px] relative "
//         >
//           <div
//             ref={phoneRef}
//             className="bg-white rounded-3xl shadow-2xl outline-8 outline-black w-[300px] h-[600px] flex items-center justify-center text-gray-800 text-2xl font-semibold relative"
//           >
//             <video
//               className="w-full h-full object-cover rounded-3xl"
//               src="/Video/heroVideo.mp4"
//               muted
//               playsInline
//               autoPlay
//               loop
//             ></video>
//             <div className="absolute w-24 h-5 rounded-full bg-black top-2"></div>
//           </div>
//         </div>
//       </section>
      
//     </>
//   );
// }

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PhoneScrollAnimation() {
  const phoneRef = useRef(null);
  const section1Ref = useRef(null);
  const featuresRef = useRef([]);
  const featuresWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Phone Scroll Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        phoneRef.current,
        {
          y: 100,
          rotateX: 25,
          scale: 2.5,
          opacity: 0.6,
        },
        {
          y: -100,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "none",
        }
      );

      tl.to(phoneRef.current, {
        x: -500,
        y: -400,
        ease: "power2.inOut",
        duration: 1,
      });

      // 2. Features Text Reveal Animation
      gsap.fromTo(
        featuresRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresWrapperRef.current,
            start: "top 50%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, section1Ref);

    return () => ctx.revert();
  }, []);

 const featureTexts = [
  "🔍 Instantly Search Verified Properties Nationwide",
  "📅 Effortlessly Schedule Home Visits at Your Convenience",
  "🔐 Experience a Safe & Secure Online Booking Process",
  "📊 Get Real-Time Price Trends and Market Insights",
  "🛠️ Smart Filters to Match Your Exact Needs",
  "💬 Chat Instantly with Property Experts",
  "🚀 Fast-Loading Listings with Rich Media Previews",
];


  return (
    <>
      {/* Phone Section */}
      <section className="h-[200vh] bg-gradient-to-b from-white to-blue-50 pt-70 overflow-hidden">
        <div
          ref={section1Ref}
          className="perspective-[1200px] w-full flex justify-center items-center h-[100vh] relative"
        >
          <div
            ref={phoneRef}
            className="bg-white rounded-3xl shadow-2xl outline-8 outline-black w-[300px] h-[600px] flex items-center justify-center text-gray-800 text-2xl font-semibold relative"
          >
            <video
              className="w-full h-full object-cover rounded-3xl"
              src="/Video/aap_video.mp4"
              muted
              playsInline
              autoPlay
              loop
            ></video>
            <div className="absolute w-24 h-5 rounded-full bg-black top-2"></div>
          </div>
        </div>
      </section>

      {/* Features Reveal Section */}
        <section
          ref={featuresWrapperRef}
          className="min-h-[100vh] bg-white flex flex-col justify-center items-end px-6 md:px-40  "
        >
          {featureTexts.map((text, index) => (
            <p
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="text-xl md:text-2xl font-medium text-gray-800 mb-6 opacity-0"
            >
              {text}
            </p>
          ))}
        </section>
    </>
  );
}
