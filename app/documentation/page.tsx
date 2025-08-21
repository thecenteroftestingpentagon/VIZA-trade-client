"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Calendar, DollarSign, Users, Check, Phone, Mail, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">📋</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Documentation Services
              </h1>
              <p className="text-green-400 text-lg">Professional Document Preparation</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Get professional assistance with all your immigration and visa documentation needs. 
            We ensure your documents are accurate, complete, and meet all requirements.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Turnaround Time</h3>
              <p className="text-gray-300 text-sm">1-5 business days</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Service Hours</h3>
              <p className="text-gray-300 text-sm">24/7 Support</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Pricing</h3>
              <p className="text-gray-300 text-sm">Competitive rates</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Languages</h3>
              <p className="text-gray-300 text-sm">50+ languages</p>
            </CardContent>
          </Card>
        </div>

        {/* Document Types */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-green-400" />
              Document Types We Handle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Personal Documents",
                  icon: "👤",
                  documents: ["Birth Certificates", "Marriage Certificates", "Divorce Decrees", "Death Certificates", "Passports"]
                },
                {
                  category: "Educational Documents",
                  icon: "🎓",
                  documents: ["Diplomas", "Transcripts", "Degree Certificates", "Professional Licenses", "Training Certificates"]
                },
                {
                  category: "Employment Documents",
                  icon: "💼",
                  documents: ["Employment Letters", "Experience Certificates", "Salary Certificates", "Job Offers", "Reference Letters"]
                },
                {
                  category: "Financial Documents",
                  icon: "💰",
                  documents: ["Bank Statements", "Tax Returns", "Investment Certificates", "Property Documents", "Insurance Papers"]
                },
                {
                  category: "Legal Documents",
                  icon: "⚖️",
                  documents: ["Police Clearances", "Court Records", "Affidavits", "Power of Attorney", "Legal Contracts"]
                },
                {
                  category: "Medical Documents",
                  icon: "🏥",
                  documents: ["Medical Reports", "Vaccination Records", "Health Insurance", "Medical Certificates", "Lab Results"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-green-400/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-white font-semibold">{category.category}</span>
                  </div>
                  <ul className="space-y-1">
                    {category.documents.map((doc, docIndex) => (
                      <li key={docIndex} className="text-gray-300 text-sm flex items-center gap-2">
                        <Check className="w-3 h-3 text-green-400" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services */}
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-green-400" />
                Our Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    service: "Document Translation",
                    description: "Certified translation by professional translators",
                    features: ["50+ languages", "Certified copies", "Notarization available"]
                  },
                  {
                    service: "Document Notarization",
                    description: "Official notarization of documents",
                    features: ["Licensed notaries", "Same-day service", "Apostille available"]
                  },
                  {
                    service: "Document Apostille",
                    description: "International document authentication",
                    features: ["Hague Convention", "Government certified", "Fast processing"]
                  },
                  {
                    service: "Document Attestation",
                    description: "Embassy and consular attestation services",
                    features: ["Multiple countries", "Chain attestation", "Secure handling"]
                  }
                ].map((service, index) => (
                  <div key={index} className="border-l-2 border-green-400/30 pl-4">
                    <h4 className="text-white font-semibold mb-2">{service.service}</h4>
                    <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, fIndex) => (
                        <Badge key={fIndex} variant="outline" className="text-green-400 border-green-400/50 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                Our Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Document Submission",
                    description: "Submit your documents through our secure portal or visit our office"
                  },
                  {
                    step: "2",
                    title: "Document Review",
                    description: "Our experts review your documents for completeness and requirements"
                  },
                  {
                    step: "3",
                    title: "Processing",
                    description: "Professional processing including translation, notarization, or attestation"
                  },
                  {
                    step: "4",
                    title: "Quality Check",
                    description: "Thorough quality assurance to ensure accuracy and compliance"
                  },
                  {
                    step: "5",
                    title: "Delivery",
                    description: "Secure delivery of processed documents with tracking information"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center text-green-400 font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-green-400" />
              Why Choose Our Documentation Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Professional Expertise",
                  description: "Experienced team with deep knowledge of document requirements"
                },
                {
                  title: "Fast Processing",
                  description: "Quick turnaround times without compromising quality"
                },
                {
                  title: "Secure Handling",
                  description: "Confidential and secure processing of all documents"
                },
                {
                  title: "Quality Assurance",
                  description: "Multiple quality checks to ensure accuracy"
                },
                {
                  title: "Global Network",
                  description: "Partners worldwide for international document services"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock customer support and tracking"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-green-400/10">
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-green-400/10 to-blue-400/10 backdrop-blur-sm border-green-400/20 mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help with Your Documents?
            </h3>
            <p className="text-gray-300 mb-6">
              Get professional assistance with all your documentation needs. 
              Our experts are ready to help you prepare accurate and compliant documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I need help with document preparation', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Consultation
              </Button>
              <Link href="/consultation">
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-3">
                  <Mail className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
