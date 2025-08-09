"use client"

export const dynamic = 'force-dynamic'

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import SuccessStoriesSection from "@/components/partners-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <SuccessStoriesSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
