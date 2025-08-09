"use client"

import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

// Country data with comprehensive information
const countryData = {
  usa: {
    name: "United States",
    flag: "🇺🇸",
    continent: "North America",
    description: "The United States offers diverse opportunities across technology, healthcare, finance, and manufacturing sectors. With a robust economy and innovation-driven culture, it's a top destination for skilled professionals.",
    requirements: [
      "Valid passport",
      "Employment-based visa (H-1B, L-1, O-1, etc.)",
      "Job offer from US employer",
      "Educational credentials evaluation",
      "English proficiency"
    ],
    popularCities: [
      { name: "New York", description: "Financial capital with diverse opportunities" },
      { name: "San Francisco", description: "Tech hub with high salaries" },
      { name: "Los Angeles", description: "Entertainment and business center" },
      { name: "Chicago", description: "Manufacturing and logistics hub" },
      { name: "Seattle", description: "Technology and aerospace center" }
    ],
    visaTypes: [
      { type: "H-1B", description: "Specialty occupations requiring bachelor's degree", duration: "3 years (renewable)" },
      { type: "L-1", description: "Intracompany transfer visa", duration: "1-3 years" },
      { type: "O-1", description: "Individuals with extraordinary ability", duration: "3 years" },
      { type: "E-2", description: "Treaty investor visa", duration: "2 years (renewable)" }
    ],
    salaryRange: "$50,000 - $200,000+",
    processTime: "6-12 months",
    livingCost: "High",
    language: "English"
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    continent: "North America",
    description: "Canada offers excellent work opportunities with a high quality of life, universal healthcare, and welcoming immigration policies. The country is known for its diverse economy and multicultural society.",
    requirements: [
      "Valid passport",
      "Work permit or permanent residence",
      "Job offer from Canadian employer",
      "Language proficiency (English/French)",
      "Educational credential assessment"
    ],
    popularCities: [
      { name: "Toronto", description: "Financial center with diverse industries" },
      { name: "Vancouver", description: "Tech hub with beautiful scenery" },
      { name: "Montreal", description: "Cultural center with tech opportunities" },
      { name: "Calgary", description: "Energy sector and business hub" },
      { name: "Ottawa", description: "Government and technology center" }
    ],
    visaTypes: [
      { type: "LMIA Work Permit", description: "Labour Market Impact Assessment required", duration: "Up to 4 years" },
      { type: "Express Entry", description: "Permanent residence pathway", duration: "Permanent" },
      { type: "Provincial Nominee", description: "Provincial nomination program", duration: "Permanent" },
      { type: "Start-up Visa", description: "For entrepreneurs", duration: "Permanent" }
    ],
    salaryRange: "CAD $40,000 - $120,000+",
    processTime: "3-8 months",
    livingCost: "Moderate to High",
    language: "English/French"
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    continent: "Asia Pacific",
    description: "Australia offers excellent work opportunities in a country known for its high quality of life, beautiful landscapes, and strong economy. The country welcomes skilled workers across various industries.",
    requirements: [
      "Valid passport",
      "Skilled work visa",
      "Skills assessment",
      "English proficiency test",
      "Health and character checks"
    ],
    popularCities: [
      { name: "Sydney", description: "Financial center and largest city" },
      { name: "Melbourne", description: "Cultural capital with diverse opportunities" },
      { name: "Brisbane", description: "Growing tech and business hub" },
      { name: "Perth", description: "Mining and resources center" },
      { name: "Adelaide", description: "Manufacturing and wine region" }
    ],
    visaTypes: [
      { type: "TSS Visa (482)", description: "Temporary Skill Shortage visa", duration: "2-4 years" },
      { type: "Skilled Independent (189)", description: "Permanent skilled visa", duration: "Permanent" },
      { type: "Skilled Nominated (190)", description: "State nominated visa", duration: "Permanent" },
      { type: "Employer Nomination (186)", description: "Permanent employer sponsored", duration: "Permanent" }
    ],
    salaryRange: "AUD $50,000 - $150,000+",
    processTime: "4-12 months",
    livingCost: "High",
    language: "English"
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    continent: "Europe",
    description: "The UK offers diverse opportunities in finance, technology, healthcare, and creative industries. With its rich history and global connections, it's an attractive destination for skilled professionals.",
    requirements: [
      "Valid passport",
      "Work visa or permit",
      "Job offer from UK employer",
      "English proficiency",
      "Tuberculosis test (if applicable)"
    ],
    popularCities: [
      { name: "London", description: "Global financial center" },
      { name: "Manchester", description: "Technology and media hub" },
      { name: "Edinburgh", description: "Financial services center" },
      { name: "Birmingham", description: "Manufacturing and business center" },
      { name: "Bristol", description: "Aerospace and technology hub" }
    ],
    visaTypes: [
      { type: "Skilled Worker", description: "Points-based skilled worker visa", duration: "Up to 5 years" },
      { type: "Global Talent", description: "For exceptional talent", duration: "5 years" },
      { type: "Start-up", description: "For entrepreneurs", duration: "2 years" },
      { type: "Innovator", description: "For innovative business ideas", duration: "3 years" }
    ],
    salaryRange: "£25,000 - £80,000+",
    processTime: "3-8 weeks",
    livingCost: "High",
    language: "English"
  },
  germany: {
    name: "Germany",
    flag: "🇩🇪",
    continent: "Europe",
    description: "Germany offers excellent opportunities in engineering, automotive, technology, and manufacturing. As Europe's largest economy, it provides stability and growth potential for skilled professionals.",
    requirements: [
      "Valid passport",
      "Work visa or EU Blue Card",
      "Job offer or job search visa",
      "Educational qualifications",
      "German language skills (preferred)"
    ],
    popularCities: [
      { name: "Berlin", description: "Capital city with tech startups" },
      { name: "Munich", description: "Technology and automotive hub" },
      { name: "Frankfurt", description: "Financial center" },
      { name: "Hamburg", description: "Media and logistics center" },
      { name: "Stuttgart", description: "Automotive and engineering hub" }
    ],
    visaTypes: [
      { type: "EU Blue Card", description: "For highly skilled workers", duration: "4 years" },
      { type: "Job Seeker Visa", description: "To search for employment", duration: "6 months" },
      { type: "Work Visa", description: "General employment visa", duration: "Up to 4 years" },
      { type: "Skilled Immigration", description: "New skilled worker immigration", duration: "4 years" }
    ],
    salaryRange: "€40,000 - €90,000+",
    processTime: "2-4 months",
    livingCost: "Moderate",
    language: "German (English widely used)"
  },
  uae: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    continent: "Middle East",
    description: "The UAE offers tax-free income and excellent career opportunities in finance, technology, construction, and hospitality. Dubai and Abu Dhabi are major business hubs connecting East and West.",
    requirements: [
      "Valid passport",
      "Work visa and residence permit",
      "Job offer from UAE employer",
      "Medical fitness certificate",
      "Educational certificate attestation"
    ],
    popularCities: [
      { name: "Dubai", description: "Global business and tourism hub" },
      { name: "Abu Dhabi", description: "Capital with oil and finance sectors" },
      { name: "Sharjah", description: "Cultural and industrial center" },
      { name: "Ajman", description: "Growing business center" },
      { name: "Al Ain", description: "Educational and cultural hub" }
    ],
    visaTypes: [
      { type: "Employment Visa", description: "Sponsored by employer", duration: "2-3 years" },
      { type: "Golden Visa", description: "For investors and skilled professionals", duration: "10 years" },
      { type: "Green Visa", description: "For skilled workers", duration: "5 years" },
      { type: "Freelance Visa", description: "For freelancers", duration: "1 year" }
    ],
    salaryRange: "AED 8,000 - 50,000+",
    processTime: "1-3 months",
    livingCost: "Moderate to High",
    language: "Arabic (English widely used)"
  },
  france: {
    name: "France",
    flag: "🇫🇷",
    continent: "Europe",
    description: "France offers opportunities in luxury goods, technology, aerospace, and culinary arts. With excellent work-life balance and rich culture, it's attractive for skilled professionals.",
    requirements: [
      "Valid passport",
      "Work visa or EU permit",
      "Job offer from French employer",
      "French language proficiency",
      "Educational qualification recognition"
    ],
    popularCities: [
      { name: "Paris", description: "Capital with finance and fashion" },
      { name: "Lyon", description: "Technology and pharmaceutical hub" },
      { name: "Marseille", description: "Port city with logistics" },
      { name: "Toulouse", description: "Aerospace center" },
      { name: "Nice", description: "Tech and tourism hub" }
    ],
    visaTypes: [
      { type: "Salarié", description: "Employee work permit", duration: "1-4 years" },
      { type: "Passeport Talent", description: "For skilled workers", duration: "4 years" },
      { type: "Carte Bleue", description: "EU Blue Card", duration: "4 years" },
      { type: "Entrepreneur", description: "For business creators", duration: "4 years" }
    ],
    salaryRange: "€30,000 - €70,000+",
    processTime: "2-4 months",
    livingCost: "Moderate to High",
    language: "French (English in tech)"
  },
  netherlands: {
    name: "Netherlands",
    flag: "🇳🇱",
    continent: "Europe",
    description: "The Netherlands offers excellent opportunities in technology, finance, and logistics. Known for work-life balance and English proficiency, it's ideal for international professionals.",
    requirements: [
      "Valid passport",
      "Work permit or EU Blue Card",
      "Job offer from Dutch employer",
      "Educational credentials",
      "English/Dutch language skills"
    ],
    popularCities: [
      { name: "Amsterdam", description: "Financial and tech center" },
      { name: "Rotterdam", description: "Major port and logistics hub" },
      { name: "The Hague", description: "International organizations" },
      { name: "Eindhoven", description: "Technology and design hub" },
      { name: "Utrecht", description: "Central business location" }
    ],
    visaTypes: [
      { type: "Highly Skilled Migrant", description: "For skilled professionals", duration: "5 years" },
      { type: "EU Blue Card", description: "For university graduates", duration: "4 years" },
      { type: "Intra-Corporate Transfer", description: "For company transfers", duration: "3 years" },
      { type: "Startup Visa", description: "For entrepreneurs", duration: "1 year" }
    ],
    salaryRange: "€35,000 - €80,000+",
    processTime: "2-6 weeks",
    livingCost: "High",
    language: "Dutch/English"
  },
  singapore: {
    name: "Singapore",
    flag: "🇸🇬",
    continent: "Asia Pacific",
    description: "Singapore is a global financial hub offering opportunities in finance, technology, and trade. With excellent infrastructure and strategic location, it's perfect for career growth.",
    requirements: [
      "Valid passport",
      "Employment Pass or Work Permit",
      "Job offer from Singapore employer",
      "Educational qualifications",
      "Health screening"
    ],
    popularCities: [
      { name: "Central Business District", description: "Financial and business hub" },
      { name: "Jurong", description: "Industrial and tech center" },
      { name: "Marina Bay", description: "Premium business district" },
      { name: "One-North", description: "Biomedical and research hub" },
      { name: "Changi", description: "Airport and logistics center" }
    ],
    visaTypes: [
      { type: "Employment Pass", description: "For professionals and managers", duration: "1-2 years" },
      { type: "S Pass", description: "For mid-level skilled staff", duration: "1-2 years" },
      { type: "Tech.Pass", description: "For tech professionals", duration: "2 years" },
      { type: "Entrepreneur Pass", description: "For business owners", duration: "1 year" }
    ],
    salaryRange: "SGD $36,000 - $150,000+",
    processTime: "1-4 weeks",
    livingCost: "High",
    language: "English"
  },
  "new-zealand": {
    name: "New Zealand",
    flag: "🇳🇿",
    continent: "Asia Pacific",
    description: "New Zealand offers opportunities in agriculture, technology, and tourism with stunning natural beauty and excellent quality of life. Perfect for those seeking work-life balance.",
    requirements: [
      "Valid passport",
      "Work visa or resident visa",
      "Job offer or skills in demand",
      "English proficiency",
      "Health and character checks"
    ],
    popularCities: [
      { name: "Auckland", description: "Largest city and business center" },
      { name: "Wellington", description: "Capital and government hub" },
      { name: "Christchurch", description: "South Island's largest city" },
      { name: "Hamilton", description: "Agricultural and education center" },
      { name: "Tauranga", description: "Port city and growth center" }
    ],
    visaTypes: [
      { type: "Essential Skills", description: "For skilled workers", duration: "Up to 5 years" },
      { type: "Skilled Migrant", description: "Points-based residence", duration: "Permanent" },
      { type: "Work to Residence", description: "Pathway to residence", duration: "30 months" },
      { type: "Entrepreneur", description: "For business migrants", duration: "12 months" }
    ],
    salaryRange: "NZD $40,000 - $100,000+",
    processTime: "1-6 months",
    livingCost: "Moderate to High",
    language: "English"
  }
}

