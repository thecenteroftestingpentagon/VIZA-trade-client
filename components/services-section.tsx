"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Plane, BookOpen, FileCheck, Globe, Award, Users } from "lucide-react"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("visa")

  return (
    <section className="relative py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-green-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive immigration and visa services to help you achieve your global mobility goals.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "visa", label: "Visa Services", icon: Plane },
            { id: "immigration", label: "Immigration", icon: Globe },
            { id: "work", label: "Work Permits", icon: FileCheck },
            { id: "education", label: "Education", icon: BookOpen },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`gap-2 ${activeTab === tab.id
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "border-teal-700/50 text-gray-300 hover:text-white hover:bg-teal-800/50"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {activeTab === "visa" && (
            <>
              <ServiceCard
                icon={Plane}
                title="Tourist Visa"
                description="Visit foreign countries for leisure, family visits, or medical treatment with our tourist visa services."
                features={["Fast processing", "Document assistance", "Visa interview preparation"]}
                link="/visa/tourist"
              />
              <ServiceCard
                icon={BookOpen}
                title="Student Visa"
                description="Pursue education abroad with our comprehensive student visa services for global universities."
                features={["University applications", "Financial documentation", "Pre-departure guidance"]}
                link="/student-visa"
              />
              <ServiceCard
                icon={FileCheck}
                title="Business Visa"
                description="Expand your business globally with our specialized business visa services for entrepreneurs."
                features={["Business plan preparation", "Market entry strategy", "Business networking"]}
                link="/business-visa"
              />
            </>
          )}

          {activeTab === "immigration" && (
            <>
              <ServiceCard
                icon={Globe}
                title="Permanent Residency"
                description="Settle permanently in your dream country with our PR visa services and expert guidance."
                features={["Points assessment", "Documentation support", "Settlement assistance"]}
                link="/permanent-residency"
              />
              <ServiceCard
                icon={Users}
                title="Family Immigration"
                description="Reunite with your family members abroad through our family sponsorship programs."
                features={["Relationship verification", "Sponsorship guidance", "Settlement planning"]}
                link="/family-sponsorship"
              />
              <ServiceCard
                icon={Award}
                title="Citizenship"
                description="Achieve citizenship in your new home country with our comprehensive citizenship services."
                features={["Eligibility assessment", "Documentation preparation", "Citizenship test preparation"]}
                link="/citizenship"
              />
            </>
          )}

          {activeTab === "work" && (
            <>
              <ServiceCard
                icon={FileCheck}
                title="Skilled Worker Visa"
                description="Work abroad as a skilled professional with our specialized work visa services."
                features={["Skills assessment", "Job matching", "Work permit processing"]}
                link="/work-visa"
              />
              <ServiceCard
                icon={Award}
                title="Entrepreneur Visa"
                description="Start or invest in a business abroad with our entrepreneur visa programs."
                features={["Business plan development", "Investment guidance", "Market analysis"]}
                link="/startup-visa"
              />
              <ServiceCard
                icon={Users}
                title="Temporary Work Permits"
                description="Secure short-term work opportunities abroad with our temporary work permit services."
                features={["Employer verification", "Contract review", "Visa processing"]}
                link="/work"
              />
            </>
          )}

          {activeTab === "education" && (
            <>
              <ServiceCard
                icon={BookOpen}
                title="University Admissions"
                description="Get accepted to top universities worldwide with our comprehensive admissions services."
                features={["University selection", "Application preparation", "Scholarship guidance"]}
                link="/student-visa"
              />
              <ServiceCard
                icon={Globe}
                title="Post-Study Work"
                description="Transition from study to work with our post-graduation work permit services."
                features={["Eligibility assessment", "Application support", "Career guidance"]}
                link="/work-visa"
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  features: string[];
  link: string;
}

function ServiceCard({ icon: Icon, title, description, features, link }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-teal-800/30 p-6 hover:border-green-500/50 transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-teal-500 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        onClick={() => window.location.href = link}
      >
        Learn More
      </Button>
    </motion.div>
  )
}

