"use client";
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Clock, Phone, MapPin } from "lucide-react"
import { format } from "date-fns"

export default function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    service: "pr-visa",
    date: undefined as Date | undefined,
    time: "",
    consultationType: "call", // "call" or "visit"
    countries: [] as string[], // Array for multiple country selection
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Validate contact number
    if (name === "contactNo") {
      // Only allow digits and limit to 10 characters
      const numericValue = value.replace(/\D/g, "").slice(0, 10)
      setFormData((prev) => ({ ...prev, [name]: numericValue }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleTimeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, time: value }))
  }

  const handleConsultationTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, consultationType: value }))
  }

  const handleCountryChange = (country: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      countries: checked
        ? [...prev.countries, country]
        : prev.countries.filter((c) => c !== country)
    }))
  }

  // Time slots from 10 AM to 6 PM (1-hour intervals)
  const timeSlots = [
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "17:00", label: "5:00 PM" },
    { value: "18:00", label: "6:00 PM" },
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate contact number length
    if (formData.contactNo.length !== 10) {
      alert("Contact number must be exactly 10 digits")
      return
    }

    // Validate date selection
    if (!formData.date) {
      alert("Please select a consultation date")
      return
    }

    // Validate time selection
    if (!formData.time) {
      alert("Please select a consultation time")
      return
    }

    // Validate countries selection
    if (formData.countries.length === 0) {
      alert("Please select at least one country")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const consultationMessage = `
Consultation Booking Details:
- Service: ${getServiceName(formData.service)}
- Preferred Date: ${formData.date ? format(formData.date, 'PPP') : 'Not selected'}
- Preferred Time: ${timeSlots.find(slot => slot.value === formData.time)?.label || formData.time}
- Consultation Type: ${formData.consultationType === 'call' ? 'Phone Call' : 'Office Visit'}
- Countries of Interest: ${formData.countries.join(', ')}

Please confirm my consultation booking and provide further details.`

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.contactNo,
          service: getServiceName(formData.service),
          country: formData.countries.join(', '),
          message: consultationMessage,
          formType: 'Consultation Booking'
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          service: "pr-visa",
          date: undefined,
          time: "",
          consultationType: "call",
          countries: [],
        })

        // Show success message
        alert('Thank you! Your consultation has been booked successfully. You will receive a confirmation email shortly.')

        // Optional: Redirect to WhatsApp for immediate assistance
        const whatsappMessage = `Hi! I just booked a consultation for ${getServiceName(formData.service)}. My booking details: Date: ${formData.date ? format(formData.date, 'PPP') : ''}, Time: ${timeSlots.find(slot => slot.value === formData.time)?.label || ''}`
        window.open(`https://wa.me/8160050554?text=${encodeURIComponent(whatsappMessage)}`, '_blank')

      } else {
        throw new Error(result.error || 'Failed to submit consultation booking')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      alert('There was an error submitting your consultation booking. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getServiceName = (value: string) => {
    const services = {
      'pr-visa': 'Permanent Residency Visa',
      'work-visa': 'Work Visa',
      'study-visa': 'Study Visa',
      'visit-visa': 'Visit Visa',
      'business-visa': 'Business Visa',
      'family-visa': 'Family Visa'
    }
    return services[value as keyof typeof services] || value
  }

  return (
    <div id="consultation-form" className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-teal-800/50 p-6 shadow-lg">
      <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4"> {/* Big logo for form */}
        <img
          src="/assets/icon.png"
          alt="VIZA TRADE Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex items-center justify-center mb-6">

        <h2 className={`${compact ? "text-xl" : "text-2xl"} font-bold text-white`}>Book Free Consultation</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-slate-700/50 border-teal-700/50 text-white"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="bg-slate-700/50 border-teal-700/50 text-white"
            required
          />
        </div>

        <div>
          <Label htmlFor="contactNo">Contact No</Label>
          <Input
            id="contactNo"
            name="contactNo"
            type="tel"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Enter 10-digit phone number"
            className="bg-slate-700/50 border-teal-700/50 text-white"
            maxLength={10}
            pattern="[0-9]{10}"
            title="Please enter exactly 10 digits"
            required
          />
        </div>

        <div>
          <Label>Consultation Type</Label>
          <RadioGroup
            value={formData.consultationType}
            onValueChange={handleConsultationTypeChange}
            className="grid grid-cols-2 gap-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="call" id="call" />
              <Label htmlFor="call" className="cursor-pointer flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Schedule a Call
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="visit" id="visit" />
              <Label htmlFor="visit" className="cursor-pointer flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Schedule a Visit
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label>Consultation Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start bg-slate-700/50 border-teal-700/50 text-white hover:bg-slate-600/50"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.date ? format(formData.date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-slate-800 border-teal-700/50">
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={handleDateChange}
                disabled={(date) => date < new Date()}
                initialFocus
                className="bg-slate-800 text-white"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label>Consultation Time</Label>
          <Select value={formData.time} onValueChange={handleTimeChange}>
            <SelectTrigger className="bg-slate-700/50 border-teal-700/50 text-white">
              <Clock className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Select time slot" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-teal-700/50">
              {timeSlots.map((slot) => (
                <SelectItem
                  key={slot.value}
                  value={slot.value}
                  className="text-white hover:bg-slate-700 focus:bg-slate-700"
                >
                  {slot.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Visa Type </Label>
          <RadioGroup
            value={formData.service}
            onValueChange={handleServiceChange}
            className="grid grid-cols-2 gap-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pr-visa" id="pr-visa" />
              <Label htmlFor="pr-visa" className="cursor-pointer">
                PR Visa
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student-visa" id="student-visa" />
              <Label htmlFor="student-visa" className="cursor-pointer">
                Student Visa
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="work-permit" id="work-permit" />
              <Label htmlFor="work-permit" className="cursor-pointer">
                Work Permit
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tourist-visa" id="tourist-visa" />
              <Label htmlFor="tourist-visa" className="cursor-pointer">
                Tourist Visa
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other-visa" id="other-visa" />
              <Label htmlFor="other-visa" className="cursor-pointer">
                Other Visa
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label>Interested Countries</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { value: "usa", label: "USA" },
              { value: "canada", label: "Canada" },
              { value: "europe", label: "Europe" },
              { value: "uk", label: "UK" },
              { value: "hungary", label: "Hungary" },
              { value: "germany", label: "Germany" },
              { value: "poland", label: "Poland" },
              { value: "australia", label: "Australia" },
              { value: "new-zealand", label: "New Zealand" },
            ].map((country) => (
              <div key={country.value} className="flex items-center space-x-2">
                <Checkbox
                  id={country.value}
                  checked={formData.countries.includes(country.value)}
                  onCheckedChange={(checked) => handleCountryChange(country.value, checked as boolean)}
                />
                <Label htmlFor={country.value} className="cursor-pointer">
                  {country.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Booking Consultation...
            </div>
          ) : (
            'Book Free Consultation'
          )}
        </Button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            ✅ Consultation booked successfully! Check your email for confirmation.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            ❌ Error booking consultation. Please try again or contact us directly.
          </div>
        )}
      </form>
    </div>
  )
}
