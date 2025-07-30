"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djEwaDE0VjM0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-white mb-6 leading-tight">
              Building Excellence,{" "}
              <span className="text-blue-500">Delivering Results</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Taylor Leonard Corp is a family-owned, veteran-founded construction company specializing in 
              design-build services for commercial and residential projects since 1990.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
              >
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" 
                className="border-white text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto bg-transparent"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 md:p-6 text-center border border-slate-700">
              <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1 md:mb-2">20+</div>
              <div className="text-sm md:text-base text-slate-300">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 md:p-6 text-center border border-slate-700">
              <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1 md:mb-2">2M+</div>
              <div className="text-sm md:text-base text-slate-300">Sq Ft Built</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 md:p-6 text-center border border-slate-700">
              <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1 md:mb-2">100%</div>
              <div className="text-sm md:text-base text-slate-300">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 md:p-6 text-center border border-slate-700">
              <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1 md:mb-2">0</div>
              <div className="text-sm md:text-base text-slate-300">Safety Violations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
