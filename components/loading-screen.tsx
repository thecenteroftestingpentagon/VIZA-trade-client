"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Fallback timeout (optional, but removed here for full control)
    // Uncomment below if you want a max wait duration regardless of video status
    // const fallbackTimer = setTimeout(() => setIsVisible(false), 30000)
    // return () => clearTimeout(fallbackTimer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          className="w-full h-full object-cover pointer-events-none select-none"
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVisible(false)}
          disablePictureInPicture
          controls={false}
        >
          <source src="/assets/AN.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to prevent any interaction */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Branding content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-green-400">VIZA</span> TRADE
            </h1>
            <p className="text-xl text-gray-300">Global Trade Simplified Visas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
