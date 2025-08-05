"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const vendors = [
  {
    name: "Ferguson",
    logo: "/images/vendors/ferguson-light.svg",
    delay: "0ms",
    hasWhiteText: true
  },
  {
    name: "James Hardie",
    logo: "/images/vendors/JamesHardie Logo.svg",
    delay: "100ms",
    hasWhiteText: false
  },
  {
    name: "JEMA",
    logo: "/images/vendors/jema-logo.svg",
    delay: "200ms",
    hasWhiteText: false
  },
  {
    name: "Knoll",
    logo: "/images/vendors/Knoll-logo.png",
    delay: "300ms",
    hasWhiteText: false
  },
  {
    name: "LP SmartSide",
    logo: "/images/vendors/LP-SmartSide-Logo.jpg",
    delay: "400ms",
    hasWhiteText: false
  },
  {
    name: "Mohawk",
    logo: "/images/vendors/Mohawk Logo Color.webp",
    delay: "500ms",
    hasWhiteText: false,
    scale: 1.4
  },
  {
    name: "Negwer",
    logo: "/images/vendors/negwer logo.svg",
    delay: "600ms",
    hasWhiteText: false,
    scale: 1.5
  },
  {
    name: "Norrenberns Lumber",
    logo: "/images/vendors/norrenberns lumber.png",
    delay: "700ms",
    hasWhiteText: false,
    scale: 1.3
  },
  {
    name: "Sherwin Williams",
    logo: "/images/vendors/sherwinwilliams logo.png",
    delay: "800ms",
    hasWhiteText: false
  },
  {
    name: "Simpson Strong-Tie",
    logo: "/images/vendors/simpsonstrongtielogo.jpg",
    delay: "900ms",
    hasWhiteText: false
  },
  {
    name: "Virginia Tile",
    logo: "/images/vendors/virginiatile-logo.svg",
    delay: "1000ms",
    hasWhiteText: false
  }
]

export default function VendorCarousel() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl md:text-7xl font-thin text-white mb-8">Our Trusted Partners</h2>
          <p className="text-2xl font-light text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Working with industry-leading vendors to deliver exceptional quality and reliability
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-8" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
          
          {/* Carousel container */}
          <div className="flex space-x-16 overflow-hidden">
            {/* First set of vendors */}
            <div className="flex space-x-16 animate-scroll">
              {vendors.map((vendor, index) => (
                <div
                  key={`first-${index}`}
                  className={`flex-shrink-0 group transition-all duration-700 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: vendor.delay }}
                >
                  <div className={`relative backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 min-w-[200px] h-[120px] flex items-center justify-center ${
                    vendor.hasWhiteText 
                      ? 'bg-black border-slate-700/50 hover:border-blue-500/50' 
                      : 'bg-white border-slate-300/50 hover:border-blue-500/50'
                  }`}>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={vendor.logo}
                        alt={vendor.name}
                        width={160}
                        height={80}
                        className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-all duration-500"
                        style={{ 
                          transform: vendor.scale ? `scale(${vendor.scale})` : 'scale(1)'
                        }}
                      />
                      {/* Hover overlay */}
                      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        vendor.hasWhiteText 
                          ? 'bg-gradient-to-br from-blue-500/10 to-transparent' 
                          : 'bg-gradient-to-br from-blue-500/5 to-transparent'
                      }`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-16 animate-scroll">
              {vendors.map((vendor, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 group transition-all duration-700 hover:scale-110"
                >
                  <div className={`relative backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 min-w-[200px] h-[120px] flex items-center justify-center ${
                    vendor.hasWhiteText 
                      ? 'bg-black border-slate-700/50 hover:border-blue-500/50' 
                      : 'bg-white border-slate-300/50 hover:border-blue-500/50'
                  }`}>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={vendor.logo}
                        alt={vendor.name}
                        width={160}
                        height={80}
                        className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-all duration-500"
                        style={{ 
                          transform: vendor.scale ? `scale(${vendor.scale})` : 'scale(1)'
                        }}
                      />
                      {/* Hover overlay */}
                      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        vendor.hasWhiteText 
                          ? 'bg-gradient-to-br from-blue-500/10 to-transparent' 
                          : 'bg-gradient-to-br from-blue-500/5 to-transparent'
                      }`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={`w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
      </div>
    </section>
  )
} 