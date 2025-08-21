"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageSquare, Calendar, DollarSign, Users, FileText, Phone, Mail, Clock, Headphones } from "lucide-react"
import Link from "next/link"
import ConsultationForm from "@/components/consultation-form"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* ================== CONSULTATION FORM (TOP) ================== */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white">
              Book Your <span className="text-green-400">Free Consultation</span> Now
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  )
}