"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Plane } from "lucide-react"

export default function TouristVisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Plane className="w-8 h-8 text-green-400" /> Tourist Visa
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Visit foreign countries for leisure, family visits, or medical treatment with our tourist visa services. We offer fast processing, document assistance, and visa interview preparation for a smooth travel experience.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Guidance for all major tourist destinations</li>
          <li>Personalized document checklist</li>
          <li>Mock interview and travel tips</li>
          <li>Visa extension and re-application support</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
