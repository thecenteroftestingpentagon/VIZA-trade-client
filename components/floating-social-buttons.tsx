"use client"
import React, { useState } from "react"
import { MessageCircle, Instagram, X } from "lucide-react"

export default function FloatingSocialButtons() {
  const [isExpanded, setIsExpanded] = useState(false)

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
      <div className="flex flex-col items-end gap-3">
        {/* Instagram Button */}
        <div
          className={`transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
          <button
            onClick={handleInstagramClick}
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </button>
        </div>

        {/* WhatsApp Button */}
        <div
          className={`transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
          <button
            onClick={handleWhatsAppClick}
            className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${isExpanded ? 'rotate-45' : 'rotate-0'
            }`}
          aria-label="Toggle social media options"
        >
          {isExpanded ? (
            <X className="w-7 h-7" />
          ) : (
            <div className="flex items-center justify-center">
              <MessageCircle className="w-7 h-7" />
            </div>
          )}
        </button>
      </div>

      {/* Floating Labels */}
      {isExpanded && (
        <div className="absolute bottom-0 right-16 flex flex-col gap-3 pointer-events-none">
          <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 animate-fade-in-delayed-2">
            Follow us on Instagram
          </div>
          <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 animate-fade-in-delayed-1">
            Chat on WhatsApp
          </div>
          <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 animate-fade-in">
            Get in Touch
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out 0.1s forwards;
        }
        
        .animate-fade-in-delayed-1 {
          animation: fade-in 0.3s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-delayed-2 {
          animation: fade-in 0.3s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  )
}
