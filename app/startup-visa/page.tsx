"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Globe, Users, TrendingUp, DollarSign } from "lucide-react"

export default function StartupVisaPage() {
  const benefits = [
    "Opportunity to build and scale your startup in developed markets",
    "Access to world-class infrastructure and business ecosystem",
    "Pathway to permanent residency through business success",
    "Access to international funding and investment opportunities",
    "Networking with global entrepreneurs and investors",
    "Family can accompany on dependent visas"
  ]

  const eligibleCountries = [
    { name: "Canada", program: "Start-up Visa Program", investment: "$200,000+", timeframe: "12-16 months" },
    { name: "Australia", program: "Business Innovation Visa", investment: "$500,000+", timeframe: "10-12 months" },
    { name: "UK", program: "Innovator Founder Visa", investment: "$50,000+", timeframe: "8-12 months" },
    { name: "New Zealand", program: "Entrepreneur Visa", investment: "$100,000+", timeframe: "6-8 months" },
  ]

  const requirements = [
    "Innovative business idea with growth potential",
    "Sufficient investment funds or secured funding",
    "Business plan and market research",
    "English language proficiency",
    "Clean criminal background",
    "Health insurance and medical exams"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-16 h-16 text-green-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Start-up <span className="text-green-400">Visa</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Turn your entrepreneurial dreams into reality with startup visa programs worldwide. Build your business globally with VIZA TRADE's expert guidance.
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {eligibleCountries.map((country, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-green-400/20 hover:border-green-400/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{country.name}</h3>
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400">Program</p>
                      <p className="text-white font-medium">{country.program}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Min. Investment</p>
                      <p className="text-green-400 font-bold">{country.investment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Processing Time</p>
                      <p className="text-white">{country.timeframe}</p>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(`https://wa.me/8160050554?text=Hi! I'm interested in the ${country.name} startup visa program`, '_blank')}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Why Choose <span className="text-green-400">Startup Visa?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-green-400">Requirements</span>
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our <span className="text-green-400">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Consultation", desc: "Business idea evaluation and country selection" },
                { step: "2", title: "Documentation", desc: "Business plan preparation and document compilation" },
                { step: "3", title: "Application", desc: "Visa application submission and tracking" },
                { step: "4", title: "Success", desc: "Visa approval and business setup guidance" }
              ].map((item, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-green-400/20 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Launch Your Global Startup?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get expert guidance on startup visa programs and turn your business dreams into reality. Our team will help you choose the right country and navigate the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi! I want to apply for a startup visa and need guidance', '_blank')}
              >
                💬 Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                onClick={() => window.open('tel:8160050554', '_self')}
              >
                📞 Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
