"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HouseWifi, Menu, MoveUpRight, X } from "lucide-react";
import FreeConsultationModal from "./FreeConsultationModal";
import Image from "next/image";
import { Button } from "./ui/button";
import PreBookingForm from "./PreBookingForm";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // hide when scrolling down
      } else {
        setShowHeader(true); // show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Why Homeasy.", path: "/whyChoose" },
    { label: "About Us.", path: "/about" },
    // { label: "Career", path: "/career" },
    { label: "Contact Us.", path: "/contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 ease-in-out backdrop-blur-2xl shadow-sm rounded-b-4xl  ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between  md:px-10 text-black mx-2">
        {/* Logo */}
        <Link href="/" className="">
          <Image
            src="/Homeasy-logo-black.png"
            width={100}
            height={100}
            alt="homeasy logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-16 text-gray-800 font-medium">
          {navItems.map(({ label, path }, idx) => (
            <Link
              key={idx}
              href={path}
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          onClick={openModal}
          className="py-3 px-6 bg-gray-900 text-white text-base font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        >
          Pre-Book Now
        </button>

        {isModalOpen && (
          <div className=" h-screen w-full fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full  p-6 sm:p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              <PreBookingForm closeModal={closeModal} />
            </div>
          </div>
        )}

        {/* Desktop CTA */}

        {/* <FreeConsultationModal buttonClass="md:block hidden" /> */}

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-transform duration-500 ease-in-out md:hidden backdrop-blur-3xl bg-white  z-50 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center px-6 space-y-6 text-2xl font-semibold text-gray-800 relative">
          {navItems.map(({ label, path }, idx) => (
            <Link
              key={idx}
              href={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}

          <FreeConsultationModal buttonClass="md:hidden block" />
          <div className="absolute top-10 right-4">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
