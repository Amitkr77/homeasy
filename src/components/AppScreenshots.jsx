import React from "react";

export default function AppScreenshots() {
  const screens = [
    {
      title: "Login/Signup",
      description: "Entry point with Homeasy logo, login, and signup options.",
      img: "./first_screen.jpg",
      color: "bg-[#C81D3F]",
    },
    {
      title: "Dashboard",
      description:
        "Personalized dashboard with user name, details, rooms, and devices.",
      img: "./second_screen.jpg",
      color: "bg-[#C81D3F]",
    },
    {
      title: "Device Control",
      description: "Interface for controlling devices with intuitive controls.",
      img: "./third_screen.jpg",
      color: "bg-[#C81D3F]",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-800 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Homeasy App Flow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore the intuitive flow of the Homeasy app—from login to device control—designed for a seamless smart home experience.
          </p>
        </div>

        {/* Screenshots Scroll Section */}
        <div className="relative overflow-x-auto snap-x snap-mandatory flex space-x-6 lg:space-x-8 pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-full sm:w-80 lg:w-96 group relative"
            >
              <div
                className={`rounded-2xl p-5 transition-all duration-300 animate-slide-in ${screen.color}`}
                style={{ animationDelay: `${index * 200}ms`, height: '820px' }}
              >
                {/* Image Container */}
                <div className="rounded-xl overflow-hidden mb-4  h-auto">
                  <img
                    src={screen.img}
                    alt={`${screen.title} screen`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {screen.title}
                </h3>
                <p className="text-sm md:text-base text-white leading-relaxed opacity-90">
                  {screen.description}
                </p>
              </div>

              {/* Flow Arrow */}
              {index < screens.length - 1 && (
                <div className="absolute top-1/2 right-0 transform translate-x-8 -translate-y-1/2 hidden sm:block">
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
