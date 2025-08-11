"use client"

import Footer from "@/components/footer"
import { FileText } from "lucide-react"

export default function DocumentTranslationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <FileText className="w-8 h-8 text-green-400" /> Document Translation
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Certified translation of all your documents for visa, immigration, and global business needs. Fast, accurate, and accepted worldwide.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Academic transcripts, degrees, and diplomas</li>
          <li>Birth, marriage, and police certificates</li>
          <li>Legal, medical, and financial documents</li>
          <li>Business contracts and trade documents</li>
          <li>Translations accepted by embassies and consulates</li>
        </ul>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>Certified translators for 20+ languages</li>
            <li>Quick turnaround and digital delivery</li>
            <li>Notarization and attestation available</li>
            <li>100% confidentiality and accuracy</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
