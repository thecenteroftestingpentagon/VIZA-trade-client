"use client"

import Footer from "@/components/footer"
import { Sun } from "lucide-react"

export default function ProvincialNomineePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Sun className="w-8 h-8 text-green-400" /> Provincial Nominee Program (PNP)
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Get nominated by a Canadian province or territory for permanent residency. We help you choose the right PNP stream and prepare a strong application.
        </p>

        {/* FAQ Section */}
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-300">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5 text-base text-gray-100">
            <div>
              <p className="font-semibold">1. What is the Provincial Nominee Program?</p>
              <p className="text-gray-300">
                The PNP allows Canadian provinces and territories to nominate individuals who have the
                skills, education, and work experience needed to contribute to the local economy and settle
                in that province.
              </p>
            </div>

            <div>
              <p className="font-semibold">2. Which provinces offer PNP streams?</p>
              <p className="text-gray-300">
                Almost all provinces and territories (except Quebec and Nunavut) offer PNP streams.
                Popular ones include Ontario, British Columbia, Alberta, Saskatchewan, and Manitoba.
              </p>
            </div>

            <div>
              <p className="font-semibold">3. What are the eligibility requirements for PNP?</p>
              <p className="text-gray-300">
                Requirements vary by province but usually include having a job offer, relevant work
                experience, education, and language proficiency. Some provinces also target international
                graduates or entrepreneurs.
              </p>
            </div>

            <div>
              <p className="font-semibold">4. How do I apply for a PNP nomination?</p>
              <p className="text-gray-300">
                You must apply directly to the province through its PNP portal. If nominated, you’ll receive
                a nomination certificate, which can then be used to apply for permanent residency with IRCC.
              </p>
            </div>

            <div>
              <p className="font-semibold">5. Can I apply to multiple provinces?</p>
              <p className="text-gray-300">
                Yes, you can apply to multiple provinces if you meet their eligibility requirements. However,
                you should genuinely intend to live and work in the province where you accept the nomination.
              </p>
            </div>

            <div>
              <p className="font-semibold">6. How does PNP work with Express Entry?</p>
              <p className="text-gray-300">
                Many provinces have Express Entry-linked PNP streams. A provincial nomination gives you
                an additional 600 CRS points, almost guaranteeing an invitation to apply for permanent
                residency.
              </p>
            </div>

            <div>
              <p className="font-semibold">7. What are the processing times for PNP?</p>
              <p className="text-gray-300">
                Processing times vary by province but generally range from 2 to 9 months for the provincial
                stage. The federal permanent residency application may take another 6 to 9 months.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
