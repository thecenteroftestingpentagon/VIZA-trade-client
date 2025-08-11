"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { ChevronDown, Globe, Menu, Instagram, Phone, MapPin } from "lucide-react"

export default function Header() {
  return (
    <header className="relative z-10">
      {/* Top bar - removed countries */}
      <div className="bg-teal-950/80 backdrop-blur-sm py-1 px-4 text-xs text-gray-300 hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-end gap-x-4">
          {/* Countries removed */}
        </div>
      </div>

      {/* Main header */}
      <div className="bg-teal-900/70 backdrop-blur-md py-3 px-4 border-b border-teal-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-28 h-28 flex items-center justify-center"> {/* Replaced image with text logo */}
              <span className="text-green-400 text-2xl font-bold">VIZA</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold"> {/* Even bigger font size */}
                <span className="text-green-400">VIZA</span> TRADE
              </h1>
              <p className="text-base text-gray-300">Global Trade Simplified Visas</p> {/* Even bigger font size */}
            </div>
          </div>

          {/* Contact info */}
          <div className="hidden md:block text-sm text-gray-300">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => window.open('https://maps.google.com/?q=210, Raghuvir City Centre, Anand, Gujarat', '_blank')}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <MapPin className="w-3 h-3" />
                210, Raghuvir City Centre, Anand, Gujarat
              </Button>
              <Button
                variant="ghost"
                onClick={() => window.open('tel:8160050554', '_self')}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3" />
                +91 8160050554
              </Button>
              <Button
                variant="ghost"
                onClick={() => window.open('https://www.instagram.com/viza.trade27?igsh=MXh6OWVzZncwbTFicg==', '_blank')}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Instagram className="w-3 h-3" />
                @viza.trade27
              </Button>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => {
              // Navigate directly to the consultation page
              window.location.href = '/consultation';
            }}
          >
            BOOK FREE CONSULTATION
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-teal-800/50 backdrop-blur-md py-2 px-4 border-b border-teal-700/30">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="hidden md:flex items-center space-x-1">
            <NavItem href="/" active>
              Home
            </NavItem>
            <NavItem href="/about">About Us</NavItem>
            <VisaDropdown />
            <WorkDropdown />
            <ImmigrationDropdown />
            <ServicesDropdown />
            <NavItem href="/contact">Contact Us</NavItem>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  )
}

