"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ConsultationForm from "@/components/consultation-form"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-[calc(100vh-160px)] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-slate-900/90"></div>

        {/* City background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
            filter: "brightness(0.4) saturate(0.8)",
          }}
        ></div>

        {/* Simple particle overlay */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
        {/* Left side - Text content */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4"> {/* Big logo for hero section */}
              <img 
                src="/assets/icon.png" 
                alt="VIZA TRADE Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="text-green-400">VIZA</span> TRADE
              </h1>
              <p className="text-sm text-gray-400">Global Trade Simplified Visas</p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Helping People
            <br />
            <span className="text-green-400">Immigrate</span>
            <br />
            <span className="text-orange-500">Safely</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-500 mb-6"></div>

          <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            Your trusted partner for seamless visa and immigration services. We simplify the journey to your dream destination with expert guidance and personalized support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/8160050554?text=Hi! I want to start my visa journey with VIZA TRADE', '_blank')}
            >
              🚀 Start Your Journey
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => window.open('tel:8160050554', '_self')}
            >
              📞 Call Expert
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>100% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>

        {/* Right side - Form */}
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ConsultationForm />
        </motion.div>
      </div>
    </div>
  )
}
