"use client";

import { MoveUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function FreeConsultationModal({
  triggerText = "Free consultation",
  buttonClass = "border border-blue-400 text-gray-800 hover:bg-gray-100",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus first input
  useEffect(() => {
    if (isOpen) {
      const firstInput = modalRef.current?.querySelector("input, textarea");
      if (firstInput) firstInput.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`px-6 py-3 border border-blue-400 cursor-pointer rounded-full shadow text-gray-800 hover:bg-gray-100 transition flex items-center gap-2 group ${buttonClass}`}
      >
        {triggerText}
        <MoveUpRight
          size={18}
          className="group-hover:scale-120 transition-all duration-300"
        />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xl h-screen container "
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative bg-white max-w-2xl w-full mx-4 md:mx-0 rounded-3xl p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Book Your Free Consultation
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Fill out the form below and we’ll reach out to help bring your
                smart home ideas to life.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-800 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded bg-white/70"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded bg-white/70"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Are you already using smart home devices?
                </label>
                <select
                  className="w-full px-4 py-2 border rounded bg-white/70"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="planning">Planning to</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Preferred Contact Method
                </label>
                <select
                  className="w-full px-4 py-2 border rounded bg-white/70"
                  required
                >
                  <option value="">Choose a method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded bg-white/70"
                  placeholder="City, State, Country"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Additional Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded bg-white/70"
                  placeholder="Tell us more about your project..."
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded font-semibold hover:bg-gray-800 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
