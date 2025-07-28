"use client"

import { useEffect, useState } from "react"

const stats = [
  { label: "Years in Business", value: 25, suffix: "+" },
  { label: "Square Feet Built", value: 2000000, suffix: "+", format: "abbreviated" },
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Safety Rating", value: 0.85, suffix: "", format: "decimal" },
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
    <span className="text-4xl font-bold text-orange-500">
      {formatNumber(count, format)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proven Track Record</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <AnimatedCounter target={stat.value} format={stat.format} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
