"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock, Plane } from "lucide-react"
import Link from "next/link"

export default function VisitorVisaPage() {
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
            <span className="text-6xl">✈️</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Visitor Visa
              </h1>
              <p className="text-green-400 text-lg">Tourism & Visit Services</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Get assistance with visitor visas for tourism, family visits, or business meetings. 
            We help you navigate the application process for temporary visits to your desired destination.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Processing Time</h3>
              <p className="text-gray-300 text-sm">15-30 days</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Stay Duration</h3>
              <p className="text-gray-300 text-sm">Up to 6 months</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Visa Fee</h3>
              <p className="text-gray-300 text-sm">Varies by country</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Family Visits</h3>
              <p className="text-gray-300 text-sm">Supported</p>
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
                  "Completed visa application form",
                  "Recent passport-sized photographs",
                  "Travel itinerary and bookings",
                  "Proof of financial means",
                  "Travel insurance",
                  "Invitation letter (if visiting family/friends)",
                  "Employment letter or business registration",
                  "Bank statements (3-6 months)"
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
                <MapPin className="w-6 h-6 text-green-400" />
                Popular Destinations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { country: "United States", flag: "🇺🇸", type: "B-1/B-2", duration: "Up to 6 months" },
                  { country: "Canada", flag: "🇨🇦", type: "Visitor Visa", duration: "Up to 6 months" },
                  { country: "United Kingdom", flag: "🇬🇧", type: "Standard Visitor", duration: "Up to 6 months" },
                  { country: "Australia", flag: "🇦🇺", type: "Visitor Visa", duration: "Up to 12 months" },
                  { country: "Schengen Area", flag: "🇪🇺", type: "Schengen Visa", duration: "Up to 90 days" }
                ].map((dest, index) => (
                  <div key={index} className="border-l-2 border-green-400/30 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{dest.flag}</span>
                      <span className="text-white font-semibold">{dest.country}</span>
                      <Badge variant="outline" className="text-green-400 border-green-400/50">
                        {dest.type}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm">{dest.duration}</p>
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
              <Plane className="w-6 h-6 text-green-400" />
              Our Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Document Preparation",
                  description: "Complete assistance with visa application forms and supporting documents"
                },
                {
                  title: "Appointment Booking",
                  description: "Schedule visa appointments at consulates and embassies"
                },
                {
                  title: "Travel Planning",
                  description: "Help with itinerary planning and travel arrangements"
                },
                {
                  title: "Interview Preparation",
                  description: "Mock interviews and guidance for visa interviews"
                },
                {
                  title: "Financial Documentation",
                  description: "Assistance with financial proof and sponsorship letters"
                },
                {
                  title: "Follow-up Support",
                  description: "Track application status and provide updates"
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
              Ready to Apply for Your Visitor Visa?
            </h3>
            <p className="text-gray-300 mb-6">
              Get expert assistance with your visitor visa application. 
              Our team will guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I need help with a visitor visa application', '_blank')}
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
