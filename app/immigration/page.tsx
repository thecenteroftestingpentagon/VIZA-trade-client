"use client"
import Footer from "@/components/footer"

export default function ImmigrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-orange-500">Immigration</span> Services
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Explore our expert immigration services, including PR, citizenship, express entry, provincial nominee, and family sponsorship programs.
        </p>
        {/* Add more details or cards for each immigration service as needed */}
      </main>
      <Footer />
    </div>
  )
}
