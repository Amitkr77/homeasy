"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HouseWifi, Menu, MoveUpRight, X } from "lucide-react";
import FreeConsultationModal from "./FreeConsultationModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 ease-in-out backdrop-blur-2xl shadow-sm rounded-4xl  ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between p-4 md:px-10 text-black mx-2">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2">
          <HouseWifi size={24} stroke="blue" />
          <span className="text-lg font-semibold">Homeasy</span>
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

        {/* Desktop CTA */}
        {/* <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition group text-xl cursor-pointer">
            <span className="flex items-center justify-center gap-2">
              Free Consultation
              <MoveUpRight
                className="group-hover:scale-125 transition-all duration-150"
                size={20}
              />
            </span>
          </button>
        </div> */}
        <FreeConsultationModal />

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-transform duration-500 ease-in-out md:hidden backdrop-blur-md bg-blue-100/40 z-40 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center px-6 space-y-6 text-2xl font-semibold text-gray-800 relative">
          {navItems.map(({ label, path }, idx) => (
            <Link key={idx} href={path} className="...">
              {label}
            </Link>
          ))}

          {navItems.map(({ label, path }, idx) => (
            <Link
              key={idx}
              href={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition hover:underline"
            >
              {label}
            </Link>
          ))}
          {/* <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition group text-xl">
            <span className="flex items-center justify-center gap-2">
              Free Consultation
              <MoveUpRight
                className="group-hover:scale-125 transition-all duration-150"
                size={20}
              />
            </span>
          </button> */}
          <FreeConsultationModal />
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
