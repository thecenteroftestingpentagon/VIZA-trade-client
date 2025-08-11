"use client"

import Footer from "@/components/footer"
import { Sun } from "lucide-react"

export default function ProvincialNomineePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Sun className="w-8 h-8 text-green-400" /> Provincial Nominee Program (PNP)
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Get nominated by a Canadian province or territory for permanent residency. We help you choose the right PNP stream and prepare a strong application.
        </p>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Frequently Asked Questions</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>What is the Provincial Nominee Program?</li>
            <li>Which provinces offer PNP streams?</li>
            <li>What are the eligibility requirements for PNP?</li>
            <li>How do I apply for a PNP nomination?</li>
            <li>Can I apply to multiple provinces?</li>
            <li>How does PNP work with Express Entry?</li>
            <li>What are the processing times for PNP?</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
