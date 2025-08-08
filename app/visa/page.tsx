"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plane, BookOpen, FileCheck, Clock, CheckCircle } from "lucide-react"
import BackgroundParticles from "@/components/background-particles"
import ConsultationForm from "@/components/consultation-form"
import Link from "next/link"

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-900 to-teal-900 text-white">
      <Header />
      <main className="relative">
        <BackgroundParticles />
        {/* Hero Section */}
        <section className="relative z-10 py-10 px-2 md:py-20 md:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Visa <span className="text-green-400">Services</span>
              </h1>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive visa services for various countries with high success rates and personalized guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Visa Types */}
        <section className="relative z-10 py-8 md:py-16 px-2 md:px-4 bg-green-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
              Our <span className="text-orange-500">Visa</span> Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Tourist Visa",
                  description:
                    "Planning a vacation or visiting family abroad? Our tourist visa services ensure a smooth application process with high approval rates.",
                  icon: Plane,
                  features: ["Fast processing", "Document assistance", "Application review", "Interview preparation"],
                  link: "/visa/tourist",
                },
                {
                  title: "Study Visa",
                  description:
                    "Pursue your educational dreams abroad with our specialized study visa services tailored for students seeking international education.",
                  icon: BookOpen,
                  features: [
                    "University application support",
                    "Financial documentation",
                    "Student profile enhancement",
                    "Post-study work options",
                  ],
                  link: "/visa/study",
                },
                {
                  title: "Work Visa",
                  description:
                    "Advance your career internationally with our expert work visa services designed for professionals seeking global opportunities.",
                  icon: FileCheck,
                  features: [
                    "Job search assistance",
                    "Employer verification",
                    "Skill assessment",
                    "Work permit extensions",
                  ],
                  link: "/visa/work",
                },
                {
                  title: "Business Visa",
                  description:
                    "Expand your business horizons with our business visa services for entrepreneurs and corporate executives.",
                  icon: FileCheck,
                  features: [
                    "Business plan preparation",
                    "Investment documentation",
                    "Market entry strategy",
                    "Business partner verification",
                  ],
                  link: "/visa/business",
                },
                {
                  title: "Family Visa",
                  description:
                    "Reunite with your loved ones through our family visa services that prioritize keeping families together.",
                  icon: FileCheck,
                  features: [
                    "Relationship documentation",
                    "Financial requirement guidance",
                    "Accommodation proof",
                    "Integration plans",
                  ],
                  link: "/visa/family",
                },
                {
                  title: "PR Visa",
                  description:
                    "Make a new country your permanent home with our comprehensive permanent residency visa services.",
                  icon: FileCheck,
                  features: [
                    "Points calculation",
                    "Skill assessment",
                    "Language test preparation",
                    "Settlement planning",
                  ],
                  link: "/visa/pr",
                },
              ].map((visa, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-teal-800/30 p-6 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-teal-500 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <visa.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{visa.title}</h3>
                  <p className="text-gray-300 mb-6">{visa.description}</p>

                  <ul className="space-y-2 mb-6">
                    {visa.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={visa.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-green-400">Visa</span> Process
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a structured approach to ensure maximum success for your visa application.
              </p>
            </div>

            <div className="relative">
              {/* Process timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-teal-500 hidden md:block"></div>

              <div className="space-y-12 relative">
                {[
                  {
                    step: 1,
                    title: "Initial Consultation",
                    description: "We begin with a detailed consultation to understand your requirements and goals.",
                  },
                  {
                    step: 2,
                    title: "Profile Assessment",
                    description:
                      "Our experts assess your profile to determine the best visa options and likelihood of success.",
                  },
                  {
                    step: 3,
                    title: "Documentation",
                    description:
                      "We guide you through the documentation process, ensuring all papers are correctly prepared.",
                  },
                  {
                    step: 4,
                    title: "Application Submission",
                    description:
                      "We submit your application with proper representation to maximize chances of approval.",
                  },
                  {
                    step: 5,
                    title: "Follow-up & Updates",
                    description: "We handle all follow-ups and keep you updated throughout the process.",
                  },
                  {
                    step: 6,
                    title: "Visa Approval",
                    description: "Once approved, we guide you through the next steps for your journey.",
                  },
                ].map((process, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <h3 className="text-2xl font-bold mb-3">
                        <span className="text-orange-500">Step {process.step}:</span> {process.title}
                      </h3>
                      <p className="text-gray-300">{process.description}</p>
                    </div>

                    <div className="relative md:w-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center z-10">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="relative z-10 py-20 px-4 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Countries We <span className="text-green-400">Serve</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                "Canada",
                "Australia",
                "United Kingdom",
                "USA",
                "New Zealand",
                "Germany",
                "France",
                "Netherlands",
                "Sweden",
                "Denmark",
                "Norway",
                "Finland",
              ].map((country, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-teal-800/30 p-4 hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  <h3 className="font-semibold">{country}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-teal-800 to-slate-800 rounded-xl p-8 md:p-12 shadow-lg border border-teal-700/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your <span className="text-orange-500">Visa Journey</span>?
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Book a free consultation with our visa experts today and take the first step toward your
                    international goals.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Free Assessment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Expert Guidance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">No Obligation</span>
                    </div>
                  </div>
                </div>

                <div>
                  <ConsultationForm compact={true} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
