"use client"
import HeroSection from '@/components/HeroSection'
import PhoneScrollAnimation from '@/components/PhoneScrollAnimation'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Testimonial from '@/components/Testonomial'
import WhyChooseCheckPlotSection from '@/components/WhyChooseCheckPlotSection'
import React from 'react'

export default function page() {


  return (

    <>
      <HeroSection />
      <PhoneScrollAnimation />
      <WhyChooseCheckPlotSection />
      <Testimonial />
      <ScrollToTopButton />
    </>)
}
