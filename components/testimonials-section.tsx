"use client"

"use client";
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const testimonials = [
    {
      name: "Rajesh Patel",
      location: "Anand, Gujarat",
      image: "/ ?height=100&width=100",
      text: "Being from Anand, I was worried about finding reliable visa consultancy services locally. VIZA TRADE exceeded my expectations! Their team helped me secure my Canada PR within 8 months. Their office is conveniently located and the staff is very professional.",
      rating: 5,
      service: "Canada PR Visa",
    },
    {
      name: "Priya Shah",
      location: "Anand, Gujarat",
      image: "?height=100&width=100",
      text: "As a local student from Anand, I was confused about studying abroad. VIZA TRADE guided me step by step and helped me get admission to University of Melbourne. Their personalized approach and local understanding made all the difference!",
      rating: 5,
      service: "Study Visa - Australia",
    },
    {
      name: "Kiran Modi",
      location: "Anand, Gujarat",
      image: "/ ?height=100&width=100",
      text: "I work in Anand's dairy industry and wanted to explore opportunities in New Zealand. VIZA TRADE helped me understand the entire process and successfully got my work visa. Their expertise in agricultural sector visas is excellent!",
      rating: 5,
      service: "Work Visa - New Zealand",
    },
    {
      name: "Sneha Desai",
      location: "Anand, Gujarat",
      image: "/ ?height=100&width=100",
      text: "My husband and I from Anand wanted to visit our relatives in the USA. VIZA TRADE made the tourist visa process so smooth. They understand the local community needs and provide excellent support in Gujarati too!",
      rating: 5,
      service: "Tourist Visa - USA",
    },
    {
      name: "Mehul Patel",
      location: "Anand, Gujarat",
      image: "/ ?height=100&width=100",
      text: "Being a local businessman in Anand, I needed help with business visa for Germany. VIZA TRADE's team provided excellent guidance and handled all documentation perfectly. Great to have such professional service right here in Anand!",
      rating: 5,
      service: "Business Visa - Germany",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="relative py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Client <span className="text-green-400">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience with our visa and immigration services.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-teal-800/30 p-8 relative"
                  >
                    <div className="absolute top-6 right-8 text-green-400/20">
                      <Quote className="h-24 w-24" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-400 flex items-center justify-center bg-slate-700/50">
                          <span className="text-green-400 text-2xl font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? "text-orange-400" : "text-gray-600"}`}
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>

                        <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                        <div>
                          <h4 className="font-bold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.location}</p>
                          <div className="mt-2">
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                              {testimonial.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-teal-700/50 text-gray-300 hover:text-white hover:bg-teal-800/50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-green-400" : "bg-slate-600"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-teal-700/50 text-gray-300 hover:text-white hover:bg-teal-800/50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
