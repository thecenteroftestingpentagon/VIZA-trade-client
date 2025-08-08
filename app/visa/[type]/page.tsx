"use client"

import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const visaTypes = {
    tourist: {
        title: "Tourist Visa",
        description: "Visit foreign countries for leisure, family visits, or medical treatment.",
        features: [
            "Fast processing",
            "Document assistance",
            "Visa interview preparation",
            "Travel insurance support"
        ]
    },
    student: {
        title: "Student Visa",
        description: "Pursue education abroad with our comprehensive student visa services.",
        features: [
            "University applications",
            "Financial documentation",
            "Pre-departure guidance",
            "Scholarship assistance"
        ]
    },
    business: {
        title: "Business Visa",
        description: "Expand your business globally with specialized visa services.",
        features: [
            "Business plan preparation",
            "Market entry strategy",
            "Business networking",
            "Legal compliance"
        ]
    }
}

export default function VisaTypePage() {
    const params = useParams()
    const router = useRouter()
    const type = params.type as string
    const visaInfo = visaTypes[type as keyof typeof visaTypes]

    useEffect(() => {
        // Redirect to main visa page if invalid visa type
        if (!visaInfo) {
            router.push("/visa")
        }
    }, [visaInfo, router])

    if (!visaInfo) return null

    return (
        <div className="min-h-screen bg-[#0a192f] text-white">
            <Header />
            <main className="max-w-7xl mx-auto px-4 py-12">
                {/* Navigation */}
                <div className="flex justify-between items-center mb-12">
                    <Link href="/">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Home className="w-4 h-4 mr-2" />
                            Home
                        </Button>
                    </Link>
                    <Link href="/visa">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            Back to Visas
                        </Button>
                    </Link>
                </div>

                {/* Content */}
                <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-teal-700/30">
                    <h1 className="text-4xl font-bold mb-4">{visaInfo.title}</h1>
                    <p className="text-gray-300 text-lg mb-8">{visaInfo.description}</p>

                    <div className="grid gap-6 md:grid-cols-2 mb-8">
                        {visaInfo.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-lg bg-slate-700/30"
                            >
                                <div className="w-2 h-2 mt-2 rounded-full bg-green-400" />
                                <span className="text-gray-200">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg w-full md:w-auto"
                        onClick={() => {
                            const element = document.getElementById("consultation-form")
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                    >
                        Book Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    )
}
