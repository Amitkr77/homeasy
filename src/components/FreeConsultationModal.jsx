"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { MoveUpRight } from "lucide-react";

export default function FreeConsultationDialog({
  triggerText = "Free consultation",
  buttonClass = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    smartHomeUsage: "",
    preferredContactMethod: "",
    address: "",
    additionalMessage: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          smartHomeUsage: "",
          preferredContactMethod: "",
          address: "",
          additionalMessage: "",
        });
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Failed to send. Please check your internet or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      {/* Dialog Trigger */}
      <DialogTrigger asChild>
        <Button
          className={`group hidden md:block cursor-pointer ${buttonClass}`}
        >
          <span className="flex items-center gap-2 justify-center">
            {triggerText}
            <MoveUpRight
              size={18}
              className="group-hover:scale-120 transition-all duration-300"
            />
          </span>
        </Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent
        aria-labelledby="contact-form-heading"
        className="max-w-4xl w-full mx-auto p-6 bg-white rounded-xl shadow-xl"
      >
        <DialogHeader>
          <DialogTitle
            id="contact-form-heading"
            className="text-3xl font-bold text-gray-900"
          >
            Book Your Free Consultation
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2 text-sm sm:text-base">
            Fill out the form below and we’ll reach out to help bring your smart
            home ideas to life.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="w-full">
            <label className="block text-sm text-gray-800 mb-2">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 border rounded-lg bg-white/70"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 gap-4">
            {/* Phone Number Field */}
            <div className="w-full">
              <label className="block text-sm text-gray-800 mb-2">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-5 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 transition-all"
                placeholder="Enter your phone number"
                required
                inputMode="tel"
              />
            </div>

            {/* Email Field */}
            <div className="w-full">
              <label className="block text-sm text-gray-800 mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Smart Home Device Usage Field */}
          <div>
            <label className="block text-sm text-gray-800 mb-2">
              Are you already using smart home devices?
            </label>
            <select
              name="smartHomeUsage"
              value={formData.smartHomeUsage}
              onChange={handleChange}
              className="w-full px-5 py-3 border rounded bg-white/70"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="planning">Planning to</option>
            </select>
          </div>

          {/* Preferred Contact Method Field */}
          <div>
            <label className="block text-sm text-gray-800 mb-2">
              Preferred Contact Method
            </label>
            <select
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className="w-full px-5 py-3 border rounded bg-white/70"
              required
            >
              <option value="">Choose a method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm text-gray-800 mb-2">Address</label>
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-5 py-3 border rounded bg-white/70"
              placeholder="City, State, Country"
            />
          </div>

          {/* Additional Message Field */}
          <div>
            <label className="block text-sm text-gray-800 mb-2">
              Additional Message
            </label>
            <textarea
              name="additionalMessage"
              value={formData.additionalMessage}
              onChange={handleChange}
              className="w-full px-5 py-3 border rounded bg-white/70"
              placeholder="Tell us more about your project..."
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-3 rounded font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
