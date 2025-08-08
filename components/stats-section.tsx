"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Award, Globe, CheckCircle } from "lucide-react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    clients: 0,
    success: 0,
    countries: 0,
    experience: 0,
  })

  const targetCounts = {
    clients: 5000,
    success: 98,
    countries: 25,
    experience: 10,
  }

  useEffect(() => {
    setIsVisible(true)

    if (isVisible) {
      const duration = 2000 // 2 seconds
      const interval = 20 // update every 20ms
      const steps = duration / interval

      const timers = Object.keys(targetCounts).map((key) => {
        const target = targetCounts[key as keyof typeof targetCounts]
        const increment = target / steps

        return setInterval(() => {
          setCounts((prev) => {
            const current = prev[key as keyof typeof prev]
            if (current >= target) {
              clearInterval(timers[0])
              return prev
            }
            return {
              ...prev,
              [key]: Math.min(Math.ceil(current + increment), target),
            }
          })
        }, interval)
      })

      return () => {
        timers.forEach((timer) => clearInterval(timer))
      }
    }
  }, [isVisible])

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            icon={Users}
            value={counts.clients.toLocaleString()}
            label="Happy Clients"
            color="green"
            delay={0}
          />
          <StatCard icon={CheckCircle} value={`${counts.success}%`} label="Success Rate" color="orange" delay={0.1} />
          <StatCard
            icon={Globe}
            value={counts.countries.toString()}
            label="Countries Served"
            color="teal"
            delay={0.2}
          />
          <StatCard icon={Award} value={`${counts.experience}+`} label="Years Experience" color="blue" delay={0.3} />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  color,
  delay,
}: {
  icon: any
  value: string
  label: string
  color: "green" | "orange" | "teal" | "blue"
  delay: number
}) {
  const colorClasses = {
    green: "from-green-400 to-green-500 text-green-400",
    orange: "from-orange-400 to-orange-500 text-orange-400",
    teal: "from-teal-400 to-teal-500 text-teal-400",
    blue: "from-blue-400 to-blue-500 text-blue-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-teal-800/30 p-6 text-center"
    >
      <div
        className={`w-14 h-14 rounded-full bg-gradient-to-r ${colorClasses[color]} bg-opacity-20 mx-auto mb-4 flex items-center justify-center`}
      >
        <Icon className={`h-7 w-7 ${colorClasses[color].split(" ")[2]}`} />
      </div>
      <div className={`text-3xl font-bold mb-2 ${colorClasses[color].split(" ")[2]}`}>{value}</div>
      <div className="text-gray-300 text-sm">{label}</div>
    </motion.div>
  )
}
