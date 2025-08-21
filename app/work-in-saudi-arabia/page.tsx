"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function WorkInSaudiArabiaPage() {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Country background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/country/Saudi Arabia.jpg')",
          filter: "brightness(0.3) contrast(1.1)"
        }}
      ></div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 z-0"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link href="/work" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Work Opportunities
        </Link>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">🇸🇦</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Work in Saudi Arabia
              </h1>
              <p className="text-green-400 text-lg">Middle East</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Saudi Arabia offers lucrative opportunities in oil & gas, construction, healthcare, and technology sectors. With Vision 2030 initiatives, the kingdom is rapidly diversifying its economy and welcoming skilled professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Salary Range</h3>
              <p className="text-gray-300 text-sm">SAR 8,000 - 50,000+</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Process Time</h3>
              <p className="text-gray-300 text-sm">2-5 months</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Living Cost</h3>
              <p className="text-gray-300 text-sm">Moderate</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Language</h3>
              <p className="text-gray-300 text-sm">Arabic (English widely used)</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-400" />
                Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Valid passport",
                  "Work visa sponsored by employer",
                  "Job offer from Saudi employer",
                  "Medical fitness certificate",
                  "Educational certificates attestation",
                  "Police clearance certificate"
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Calendar className="w-6 h-6 text-green-400" />
                Visa Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "Work Visa", description: "Sponsored by Saudi employer", duration: "1-2 years" },
                  { type: "Business Visa", description: "For business activities", duration: "3-6 months" },
                  { type: "Premium Residency", description: "For qualified professionals", duration: "1 year renewable" },
                  { type: "Family Visa", description: "For dependents", duration: "1-2 years" }
                ].map((visa, index) => (
                  <div key={index} className="border-l-2 border-green-400/30 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-green-400 border-green-400/50">
                        {visa.type}
                      </Badge>
                      <span className="text-sm text-gray-400">{visa.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{visa.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-green-400" />
              Popular Cities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Riyadh", description: "Capital and business center" },
                { name: "Jeddah", description: "Commercial hub and Red Sea port" },
                { name: "Dammam", description: "Eastern province industrial center" },
                { name: "Khobar", description: "Oil industry and business hub" },
                { name: "Mecca", description: "Religious and commercial center" }
              ].map((city, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-green-400/10">
                  <h4 className="text-white font-semibold mb-2">{city.name}</h4>
                  <p className="text-gray-300 text-sm">{city.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-400/10 to-blue-400/10 backdrop-blur-sm border-green-400/20 mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Get personalized guidance for your Saudi Arabia work visa application. 
              Our experts will help you navigate the process smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I want to know more about working in Saudi Arabia', '_blank')}
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
      <Footer />
    </div>
  )
}
