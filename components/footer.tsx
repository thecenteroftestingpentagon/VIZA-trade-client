"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Globe, Mail, Phone, MapPin, ArrowRight, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-md border-t border-teal-800/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 flex items-center justify-center"> {/* Replaced image with text logo */}
                <span className="text-green-400 text-2xl font-bold">VIZA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-green-400">VIZA</span> TRADE
                </h3>
                <p className="text-xs text-gray-400">Global Trade Simplified Visas</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              We are a premier visa and immigration consultancy dedicated to helping people achieve their global
              mobility goals safely and efficiently.
            </p>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                <button
                  onClick={() => window.open('https://maps.google.com/?q=210, Raghuvir City Centre, Anand, Gujarat', '_blank')}
                  className="text-gray-300 text-sm hover:text-white transition-colors text-left"
                >
                  210, Raghuvir City Centre, Anand, Gujarat
                </button>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <button
                  onClick={() => window.open('tel:8160050554', '_self')}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  +91 8160050554
                </button>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <button
                  onClick={() => window.open('mailto:main.vizatradee@gmail.com', '_self')}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  main.vizatradee@gmail.com
                </button>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-green-400 flex-shrink-0" />
                <button
                  onClick={() => window.open('https://www.instagram.com/viza.trade27?igsh=MXh6OWVzZncwbTFicg==', '_blank')}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  @viza.trade27
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Visa Services", href: "/visa" },
                { label: "Immigration", href: "/immigration" },
                { label: "Work Permits", href: "/work" },
                { label: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Visa Services</h3>
            <ul className="space-y-3">
              {[
                { service: "Tourist Visa", href: "/visa/tourist" },
                { service: "Business Visa", href: "/visa/business" },
                { service: "Student Visa", href: "/visa/study" },
                { service: "Work Visa", href: "/visa/work" },
                { service: "Family Visa", href: "/visa/family" },
                { service: "PR Visa", href: "/visa/pr" },
              ].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {item.service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest visa and immigration updates.
            </p>

            <div className="space-y-4">
              <div className="flex">
                <Input
                  placeholder="Your email address"
                  className="bg-slate-800/50 border-teal-700/50 text-white rounded-r-none"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-l-none">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex space-x-4">
                {[
                  { name: "facebook", url: "https://www.facebook.com/vizatrade" },
                  { name: "twitter", url: "https://twitter.com/vizatrade" },
                  { name: "instagram", url: "https://www.instagram.com/viza.trade27" },
                  { name: "linkedin", url: "https://www.linkedin.com/company/vizatrade" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-4 h-4 text-white flex items-center justify-center">{social.name.charAt(0).toUpperCase()}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Viza Trade. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-green-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-green-400 text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-gray-400 hover:text-green-400 text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
