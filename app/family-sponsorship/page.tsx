"use client"

import Footer from "@/components/footer"
import { Users } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FamilySponsorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <main className="flex flex-col items-center justify-center py-20 px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-8 h-8 text-green-400" /> Family Sponsorship
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Reunite with your loved ones abroad. We assist with spouse, child, parent, and grandparent sponsorship for permanent residency in Canada and other countries.
        </p>

        {/* FAQ Section */}
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-300 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Who can I sponsor under the family class?</AccordionTrigger>
              <AccordionContent>
                You can sponsor your spouse, common-law partner, dependent children, parents, and grandparents. In certain cases, other relatives may also be eligible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>What are the income requirements for sponsorship?</AccordionTrigger>
              <AccordionContent>
                Sponsors must meet the Minimum Necessary Income (MNI) based on family size. Proof of financial stability is required to ensure you can support the sponsored family member.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>How long does the sponsorship process take?</AccordionTrigger>
              <AccordionContent>
                Processing times vary depending on the visa office and category. On average, spousal sponsorship takes 6–12 months, while parent and grandparent sponsorship may take longer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>What documents are needed for family sponsorship?</AccordionTrigger>
              <AccordionContent>
                Key documents include proof of relationship (marriage/birth certificates), identity documents, financial records, and completed immigration forms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>Can I sponsor relatives other than spouse/children?</AccordionTrigger>
              <AccordionContent>
                Generally, only close family members are eligible. However, in exceptional circumstances, you may be able to sponsor other relatives if you have no close family members in Canada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>What are my responsibilities as a sponsor?</AccordionTrigger>
              <AccordionContent>
                As a sponsor, you must provide financial support and ensure your family member does not need social assistance. You sign an undertaking that lasts for a set number of years.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Can my sponsored family members work or study?</AccordionTrigger>
              <AccordionContent>
                Yes. Once they receive permanent residency, they can work or study in Canada without restrictions. In some cases, temporary work or study permits may be available during processing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  )
}
