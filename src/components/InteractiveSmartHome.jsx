import React from "react";


export default function InteractiveSection() {

  const features = [
    {
      title: "Effortless Device Integration",
      description:
        "Seamlessly connect all your smart devices—lights, thermostats, cameras, and more—into one intuitive app. Enjoy real-time control and status updates from anywhere.",
      benefit: "Simplify your smart home with plug-and-play ease.",
      icon: "🔌",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      title: "Custom Scene Automation",
      description:
        "Create personalized scenes like 'Morning Wake-Up' or 'Movie Night.' Schedule devices to adjust lighting, temperature, and ambiance with a single tap.",
      benefit: "Transform your home’s vibe for any moment.",
      icon: "🌅",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
      title: "Energy-Saving Analytics",
      description:
        "Monitor energy use with detailed insights and tips. Optimize to cut bills and reduce your environmental footprint while staying comfortable.",
      benefit: "Save money and the planet with smart analytics.",
      icon: "🍃",
      color: "bg-gradient-to-br from-teal-50 to-teal-100",
    },
  ];



  return (
    <section className="py-20  text-gray-800 min-h-screen mt-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 font-sans">
            Homeasy: Smart Living, Perfected
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Transform your home with Homeasy. Control devices, automate
            routines, and optimize energy use through a beautifully designed,
            intuitive app.
          </p>
        </div>

        {/* Hero Video */}
        <div  className=" mb-20 relative  shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div  className="w-full aspect-w-16 aspect-h-9 ">
            <video
              src="/Video/Homeasy_Video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cove "
              aria-label="Homeasy app showcase video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </div>
          <span className="absolute bottom-5 right-4 text-white text-sm font-medium bg-blue-500/70 px-3 py-1 rounded-full animate-float">
            Discover Smart Living
          </span>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative border border-gray-100 rounded-2xl p-6 bg-white/80 backdrop-blur-sm ${feature.color} hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 font-sans">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                {feature.description}
              </p>
              <p className="text-gray-700 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {feature.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Font and Animation Styles */}
      <style jsx>{`
        .font-sans {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        }
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
