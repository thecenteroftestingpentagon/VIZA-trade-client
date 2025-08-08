// This file has been moved to /visa/family/page.tsx for correct routing. You can delete this file.

"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileCheck } from "lucide-react"

export default function FamilyVisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <FileCheck className="w-8 h-8 text-green-400" /> Family Visa
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Reunite with your loved ones through our family visa services. We assist with relationship documentation, financial requirements, and integration plans for family migration.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Spouse, child, and parent visas</li>
          <li>Family reunification programs</li>
          <li>Guidance on eligibility and sponsorship</li>
          <li>Support for appeals and re-applications</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
