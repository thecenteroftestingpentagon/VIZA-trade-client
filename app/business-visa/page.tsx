import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Building, Users, Globe, TrendingUp } from "lucide-react"

export default function BusinessVisaPage() {
  const countries = [
    { 
      name: "United Kingdom", 
      visaType: "Innovator Founder Visa", 
      investment: "£50,000+",
      duration: "3 years",
      processing: "8-12 weeks"
    },
    { 
      name: "Australia", 
      visaType: "Business Innovation Visa", 
      investment: "AUD 500,000+",
      duration: "4 years",
      processing: "10-12 months"
    },
    { 
      name: "Canada", 
      visaType: "Self-Employed Visa", 
      investment: "CAD 300,000+",
      duration: "Permanent",
      processing: "12-18 months"
    },
    { 
      name: "Germany", 
      visaType: "Entrepreneur Visa", 
      investment: "€25,000+",
      duration: "3 years",
      processing: "6-8 weeks"
    },
    { 
      name: "Netherlands", 
      visaType: "Startup Visa", 
      investment: "€4,500+",
      duration: "1 year",
      processing: "8-12 weeks"
    },
    { 
      name: "Singapore", 
      visaType: "EntrePass", 
      investment: "SGD 50,000+",
      duration: "2 years",
      processing: "4-6 weeks"
    }
  ]

  const benefits = [
    "Establish and operate your business internationally",
    "Access to global markets and business opportunities",
    "Pathway to permanent residency through business success",
    "Family can accompany on dependent visas",
    "Access to world-class infrastructure and services",
    "Networking opportunities with international businesses",
    "Tax benefits and business incentives",
    "Quality education and healthcare for family"
  ]

  const requirements = [
    "Viable business plan with market analysis",
    "Proof of investment funds or secured financing",
    "Relevant business experience and qualifications",
    "English language proficiency (varies by country)",
    "Clean criminal background check",
    "Health insurance and medical examinations",
    "Meeting minimum investment thresholds"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Building className="w-16 h-16 text-green-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Business <span className="text-green-400">Visa</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expand your business globally with business and investor visa programs. VIZA TRADE helps entrepreneurs establish their businesses worldwide.
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {countries.map((country, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-green-400/20 hover:border-green-400/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{country.name}</h3>
                    <Globe className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-400">Visa Type:</span>
                      <span className="text-white ml-2">{country.visaType}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Investment:</span>
                      <span className="text-green-400 ml-2 font-bold">{country.investment}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white ml-2">{country.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Processing:</span>
                      <span className="text-white ml-2">{country.processing}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-sm"
                    onClick={() => window.open(`https://wa.me/8160050554?text=Hi! I'm interested in the ${country.name} business visa`, '_blank')}
                  >
                    Get Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits and Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-green-400">Benefits</span> of Business Visa
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
                General <span className="text-green-400">Requirements</span>
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

          {/* Process Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our <span className="text-green-400">Business Visa Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Assessment", desc: "Business viability and country selection" },
                { step: "2", title: "Planning", desc: "Business plan development and strategy" },
                { step: "3", title: "Documentation", desc: "Legal documents and application prep" },
                { step: "4", title: "Submission", desc: "Application filing and follow-up" },
                { step: "5", title: "Approval", desc: "Visa grant and business setup" }
              ].map((item, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-green-400/20 text-center">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-xs">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Eligible <span className="text-green-400">Business Categories</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "💻", title: "Technology", desc: "Software, IT services, fintech, AI/ML" },
                { icon: "🏭", title: "Manufacturing", desc: "Production, processing, industrial" },
                { icon: "🛍️", title: "Retail & Trade", desc: "Import/export, e-commerce, retail" },
                { icon: "🏥", title: "Healthcare", desc: "Medical services, biotechnology" },
                { icon: "🎓", title: "Education", desc: "Training, consultancy, education services" },
                { icon: "🌱", title: "Agriculture", desc: "Farming, food processing, agtech" }
              ].map((category, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-green-400/20 text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-sm">{category.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Expand Your Business Globally?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Take your business international with our expert business visa guidance. We'll help you choose the right country, prepare your application, and establish your business successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi! I want to apply for a business visa and expand my business internationally', '_blank')}
              >
                💬 Start Your Business Journey
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                onClick={() => window.open('tel:8160050554', '_self')}
              >
                📞 Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
