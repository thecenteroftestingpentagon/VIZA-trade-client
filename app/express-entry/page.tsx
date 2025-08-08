"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Rocket } from "lucide-react"

export default function ExpressEntryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Rocket className="w-8 h-8 text-green-400" /> Express Entry
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Fast-track your Canadian immigration with the Express Entry system. We help you maximize your CRS score and guide you through every step of the process.
        </p>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Frequently Asked Questions</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>What is the Express Entry system?</li>
            <li>How is the CRS score calculated?</li>
            <li>What are the main Express Entry programs?</li>
            <li>How do I improve my CRS score?</li>
            <li>What documents are required for Express Entry?</li>
            <li>How long does the Express Entry process take?</li>
            <li>What happens after receiving an ITA?</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
