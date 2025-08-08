"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>("item-1")

  const faqs = [
    {
      question: "What services does Viza Trade offer?",
      answer:
        "Viza Trade offers comprehensive visa and immigration services including tourist visas, study visas, work permits, business visas, and permanent residency applications for various countries. We also provide document verification, application preparation, and interview coaching.",
    },
    {
      question: "How long does the visa application process take?",
      answer:
        "The visa processing time varies depending on the type of visa and destination country. Tourist visas typically take 2-4 weeks, study visas 4-8 weeks, and work permits or PR applications can take 3-6 months. During your consultation, we'll provide a more accurate timeline based on your specific case.",
    },
    {
      question: "What is your success rate for visa applications?",
      answer:
        "We maintain a success rate of over 98% for visa applications across all categories. Our thorough assessment process, attention to detail, and expertise in handling complex cases contribute to our high success rate.",
    },
    {
      question: "Do you offer a free consultation?",
      answer:
        "Yes, we offer a 100% free initial consultation to assess your visa eligibility, discuss your options, and provide a customized plan for your application. There's no obligation to proceed with our services after the consultation.",
    },
    {
      question: "Which countries do you provide visa services for?",
      answer:
        "We provide visa services for numerous countries including Canada, Australia, USA, UK, New Zealand, and European countries such as Germany, France, Italy, Spain, and Scandinavian nations. Our expertise spans across most major immigration destinations worldwide.",
    },
    {
      question: "What documents will I need for my visa application?",
      answer:
        "Required documents vary by visa type and country, but typically include passport, photographs, financial statements, educational certificates, employment records, and language proficiency test results. During your consultation, we'll provide a comprehensive checklist tailored to your specific application.",
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        </div>

        <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-teal-800/30 mb-4 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-slate-700/30 text-white font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-300">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
