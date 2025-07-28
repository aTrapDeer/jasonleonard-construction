import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Building2, Users, Award, Clock, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const residentialProjects = [
  {
    title: "Riverside Luxury Estate",
    location: "Waterfront District",
    size: "8,500 SQ FT",
    budget: "$2.5M - $3M",
    duration: "14 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Custom millwork", "Smart home integration", "Infinity pool", "Wine cellar"],
  },
  {
    title: "Modern Hillside Residence",
    location: "Hills Estates",
    size: "6,200 SQ FT",
    budget: "$1.8M - $2.2M",
    duration: "12 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Floor-to-ceiling windows", "Sustainable materials", "Rooftop terrace", "Home theater"],
  },
  {
    title: "Heritage Home Restoration",
    location: "Historic District",
    size: "4,800 SQ FT",
    budget: "$1.2M - $1.5M",
    duration: "10 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Period restoration", "Modern amenities", "Original hardwood", "Updated systems"],
  },
]

const commercialProjects = [
  {
    title: "Metro Office Complex",
    location: "Business District",
    size: "150,000 SQ FT",
    budget: "$15M - $20M",
    duration: "18 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["LEED Gold certified", "Modern workspace design", "Parking structure", "Retail ground floor"],
  },
  {
    title: "Retail Shopping Center",
    location: "Suburban Plaza",
    size: "85,000 SQ FT",
    budget: "$8M - $12M",
    duration: "15 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Anchor tenant spaces", "Outdoor dining areas", "Ample parking", "Modern facades"],
  },
  {
    title: "Medical Facility",
    location: "Healthcare Campus",
    size: "45,000 SQ FT",
    budget: "$12M - $15M",
    duration: "16 months",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Specialized medical systems", "Patient-centered design", "Advanced HVAC", "Emergency power"],
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
              From luxury residential estates to cutting-edge commercial developments, JLTC delivers exceptional results
              across diverse construction markets with unmatched expertise and attention to detail.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-sm text-slate-400">Residential Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">75+</div>
                <div className="text-sm text-slate-400">Commercial Buildings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">$500M+</div>
                <div className="text-sm text-slate-400">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Market */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <Badge className="bg-orange-500 text-white">Residential</Badge>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Luxury Residential Construction</h2>
              <p className="text-lg text-slate-600 mb-6">
                We specialize in creating exceptional residential spaces that blend luxury, functionality, and
                craftsmanship. From custom estates to heritage restorations, every project reflects our commitment to
                quality and attention to detail.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Custom Design Process</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Premium Materials</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">On-Time Delivery</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Transparent Pricing</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/quote">
                  Get Residential Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Luxury residential construction"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-orange-500 mb-1">$1M - $5M</div>
                <div className="text-sm text-slate-600">Typical Project Range</div>
              </div>
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

      {/* Commercial Market */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Commercial construction project"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-orange-500 mb-1">$5M - $50M</div>
                <div className="text-sm text-slate-600">Typical Project Range</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <Badge className="bg-orange-500 text-white">Commercial</Badge>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Commercial & Industrial Construction</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our commercial expertise spans office buildings, retail centers, medical facilities, and industrial
                complexes. We deliver projects that meet strict timelines, budgets, and regulatory requirements while
                exceeding quality expectations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Design-Build Services</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">LEED Certified</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Fast-Track Delivery</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-slate-700">Value Engineering</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/quote">
                  Get Commercial Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether residential or commercial, we're here to bring your vision to life with exceptional craftsmanship
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
