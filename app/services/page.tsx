"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-orange-500">Other Services</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          We offer a range of additional services to support your global journey, including document translation, attestation, travel insurance, IELTS preparation, and job search assistance.
        </p>
        {/* Add more details or cards for each service as needed */}
      </main>
      <Footer />
    </div>
  )
}
