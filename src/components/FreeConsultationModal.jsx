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
      <DialogContent className="max-w-4xl w-full mx-auto md:p-6 p-10 bg-white rounded-xl shadow-xl max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-3xl font-bold text-gray-900">
            Book Your Free Consultation
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2 text-sm sm:text-base">
            Fill out the form below and we’ll reach out to help bring your smart
            home ideas to life.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Phone Number Field */}
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
                placeholder="Enter your phone number"
                required
                inputMode="tel"
                title="Please enter a valid 10-digit Indian phone number"
                pattern="[6-9]\d{9}"
                maxLength={10}
                minLength={9}
              />
            </div>

            {/* Email Field */}
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Smart Home Device Usage Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Are you already using smart home devices?*
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Yes", "No"].map((answer) => (
                <label
                  key={answer}
                  className="inline-flex items-center text-sm text-gray-600"
                >
                  <input
                    type="radio"
                    name="smartHomeUsage"
                    value={answer}
                    onChange={handleChange}
                    checked={formData.smartHomeUsage === answer}
                    required
                    className="mr-2 text-green-500 focus:ring-green-400"
                  />
                  {answer}
                </label>
              ))}
            </div>
          </div>

          {/* Preferred Contact Method Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Contact Method*
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["phoneNumber", "Email", "WhatsApp"].map((method) => (
                <label
                  key={method}
                  className="inline-flex items-center text-sm text-gray-600"
                >
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value={method}
                    onChange={handleChange}
                    checked={formData.preferredContactMethod === method}
                    required
                    className="mr-2 text-green-500 focus:ring-green-400"
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Address
            </label>
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
              placeholder="City, State, Country"
            />
          </div>

          {/* Additional Message Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Additional Message
            </label>
            <textarea
              name="additionalMessage"
              value={formData.additionalMessage}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
              placeholder="Tell us more about your project..."
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
