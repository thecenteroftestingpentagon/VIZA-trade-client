"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle, Users, Building, Target } from "lucide-react"
import BackgroundParticles from "@/components/background-particles"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-teal-900 text-white">
      <Header />
      <main className="relative">
        <BackgroundParticles />

        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-green-400">VIZA</span> TRADE
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a premier visa and immigration consultancy dedicated to helping people achieve their global
                mobility goals safely and efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Our <span className="text-orange-500">Mission</span>
                </h2>
                <p className="text-gray-300">
                  At Viza Trade, our mission is to simplify the complex world of global mobility by providing expert
                  guidance, personalized solutions, and unwavering support to individuals and families seeking to
                  explore new horizons through immigration and visa services.
                </p>

                <h2 className="text-3xl font-bold">
                  Our <span className="text-orange-500">Vision</span>
                </h2>
                <p className="text-gray-300">
                  To be the most trusted name in immigration services globally, known for our integrity, expertise, and
                  commitment to transforming lives through successful immigration journeys.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-teal-800/50 p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Expert Consultants</h4>
                      <p className="text-gray-400">
                        Our team consists of certified immigration experts with years of experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Personalized Approach</h4>
                      <p className="text-gray-400">
                        We create customized immigration strategies tailored to your unique situation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Transparent Process</h4>
                      <p className="text-gray-400">
                        We maintain complete transparency throughout your application process.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">High Success Rate</h4>
                      <p className="text-gray-400">
                        We pride ourselves on our exceptional track record of successful applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative z-10 py-20 px-4 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-green-400">Leadership</span> Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the experts who will guide you through your immigration journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Patel",
                  position: "Founder & CEO",
                  bio: "With over 15 years of experience in immigration consulting, Rajesh has helped thousands of clients achieve their dreams.",
                  icon: Building,
                },
                {
                  name: "Priya Sharma",
                  position: "Head of Visa Services",
                  bio: "Priya specializes in complex visa cases and has a 98% success rate with difficult applications.",
                  icon: Users,
                },
                {
                  name: "Amit Kumar",
                  position: "Immigration Specialist",
                  bio: "Amit is an expert in Canadian and Australian immigration pathways with a background in immigration law.",
                  icon: Target,
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-teal-800/30 p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-4 flex items-center justify-center">
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-green-400 text-center text-sm mb-4">{member.position}</p>
                  <p className="text-gray-300 text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-orange-500">Core</span> Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Integrity",
                  description: "We operate with complete honesty and transparency in all our dealings.",
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our service delivery.",
                },
                {
                  title: "Client-Centric",
                  description: "Our clients' needs and goals are at the center of everything we do.",
                },
                {
                  title: "Innovation",
                  description: "We continuously evolve our processes to deliver better results.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-slate-800/20 backdrop-blur-sm rounded-lg border border-teal-800/30 p-6 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 mb-4 flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
