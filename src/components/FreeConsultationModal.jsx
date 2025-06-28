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
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    smartHomeUsage: "",
    preferredContactMethod: "",
    address: "",
    additionalMessage: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Simple form validator
  const validateForm = (data) => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const indianPhoneRegex = /^[6-9]\d{9}$/;

    if (!data.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!emailRegex.test(data.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!indianPhoneRegex.test(data.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit Indian phone number.";
    }

    if (!data.smartHomeUsage) {
      newErrors.smartHomeUsage = "Please select an option.";
    }

    if (!data.preferredContactMethod) {
      newErrors.preferredContactMethod = "Select a contact method.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
        setFormData(initialFormData);
        setErrors({});
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
      <DialogTrigger asChild>
        <Button className={`group hidden md:block cursor-pointer ${buttonClass}`}>
          <span className="flex items-center gap-2 justify-center">
            {triggerText}
            <MoveUpRight
              size={18}
              className="group-hover:scale-120 transition-all duration-300"
            />
          </span>
        </Button>
      </DialogTrigger>

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

        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
              placeholder="Enter your full name"
              required
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number</label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
                placeholder="Enter your phone number"
                required
                inputMode="tel"
                pattern="[6-9]\d{9}"
                maxLength={10}
              />
              {errors.phoneNumber && (
                <p className="text-red-600 text-xs mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
                placeholder="you@example.com"
                required
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Smart Home Usage */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
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
            {errors.smartHomeUsage && (
              <p className="text-red-600 text-xs mt-1">{errors.smartHomeUsage}</p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
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
            {errors.preferredContactMethod && (
              <p className="text-red-600 text-xs mt-1">{errors.preferredContactMethod}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Address</label>
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white/70 text-sm"
              placeholder="City, State, Country"
            />
          </div>

          {/* Additional Message */}
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

          {/* Submit */}
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
