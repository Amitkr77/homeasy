import React from "react";

export default function AppScreenshots() {
  const screens = [
    {
      title: "Login/Signup",
      description: "Entry point with Homeasy logo, login, and signup options.",
      img: "./phone/Onboarding-screen.png",
      color: "bg-[#C81D3F]",
      icon : "👤"
    },
    {
      title: "Dashboard",
      description:"Personalized dashboard with user name, details, rooms, and devices.",
      img: "./phone/Dashboard.png",
      color: "bg-[#C81D3F]",
      icon : "📈"
    },
    {
      title: "Device Control",
      description: "Interface for controlling devices with intuitive controls.",
      img: "./phone/Light-changer.png",
      color: "bg-[#C81D3F]",
      icon:"🕹️"
    },
  ];

  return (
    <section className=" bg-white text-gray-800 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Homeasy App Flow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore the intuitive flow of the Homeasy app—from login to device
            control—designed for a seamless smart home experience.
          </p>
        </div>

        {/* Screenshots Scroll Section */}
        <div className="relative  snap-x snap-mandatory flex space-x-2 lg:space-x-4 pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-full sm:w-80 lg:w-96 group relative "
            >
              <div
                className={`rounded-2xl p-5 transition-all duration-300 animate-slide-in bg-transparent`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image Container */}
                <div className="rounded-4xl overflow-hidden mb-4 h-auto w-68 border-4 border-black">
                  <img
                    src={screen.img}
                    alt={`${screen.title} screen`}
                    className="w-full h-full object-cover"
                  />
                </div>
               <div className="bg-blue-400/10 dark:bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-69 mr-auto">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Replace with actual icon */}
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                      {/* <LoginIcon className="w-6 h-6" /> */}
                      {screen.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                     {screen.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {screen.description}
                  </p>
                </div>
              </div>

              {/* Flow Arrow */}
              {index < screens.length - 1 && (
                <div className="absolute top-1/2 right-0 transform translate-x-6 -translate-y-1/2 hidden sm:block">
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animations & Custom Scrollbar */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-gray-300 {
          scrollbar-color: #d1d5db transparent;
        }
        .scrollbar-track-gray-100 {
          scrollbar-track-color: #f3f4f6;
        }
      `}</style>
    </section>
  );
}
