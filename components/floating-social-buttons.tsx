"use client"
import React from "react"
import { Instagram } from "lucide-react"
import Image from "next/image"

export default function FloatingSocialButtons() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "8160050554"
    const message = "Hello! I'm interested in visa consultation services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/viza.trade27?igsh=MXh6OWVzZncwbTFicg==', '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] pointer-events-none">
      <div className="flex flex-col gap-3 pointer-events-auto">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-white/20 backdrop-blur-sm"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/assets/wp.webp"
            alt="WhatsApp"
            width={24}
            height={24}
            className="object-contain md:w-7 md:h-7"
          />
        </button>

        {/* Instagram Button */}
        <button
          onClick={handleInstagramClick}
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-white/20 backdrop-blur-sm"
          aria-label="Follow on Instagram"
        >
          <Instagram className="w-5 h-5 md:w-7 md:h-7" />
        </button>
      </div>
    </div>
  )
}
