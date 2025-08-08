// This file has been moved to /visa/study/page.tsx for correct routing. You can delete this file.

"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen } from "lucide-react"

export default function StudyVisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-green-400" /> Study Visa
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Pursue your education abroad with our comprehensive study visa services. We help with university applications, financial documentation, and pre-departure guidance for students.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Support for top universities worldwide</li>
          <li>Scholarship and funding advice</li>
          <li>Visa interview and SOP preparation</li>
          <li>Post-study work and PR pathways</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
