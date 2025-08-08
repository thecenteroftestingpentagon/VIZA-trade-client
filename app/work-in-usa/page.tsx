"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function WorkInUSAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/work" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Work Opportunities
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">🇺🇸</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Work in United States
              </h1>
              <p className="text-green-400 text-lg">North America</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The United States offers diverse opportunities across technology, healthcare, finance, and manufacturing sectors. With a robust economy and innovation-driven culture, it's a top destination for skilled professionals.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Salary Range</h3>
              <p className="text-gray-300 text-sm">$50,000 - $200,000+</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Process Time</h3>
              <p className="text-gray-300 text-sm">6-12 months</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Living Cost</h3>
              <p className="text-gray-300 text-sm">High</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Language</h3>
              <p className="text-gray-300 text-sm">English</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
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
                  "Employment-based visa (H-1B, L-1, O-1, etc.)",
                  "Job offer from US employer",
                  "Educational credentials evaluation",
                  "English proficiency"
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Visa Types */}
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
                  { type: "H-1B", description: "Specialty occupations requiring bachelor's degree", duration: "3 years (renewable)" },
                  { type: "L-1", description: "Intracompany transfer visa", duration: "1-3 years" },
                  { type: "O-1", description: "Individuals with extraordinary ability", duration: "3 years" },
                  { type: "E-2", description: "Treaty investor visa", duration: "2 years (renewable)" }
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

        {/* Popular Cities */}
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
                { name: "New York", description: "Financial capital with diverse opportunities" },
                { name: "San Francisco", description: "Tech hub with high salaries" },
                { name: "Los Angeles", description: "Entertainment and business center" },
                { name: "Chicago", description: "Manufacturing and logistics hub" },
                { name: "Seattle", description: "Technology and aerospace center" }
              ].map((city, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-green-400/10">
                  <h4 className="text-white font-semibold mb-2">{city.name}</h4>
                  <p className="text-gray-300 text-sm">{city.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-green-400/10 to-blue-400/10 backdrop-blur-sm border-green-400/20 mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Get personalized guidance for your United States work visa application. 
              Our experts will help you navigate the process smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I want to know more about working in United States', '_blank')}
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
      <Footer />
    </div>
  )
}
