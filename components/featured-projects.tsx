"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Metro Medical Center",
    market: "Healthcare",
    location: "Downtown District",
    size: "125,000 SQ FT",
    image: "/placeholder.svg?height=400&width=600",
    description: "State-of-the-art medical facility featuring advanced patient care areas and surgical suites.",
  },
  {
    id: 2,
    title: "Riverside Luxury Residences",
    market: "Residential",
    location: "Riverside Heights",
    size: "24 Units",
    image: "/placeholder.svg?height=400&width=600",
    description: "Premium residential development with high-end finishes and waterfront views.",
  },
  {
    id: 3,
    title: "Tech Campus Phase II",
    market: "Commercial",
    location: "Innovation District",
    size: "200,000 SQ FT",
    image: "/placeholder.svg?height=400&width=600",
    description: "Cutting-edge office complex designed for technology companies and startups.",
  },
  {
    id: 4,
    title: "Central High School Renovation",
    market: "Education",
    location: "Central District",
    size: "85,000 SQ FT",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete renovation and expansion of historic high school facility.",
  },
]

export function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore some of our recent work across commercial and residential markets.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          {projects.slice(0, 4).map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 text-white">{project.market}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.size}</span>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href={`/projects/${project.id}`}>
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={projects[currentIndex].image || "/placeholder.svg"}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 text-white">{projects[currentIndex].market}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{projects[currentIndex].title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span>{projects[currentIndex].location}</span>
                  <span>•</span>
                  <span>{projects[currentIndex].size}</span>
                </div>
                <p className="text-slate-600 mb-4">{projects[currentIndex].description}</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href={`/projects/${projects[currentIndex].id}`}>
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white w-8 h-8 md:w-10 md:h-10"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white w-8 h-8 md:w-10 md:h-10"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-orange-500" : "bg-slate-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
