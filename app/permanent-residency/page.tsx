"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Home, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function PermanentResidencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
          <Home className="w-8 h-8 text-green-400" /> Permanent Residency (PR)
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Secure your future abroad with our expert PR visa services. We guide you through every step, from eligibility assessment to final approval, for countries like Canada, Australia, UK, and more.
        </p>
        <ul className="list-disc text-lg text-gray-200 mb-8 max-w-xl mx-auto pl-6">
          <li>Comprehensive profile evaluation and points calculation</li>
          <li>Document preparation and verification</li>
          <li>Application submission and follow-up</li>
          <li>Post-landing support and settlement guidance</li>
        </ul>
        <div className="bg-teal-800/60 rounded-lg p-6 max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-base text-gray-100">
            <li>Experienced PR consultants for multiple countries</li>
            <li>High success rate and transparent process</li>
            <li>Personalized support for families and individuals</li>
            <li>Up-to-date with latest immigration policies</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
