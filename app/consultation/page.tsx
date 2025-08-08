"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageSquare, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock, Headphones } from "lucide-react"
import Link from "next/link"

export default function ConsultationPage() {
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
            <span className="text-6xl">🗣️</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Consultation Services
              </h1>
              <p className="text-green-400 text-lg">Expert Immigration Guidance</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Get personalized immigration advice from our experienced consultants. 
            We provide comprehensive guidance for all your immigration and visa needs.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Availability</h3>
              <p className="text-gray-300 text-sm">7 days a week</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Response Time</h3>
              <p className="text-gray-300 text-sm">Within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Initial Consultation</h3>
              <p className="text-gray-300 text-sm">Free of charge</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Languages</h3>
              <p className="text-gray-300 text-sm">Multiple languages</p>
            </CardContent>
          </Card>
        </div>

        {/* Consultation Types */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-green-400" />
              Consultation Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  type: "Initial Assessment",
                  icon: "🔍",
                  duration: "30 minutes",
                  price: "Free",
                  description: "Evaluate your immigration options and eligibility",
                  includes: ["Profile assessment", "Option analysis", "Preliminary advice", "Next steps guidance"]
                },
                {
                  type: "Detailed Consultation",
                  icon: "📊",
                  duration: "60 minutes",
                  price: "$150",
                  description: "Comprehensive review of your case and detailed planning",
                  includes: ["Document review", "Strategy development", "Timeline planning", "Risk assessment"]
                },
                {
                  type: "Follow-up Session",
                  icon: "🔄",
                  duration: "30 minutes",
                  price: "$75",
                  description: "Progress review and ongoing support",
                  includes: ["Progress update", "Issue resolution", "Strategy adjustment", "Next steps planning"]
                }
              ].map((consultation, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 border border-green-400/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{consultation.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold">{consultation.type}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-green-400 border-green-400/50 text-xs">
                          {consultation.duration}
                        </Badge>
                        <Badge variant="outline" className="text-blue-400 border-blue-400/50 text-xs">
                          {consultation.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{consultation.description}</p>
                  <div className="space-y-1">
                    {consultation.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
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
                <Headphones className="w-6 h-6 text-green-400" />
                Consultation Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    service: "Visa Consultation",
                    description: "Expert advice on visa types and requirements"
                  },
                  {
                    service: "Immigration Planning",
                    description: "Strategic planning for your immigration journey"
                  },
                  {
                    service: "Document Review",
                    description: "Thorough review of your application documents"
                  },
                  {
                    service: "Eligibility Assessment",
                    description: "Comprehensive evaluation of your eligibility"
                  },
                  {
                    service: "Interview Preparation",
                    description: "Mock interviews and preparation guidance"
                  },
                  {
                    service: "Case Strategy",
                    description: "Customized strategy for your specific situation"
                  },
                  {
                    service: "Risk Assessment",
                    description: "Identify and mitigate potential issues"
                  },
                  {
                    service: "Timeline Planning",
                    description: "Realistic timeline and milestone planning"
                  }
                ].map((service, index) => (
                  <div key={index} className="border-l-2 border-green-400/30 pl-4">
                    <h4 className="text-white font-semibold mb-1">{service.service}</h4>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-400" />
                Consultation Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Book Consultation",
                    description: "Schedule your consultation through our booking system"
                  },
                  {
                    step: "2",
                    title: "Prepare Documents",
                    description: "Gather relevant documents and information"
                  },
                  {
                    step: "3",
                    title: "Consultation Session",
                    description: "Meet with our expert consultant (in-person or online)"
                  },
                  {
                    step: "4",
                    title: "Receive Report",
                    description: "Get a detailed consultation report with recommendations"
                  },
                  {
                    step: "5",
                    title: "Follow-up Support",
                    description: "Ongoing support and guidance as needed"
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

        {/* Consultation Methods */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Phone className="w-6 h-6 text-green-400" />
              Consultation Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  method: "Video Call",
                  icon: "📹",
                  description: "Face-to-face consultation via video call",
                  features: "Screen sharing, Document review, Recording available"
                },
                {
                  method: "Phone Call",
                  icon: "📞",
                  description: "Traditional phone consultation",
                  features: "Convenient, Flexible timing, Follow-up notes"
                },
                {
                  method: "In-Person",
                  icon: "🏢",
                  description: "Visit our office for consultation",
                  features: "Personal interaction, Document handling, Immediate feedback"
                },
                {
                  method: "WhatsApp",
                  icon: "💬",
                  description: "Quick consultation via WhatsApp",
                  features: "Instant messaging, Voice notes, Document sharing"
                }
              ].map((method, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-green-400/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{method.icon}</span>
                    <span className="text-white font-semibold">{method.method}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{method.description}</p>
                  <p className="text-gray-400 text-xs">{method.features}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-green-400/10 to-blue-400/10 backdrop-blur-sm border-green-400/20 mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Expert Advice?
            </h3>
            <p className="text-gray-300 mb-6">
              Schedule your consultation today and get personalized guidance for your immigration journey. 
              Our experts are here to help you make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I would like to schedule a consultation', '_blank')}
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
      </div>
    </div>
  )
}
