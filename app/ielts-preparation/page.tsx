"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { PenTool } from "lucide-react"

export default function IELTSPreparationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <PenTool className="w-8 h-8 text-green-400" /> IELTS Preparation
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Expert IELTS coaching and resources to help you achieve your target band score for study, work, or migration abroad.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Personalized coaching for Academic & General Training</li>
          <li>Mock tests, practice materials, and feedback</li>
          <li>Speaking, listening, reading, and writing modules</li>
          <li>Flexible batch timings and online/offline options</li>
          <li>Proven track record of high band achievers</li>
        </ul>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>Certified and experienced IELTS trainers</li>
            <li>Small batch sizes for individual attention</li>
            <li>Latest study material and exam strategies</li>
            <li>Free demo class and progress tracking</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
