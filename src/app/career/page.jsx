import React from "react";
import Link from "next/link";
import { DollarSign, HeartPulse, BookOpen, Clock } from "lucide-react"; // Example icons for benefits
import { Code, Server, Briefcase } from "lucide-react"; // Example icons for career opportunities

export default function Page() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section (unchanged as requested) */}
      <header className="container h-screen flex flex-col justify-end items-center relative px-6 md:px-20 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight tracking-tight text-gray-800 z-50 mb-6 md:mb-8">
          Working on unique{" "}
          <span className="font-bitcount text-gradient">projects*</span> has
          never been more{" "}
          <span className="inline-flex mt-2">
            <span className="text-blue-600 font-bold">fun</span>{" "}
            <span className="text-xs md:text-lg text-red-500 font-medium mt-8 tracking-tighter">
              *while getting paid well
            </span>
          </span>
        </h1>
      </header>

      {/* Company Mission Section (unchanged) */}
      <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-100 clip-path-polygon-diagonal" />
        <div className="relative max-w-6xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            At InnovateTech, we are committed to driving technological
            advancement through cutting-edge solutions. Our mission is to
            empower our team to deliver impactful projects that shape the future
            of industries, fostering innovation while maintaining ethical and
            sustainable practices.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Career Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
            {/* Senior Front-End Developer Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 space-y-5 text-left border border-gray-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                <Code className="text-black  mr-2" />
                <h3 className="text-2xl font-semibold text-gray-900 ">
                  Senior Front-End Developer
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Lead UI/UX development with <strong>React</strong> and{" "}
                <strong>Next.js</strong>. Requires 5+ years of experience.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Salary Range:</strong> $90,000 - $120,000 annually
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Key Responsibilities:</strong> Design responsive UIs,
                optimize performance, and mentor junior developers.
              </p>
              </div>
              <Link
                href="/career/senior-front-end-developer"
                className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-4"
              >
                Apply Now
              </Link>
            </div>

            {/* DevOps Engineer Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 space-y-5 text-left border border-gray-300 flex flex-col justify-between">
             <div>
               <div className="flex items-center mb-4">
                <Server className="text-black  mr-2" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  DevOps Engineer
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Manage CI/CD pipelines and cloud infrastructure with tools like{" "}
                <strong>AWS</strong>, <strong>Azure</strong>.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Salary Range:</strong> $85,000 - $110,000 annually
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Key Responsibilities:</strong> Automate deployments,
                ensure system reliability, and optimize cloud costs.
              </p>
             </div>
              <Link
                href="/career/devops-engineer"
                className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-4"
              >
                Apply Now
              </Link>
            </div>

            {/* Product Manager Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 space-y-5 text-left border border-gray-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <Briefcase className="text-black mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Product Manager
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Lead product vision and strategy, collaborate with
                  cross-functional teams to bring innovative products to market.
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Salary Range:</strong> $80,000 - $100,000 annually
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Key Responsibilities:</strong> Define product vision,
                  lead go-to-market strategies, and analyze market trends.
                </p>
              </div>
              <Link
                href="/career/product-manager"
                className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-4"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gray-100 clip-path-polygon-diagonal-right" />
        <div className="relative max-w-6xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Employee Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="flex items-center mb-4">
                <DollarSign className="text-blue-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Competitive Compensation
                </h3>
              </div>
              <p className="text-gray-700">
                Industry-leading salaries with annual performance bonuses and
                stock options eligibility.
              </p>
              <Link
                href="/benefits/compensation"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Explore Details
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="flex items-center mb-4">
                <HeartPulse className="text-blue-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Health & Wellness
                </h3>
              </div>
              <p className="text-gray-700">
                Comprehensive medical, dental, vision, and mental health
                support, including gym memberships.
              </p>
              <Link
                href="/benefits/wellness"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Explore Details
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Professional Growth
                </h3>
              </div>
              <p className="text-gray-700">
                Access to global conferences, certifications, and personalized
                career coaching.
              </p>
              <Link
                href="/benefits/growth"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Explore Details
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="flex items-center mb-4">
                <Clock className="text-blue-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Flexible Work
                </h3>
              </div>
              <p className="text-gray-700">
                Hybrid work options, unlimited PTO, and sabbatical programs
                after 5 years.
              </p>
              <Link
                href="/benefits/flexibility"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Explore Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section (unchanged) */}
      <section className="py-24 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our streamlined application process ensures a seamless experience.
            Submit your resume, complete a technical assessment, and attend a
            virtual interview with our leadership team.
          </p>
          <Link
            href="/apply"
            className="inline-block px-8 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
