"use client"

"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const countries = [
    "United States", "Canada", "Australia", "United Kingdom", "Germany",
    "France", "Netherlands", "Singapore", "New Zealand", "UAE",
    "Qatar", "Saudi Arabia", "Japan", "South Korea", "Italy", "Spain", "Mexico"
  ]

  const services = [
    "Work Visa", "Study Visa", "Tourist Visa", "Business Visa",
    "Family Visa", "Permanent Residency", "Citizenship", "Other"
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'General Contact Form'
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          service: "",
          message: ""
        })

        // Optional: Redirect to WhatsApp
        setTimeout(() => {
          const whatsappMessage = `Hi! I just submitted a contact form. My inquiry: ${formData.message.substring(0, 100)}...`
          window.open(`https://wa.me/8160050554?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
        }, 2000)

      } else {
        throw new Error(result.error || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4"> {/* Replaced logo with text */}
              <span className="text-green-400 text-3xl font-bold">VIZA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact <span className="text-green-400">VIZA TRADE</span>
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with our visa experts for personalized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/10 border-green-400/30 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/10 border-green-400/30 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border-green-400/30 text-white"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Country of Interest</Label>
                      <Select onValueChange={(value) => handleSelectChange('country', value)}>
                        <SelectTrigger className="bg-white/10 border-green-400/30 text-white">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-white">Service Type</Label>
                    <Select onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger className="bg-white/10 border-green-400/30 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/10 border-green-400/30 text-white min-h-[120px]"
                      placeholder="Tell us about your visa requirements..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                      ✅ Message sent successfully! We'll get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                      ❌ Error sending message. Please try again or contact us directly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <button
                    onClick={() => window.open('tel:8160050554', '_self')}
                    className="flex items-center gap-4 w-full text-left hover:bg-white/5 p-2 rounded transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-300">+91 8160050554</p>
                    </div>
                  </button>

                  <button
                    onClick={() => window.open('mailto:main.vizatradee@gmail.com', '_self')}
                    className="flex items-center gap-4 w-full text-left hover:bg-white/5 p-2 rounded transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/assets/mail.jpg"
                        alt="Email"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">main.vizatradee@gmail.com</p>
                    </div>
                  </button>

                  <button
                    onClick={() => window.open('https://maps.google.com/?q=210, Raghuvir City Centre, Anand, Gujarat', '_blank')}
                    className="flex items-center gap-4 w-full text-left hover:bg-white/5 p-2 rounded transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Address</h3>
                      <p className="text-gray-300">210, Raghuvir City Centre, Anand, Gujarat</p>
                    </div>
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-400/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We respond to all inquiries within 2 hours during business hours!
                  </p>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 mb-3"
                    onClick={() => window.open('https://wa.me/8160050554?text=Hi! I need assistance with visa services.', '_blank')}
                  >
                    💬 WhatsApp Us Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-600/20 to-purple-600/20 backdrop-blur-sm border-orange-400/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    B2B Partnership
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Looking for business partnerships or corporate visa services? Connect with our business team.
                  </p>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => {
                      const element = document.getElementById('consultation-form');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    🤝 B2B Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
