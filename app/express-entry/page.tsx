"use client"

import Footer from "@/components/footer"
import { Rocket } from "lucide-react"

export default function ExpressEntryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Rocket className="w-8 h-8 text-green-400" /> Express Entry
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Fast-track your Canadian immigration with the Express Entry system. We help you maximize your CRS score and guide you through every step of the process.
        </p>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-300">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">What is the Express Entry system?</h3>
              <p className="text-gray-300">Express Entry is Canada's immigration system for skilled workers, managing applications for Federal Skilled Worker Program, Canadian Experience Class, and Federal Skilled Trades Program.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">How is the CRS score calculated?</h3>
              <p className="text-gray-300">The Comprehensive Ranking System (CRS) score is based on factors like age, education, language proficiency, work experience, and arranged employment, with a maximum score of 1,200 points.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">What are the main Express Entry programs?</h3>
              <p className="text-gray-300">The three main programs are: Federal Skilled Worker Program (FSWP), Canadian Experience Class (CEC), and Federal Skilled Trades Program (FSTP).</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">How do I improve my CRS score?</h3>
              <p className="text-gray-300">You can improve your score by enhancing language test results, obtaining a job offer, getting a provincial nomination, pursuing higher education, or gaining more work experience.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">What documents are required for Express Entry?</h3>
              <p className="text-gray-300">Required documents include passport, language test results, educational credential assessment, work reference letters, and proof of funds.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">How long does the Express Entry process take?</h3>
              <p className="text-gray-300">The process typically takes 6-8 months after receiving an Invitation to Apply (ITA), with draws occurring approximately every two weeks.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">What happens after receiving an ITA?</h3>
              <p className="text-gray-300">After receiving an ITA, you have 60 days to submit a complete application with all supporting documents and pay the required fees.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
