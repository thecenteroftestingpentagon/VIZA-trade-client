"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function WorkInItalyPage() {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Country background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/country/Italy.jpg')",
          filter: "brightness(0.3) contrast(1.1)"
        }}
      ></div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 z-0"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Button */}
        <Link href="/work" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Work Opportunities
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">🇮🇹</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Work in Italy
              </h1>
              <p className="text-green-400 text-lg">Europe</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Italy offers rich cultural heritage combined with modern opportunities in fashion, automotive, engineering, and tourism. Experience la dolce vita while building your career in one of Europe's most beautiful countries.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Salary Range</h3>
              <p className="text-gray-300 text-sm">€25,000 - €80,000+</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Process Time</h3>
              <p className="text-gray-300 text-sm">3-6 months</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Living Cost</h3>
              <p className="text-gray-300 text-sm">€1,200 - €2,500/month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Language</h3>
              <p className="text-gray-300 text-sm">Italian, English</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Requirements */}
            <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Valid passport with at least 6 months validity</li>
                  <li>• Educational qualifications (degree/diploma)</li>
                  <li>• Work experience certificates</li>
                  <li>• Clean criminal background check</li>
                  <li>• Medical insurance coverage</li>
                  <li>• Proof of accommodation</li>
                  <li>• Italian language proficiency (B1/B2 level preferred)</li>
                  <li>• Financial stability proof</li>
                </ul>
              </CardContent>
            </Card>

            {/* Visa Types */}
            <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Visa Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">EU Blue Card</span>
                    <Badge variant="outline" className="border-green-400/50 text-green-400">
                      Skilled Workers
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Self-Employment Visa</span>
                    <Badge variant="outline" className="border-blue-400/50 text-blue-400">
                      Entrepreneurs
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Seasonal Worker Visa</span>
                    <Badge variant="outline" className="border-purple-400/50 text-purple-400">
                      Temporary
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Intra-Company Transfer</span>
                    <Badge variant="outline" className="border-orange-400/50 text-orange-400">
                      Corporate
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Popular Cities */}
            <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Popular Cities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl mb-2">🏛️</div>
                    <h4 className="text-white font-semibold">Rome</h4>
                    <p className="text-gray-400 text-sm">Capital & Government</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl mb-2">🏭</div>
                    <h4 className="text-white font-semibold">Milan</h4>
                    <p className="text-gray-400 text-sm">Fashion & Finance</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl mb-2">🏰</div>
                    <h4 className="text-white font-semibold">Florence</h4>
                    <p className="text-gray-400 text-sm">Art & Tourism</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl mb-2">🏖️</div>
                    <h4 className="text-white font-semibold">Naples</h4>
                    <p className="text-gray-400 text-sm">Culture & Industry</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Sectors */}
            <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Top Job Sectors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Fashion & Design</span>
                    <Badge variant="outline" className="border-pink-400/50 text-pink-400">
                      High Demand
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Automotive</span>
                    <Badge variant="outline" className="border-green-400/50 text-green-400">
                      Growing
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Tourism & Hospitality</span>
                    <Badge variant="outline" className="border-blue-400/50 text-blue-400">
                      Seasonal
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Engineering</span>
                    <Badge variant="outline" className="border-purple-400/50 text-purple-400">
                      Skilled
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Healthcare</span>
                    <Badge variant="outline" className="border-orange-400/50 text-orange-400">
                      Essential
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-400/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Journey to Italy?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our expert consultants will guide you through every step of the process, from visa applications to job placement assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white border-0"
                  onClick={() => window.open('https://wa.me/8160050554?text=I%20am%20interested%20in%20working%20in%20Italy', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-400 text-green-400 hover:bg-green-400/10"
                  asChild
                >
                  <Link href="/consultation">
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Meeting
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
