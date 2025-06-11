"use client"
import HeroSection from '@/components/HeroSection'
import PhoneAnimationWrapper from '@/components/PhoneAnimationWrapper'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Testimonial from '@/components/Testonomial'
import WhyChooseCheckPlotSection from '@/components/WhyChooseCheckPlotSection'
import React from 'react'

export default function page() {


  return (

    <>
      <HeroSection />
      <PhoneAnimationWrapper />
      <WhyChooseCheckPlotSection />
      <Testimonial />
      <ScrollToTopButton />
    </>)
}
