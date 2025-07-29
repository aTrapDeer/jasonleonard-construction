"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Filter, Grid3X3, List, MapPin, Calendar, DollarSign, Ruler, Eye, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"

const projects = [
  {
    id: 1,
    title: "Bonan Towers",
    category: "Commercial",
    market: "Commercial Development",
    location: "Missouri",
    completionYear: 2024,
    size: "81,000 SQ FT",
    budget: "Major Commercial Project",
    duration: "4 years",
    image: "https://bonantowers.com/wp-content/uploads/2024/12/04-3.jpg",
    gallery: [
      "https://bonantowers.com/wp-content/uploads/2024/12/04-3.jpg",
      "https://bonantowers.com/wp-content/uploads/2025/03/0002-1-2.jpg",
    ],
    description:
      "Our flagship commercial development showcasing 81,000 square feet of exceptional construction over 4 years, demonstrating our expertise in large-scale commercial projects.",
    challenge:
      "Managing a large-scale commercial development with complex systems and coordination requirements over an extended timeline.",
    solution:
      "Implemented comprehensive project management systems with phased construction approach, ensuring quality control throughout the 4-year development process.",
    results:
      "Successfully delivered a landmark commercial development that stands as a testament to our construction capabilities and attention to detail.",
    features: ["Large-scale construction", "Advanced building systems", "Quality materials", "Professional project management", "Long-term development"],
    services: ["Design-Build", "Commercial Construction", "Project Management"],
    testimonial: {
      quote: "Taylor Leonard Corp delivered exceptional results on this major project. Their attention to detail and commitment to quality is outstanding.",
      author: "Project Stakeholder",
      role: "Bonan Towers Development",
    },
  },
  {
    id: 2,
    title: "Fox School District - Meramec Heights Elementary",
    category: "Commercial",
    market: "Educational",
    location: "Fox School District, Missouri",
    completionYear: 2023,
    size: "Educational Facility",
    budget: "Educational Project",
    duration: "18 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Educational facility construction focused on providing accessibility for disabled students and creating a safe, modern learning environment.",
    challenge:
      "Ensuring full ADA compliance and accessibility features while maintaining a safe construction environment around an active school district.",
    solution:
      "Worked closely with school district officials to implement comprehensive accessibility features and safety protocols throughout construction.",
    results:
      "Delivered a fully accessible educational facility that serves students with disabilities and provides a modern learning environment for all students.",
    features: [
      "ADA compliance",
      "Accessibility features",
      "Safety-first design",
      "Modern learning spaces",
      "Educational facility systems",
    ],
    services: ["Commercial Construction", "Educational Facilities", "ADA Compliance"],
    testimonial: {
      quote:
        "Taylor Leonard Corp's commitment to accessibility and safety made this project a success. They understand the unique needs of educational facilities.",
      author: "Fox School District",
      role: "District Administration",
    },
  },
  {
    id: 3,
    title: "Regional Bank Branch",
    category: "Commercial",
    market: "Financial",
    location: "Missouri",
    completionYear: 2023,
    size: "8,000 SQ FT",
    budget: "Commercial Project",
    duration: "14 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Specialized bank construction featuring security-focused design and advanced systems for a trusted financial institution.",
    challenge:
      "Implementing high-security features and specialized banking systems while maintaining an welcoming customer environment.",
    solution:
      "Leveraged our expertise in financial institution construction to deliver security systems, vault construction, and customer-focused design elements.",
    results:
      "Successfully completed a secure and functional bank branch that serves the community while meeting all security and regulatory requirements.",
    features: [
      "Security-focused design",
      "Vault construction",
      "Customer service areas",
      "Drive-through facilities",
      "Advanced security systems",
    ],
    services: ["Commercial Construction", "Security Systems", "Financial Institution Expertise"],
    testimonial: {
      quote:
        "Taylor Leonard Corp's expertise in bank construction was evident throughout the project. They understand the unique security and operational needs.",
      author: "Bank Executive",
      role: "Regional Bank",
    },
  },
  {
    id: 4,
    title: "Custom Family Residence",
    category: "Residential",
    market: "Custom Homes",
    location: "Missouri",
    completionYear: 2023,
    size: "3,500 SQ FT",
    budget: "Residential Project",
    duration: "12 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Custom home construction featuring quality craftsmanship and personalized design elements tailored to the family's specific needs.",
    challenge:
      "Creating a custom home that balances modern amenities with traditional craftsmanship while staying within budget and timeline.",
    solution:
      "Applied our residential construction expertise to deliver custom design elements with quality materials and exceptional attention to detail.",
    results:
      "Delivered a beautiful custom home that exceeds the family's expectations and demonstrates our commitment to residential construction excellence.",
    features: [
      "Custom design elements",
      "Quality craftsmanship",
      "Modern amenities",
      "Energy efficient systems",
      "Personalized features",
    ],
    services: ["Residential Construction", "Custom Design", "Quality Craftsmanship"],
    testimonial: {
      quote:
        "Taylor Leonard Corp built our dream home with incredible attention to detail. Their craftsmanship and professionalism exceeded our expectations.",
      author: "Homeowners",
      role: "Custom Home Clients",
    },
  },
  {
    id: 5,
    title: "Medical Office Building",
    category: "Commercial",
    market: "Healthcare",
    location: "Missouri",
    completionYear: 2022,
    size: "12,000 SQ FT",
    budget: "Medical Project",
    duration: "16 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Medical facility construction with specialized systems and compliance requirements for healthcare operations.",
    challenge:
      "Meeting strict medical building codes and regulations while installing specialized medical-grade systems and equipment.",
    solution:
      "Utilized our experience in medical building construction to ensure compliance with healthcare regulations and proper installation of medical systems.",
    results:
      "Completed a fully compliant medical facility that serves healthcare providers and patients with specialized medical-grade infrastructure.",
    features: [
      "Medical-grade systems",
      "Healthcare compliance",
      "Patient accessibility",
      "Specialized equipment support",
      "Infection control measures",
    ],
    services: ["Medical Construction", "Healthcare Compliance", "Specialized Systems"],
    testimonial: {
      quote:
        "The team understood the unique requirements of medical construction. The facility meets all our operational needs perfectly.",
      author: "Medical Practice",
      role: "Healthcare Provider",
    },
  },
  {
    id: 6,
    title: "Warehouse Facility",
    category: "Commercial",
    market: "Industrial",
    location: "Missouri",
    completionYear: 2022,
    size: "25,000 SQ FT",
    budget: "Industrial Project",
    duration: "12 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Large-scale warehouse construction focusing on functionality, efficiency, and industrial-grade systems.",
    challenge:
      "Delivering a large-scale industrial facility with efficient design and robust systems within tight timeline constraints.",
    solution:
      "Applied our warehousing construction expertise to create an efficient layout with industrial-grade systems and materials.",
    results:
      "Successfully completed a functional warehouse facility that meets industrial operational requirements and provides efficient workflow.",
    features: [
      "Large-scale construction",
      "Industrial systems",
      "Efficient design",
      "Robust materials",
      "Operational functionality",
    ],
    services: ["Industrial Construction", "Warehouse Design", "Large-Scale Projects"],
    testimonial: {
      quote:
        "Taylor Leonard Corp delivered exactly what we needed - a functional, well-built warehouse that supports our operations perfectly.",
      author: "Operations Manager",
      role: "Industrial Client",
    },
  },
]