function VisaDropdown() {
  const visaTypes = [
    { name: "Tourist Visa", value: "tourist", icon: "✈️" },
    { name: "Study Visa", value: "study", icon: "📚" },
    { name: "Work Visa", value: "work", icon: "💼" },
    { name: "Business Visa", value: "business", icon: "🏢" },
    { name: "Family Visa", value: "family", icon: "👨‍👩‍👧‍👦" },
    { name: "PR Visa", value: "pr", icon: "🏡" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-4 py-2 text-sm font-medium flex items-center transition-colors text-gray-200 hover:bg-teal-700/50 hover:text-white">
          Visa
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-teal-800/95 backdrop-blur-md border-teal-700/50">
        <DropdownMenuItem asChild>
          <Link href="/visa" className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-teal-700/50">
            <Globe className="w-4 h-4" />
            All Visa Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-teal-700/50" />
        {visaTypes.map((visa) => (
          <DropdownMenuItem key={visa.value} asChild>
            <Link href={`/visa/${visa.value}`} className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-teal-700/50">
              <span className="text-sm">{visa.icon}</span>
              {visa.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function WorkDropdown() {
  const countries = [
    { name: "United States", value: "usa", flag: "🇺🇸" },
    { name: "Canada", value: "canada", flag: "🇨🇦" },
    { name: "Australia", value: "australia", flag: "🇦🇺" },
    { name: "United Kingdom", value: "uk", flag: "🇬🇧" },
    { name: "Germany", value: "germany", flag: "🇩🇪" },
    { name: "France", value: "france", flag: "🇫🇷" },
    { name: "Netherlands", value: "netherlands", flag: "🇳🇱" },
    { name: "Singapore", value: "singapore", flag: "🇸🇬" },
    { name: "New Zealand", value: "new-zealand", flag: "🇳🇿" },
    { name: "UAE", value: "uae", flag: "🇦🇪" },
    { name: "Qatar", value: "qatar", flag: "🇶🇦" },
    { name: "Saudi Arabia", value: "saudi-arabia", flag: "🇸🇦" },
    { name: "Japan", value: "japan", flag: "🇯🇵" },
    { name: "South Korea", value: "south-korea", flag: "🇰🇷" },
    { name: "Italy", value: "italy", flag: "🇮🇹" },
    { name: "Spain", value: "spain", flag: "🇪🇸" },
    { name: "Mexico", value: "mexico", flag: "🇲🇽" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-4 py-2 text-sm font-medium flex items-center transition-colors text-gray-200 hover:bg-teal-700/50 hover:text-white">
          Work
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-teal-800/95 backdrop-blur-md border-teal-700/50">
        <DropdownMenuItem asChild>
          <Link href="/work" className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-teal-700/50">
            <Globe className="w-4 h-4" />
            All Work Opportunities
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-teal-700/50" />
        {countries.map((country) => (
          <DropdownMenuItem key={country.value} asChild>
            <Link href={`/work-in-${country.value}`} className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-teal-700/50">
              <span className="text-sm">{country.flag}</span>
              Work in {country.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ImmigrationDropdown() {
  const immigrationServices = [
    { name: "Permanent Residency", value: "pr", icon: "🏡" },
    { name: "Citizenship", value: "citizenship", icon: "📜" },
    { name: "Express Entry", value: "express-entry", icon: "🚀" },
    { name: "Provincial Nominee", value: "pnp", icon: "🌟" },
    { name: "Family Sponsorship", value: "family", icon: "👨‍👩‍👧‍👦" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-4 py-2 text-sm font-medium flex items-center transition-colors text-gray-200 hover:bg-teal-700/50 hover:text-white">
          Immigration
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-teal-800/95 backdrop-blur-md border-teal-700/50">
        <DropdownMenuItem asChild>
          <Link href="/immigration" className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-teal-700/50">
            <Globe className="w-4 h-4" />
            All Immigration Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-teal-700/50" />
        {immigrationServices.map((service) => (
          <DropdownMenuItem key={service.value} asChild>
            <Link
              href={
                service.value === "pr"
                  ? "/permanent-residency"
                  : service.value === "citizenship"
                    ? "/citizenship"
                    : service.value === "express-entry"
                      ? "/express-entry"
                      : service.value === "pnp"
                        ? "/provincial-nominee"
                        : service.value === "family"
                          ? "/family-sponsorship"
                          : "/immigration"
              }
              className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-teal-700/50"
            >
              <span className="text-sm">{service.icon}</span>
              {service.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ServicesDropdown() {
  const otherServices = [
    { name: "Document Translation", value: "translation", icon: "📄" },
    { name: "Attestation Services", value: "attestation", icon: "✅" },
    { name: "Travel Insurance", value: "insurance", icon: "🛡️" },
    { name: "Job Search Assistance", value: "job-search", icon: "💼" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-4 py-2 text-sm font-medium flex items-center transition-colors text-gray-200 hover:bg-teal-700/50 hover:text-white">
          Other Services
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-teal-800/95 backdrop-blur-md border-teal-700/50">
        <DropdownMenuItem asChild>
          <Link href="/services" className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-teal-700/50">
            <Globe className="w-4 h-4" />
            All Other Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-teal-700/50" />
        {otherServices.map((service) => (
          <DropdownMenuItem key={service.value} asChild>
            <Link
              href={
                service.value === "translation"
                  ? "/document-translation"
                  : service.value === "attestation"
                    ? "/attestation-services"
                    : service.value === "insurance"
                      ? "/travel-insurance"
                      : service.value === "job-search"
                        ? "/job-search"
                        : "/services"
              }
              className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-teal-700/50"
            >
              <span className="text-sm">{service.icon}</span>
              {service.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function NavItem({
  children,
  href,
  active = false,
  hasDropdown = false,
}: {
  children: React.ReactNode
  href: string
  active?: boolean
  hasDropdown?: boolean
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-medium flex items-center transition-colors ${active ? "bg-orange-500 text-white" : "text-gray-200 hover:bg-teal-700/50 hover:text-white"
        }`}
    >
      {children}
      {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
    </Link>
  )
}
