"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield } from "lucide-react"

export default function TravelInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Shield className="w-8 h-8 text-green-400" /> Travel Insurance
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Comprehensive travel insurance plans for students, tourists, and business travelers. Stay protected on your global journey.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Medical emergency and hospitalization cover</li>
          <li>Loss of passport, baggage, and personal belongings</li>
          <li>Trip cancellation and interruption protection</li>
          <li>Personal accident and liability coverage</li>
          <li>Cashless claim settlement worldwide</li>
        </ul>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>Plans for students, families, and business travelers</li>
            <li>Instant policy issuance and digital delivery</li>
            <li>24/7 global assistance and support</li>
            <li>Competitive premiums and trusted insurers</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
