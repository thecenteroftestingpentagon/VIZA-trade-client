"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Flag, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function CitizenshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <FileText className="w-8 h-8 text-green-400" /> Citizenship
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Become a citizen of your dream country. We help you navigate the complex process of naturalization, dual citizenship, and citizenship by investment.
        </p>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Frequently Asked Questions</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>What are the eligibility criteria for citizenship?</li>
            <li>How long does the citizenship process take?</li>
            <li>Can I hold dual citizenship?</li>
            <li>What documents are required for citizenship application?</li>
            <li>What is citizenship by investment?</li>
            <li>How can I prepare for the citizenship interview/test?</li>
            <li>What are the benefits and responsibilities of citizenship?</li>
          </ul>
        </div>

        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">🏆</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Citizenship Services
              </h1>
              <p className="text-green-400 text-lg">Your Path to Full Citizenship</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Achieve full citizenship and enjoy all the rights and privileges of your new country. 
            We guide you through the naturalization process and citizenship requirements.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Processing Time</h3>
              <p className="text-gray-300 text-sm">12-24 months</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Residence Required</h3>
              <p className="text-gray-300 text-sm">3-5 years</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Investment</h3>
              <p className="text-gray-300 text-sm">Application fees</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Family</h3>
              <p className="text-gray-300 text-sm">Included</p>
            </CardContent>
          </Card>
        </div>

        {/* Citizenship Programs */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Flag className="w-6 h-6 text-green-400" />
              Citizenship Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  country: "Canada",
                  flag: "🇨🇦",
                  requirements: "3 years as PR, language test, citizenship test",
                  features: "Dual citizenship allowed, strong passport"
                },
                {
                  country: "Australia",
                  flag: "🇦🇺",
                  requirements: "4 years as PR, citizenship test, English requirement",
                  features: "Visa-free travel, social benefits"
                },
                {
                  country: "United States",
                  flag: "🇺🇸",
                  requirements: "5 years as PR, English test, civics test",
                  features: "Global mobility, economic opportunities"
                },
                {
                  country: "New Zealand",
                  flag: "🇳🇿",
                  requirements: "5 years as resident, English requirement",
                  features: "Quality of life, visa-free travel"
                },
                {
                  country: "United Kingdom",
                  flag: "🇬🇧",
                  requirements: "5 years as resident, Life in UK test",
                  features: "EU proximity, historical significance"
                },
                {
                  country: "Germany",
                  flag: "🇩🇪",
                  requirements: "8 years as resident, German language, integration test",
                  features: "EU citizenship, economic strength"
                }
              ].map((country, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-green-400/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-white font-semibold">{country.country}</span>
                  </div>
                  <div className="mb-2">
                    <p className="text-gray-300 text-sm mb-2">{country.requirements}</p>
                    <Badge variant="outline" className="text-green-400 border-green-400/50 text-xs">
                      {country.features}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-400" />
                General Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Permanent resident status",
                  "Minimum residence period",
                  "Physical presence requirements",
                  "Language proficiency",
                  "Knowledge of country (civics test)",
                  "Good moral character",
                  "Tax obligations met",
                  "No serious criminal record",
                  "Oath of allegiance",
                  "Application fees paid"
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-green-400" />
                Citizenship Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Right to vote and run for office",
                  "Passport and visa-free travel",
                  "Protection from deportation",
                  "Access to all government jobs",
                  "Full social security benefits",
                  "Sponsor family members",
                  "Dual citizenship options",
                  "Consular protection abroad",
                  "Right to return anytime",
                  "Pass citizenship to children"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-green-400" />
              Our Citizenship Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Eligibility Assessment",
                  description: "Comprehensive evaluation of your citizenship eligibility"
                },
                {
                  title: "Test Preparation",
                  description: "Preparation for citizenship and language tests"
                },
                {
                  title: "Application Processing",
                  description: "Complete citizenship application preparation and submission"
                },
                {
                  title: "Interview Preparation",
                  description: "Mock interviews and guidance for citizenship interviews"
                },
                {
                  title: "Document Support",
                  description: "Assistance with required documentation and translations"
                },
                {
                  title: "Ceremony Support",
                  description: "Guidance through the citizenship ceremony process"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-green-400/10">
                  <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-green-400/10 to-blue-400/10 backdrop-blur-sm border-green-400/20 mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Become a Citizen?
            </h3>
            <p className="text-gray-300 mb-6">
              Get expert guidance on your citizenship application. 
              Our immigration specialists will help you navigate the path to full citizenship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I need help with a citizenship application', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Consultation
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-3">
                  <Mail className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
