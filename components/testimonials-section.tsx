"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "JLTC delivered our medical facility on time and under budget. Their attention to detail and safety protocols were exceptional throughout the entire project.",
    author: "Dr. Sarah Mitchell",
    title: "Chief Administrator",
    company: "Metro Medical Center",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The quality of craftsmanship in our luxury residential project exceeded all expectations. JLTC's team was professional, communicative, and delivered outstanding results.",
    author: "Michael Chen",
    title: "Development Manager",
    company: "Riverside Properties",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with JLTC on our campus expansion was seamless. They understood our unique requirements and delivered a facility that perfectly serves our students and faculty.",
    author: "Jennifer Rodriguez",
    title: "Facilities Director",
    company: "Central University",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with JLTC.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <Quote className="h-12 w-12 text-blue-500 mb-6" />
                <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonials[currentIndex].author}</div>
                    <div className="text-slate-600">{testimonials[currentIndex].title}</div>
                    <div className="text-blue-600 font-medium">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-slate-50"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-slate-50"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-slate-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
