"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users } from "lucide-react"

export default function FamilySponsorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-8 h-8 text-green-400" /> Family Sponsorship
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Reunite with your loved ones abroad. We assist with spouse, child, parent, and grandparent sponsorship for permanent residency in Canada and other countries.
        </p>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Frequently Asked Questions</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>Who can I sponsor under the family class?</li>
            <li>What are the income requirements for sponsorship?</li>
            <li>How long does the sponsorship process take?</li>
            <li>What documents are needed for family sponsorship?</li>
            <li>Can I sponsor relatives other than spouse/children?</li>
            <li>What are my responsibilities as a sponsor?</li>
            <li>Can my sponsored family members work or study?</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