const categories = ["All", "Residential", "Commercial"]
const markets = ["All", "Commercial Development", "Educational", "Financial", "Custom Homes", "Healthcare", "Industrial"]
const years = ["All", "2024", "2023", "2022", "2021"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedMarket, setSelectedMarket] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      const matchesMarket = selectedMarket === "All" || project.market === selectedMarket
      const matchesYear = selectedYear === "All" || project.completionYear.toString() === selectedYear

      return matchesSearch && matchesCategory && matchesMarket && matchesYear
    })
  }, [searchTerm, selectedCategory, selectedMarket, selectedYear])

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-slate-300 mb-8">
              Explore our portfolio of exceptional construction projects across residential and commercial markets. Each
              project represents our commitment to quality, innovation, and client satisfaction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">575+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">$50M+</div>
                <div className="text-sm text-slate-400">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">2M+</div>
                <div className="text-sm text-slate-400">Square Feet Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-sm text-slate-400">Satisfaction Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:flex-1 sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 md:gap-4 items-center w-full sm:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Market" />
                </SelectTrigger>
                <SelectContent>
                  {markets.map((market) => (
                    <SelectItem key={market} value={market}>
                      {market}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg overflow-hidden ml-auto sm:ml-0">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-slate-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800">
                        {project.completionYear}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                      <div className="flex items-center">
                        <Ruler className="h-4 w-4 mr-1" />
                        {project.size}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent hover:bg-orange-50 hover:border-orange-200"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-80 flex-shrink-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-500 text-white">{project.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                          <div className="flex items-center text-slate-600 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </div>
                        </div>
                        <Badge variant="secondary">{project.completionYear}</Badge>
                      </div>

                      <p className="text-slate-600 mb-4">{project.description}</p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-sm">
                          <Ruler className="h-4 w-4 mr-2 text-orange-500" />
                          <span>{project.size}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Filter className="h-4 w-4 mr-2 text-orange-500" />
                          <span>{project.market}</span>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-transparent hover:bg-orange-50 hover:border-orange-200"
                            onClick={() => setSelectedProject(project)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View Full Details
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-slate-600 mb-2">No projects found</h3>
              <p className="text-slate-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 text-white">{selectedProject.category}</Badge>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">{selectedProject.size}</div>
                  <div className="text-sm text-slate-600">Size</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">{selectedProject.budget}</div>
                  <div className="text-sm text-slate-600">Budget</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">{selectedProject.duration}</div>
                  <div className="text-sm text-slate-600">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-600">{selectedProject.completionYear}</div>
                  <div className="text-sm text-slate-600">Completed</div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">The Challenge</h3>
                  <p className="text-slate-600">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Our Solution</h3>
                  <p className="text-slate-600">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Results</h3>
                  <p className="text-slate-600">{selectedProject.results}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-800">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <blockquote className="text-slate-700 mb-4 italic">
                      "{selectedProject.testimonial.quote}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">{selectedProject.testimonial.author}</div>
                      <div className="text-slate-600">{selectedProject.testimonial.role}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-4 border-t">
                <Button asChild className="bg-orange-500 hover:bg-orange-600">
                  <Link href="/quote">
                    Start Your Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
