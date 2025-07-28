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
    title: "Riverside Luxury Estate",
    category: "Residential",
    market: "Luxury Residential",
    location: "Waterfront District, BC",
    completionYear: 2023,
    size: "8,500 SQ FT",
    budget: "$2.8M",
    duration: "14 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "A stunning waterfront estate featuring custom millwork, smart home integration, and luxury finishes throughout.",
    challenge:
      "Building on a challenging waterfront lot with strict environmental regulations and complex foundation requirements due to proximity to water.",
    solution:
      "Implemented specialized foundation systems and worked closely with environmental consultants to ensure compliance while maximizing the waterfront views.",
    results:
      "Delivered a breathtaking estate that exceeded client expectations, featuring panoramic water views and sustainable construction practices.",
    features: ["Custom millwork", "Smart home integration", "Infinity pool", "Wine cellar", "Panoramic water views"],
    services: ["Design-Build", "Custom Construction", "Interior Design"],
    testimonial: {
      quote: "JLTC transformed our vision into reality. The attention to detail and craftsmanship is exceptional.",
      author: "Michael & Sarah Chen",
      role: "Homeowners",
    },
  },
  {
    id: 2,
    title: "Metro Medical Center",
    category: "Commercial",
    market: "Healthcare",
    location: "Downtown District, BC",
    completionYear: 2023,
    size: "125,000 SQ FT",
    budget: "$18.5M",
    duration: "18 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "State-of-the-art medical facility with advanced patient care areas, surgical suites, and cutting-edge medical technology infrastructure.",
    challenge:
      "Constructing a fully operational medical facility while maintaining strict infection control standards and accommodating complex medical equipment installations.",
    solution:
      "Phased construction approach with specialized HVAC systems, medical-grade finishes, and coordination with medical equipment vendors for seamless integration.",
    results:
      "Delivered a world-class medical facility that serves over 50,000 patients annually with the highest standards of care and safety.",
    features: [
      "Advanced surgical suites",
      "Medical-grade HVAC",
      "Emergency power systems",
      "Patient-centered design",
      "LEED Gold certified",
    ],
    services: ["General Contracting", "Medical Construction", "Project Management"],
    testimonial: {
      quote:
        "The team's expertise in healthcare construction was evident throughout the project. Exceptional quality and attention to detail.",
      author: "Dr. Jennifer Martinez",
      role: "Chief Medical Officer",
    },
  },
  {
    id: 3,
    title: "Tech Campus Phase II",
    category: "Commercial",
    market: "Office",
    location: "Innovation District, BC",
    completionYear: 2022,
    size: "200,000 SQ FT",
    budget: "$25.2M",
    duration: "20 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Modern office complex designed for technology companies with flexible workspaces, collaboration areas, and sustainable features.",
    challenge:
      "Creating flexible spaces that could adapt to rapidly changing technology company needs while maintaining energy efficiency and modern aesthetics.",
    solution:
      "Designed modular workspace systems with advanced building automation, sustainable materials, and future-ready infrastructure for technology integration.",
    results:
      "Achieved LEED Platinum certification and 100% occupancy within 6 months of completion, becoming a landmark in the Innovation District.",
    features: [
      "Flexible workspace design",
      "LEED Platinum",
      "Advanced building automation",
      "Rooftop gardens",
      "Electric vehicle charging",
    ],
    services: ["Design-Build", "Sustainable Construction", "Technology Integration"],
    testimonial: {
      quote:
        "JLTC delivered a building that perfectly balances functionality, sustainability, and modern design. Our teams love working here.",
      author: "David Park",
      role: "Facilities Director, TechCorp",
    },
  },
  {
    id: 4,
    title: "Heritage Home Restoration",
    category: "Residential",
    market: "Historic Renovation",
    location: "Historic District, BC",
    completionYear: 2023,
    size: "4,800 SQ FT",
    budget: "$1.4M",
    duration: "12 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Meticulous restoration of a 1920s heritage home, preserving historical character while adding modern amenities and systems.",
    challenge:
      "Balancing historical preservation requirements with modern building codes and client desires for contemporary amenities.",
    solution:
      "Worked with heritage consultants and city planners to develop solutions that preserved historical integrity while incorporating modern systems discretely.",
    results:
      "Successfully restored a piece of local history while creating a comfortable, modern living space that received heritage preservation awards.",
    features: [
      "Period restoration",
      "Modern amenities",
      "Original hardwood preservation",
      "Updated electrical/plumbing",
      "Heritage designation maintained",
    ],
    services: ["Historic Renovation", "Custom Restoration", "Heritage Consulting"],
    testimonial: {
      quote:
        "They brought our historic home back to life while respecting its heritage. The craftsmanship is outstanding.",
      author: "Robert & Linda Thompson",
      role: "Homeowners",
    },
  },
  {
    id: 5,
    title: "Retail Shopping Center",
    category: "Commercial",
    market: "Retail",
    location: "Suburban Plaza, BC",
    completionYear: 2022,
    size: "85,000 SQ FT",
    budget: "$12.8M",
    duration: "16 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Modern retail center with anchor tenant spaces, outdoor dining areas, and contemporary architectural design.",
    challenge:
      "Creating an attractive retail destination that would draw customers while managing complex tenant requirements and phased occupancy.",
    solution:
      "Designed flexible retail spaces with modern facades and amenities, coordinating construction to allow early tenant fit-outs and phased openings.",
    results:
      "Achieved 95% occupancy before completion and became a popular community gathering place, exceeding projected foot traffic by 30%.",
    features: [
      "Anchor tenant spaces",
      "Outdoor dining areas",
      "Modern facades",
      "Ample parking",
      "Community gathering spaces",
    ],
    services: ["Commercial Construction", "Tenant Coordination", "Retail Development"],
    testimonial: {
      quote:
        "The shopping center has exceeded our expectations. JLTC's attention to both aesthetics and functionality is remarkable.",
      author: "Maria Rodriguez",
      role: "Property Manager",
    },
  },
  {
    id: 6,
    title: "Modern Hillside Residence",
    category: "Residential",
    market: "Custom Homes",
    location: "Hills Estates, BC",
    completionYear: 2023,
    size: "6,200 SQ FT",
    budget: "$2.1M",
    duration: "13 months",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Contemporary hillside home with floor-to-ceiling windows, sustainable materials, and stunning valley views.",
    challenge:
      "Building on a steep hillside lot while maximizing views and incorporating sustainable design elements within budget constraints.",
    solution:
      "Engineered custom foundation solutions and used sustainable materials throughout, creating seamless indoor-outdoor living spaces that capture the views.",
    results:
      "Delivered an award-winning sustainable home that showcases modern design while respecting the natural landscape and achieving net-zero energy consumption.",
    features: [
      "Floor-to-ceiling windows",
      "Sustainable materials",
      "Rooftop terrace",
      "Home theater",
      "Net-zero energy",
    ],
    services: ["Custom Construction", "Sustainable Design", "Site Engineering"],
    testimonial: {
      quote:
        "Our dream home became reality. The integration with the landscape and attention to sustainability exceeded our hopes.",
      author: "James & Patricia Wilson",
      role: "Homeowners",
    },
  },
]

const categories = ["All", "Residential", "Commercial"]
const markets = ["All", "Luxury Residential", "Healthcare", "Office", "Historic Renovation", "Retail", "Custom Homes"]
const years = ["All", "2023", "2022", "2021"]

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
                <div className="text-3xl font-bold text-orange-500 mb-2">125+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">$500M+</div>
                <div className="text-sm text-slate-400">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">2.5M+</div>
                <div className="text-sm text-slate-400">Square Feet Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-sm text-slate-400">On-Time Delivery</div>
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
                        <DollarSign className="h-4 w-4 mr-1" />
                        {project.budget}
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

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center text-sm">
                          <Ruler className="h-4 w-4 mr-2 text-orange-500" />
                          <span>{project.size}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <DollarSign className="h-4 w-4 mr-2 text-orange-500" />
                          <span>{project.budget}</span>
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
