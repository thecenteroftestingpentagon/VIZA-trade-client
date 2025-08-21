"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Home, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock, Heart } from "lucide-react"
import Link from "next/link"

export default function FamilyVisaPage() {
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
            <span className="text-6xl">👨‍👩‍👧‍👦</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Family Visa
              </h1>
              <p className="text-green-400 text-lg">Family Reunification Services</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Reunite with your loved ones abroad through our comprehensive family visa services. 
            We help families navigate the complex process of bringing family members together.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Processing Time</h3>
              <p className="text-gray-300 text-sm">6-18 months</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Duration</h3>
              <p className="text-gray-300 text-sm">Permanent/Long-term</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Financial Support</h3>
              <p className="text-gray-300 text-sm">Sponsor required</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Family Members</h3>
              <p className="text-gray-300 text-sm">Spouse, children, parents</p>
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
                  "Relationship proof (marriage/birth certificates)",
                  "Sponsor's immigration status proof",
                  "Financial support documents",
                  "Medical examination",
                  "Police clearance certificate",
                  "Affidavit of Support",
                  "Passport-sized photographs",
                  "Application forms and fees",
                  "Interview attendance (if required)"
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
                <Heart className="w-6 h-6 text-green-400" />
                Family Visa Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "Spouse Visa", description: "For married partners", countries: "USA, Canada, UK, Australia" },
                  { type: "Child Visa", description: "For dependent children", countries: "All major countries" },
                  { type: "Parent Visa", description: "For elderly parents", countries: "Canada, Australia, UK" },
                  { type: "Fiancé Visa", description: "For engaged couples", countries: "USA, UK" },
                  { type: "Sibling Visa", description: "For brothers/sisters", countries: "Limited countries" }
                ].map((visa, index) => (
                  <div key={index} className="border-l-2 border-green-400/30 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-green-400 border-green-400/50">
                        {visa.type}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-1">{visa.description}</p>
                    <p className="text-gray-400 text-xs">Available in: {visa.countries}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Destinations */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Home className="w-6 h-6 text-green-400" />
              Popular Family Reunion Destinations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  country: "United States",
                  flag: "🇺🇸",
                  visaTypes: ["IR-1", "CR-1", "K-1", "IR-5"],
                  features: "Comprehensive family immigration programs"
                },
                {
                  country: "Canada",
                  flag: "🇨🇦",
                  visaTypes: ["Spouse", "Child", "Parent", "Grandparent"],
                  features: "Family Class sponsorship program"
                },
                {
                  country: "United Kingdom",
                  flag: "🇬🇧",
                  visaTypes: ["Spouse", "Partner", "Child", "Parent"],
                  features: "Family reunion visas with pathway to settlement"
                },
                {
                  country: "Australia",
                  flag: "🇦🇺",
                  visaTypes: ["Partner", "Child", "Parent", "Contributory"],
                  features: "Family stream migration program"
                },
                {
                  country: "Germany",
                  flag: "🇩🇪",
                  visaTypes: ["Spouse", "Child", "Family Reunion"],
                  features: "EU family reunification directive"
                },
                {
                  country: "New Zealand",
                  flag: "🇳🇿",
                  visaTypes: ["Partnership", "Dependent Child", "Parent"],
                  features: "Family category residence visas"
                }
              ].map((dest, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-green-400/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{dest.flag}</span>
                    <span className="text-white font-semibold">{dest.country}</span>
                  </div>
                  <div className="mb-2">
                    {dest.visaTypes.map((visa, vidx) => (
                      <Badge key={vidx} variant="outline" className="text-green-400 border-green-400/50 mr-1 mb-1 text-xs">
                        {visa}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{dest.features}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-green-400" />
              Our Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Relationship Documentation",
                  description: "Help gather and prepare relationship proof documents"
                },
                {
                  title: "Financial Sponsorship",
                  description: "Guidance on financial requirements and sponsorship"
                },
                {
                  title: "Application Processing",
                  description: "Complete visa application preparation and submission"
                },
                {
                  title: "Interview Preparation",
                  description: "Mock interviews and guidance for visa interviews"
                },
                {
                  title: "Document Translation",
                  description: "Professional translation of foreign documents"
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
              Ready to Reunite with Your Family?
            </h3>
            <p className="text-gray-300 mb-6">
              Get expert assistance with your family visa application. 
              Our family immigration specialists will help bring your loved ones together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I need help with a family visa application', '_blank')}
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
