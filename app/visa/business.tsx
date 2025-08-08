// This file has been moved to /visa/business/page.tsx for correct routing. You can delete this file.

"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileCheck } from "lucide-react"

export default function BusinessVisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <FileCheck className="w-8 h-8 text-green-400" /> Business Visa
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Expand your business globally with our specialized business visa services for entrepreneurs and executives. We help with business plan preparation, market entry, and networking.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Business visas for major economies</li>
          <li>Investment and startup visa guidance</li>
          <li>Market research and partner search</li>
          <li>Visa renewal and compliance support</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
