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
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-3">
        {/* Instagram Button */}
        <button
          onClick={handleInstagramClick}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Follow on Instagram"
        >
          <Instagram className="w-7 h-7" />
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-2"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/assets/wp.webp"
            alt="WhatsApp"
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
      </div>
    </div>
  )
}
