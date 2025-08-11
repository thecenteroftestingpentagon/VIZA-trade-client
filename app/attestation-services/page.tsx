"use client"

import Footer from "@/components/footer"
import { CheckSquare } from "lucide-react"

export default function AttestationServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <CheckSquare className="w-8 h-8 text-green-400" /> Attestation Services
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Get your documents attested for international use. We handle embassy, HRD, MEA, and notary attestation for all major countries.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Educational certificate attestation</li>
          <li>Birth, marriage, and death certificate attestation</li>
          <li>Commercial and export document attestation</li>
          <li>Power of attorney and legal documents</li>
          <li>MOFA, MEA, and embassy attestation</li>
        </ul>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>End-to-end attestation process management</li>
            <li>Trusted by students, professionals, and businesses</li>
            <li>Doorstep document pickup and delivery</li>
            <li>Transparent pricing and real-time tracking</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
