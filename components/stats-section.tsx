"use client"

import { useEffect, useState } from "react"
import { Award, Building, Users, Shield } from "lucide-react"

const stats = [
  { 
    number: "25+", 
    label: "Years of Excellence", 
    icon: Award, 
    delay: "0ms",
    value: 25,
    suffix: "+",
    description: "Years in Business"
  },
  { 
    number: "2M+", 
    label: "Square Feet Built", 
    icon: Building, 
    delay: "200ms",
    value: 2000000,
    suffix: "+",
    format: "abbreviated",
    description: "Square Feet Built"
  },
  { 
    number: "150+", 
    label: "Projects Completed", 
    icon: Users, 
    delay: "400ms",
    value: 150,
    suffix: "+",
    description: "Projects Completed"
  },
  { 
    number: "0.85", 
    label: "EMR Safety Rating", 
    icon: Shield, 
    delay: "600ms",
    value: 0.85,
    suffix: "",
    format: "decimal",
    description: "Safety Rating"
  },
]

function formatNumber(num: number, format?: string) {
  if (format === "abbreviated") {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
  }
  if (format === "decimal") {
    return num.toFixed(2)
  }
  return num.toLocaleString()
}

function AnimatedCounter({ target, format, suffix }: { target: number; format?: string; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="text-5xl md:text-6xl font-thin text-white group-hover:text-orange-400 transition-colors duration-500">
      {formatNumber(count, format)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="zoom-animate text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-thin text-white mb-8">Excellence in Numbers</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="zoom-animate group cursor-pointer" style={{ transitionDelay: stat.delay }}>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4 border border-slate-700/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-500">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <AnimatedCounter target={stat.value} format={stat.format} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg font-medium text-slate-400 tracking-wide group-hover:text-white transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
