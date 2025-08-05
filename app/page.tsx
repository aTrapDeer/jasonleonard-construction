"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Award, Users, Building, Shield, ChevronDown } from "lucide-react"
import VendorCarousel from "@/components/vendor-carousel"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const projectRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const testimonialRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Ensure video plays on mobile
  useEffect(() => {
    const video = videoRef.current
    if (video) {
             const playVideo = async () => {
         try {
           video.volume = 0 // Ensure completely silent
           video.muted = true
           await video.play()
         } catch (error) {
           console.log("Video autoplay prevented:", error)
           // Fallback - try to play after user interaction
           const playOnInteraction = () => {
             video.volume = 0
             video.muted = true
             video.play().catch(() => {})
             document.removeEventListener('touchstart', playOnInteraction)
             document.removeEventListener('click', playOnInteraction)
           }
           document.addEventListener('touchstart', playOnInteraction, { once: true })
           document.addEventListener('click', playOnInteraction, { once: true })
         }
       }
      
      if (video.readyState >= 2) {
        playVideo()
      } else {
        video.addEventListener('canplay', playVideo, { once: true })
      }
    }
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: "-10% 0px -10% 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement
        const ratio = entry.intersectionRatio

        if (entry.isIntersecting) {
          // Scale and transform based on intersection ratio
          const scale = 0.8 + ratio * 0.2 // Scale from 0.8 to 1.0
          const translateY = (1 - ratio) * 50 // Move up as it comes into view
          const opacity = Math.min(ratio * 2, 1) // Fade in faster

          element.style.transform = `scale(${scale}) translateY(${translateY}px)`
          element.style.opacity = opacity.toString()

          // Add focal point class when fully in view
          if (ratio > 0.7) {
            element.classList.add("focal-point")
          } else {
            element.classList.remove("focal-point")
          }
        } else {
          element.style.transform = "scale(0.8) translateY(50px)"
          element.style.opacity = "0"
          element.classList.remove("focal-point")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".zoom-animate")
    elements.forEach((el) => {
      const element = el as HTMLElement
      element.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
      element.style.transform = "scale(0.8) translateY(50px)"
      element.style.opacity = "0"
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section - Immersive Full Screen */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="auto"
            controls={false}
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.3}px)`,
            }}
            onCanPlay={(e) => {
              e.currentTarget.play().catch(() => {
                // Fallback if autoplay fails
              });
            }}
          >
            <source src="https://d2v2b8qxbz0m8k.cloudfront.net/ConstructionBRoll.mp4" type="video/mp4" />
          </video>
          
          {/* Video Overlay */}
          <div
            className="absolute inset-0 bg-slate-900/60"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div
            className="transform transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(1 - scrollY * 0.002, 0),
            }}
          >
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-8 px-8 py-3 text-lg font-medium backdrop-blur-sm">
              Family Owned • Veteran Founded • Since 1990
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-thin mb-12 leading-none tracking-tight px-4">
              Taylor Leonard
              <span className="block font-extralight text-blue-400 transform hover:scale-105 transition-transform duration-500">
                Corp
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Full Service Design-Build Construction Excellence
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="bg-blue-500 hover:bg-blue-600 text-white px-16 py-6 text-xl font-medium rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105"
              >
                <Link href="/projects">Explore Our Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-16 py-6 text-xl font-medium rounded-full bg-transparent backdrop-blur-sm transition-all duration-500 hover:scale-105"
              >
                <Link href="/contact">
                  <Calendar className="mr-3 h-6 w-6" />
                  Start Your Project
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            opacity: Math.max(1 - scrollY * 0.01, 0),
          }}
        >
          <div className="flex flex-col items-center text-white/60 animate-bounce">
            <span className="text-sm font-light mb-4 tracking-widest">SCROLL TO EXPLORE</span>
            <ChevronDown className="h-8 w-8" />
          </div>
        </div>
      </section>

      {/* Stats Section - Zooming Cards */}
      <section ref={statsRef} className="py-32 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="zoom-animate text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-thin text-white mb-8">Excellence in Numbers</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              { number: "30+", label: "Years of Excellence", icon: Award, delay: "0ms" },
              { number: "2M+", label: "Square Feet Built", icon: Building, delay: "200ms" },
              { number: "575+", label: "Projects Completed", icon: Users, delay: "400ms" },
              { number: "100%", label: "Satisfaction Rating", icon: Shield, delay: "600ms" },
            ].map((stat, index) => (
              <div key={index} className="zoom-animate group cursor-pointer" style={{ transitionDelay: stat.delay }}>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4 border border-slate-700/50">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6 group-hover:scale-125 transition-transform duration-500">
                      <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-blue-400 transition-colors duration-500">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg font-medium text-slate-400 tracking-wide group-hover:text-white transition-colors duration-500">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Expanding Cards */}
      <section ref={servicesRef} className="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="zoom-animate text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-thin text-white mb-8">Our Expertise</h2>
            <p className="text-2xl font-light text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Full Service Design-Build Construction Services
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-8" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Design-Build",
                description: "Complete design and construction services from concept to completion",
                image: "/images/homepage/designbuild.jpg",
                delay: "0ms",
              },
              {
                title: "Commercial Construction",
                description: "Banks, schools, medical buildings, and warehousing projects",
                image: "/images/markets/pnb-bank.jpg",
                delay: "300ms",
              },
              {
                title: "Residential Construction",
                description: "Custom homes and residential projects with exceptional craftsmanship",
                image: "/images/homepage/residentialconstruction.jpg",
                delay: "600ms",
              },
            ].map((service, index) => (
              <div key={index} className="zoom-animate group cursor-pointer" style={{ transitionDelay: service.delay }}>
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 h-96 group-hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-blue-500/20 border border-slate-700/50">
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-1000">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                    <h3 className="text-3xl font-light mb-4 group-hover:text-blue-400 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 font-light leading-relaxed text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform duration-300 opacity-0 group-hover:opacity-100 delay-300">
                      <span className="text-lg font-medium tracking-wide">EXPLORE SERVICE</span>
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project - Cinematic Reveal */}
      <section ref={projectRef} className="py-32 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="zoom-animate max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-6 py-3 text-lg backdrop-blur-sm">
                  Featured Project
                </Badge>
                <h2 className="text-6xl md:text-7xl font-thin leading-tight">
                  Bonan
                  <span className="block text-blue-400 font-extralight">Towers</span>
                </h2>
                <p className="text-2xl font-light text-slate-300 leading-relaxed">
                  A stunning 81,000 sq ft commercial development that showcases our expertise in large-scale construction. 
                  Currently under a 4-year management and maintenance contract, demonstrating our commitment to long-term client partnerships.
                </p>
                <div className="grid grid-cols-2 gap-12">
                  <div className="text-center">
                    <div className="text-5xl font-thin text-blue-400 mb-3">81K</div>
                    <div className="text-lg font-medium text-slate-400 tracking-wide">SQUARE FEET</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-thin text-blue-400 mb-3">4</div>
                    <div className="text-lg font-medium text-slate-400 tracking-wide">YEAR CONTRACT</div>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 rounded-full font-medium text-xl hover:scale-105 transition-all duration-300"
                >
                  <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="zoom-animate">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 group">
                    <Image
                      src="https://bonantowers.com/wp-content/uploads/2024/12/04-3.jpg"
                      alt="Bonan Towers"
                      width={900}
                      height={700}
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Floating Quote */}
      <section ref={testimonialRef} className="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="zoom-animate max-w-6xl mx-auto text-center">
            <div className="relative">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-16" />
              <blockquote className="text-4xl md:text-5xl font-light text-white leading-relaxed mb-16 relative">
                <span className="text-blue-400 text-8xl absolute -top-8 -left-4 opacity-50">"</span>
                Taylor Leonard Corp transformed our vision into reality with unmatched precision and professionalism. 
                Their attention to detail is extraordinary.
                <span className="text-blue-400 text-8xl absolute -bottom-8 -right-4 opacity-50">"</span>
              </blockquote>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500/30">
                  <Image
                    src="/placeholder.svg?height=80&width=80&text=Client"
                    alt="Client"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-medium text-white">Project Owner</div>
                  <div className="text-xl text-slate-400 font-light">Bonan Towers Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Carousel Section */}
      <VendorCarousel />

      {/* CTA Section - Final Impact */}
      <section className="py-32 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="zoom-animate text-center max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-thin text-white mb-12 leading-tight">
              Ready to Build
              <span className="block text-blue-400 font-extralight">Something Extraordinary?</span>
            </h2>
            <p className="text-2xl font-light text-slate-300 mb-16 leading-relaxed max-w-4xl mx-auto">
              Let's discuss your vision and create something remarkable together. Your dream project awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-blue-500 hover:bg-blue-600 text-white px-16 py-6 text-xl font-medium rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-slate-600 text-white hover:bg-white hover:text-slate-900 px-16 py-6 text-xl font-medium rounded-full transition-all duration-500 hover:scale-105 bg-transparent backdrop-blur-sm"
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
