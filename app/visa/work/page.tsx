"use client"

import Footer from "@/components/footer"
import { FileCheck } from "lucide-react"

export default function WorkVisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <FileCheck className="w-8 h-8 text-green-400" /> Work Visa
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Advance your career internationally with our expert work visa services. We provide job search assistance, employer verification, and skill assessment for professionals.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Work permits for skilled professionals</li>
          <li>Country-specific job market insights</li>
          <li>Employer sponsorship and LMIA support</li>
          <li>Work permit extensions and PR options</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
