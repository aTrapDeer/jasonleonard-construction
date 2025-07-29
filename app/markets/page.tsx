import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Building2, Users, Award, Clock, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const residentialProjects = [
  {
    title: "Custom Family Estate",
    location: "Missouri Countryside",
    size: "4,500 SQ FT",
    budget: "$800K - $1.2M",
    duration: "12 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Custom design", "Quality craftsmanship", "Energy efficient", "Modern amenities"],
  },
  {
    title: "Heritage Home Renovation",
    location: "Historic District",
    size: "3,200 SQ FT",
    budget: "$400K - $600K",
    duration: "8 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Historic preservation", "Modern updates", "Code compliance", "Accessibility features"],
  },
  {
    title: "Modern Residential Build",
    location: "Suburban Development",
    size: "2,800 SQ FT",
    budget: "$350K - $500K",
    duration: "10 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Contemporary design", "Open floor plan", "Smart home ready", "Sustainable materials"],
  },
]

const commercialProjects = [
  {
    title: "Regional Bank Branch",
    location: "Financial District",
    size: "8,000 SQ FT",
    budget: "$1.2M - $1.8M",
    duration: "14 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Security systems", "Vault construction", "Customer areas", "Drive-through facilities"],
  },
  {
    title: "Elementary School Addition",
    location: "Fox School District",
    size: "15,000 SQ FT",
    budget: "$2.5M - $3.2M",
    duration: "16 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["ADA compliance", "Safety-first design", "Flexible classrooms", "Modern HVAC"],
  },
  {
    title: "Medical Office Building",
    location: "Healthcare Campus",
    size: "12,000 SQ FT",
    budget: "$2.0M - $2.8M",
    duration: "18 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Medical-grade systems", "Patient accessibility", "Specialized equipment", "Infection control"],
  },
]

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Our Markets</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8">
              From commercial construction to residential projects, Taylor Leonard Corp delivers exceptional results
              across diverse construction markets with unmatched expertise and attention to detail.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-sm text-slate-400">Residential Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">75+</div>
                <div className="text-sm text-slate-400">Commercial Buildings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">$50M+</div>
                <div className="text-sm text-slate-400">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Market */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <Badge className="bg-orange-500 text-white">60% Commercial Focus</Badge>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Commercial Construction</h2>
              <p className="text-lg text-slate-600 mb-6">
                We specialize in commercial construction with a focus on banks, schools, medical buildings, and 
                warehousing facilities. Our expertise in security-focused construction makes us trusted by top 
                financial institutions across the region.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Banks & Financial</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Schools & Education</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Medical Buildings</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Warehousing</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/quote">
                  Get Commercial Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://bonantowers.com/wp-content/uploads/2025/03/0002-1-2.jpg"
                alt="Commercial construction project - Bonan Towers"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-orange-500 mb-1">75+</div>
                <div className="text-sm text-slate-600">Commercial Projects</div>
                <div className="text-xs text-slate-500 mt-1">Including Bonan Towers</div>
              </div>
            </div>
          </div>

          {/* Commercial Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {commercialProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-800">{project.duration}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.size}</span>
                  </div>
                  <div className="text-orange-600 font-semibold mb-4">{project.budget}</div>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-slate-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Market */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Residential construction project"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-orange-500 mb-1">500+</div>
                <div className="text-sm text-slate-600">Residential Projects</div>
                <div className="text-xs text-slate-500 mt-1">Custom Homes & Renovations</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <Badge className="bg-orange-500 text-white">40% Residential Focus</Badge>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Residential Construction</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our residential construction services focus on custom homes and renovations with exceptional 
                craftsmanship and attention to detail. We work closely with families to create homes that 
                reflect their unique vision and lifestyle needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Custom Homes</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Quality Craftsmanship</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Timely Delivery</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Value Engineering</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/quote">
                  Get Residential Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Residential Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {residentialProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-800">{project.duration}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.size}</span>
                  </div>
                  <div className="text-orange-600 font-semibold mb-4">{project.budget}</div>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-slate-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-orange-500 text-white mb-4 px-4 py-2">Featured Project</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Bonan Towers</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our flagship commercial project showcasing 81,000 square feet of exceptional construction 
                over 4 years, demonstrating our expertise in large-scale commercial development.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="https://bonantowers.com/wp-content/uploads/2024/12/04-3.jpg"
                  alt="Bonan Towers - Featured Project"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-2">81K</div>
                    <div className="text-sm text-slate-600">Square Feet</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-2">4</div>
                    <div className="text-sm text-slate-600">Years</div>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  This major commercial development represents the pinnacle of our construction capabilities, 
                  featuring advanced systems, quality materials, and meticulous attention to detail throughout 
                  the construction process.
                </p>
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether commercial or residential, we're here to bring your vision to life with exceptional craftsmanship
            and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg">
              <Link href="/quote">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
