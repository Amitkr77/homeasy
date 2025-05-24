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
      className="relative h-screen bg-cover bg-center overflow-hidden "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div
        ref={contentRef}
        className="absolute right-0 top-0 h-full w-full md:w-2/5 bg-white bg-opacity-90 px-10 py-16 flex flex-col justify-center space-y-10"
      >
        <h1 className="text-5xl md:text-6xl text-gray-900 leading-tight">
          23, B-Hub, <br />
          5th Floor,
          <br />
          Mauryalok Complex
        </h1>

        <div>
          <p className="uppercase text-xl text-gray-400 mb-1">Office</p>
          <h2 className="text-2xl font-medium">
            Homeasy Automation Pvt Ltd <br />
            Morya Lok Complex, Patna, Bihar 800001
          </h2>
        </div>

        <div>
          <p className="uppercase text-xl text-gray-400 mb-1">Contact</p>
          <h2 className="text-2xl font-medium">9117379099</h2>
        </div>

        <div>
          <p className="uppercase text-xl text-gray-400 mb-1">Email</p>
          <h2 className="text-2xl font-medium">info@homeasy.io</h2>
        </div>
      </div>
    </section>
  );
};

export default Location;
