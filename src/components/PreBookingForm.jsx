"use client";

import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { User, Mail, Phone, MapPin, Globe, Smartphone, Lock, CheckCircle } from "lucide-react";
import { gsap } from "gsap";

export default function PreBookingForm({ closeModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // GSAP Animation for form entrance
  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post("/api/prebook", data);
      toast.success("Pre-booking submitted successfully!", {
        description: "We'll get back to you soon.",
      });
      reset();
      closeModal(); // Close the modal after successful submission
    } catch (err) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Watch checkbox fields to validate at least one is selected
  const devicesOwned = watch("devicesOwned");

  return (
    <div ref={formRef} className="space-y-6 mt-20">
      <Toaster position="top-right" richColors />
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
        Pre-Book Your Smart Home
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Join the future of home automation with homeasy.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <User size={18} /> Full Name
          </label>
          <input
            type="text"
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
              maxLength: { value: 50, message: "Name cannot exceed 50 characters" },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Mail size={18} /> Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
              maxLength: { value: 100, message: "Email cannot exceed 100 characters" },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Phone size={18} /> Phone
          </label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: "Invalid phone number format",
              },
              minLength: { value: 10, message: "Phone number must be at least 10 digits" },
              maxLength: { value: 15, message: "Phone number cannot exceed 15 digits" },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Country */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Globe size={18} /> Country
          </label>
          <input
            type="text"
            {...register("country", {
              maxLength: { value: 100, message: "Country cannot exceed 100 characters" },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
        </div>

        {/* City */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <MapPin size={18} /> City
          </label>
          <input
            type="text"
            {...register("city", {
              maxLength: { value: 100, message: "City cannot exceed 100 characters" },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
        </div>

        {/* Smart Devices Owned */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Smartphone size={18} /> Which smart devices do you use?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Smart lights", "Smart plugs", "Thermostats", "Smart speakers", "Security cameras", "Smart locks", "Other"].map((device) => (
              <label key={device} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  {...register("devicesOwned", {
                    validate: (value) => (value && value.length > 0) || "Select at least one device",
                  })}
                  value={device}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                {device}
              </label>
            ))}
          </div>
          {errors.devicesOwned && <p className="text-red-500 text-sm mt-1">{errors.devicesOwned.message}</p>}
        </div>

        {/* Beta Testing Interest */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Lock size={18} /> Interested in Beta Testing?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                {...register("betaTesting", { required: "Please select an option" })}
                value="Yes"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                {...register("betaTesting", { required: "Please select an option" })}
                value="No"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              No
            </label>
          </div>
          {errors.betaTesting && <p className="text-red-500 text-sm mt-1">{errors.betaTesting.message}</p>}
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <CheckCircle size={18} />
            <input
              type="checkbox"
              {...register("consent", { required: "You must accept the terms" })}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            I agree to the terms and conditions.
          </label>
          {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-1/2 py-3 px-6 bg-indigo-600 text-white text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 transition"
          >
            {isSubmitting ? "Submitting..." : "Pre-Book Now"}
          </button>
        </div>
      </form>
    </div>
  );
}
