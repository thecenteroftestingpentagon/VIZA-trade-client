"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, GraduationCap, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock, BookOpen } from "lucide-react"
import Link from "next/link"

export default function StudentVisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/visa" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Visa Services
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">🎓</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Student Visa
              </h1>
              <p className="text-green-400 text-lg">Education & Study Abroad Services</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Pursue your educational dreams abroad with our comprehensive student visa services. 
            We assist with applications for universities, colleges, and educational institutions worldwide.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Processing Time</h3>
              <p className="text-gray-300 text-sm">4-12 weeks</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Study Duration</h3>
              <p className="text-gray-300 text-sm">Course duration</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Work Rights</h3>
              <p className="text-gray-300 text-sm">Part-time allowed</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Family</h3>
              <p className="text-gray-300 text-sm">Dependent visas</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-400" />
                Common Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Valid passport (6+ months validity)",
                  "Acceptance letter from educational institution",
                  "Academic transcripts and certificates",
                  "Proof of financial support",
                  "English proficiency test (IELTS/TOEFL)",
                  "Statement of Purpose (SOP)",
                  "Medical examination",
                  "Police clearance certificate",
                  "Passport-sized photographs",
                  "Visa application fee payment"
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Popular Destinations */}
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-green-400" />
                Popular Study Destinations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { country: "United States", flag: "🇺🇸", type: "F-1", features: "Work opportunities, top universities" },
                  { country: "Canada", flag: "🇨🇦", type: "Study Permit", features: "PR pathway, affordable education" },
                  { country: "United Kingdom", flag: "🇬🇧", type: "Student Visa", features: "World-class education, 1-year courses" },
                  { country: "Australia", flag: "🇦🇺", type: "Student Visa", features: "Work rights, quality education" },
                  { country: "Germany", flag: "🇩🇪", type: "Student Visa", features: "Low tuition, strong economy" }
                ].map((dest, index) => (
                  <div key={index} className="border-l-2 border-green-400/30 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{dest.flag}</span>
                      <span className="text-white font-semibold">{dest.country}</span>
                      <Badge variant="outline" className="text-green-400 border-green-400/50">
                        {dest.type}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm">{dest.features}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-green-400" />
              Our Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "University Selection",
                  description: "Help choose the right university and course for your career goals"
                },
                {
                  title: "Application Assistance",
                  description: "Complete support with university applications and documentation"
                },
                {
                  title: "SOP Writing",
                  description: "Professional statement of purpose writing and editing"
                },
                {
                  title: "Visa Processing",
                  description: "End-to-end visa application processing and documentation"
                },
                {
                  title: "Financial Planning",
                  description: "Guidance on scholarships, loans, and financial documentation"
                },
                {
                  title: "Pre-departure Support",
                  description: "Orientation and preparation for studying abroad"
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
              Ready to Start Your Educational Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Get expert guidance for your student visa application and university selection. 
              Our education consultants are here to help you achieve your academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I need help with a student visa application', '_blank')}
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
