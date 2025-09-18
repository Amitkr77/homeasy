"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    resume: null,
    role: "",
    opportunity: "",
    source: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); 
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-200">
      <div className='mt-20 flex justify-center px-4'>
        <div className='w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 md:p-10'>
          {/* Header */}
          <h1 className='text-3xl font-bold text-center mb-2'>Apply Now</h1>
          <p className='text-center text-gray-600 mb-6'>
            Join our team and start your journey with us 🚀
          </p>

          {/* Form */}
          <form className='grid grid-cols-1 md:grid-cols-2 gap-6' onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>Full Name *</label>
              <Input
                type='text'
                placeholder='John Doe'
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>Email *</label>
              <Input
                type='email'
                placeholder='your@email.com'
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            
            {/* Phone Number */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>Phone Number *</label>
              <Input
                type='tel'
                placeholder='1234567890'
                required
                pattern='[0-9]{10}'
                maxLength={10}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>

            {/* LinkedIn */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>LinkedIn Profile</label>
              <Input
                type='text'
                placeholder='https://linkedin.com/in/username'
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              />
            </div>

            {/* Github-Link */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>Github-Link</label>
              <Input
                type='text'
                placeholder='https://yourgithublink.com'
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              />
            </div>

            {/* Resume */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>Resume *</label>
              <Input
                type='file'
                accept='.pdf,.doc,.docx'
                required
                onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>

            {/* Job Role */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>Job Role *</label>
              <select
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
              >
                <option value="" disabled>Select a role</option>
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
            </div>

            {/* Opportunity Type */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold text-gray-700'>Opportunity Type *</label>
              <select
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={formData.opportunity}
                onChange={(e) => setFormData({ ...formData, opportunity: e.target.value })}
                required
              >
                <option value="" disabled>Select opportunity type</option>
                <option value="fulltime">Full-time</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            {/* How did you hear about us */}
            <div className='flex flex-col gap-2 md:col-span-2'>
              <label className='text-sm font-semibold text-gray-700'>How did you hear about us? *</label>
              <select
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                required
              >
                <option value="" disabled>Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral</option>
                <option value="website">Company Website</option>
                <option value="jobPortal">Job Portal (e.g., Indeed, Naukri)</option>
                <option value="socialMedia">Social Media (Instagram, Facebook, etc.)</option>
                <option value="event">Career Fair / Event</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className='md:col-span-2 flex justify-center'>
              <button
                type='submit'
                className='bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition'
              >
                Submit Application
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className='text-center text-gray-500 text-sm mt-6'>
            We’ll review your application and get back to you within 3–5 days.
          </p>
        </div>
      </div>
    </section>
  )
}
