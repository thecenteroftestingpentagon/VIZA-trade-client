// This file has been moved to /visa/tourist/page.tsx for correct routing. You can delete this file.

"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Plane, GraduationCap, Briefcase, ArrowRight, Globe2, Phone, Clock, MapPin, Users, Award } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Feature {
  icon: JSX.Element;
  text: string;
  delay: number;
}

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  href: string;
  color: string;
  hoverColor: string;
}

export default function TouristVisaPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features: Feature[] = [
    { icon: <Globe2 className="w-6 h-6" />, text: "Worldwide Coverage", delay: 0.1 },
    { icon: <Clock className="w-6 h-6" />, text: "Fast Processing", delay: 0.2 },
    { icon: <Phone className="w-6 h-6" />, text: "24/7 Support", delay: 0.3 },
    { icon: <MapPin className="w-6 h-6" />, text: "Global Presence", delay: 0.4 },
    { icon: <Users className="w-6 h-6" />, text: "Expert Team", delay: 0.5 },
    { icon: <Award className="w-6 h-6" />, text: "Guaranteed Success", delay: 0.6 },
  ];

  const services: Service[] = [
    {
      icon: <Plane className="w-10 h-10 text-green-400" />,
      title: "Tourist Visa",
      description: "Visit foreign countries for leisure, family visits, or medical treatment with our tourist visa services.",
      features: [
        "Fast processing",
        "Document assistance",
        "Visa interview preparation",
        "Travel insurance support"
      ],
      href: "/visa/tourist",
      color: "from-green-400/20 to-teal-500/20",
      hoverColor: "from-green-400/40 to-teal-500/40"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-green-400" />,
      title: "Student Visa",
      description: "Pursue education abroad with our comprehensive student visa services for global universities.",
      features: [
        "University applications",
        "Financial documentation",
        "Pre-departure guidance",
        "Scholarship assistance"
      ],
      href: "/visa/student",
      color: "from-teal-400/20 to-emerald-500/20",
      hoverColor: "from-teal-400/40 to-emerald-500/40"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-green-400" />,
      title: "Business Visa",
      description: "Expand your business globally with our specialized business visa services for entrepreneurs.",
      features: [
        "Business plan preparation",
        "Market entry strategy",
        "Business networking",
        "Legal compliance"
      ],
      href: "/visa/business",
      color: "from-emerald-400/20 to-green-500/20",
      hoverColor: "from-emerald-400/40 to-green-500/40"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-grid" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-emerald-900/30 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a192f_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#0a192f_100%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      </div>

      <Header />
      <main className="relative min-h-[calc(100vh-200px)] px-4">
        {/* Navigation with floating effect */}
        <div className="max-w-7xl mx-auto pt-8 flex justify-between items-center animate-float">
          <Link href="/" className="transform hover:scale-105 transition-transform">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
          </Link>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all transform hover:scale-105"
            onClick={() => {
              const element = document.getElementById('consultation-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Consultation
          </Button>
        </div>

        <div className="max-w-7xl mx-auto pt-12 pb-12">
          {/* Enhanced Hero Section with Branding */}
          <div className={`flex flex-col items-center text-center mb-16 ${isLoaded ? 'animate-fade-in' : ''}`}>
            <div className="w-32 h-32 mb-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-teal-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
              <img
                src="/assets/icon.png"
                alt="VIZA TRADE"
                className="w-full h-full object-contain relative z-10 animate-float"
              />
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 animate-fade-in-up filter drop-shadow-lg">
              <span className="text-green-400">VIZA</span> TRADE
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up-delay text-gray-300">
              Global Trade Simplified Visas
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mb-12 animate-width glow" />

            {/* Enhanced Features Row with Floating Effect */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-slate-800/50 to-slate-700/50
                    border border-slate-700/50 backdrop-blur-sm
                    hover:border-green-500/50 hover:from-slate-800/60 hover:to-slate-700/60
                    transform hover:scale-105 hover:-translate-y-1
                    transition-all duration-300 cursor-pointer
                    animate-fade-in-up shadow-lg hover:shadow-xl
                    ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${feature.delay}s`,
                    transitionDelay: `${feature.delay}s`
                  }}
                >
                  <div className="text-green-400 animate-bounce-subtle">{feature.icon}</div>
                  <span className="text-gray-200 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative transform hover:-translate-y-2 transition-all duration-300
                  ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r rounded-lg blur-xl opacity-50 
                    group-hover:opacity-100 transition-all duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${service.color})`,
                    transform: 'translateY(4px)'
                  }}
                />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-teal-700/30 
                  rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 
                  shadow-lg hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/10 to-teal-500/10 
                    rounded-full flex items-center justify-center mb-6 
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text 
                    bg-gradient-to-r from-white to-gray-300">{service.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 group/item">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover/item:scale-150 transition-transform" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="block transform transition-transform">
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 
                        hover:from-orange-600 hover:to-orange-700 text-white 
                        group-hover:scale-105 transition-all duration-300
                        shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Enhanced animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        @keyframes bounceSoft {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        @keyframes grid {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-60px) translateY(-60px); }
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .animate-grid {
          animation: grid 20s linear infinite;
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounceSoft 2s ease-in-out infinite;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-up-delay {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes width {
          from { width: 0; }
          to { width: 8rem; }
        }
        .animate-width {
          animation: width 0.8s ease-out 0.4s forwards;
        }
        .glow {
          box-shadow: 0 0 20px theme('colors.green.400');
        }
        /* Improve card hover effects */
        .group:hover .shadow-xl {
          --tw-shadow: 0 0 25px rgba(16, 185, 129, 0.1);
          box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
        }
      `}</style>
    </div>
  )
}
