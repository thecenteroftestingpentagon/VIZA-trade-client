"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Globe, MapPin, ArrowRight } from "lucide-react"

const continents = {
  "North America": [
    { name: "United States", value: "usa", flag: "🇺🇸" },
    { name: "Canada", value: "canada", flag: "🇨🇦" },
    { name: "Mexico", value: "mexico", flag: "🇲🇽" }
  ],
  "Europe": [
    { name: "United Kingdom", value: "uk", flag: "🇬🇧" },
    { name: "Germany", value: "germany", flag: "🇩🇪" },
    { name: "France", value: "france", flag: "🇫🇷" },
    { name: "Netherlands", value: "netherlands", flag: "🇳🇱" },
    { name: "Italy", value: "italy", flag: "🇮🇹" },
    { name: "Spain", value: "spain", flag: "🇪🇸" }
  ],
  "Asia Pacific": [
    { name: "Australia", value: "australia", flag: "🇦🇺" },
    { name: "New Zealand", value: "new-zealand", flag: "🇳🇿" },
    { name: "Singapore", value: "singapore", flag: "🇸🇬" },
    { name: "Japan", value: "japan", flag: "🇯🇵" },
    { name: "South Korea", value: "south-korea", flag: "🇰🇷" }
  ],
  "Middle East": [
    { name: "United Arab Emirates", value: "uae", flag: "🇦🇪" },
    { name: "Saudi Arabia", value: "saudi-arabia", flag: "🇸🇦" },
    { name: "Qatar", value: "qatar", flag: "🇶🇦" }
  ]
}

export default function WorkPage() {
  const [selectedContinent, setSelectedContinent] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const router = useRouter()

  const handleContinentChange = (continent: string) => {
    setSelectedContinent(continent)
    setSelectedCountry("")
  }

  const handleCountrySelect = (countryValue: string) => {
    router.push(`/work-in-${countryValue}`)
  }

  const availableCountries = selectedContinent ? continents[selectedContinent as keyof typeof continents] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Work <span className="text-green-400">Opportunities</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore global work opportunities and find your dream job abroad. 
            Select a continent to discover available countries and their work visa requirements.
          </p>
        </div>

        {/* Selection Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-400" />
                Choose Your Destination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Continent Selection */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Select Continent
                </label>
                <Select value={selectedContinent} onValueChange={handleContinentChange}>
                  <SelectTrigger className="bg-white/10 border-green-400/30 text-white">
                    <SelectValue placeholder="Choose a continent..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(continents).map((continent) => (
                      <SelectItem key={continent} value={continent}>
                        {continent}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Country Selection */}
              {selectedContinent && (
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Select Country
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {availableCountries.map((country) => (
                      <Button
                        key={country.value}
                        variant="outline"
                        className="bg-white/10 border-green-400/30 text-white hover:bg-green-400/20 hover:border-green-400 transition-all duration-300 h-auto p-4 flex items-center justify-between"
                        onClick={() => handleCountrySelect(country.value)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{country.flag}</span>
                          <span className="font-medium">{country.name}</span>
                        </div>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Popular Destinations */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Popular <span className="text-green-400">Destinations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* USA */}
            <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 hover:border-green-400/40 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleCountrySelect('usa')}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🇺🇸</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">United States</h3>
                    <p className="text-gray-400">North America</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Explore opportunities in the world's largest economy with diverse industries and innovation hubs.
                </p>
                <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">View Work Opportunities</span>
                </div>
              </CardContent>
            </Card>

            {/* Canada */}
            <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 hover:border-green-400/40 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleCountrySelect('canada')}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🇨🇦</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Canada</h3>
                    <p className="text-gray-400">North America</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Discover work opportunities in Canada's welcoming environment with excellent quality of life.
                </p>
                <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">View Work Opportunities</span>
                </div>
              </CardContent>
            </Card>

            {/* Australia */}
            <Card className="bg-white/5 backdrop-blur-sm border-green-400/20 hover:border-green-400/40 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleCountrySelect('australia')}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🇦🇺</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Australia</h3>
                    <p className="text-gray-400">Asia Pacific</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Find work opportunities in Australia's growing economy with beautiful landscapes and cities.
                </p>
                <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">View Work Opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
