"use client"

import Footer from "@/components/footer"
import { FileCheck } from "lucide-react"

export default function PRVisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <FileCheck className="w-8 h-8 text-green-400" /> PR (Permanent Residency) Visa
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Make a new country your permanent home with our PR visa services. We guide you through points calculation, skill assessment, and settlement planning for a successful migration.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>PR pathways for Canada, Australia, UK, and more</li>
          <li>Comprehensive eligibility assessment</li>
          <li>Language test and document support</li>
          <li>Post-landing and integration services</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