interface PageProps {
  params: {
    country: string
  }
}

export default function WorkInCountryPage({ params }: PageProps) {
  const countryInfo = countryData[params.country as keyof typeof countryData]

  if (!countryInfo) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Country background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/country/' + (countryData[countrySlug]?.backgroundImage || countrySlug + '.jpg'))",
          filter: "brightness(0.3) contrast(1.1)"
        }}
      ></div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 z-0"></div>
<div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/work" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Work Opportunities
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">{countryInfo.flag}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Work in {countryInfo.name}
              </h1>
              <p className="text-green-400 text-lg">{countryInfo.continent}</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {countryInfo.description}
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Salary Range</h3>
              <p className="text-gray-300 text-sm">{countryInfo.salaryRange}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Process Time</h3>
              <p className="text-gray-300 text-sm">{countryInfo.processTime}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Living Cost</h3>
              <p className="text-gray-300 text-sm">{countryInfo.livingCost}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Language</h3>
              <p className="text-gray-300 text-sm">{countryInfo.language}</p>
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
                {countryInfo.requirements.map((req, index) => (
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
                {countryInfo.visaTypes.map((visa, index) => (
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
              {countryInfo.popularCities.map((city, index) => (
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
              Get personalized guidance for your {countryInfo.name} work visa application. 
              Our experts will help you navigate the process smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/8160050554?text=Hi, I want to know more about working in ' + countryInfo.name, '_blank')}
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
