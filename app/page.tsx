"use client"

export const dynamic = 'force-dynamic'

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ParticlesBackground from "@/components/ParticlesBackground"
import GlowEffect from "@/components/GlowEffect"
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
    <main>
      {/* Animated background layers */}
      <div className="background-container">
        {/* Background replaced with particle animation only */}
        {/* Particle animation */}
        <ParticlesBackground />
      </div>
      {/* Mouse glow effect */}
      <GlowEffect />
      {/* Page content */}
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <SuccessStoriesSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
