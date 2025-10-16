"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react"; // For loading spinner

// Form schema for validation
const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be 10 digits")
    .transform((val) => val.replace(/\D/g, "")), // Strip non-digits
  linkedin: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  resume: z
    .any()
    .refine((file) => file instanceof File, "Resume is required")
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Resume must be a PDF, DOC, or DOCX file"
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, "Resume must be less than 5MB"),
  role: z.enum(
    [
      "frontend",
      "backend",
      "fullstack",
      "ad",
      "designer",
      "qa",
      "data",
      "pc",
      "writer",
    ],
    { required_error: "Job role is required" }
  ),
  opportunity: z.enum(["fulltime", "internship"], {
    required_error: "Opportunity type is required",
  }),
  source: z.enum(
    [
      "linkedin",
      "referral",
      "website",
      "jobPortal",
      "socialMedia",
      "event",
      "other",
    ],
    { required_error: "Source is required" }
  ),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue, // <--- Added here
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      resume: null,
      role: "",
      opportunity: "",
      source: "",
    },
  });

  const [message, setMessage] = React.useState("");

  const onSubmit = async (data) => {
    setMessage("");
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "resume" && value) {
        formData.append(key, value);
      } else if (value) {
        formData.append(key, value);
      }
    });

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("✅ Application submitted successfully!");
        reset();
      } else {
        const error = await response.text();
        setMessage(`❌ Submission failed: ${error}`);
      }
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  // Custom onChange handler for file input to set file correctly in RHF
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    setValue("resume", file, { shouldValidate: true });
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-200 min-h-screen">
      <div className="mt-20 flex justify-center px-4">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 md:p-10">
          <h1 className="text-3xl font-bold text-center mb-2">Apply Now</h1>
          <p className="text-center text-gray-600 mb-6">
            Join our team and start your journey with us 🚀
          </p>

          {message && (
            <p
              className={`text-center font-medium mb-4 ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700"
              >
                Full Name *
              </label>
              <Input
                id="name"
                {...register("name")}
                type="text"
                placeholder="John Doe"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email *
              </label>
              <Input
                id="email"
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>Phone Number *</label>
              <Input
                id="phone"
                {...register("phone")}
                type="tel"
                placeholder="1234567890"
                maxLength={10}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="linkedin"
                className="text-sm font-semibold text-gray-700"
              >
                LinkedIn Profile
              </label>
              <Input
                id="linkedin"
                {...register("linkedin")}
                type="text"
                placeholder="https://linkedin.com/in/username"
                aria-invalid={errors.linkedin ? "true" : "false"}
              />
              {errors.linkedin && (
                <p className="text-red-600 text-sm">{errors.linkedin.message}</p>
              )}
            </div>

            {/* GitHub */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="github"
                className="text-sm font-semibold text-gray-700"
              >
                GitHub Link
              </label>
              <Input
                id="github"
                {...register("github")}
                type="text"
                placeholder="https://github.com/username"
                aria-invalid={errors.github ? "true" : "false"}
              />
              {errors.github && (
                <p className="text-red-600 text-sm">{errors.github.message}</p>
              )}
            </div>

            {/* Resume Upload */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="resume"
                className="text-sm font-semibold text-gray-700"
              >
                Resume *
              </label>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                aria-invalid={errors.resume ? "true" : "false"}
              />
              {errors.resume && (
                <p className="text-red-600 text-sm">{errors.resume.message}</p>
              )}
            </div>

            {/* Role */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="role"
                className="text-sm font-semibold text-gray-700"
              >
                Job Role *
              </label>
              <select
                id="role"
                {...register("role")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-invalid={errors.role ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a role
                </option>
                <option value="frontend">Front-end Developer</option>
                <option value="backend">Back-end Developer</option>
                <option value="fullstack">Full-stack Developer</option>
                <option value="ad">Android Developer</option>
                <option value="designer">UI/UX Designer</option>
                <option value="qa">QA Tester</option>
                <option value="data">Data Analyst</option>
                <option value="pc">Project Coordinator</option>
                <option value="writer">Content Writer</option>
              </select>
              {errors.role && (
                <p className="text-red-600 text-sm">{errors.role.message}</p>
              )}
            </div>

            {/* Opportunity Type */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="opportunity"
                className="text-sm font-semibold text-gray-700"
              >
                Opportunity Type *
              </label>
              <select
                id="opportunity"
                {...register("opportunity")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-invalid={errors.opportunity ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  Select opportunity type
                </option>
                <option value="fulltime">Full-time</option>
                <option value="internship">Internship</option>
              </select>
              {errors.opportunity && (
                <p className="text-red-600 text-sm">{errors.opportunity.message}</p>
              )}
            </div>

            {/* Source */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="source"
                className="text-sm font-semibold text-gray-700"
              >
                How did you hear about us? *
              </label>
              <select
                id="source"
                {...register("source")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-invalid={errors.source ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral</option>
                <option value="website">Company Website</option>
                <option value="jobPortal">Job Portal</option>
                <option value="socialMedia">Social Media</option>
                <option value="event">Career Fair / Event</option>
                <option value="other">Other</option>
              </select>
              {errors.source && (
                <p className="text-red-600 text-sm">{errors.source.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-400"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            We’ll review your application and get back to you within 3–5 days.
          </p>
        </div>
      </div>
    </section>
  );
}
