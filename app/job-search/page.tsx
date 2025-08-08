"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Briefcase } from "lucide-react"

export default function JobSearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="w-8 h-8 text-green-400" /> Job Search Assistance
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Personalized job search support for international careers. Resume building, interview prep, and job matching for your destination country.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Resume/CV writing and optimization</li>
          <li>LinkedIn profile creation and branding</li>
          <li>Job search strategy and market insights</li>
          <li>Interview preparation and mock interviews</li>
          <li>Job matching for Canada, UK, Australia, and more</li>
        </ul>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>Dedicated job search consultants</li>
            <li>Access to exclusive job boards and recruiters</li>
            <li>End-to-end support until placement</li>
            <li>Proven success for skilled professionals and students</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
