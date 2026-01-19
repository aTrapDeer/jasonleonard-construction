"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Filter, Grid3X3, List, MapPin, Calendar, Ruler, Eye, ExternalLink } from "lucide-react"
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
    duration: "4-year management contract",
    image: "https://bonantowers.com/wp-content/uploads/2024/12/04-3.jpg",
    gallery: [
      "https://bonantowers.com/wp-content/uploads/2024/12/04-3.jpg",
      "https://bonantowers.com/wp-content/uploads/2025/03/0002-1-2.jpg",
    ],
    description:
      "Our flagship commercial development showcasing 81,000 square feet of exceptional construction. Currently under a 4-year management and maintenance contract, demonstrating our expertise in ongoing commercial facility management.",
    challenge:
      "Providing comprehensive management and maintenance services for a large-scale commercial development with complex systems and coordination requirements.",
    solution:
      "Implemented comprehensive facility management systems with ongoing maintenance programs, ensuring optimal building performance throughout our 4-year service contract.",
    results:
      "Successfully managing a landmark commercial development that stands as a testament to our construction capabilities and long-term client partnership commitment.",
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
    title: "Fox School District - Meramec Heights Middle School",
    category: "Commercial",
    market: "Educational",
    location: "Fox School District, St. Louis, Missouri",
    completionYear: 2023,
    size: "Educational Facility",
    budget: "Educational Project",
    duration: "18 months",
    image: "/images/properties/commercial/FoxMiddleSchool.jpg",
    gallery: [
      "/images/properties/commercial/FoxMiddleSchool.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Educational facility construction focused on providing accessibility for disabled students and creating a safe, modern learning environment for middle school students.",
    challenge:
      "Ensuring full ADA compliance and accessibility features while maintaining a safe construction environment around an active school district.",
    solution:
      "Worked closely with school district officials to implement comprehensive accessibility features and safety protocols throughout construction.",
    results:
      "Delivered a fully accessible middle school facility that serves students with disabilities and provides a modern learning environment for all students.",
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
    image: "/images/markets/pnb-bank.jpg",
    gallery: [
      "/images/markets/pnb-bank.jpg",
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
    id: 5,
    title: "Medical Office Building",
    category: "Commercial",
    market: "Healthcare",
    location: "Missouri",
    completionYear: 2022,
    size: "12,000 SQ FT",
    budget: "Medical Project",
    duration: "16 months",
    image: "/images/markets/medical.webp",
    gallery: [
      "/images/markets/medical.webp",
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
  // New Residential Properties
  {
    id: 7,
    title: "Bellerosa Drive Residence",
    category: "Residential",
    market: "Custom Homes",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Custom Home",
    budget: "Residential Project",
    duration: "Custom construction",
    image: "/images/properties/homes/109BellerosaDr.jpg",
    gallery: [
      "/images/properties/homes/109BellerosaDr.jpg",
    ],
    description:
      "Custom residential construction showcasing quality craftsmanship and modern design elements tailored to the homeowner's vision.",
    challenge:
      "Creating a custom home that meets specific design requirements while maintaining quality construction standards and timeline.",
    solution:
      "Applied our residential construction expertise to deliver custom design elements with quality materials and exceptional attention to detail.",
    results:
      "Successfully completed a beautiful custom home that demonstrates our commitment to residential construction excellence.",
    features: [
      "Quality construction",
      "Modern design",
      "Professional craftsmanship",
      "Custom features",
      "Residential expertise",
    ],
    services: ["Residential Construction", "Custom Design", "Quality Craftsmanship"],
    testimonial: {
      quote: "Taylor Leonard Corp built our home with incredible attention to detail and quality throughout.",
      author: "Homeowner",
      role: "Bellerosa Drive Residence",
    },
  },
  {
    id: 8,
    title: "Bellerosa Drive Residence",
    category: "Residential",
    market: "Custom Homes",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Custom Home",
    budget: "Residential Project",
    duration: "Custom construction",
    image: "/images/properties/homes/105BellerosaDr.jpg",
    gallery: [
      "/images/properties/homes/105BellerosaDr.jpg",
    ],
    description:
      "Quality residential construction featuring professional craftsmanship and modern amenities for comfortable family living.",
    challenge:
      "Delivering a quality home construction project that balances modern features with traditional craftsmanship standards.",
    solution:
      "Utilized our residential construction experience to create a well-built home with quality materials and professional finish work.",
    results:
      "Completed a quality residential home that serves as an example of our dedication to craftsmanship and client satisfaction.",
    features: [
      "Professional construction",
      "Quality materials",
      "Modern amenities",
      "Skilled craftsmanship",
      "Residential expertise",
    ],
    services: ["Residential Construction", "Quality Building", "Professional Craftsmanship"],
    testimonial: {
      quote: "The quality of construction and attention to detail exceeded our expectations.",
      author: "Homeowner",
      role: "Bellerosa Drive Home",
    },
  },
  {
    id: 9,
    title: "Benton Place Residence",
    category: "Residential",
    market: "Custom Homes",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Custom Home",
    budget: "Residential Project",
    duration: "Custom construction",
    image: "/images/properties/homes/38BentonPl.jpg",
    gallery: [
      "/images/properties/homes/38BentonPl.jpg",
    ],
    description:
      "Custom home construction with focus on design excellence and quality building practices for modern residential living.",
    challenge:
      "Creating a custom residential design while ensuring construction quality and meeting homeowner expectations.",
    solution:
      "Applied comprehensive residential construction knowledge to deliver custom design with professional building standards.",
    results:
      "Successfully delivered a custom home that showcases our residential construction capabilities and design flexibility.",
    features: [
      "Custom design",
      "Quality construction",
      "Professional finish",
      "Modern features",
      "Residential craftsmanship",
    ],
    services: ["Custom Home Construction", "Residential Design", "Quality Building"],
    testimonial: {
      quote: "Taylor Leonard Corp delivered exactly what we envisioned with exceptional quality throughout.",
      author: "Homeowner",
      role: "Benton Place Residence",
    },
  },
  {
    id: 10,
    title: "Ruger Street Residence",
    category: "Residential",
    market: "Custom Homes",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Residential Home",
    budget: "Residential Project",
    duration: "Residential construction",
    image: "/images/properties/homes/2000RugerSt.jpg",
    gallery: [
      "/images/properties/homes/2000RugerSt.jpg",
    ],
    description:
      "Quality residential construction demonstrating professional craftsmanship and modern building techniques for family living.",
    challenge:
      "Providing quality residential construction services while maintaining high standards of craftsmanship and client satisfaction.",
    solution:
      "Leveraged our residential construction expertise to deliver quality building with professional attention to detail.",
    results:
      "Completed a well-built residential home that demonstrates our commitment to quality construction and customer service.",
    features: [
      "Quality construction",
      "Residential expertise",
      "Professional craftsmanship",
      "Modern updates",
      "Reliable building",
    ],
    services: ["Residential Construction", "Quality Building", "Professional Service"],
    testimonial: {
      quote: "Professional service and quality construction made this project a success.",
      author: "Homeowner",
      role: "Ruger Street Home",
    },
  },
  {
    id: 11,
    title: "Gallery 720 Apartments",
    category: "Residential",
    market: "Multi-Family",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Multi-Family Development",
    budget: "Residential Development",
    duration: "Multi-family construction",
    image: "/images/properties/homes/Gallery720Apartments.jpg",
    gallery: [
      "/images/properties/homes/Gallery720Apartments.jpg",
    ],
    description:
      "Multi-family residential development featuring modern amenities and quality construction for urban apartment living.",
    challenge:
      "Managing multi-family residential construction with complex coordination requirements and quality standards.",
    solution:
      "Applied our multi-family construction experience to deliver quality apartment development with modern amenities.",
    results:
      "Successfully completed a multi-family development that provides quality urban living with professional construction standards.",
    features: [
      "Multi-family development",
      "Modern amenities",
      "Quality construction",
      "Urban living",
      "Professional development",
    ],
    services: ["Multi-Family Construction", "Residential Development", "Urban Construction"],
    testimonial: {
      quote: "Taylor Leonard Corp delivered a quality multi-family development that meets all our requirements.",
      author: "Development Manager",
      role: "Gallery 720 Apartments",
    },
  },
  {
    id: 12,
    title: "Gallery 515 Millennium Luxury",
    category: "Residential",
    market: "Luxury Homes",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Luxury Development",
    budget: "Premium Project",
    duration: "Luxury construction",
    image: "/images/properties/homes/Gallery515MillenniumLuxury.jpg",
    gallery: [
      "/images/properties/homes/Gallery515MillenniumLuxury.jpg",
    ],
    description:
      "Premium luxury residential development featuring high-end finishes and superior construction quality for discerning clients.",
    challenge:
      "Delivering luxury residential construction that meets premium standards while managing complex high-end requirements.",
    solution:
      "Utilized our luxury construction expertise to provide premium materials, finishes, and craftsmanship throughout the project.",
    results:
      "Completed a luxury residential development that exemplifies our capability in high-end construction and premium quality.",
    features: [
      "Luxury finishes",
      "Premium construction",
      "High-end amenities",
      "Quality craftsmanship",
      "Luxury development",
    ],
    services: ["Luxury Construction", "Premium Development", "High-End Building"],
    testimonial: {
      quote: "The luxury and quality of this development exceeds expectations in every detail.",
      author: "Luxury Client",
      role: "Gallery 515 Millennium",
    },
  },
  {
    id: 13,
    title: "Lindell Boulevard Urban Home",
    category: "Residential",
    market: "Urban Homes",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Urban Residence",
    budget: "Residential Project",
    duration: "Renovation project",
    image: "/images/properties/homes/6159LindellBlvd.jpg",
    gallery: [
      "/images/properties/homes/6159LindellBlvd.jpg",
    ],
    description:
      "Urban residential renovation showcasing quality updates and professional construction in a prime city location.",
    challenge:
      "Renovating an urban residence while maintaining neighborhood character and implementing modern improvements.",
    solution:
      "Applied renovation expertise to blend modern updates with existing architecture while ensuring quality construction.",
    results:
      "Successfully renovated an urban residence that combines modern functionality with quality craftsmanship.",
    features: [
      "Urban location",
      "Quality renovation",
      "Modern updates",
      "Professional finish",
      "City construction",
    ],
    services: ["Urban Renovation", "Residential Updates", "Quality Construction"],
    testimonial: {
      quote: "The renovation transformed our home while maintaining its character and charm.",
      author: "Homeowner",
      role: "Lindell Boulevard Residence",
    },
  },
  {
    id: 14,
    title: "Lindell Boulevard Residence",
    category: "Residential",
    market: "Urban Homes",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Urban Residence",
    budget: "Residential Project",
    duration: "Residential construction",
    image: "/images/properties/homes/6023LindellBlvd.jpg",
    gallery: [
      "/images/properties/homes/6023LindellBlvd.jpg",
    ],
    description:
      "Urban residential construction featuring quality building practices and modern design for city living.",
    challenge:
      "Delivering quality residential construction in an urban setting while meeting city requirements and standards.",
    solution:
      "Used our urban construction experience to navigate city requirements while delivering quality residential building.",
    results:
      "Completed a quality urban residence that demonstrates our ability to work effectively in city environments.",
    features: [
      "Urban construction",
      "Quality building",
      "City compliance",
      "Modern design",
      "Residential expertise",
    ],
    services: ["Urban Construction", "Residential Building", "City Projects"],
    testimonial: {
      quote: "Professional construction and quality work throughout the entire project.",
      author: "Homeowner",
      role: "Lindell Boulevard Home",
    },
  },
  // New Commercial Properties
  {
    id: 15,
    title: "AD Brown Building",
    category: "Commercial",
    market: "Commercial Development",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Commercial Building",
    budget: "Commercial Project",
    duration: "Commercial construction",
    image: "/images/properties/commercial/AD Brown Building.jpg",
    gallery: [
      "/images/properties/commercial/AD Brown Building.jpg",
    ],
    description:
      "Commercial building construction featuring professional design and quality materials for business operations.",
    challenge:
      "Delivering commercial construction that meets business operational needs while maintaining quality and timeline requirements.",
    solution:
      "Applied commercial construction expertise to create functional business space with quality materials and professional systems.",
    results:
      "Successfully completed a commercial building that serves business needs with quality construction and professional finish.",
    features: [
      "Commercial construction",
      "Professional design",
      "Quality materials",
      "Modern systems",
      "Business functionality",
    ],
    services: ["Commercial Construction", "Business Building", "Professional Development"],
    testimonial: {
      quote: "Taylor Leonard Corp delivered a quality commercial building that meets all our business requirements.",
      author: "Business Owner",
      role: "AD Brown Building",
    },
  },
  {
    id: 16,
    title: "Kirkwood Road Commercial Property",
    category: "Commercial",
    market: "Commercial Development",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Commercial Property",
    budget: "Commercial Project",
    duration: "Commercial construction",
    image: "/images/properties/commercial/816SKirkwoodRd.jpg",
    gallery: [
      "/images/properties/commercial/816SKirkwoodRd.jpg",
    ],
    description:
      "Commercial property construction demonstrating professional expertise and quality finish for business use.",
    challenge:
      "Providing commercial construction services that balance functionality, quality, and business operational requirements.",
    solution:
      "Leveraged commercial construction experience to deliver professional building with quality finish and business functionality.",
    results:
      "Completed a commercial property that showcases our commitment to quality construction and professional service.",
    features: [
      "Commercial expertise",
      "Professional construction",
      "Quality finish",
      "Modern features",
      "Business focus",
    ],
    services: ["Commercial Construction", "Professional Building", "Business Development"],
    testimonial: {
      quote: "Professional service and quality construction made this commercial project successful.",
      author: "Commercial Client",
      role: "Kirkwood Road Property",
    },
  },
  {
    id: 17,
    title: "Sunset Hill Family Chiropractic",
    category: "Commercial",
    market: "Healthcare",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Medical Office",
    budget: "Healthcare Project",
    duration: "Medical construction",
    image: "/images/properties/commercial/SunsetHillFamilyChiropractic.jpg",
    gallery: [
      "/images/properties/commercial/SunsetHillFamilyChiropractic.jpg",
    ],
    description:
      "Healthcare facility construction with specialized design for chiropractic practice and patient care requirements.",
    challenge:
      "Creating a medical facility that meets healthcare operational needs while ensuring patient comfort and accessibility.",
    solution:
      "Applied healthcare construction expertise to design and build a functional chiropractic facility with quality systems.",
    results:
      "Successfully completed a healthcare facility that serves patients effectively with professional medical construction standards.",
    features: [
      "Healthcare construction",
      "Professional design",
      "Medical facility expertise",
      "Quality craftsmanship",
      "Patient focus",
    ],
    services: ["Healthcare Construction", "Medical Building", "Professional Development"],
    testimonial: {
      quote: "The facility perfectly supports our practice with quality construction and thoughtful design.",
      author: "Dr. Chiropractic",
      role: "Sunset Hill Family Chiropractic",
    },
  },
  {
    id: 18,
    title: "Sq. Wires Restaurant And Market",
    category: "Commercial",
    market: "Hospitality",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Restaurant/Retail",
    budget: "Commercial Project",
    duration: "Restaurant construction",
    image: "/images/properties/commercial/SqWiresRestaurantAndMarket.jpg",
    gallery: [
      "/images/properties/commercial/SqWiresRestaurantAndMarket.jpg",
    ],
    description:
      "Restaurant and market construction featuring commercial kitchen design and retail space for food service operations.",
    challenge:
      "Building a combined restaurant and market facility that meets food service regulations and retail operational needs.",
    solution:
      "Used restaurant construction expertise to create functional kitchen and retail spaces with proper systems and finishes.",
    results:
      "Delivered a successful restaurant and market facility that supports food service operations with professional construction.",
    features: [
      "Restaurant construction",
      "Commercial kitchen",
      "Retail space",
      "Professional finish",
      "Food service systems",
    ],
    services: ["Restaurant Construction", "Commercial Kitchen", "Retail Building"],
    testimonial: {
      quote: "Our restaurant and market operates perfectly thanks to the quality construction and design.",
      author: "Restaurant Owner",
      role: "Sq. Wires Restaurant",
    },
  },
  {
    id: 19,
    title: "Winter Opera St Louis",
    category: "Commercial",
    market: "Entertainment",
    location: "St. Louis, Missouri",
    completionYear: 2023,
    size: "Entertainment Venue",
    budget: "Commercial Project",
    duration: "Specialized construction",
    image: "/images/properties/commercial/WinterOperaStLouis.jpg",
    gallery: [
      "/images/properties/commercial/WinterOperaStLouis.jpg",
    ],
    description:
      "Entertainment venue construction with specialized design for performance space and acoustic considerations.",
    challenge:
      "Creating an entertainment venue that meets performance requirements while ensuring quality construction and safety.",
    solution:
      "Applied specialized construction knowledge to build a performance venue with acoustic design and professional systems.",
    results:
      "Successfully completed an entertainment venue that provides excellent performance space with quality construction.",
    features: [
      "Entertainment venue",
      "Specialized construction",
      "Acoustic considerations",
      "Professional craftsmanship",
      "Performance space",
    ],
    services: ["Entertainment Construction", "Specialized Building", "Performance Venues"],
    testimonial: {
      quote: "The venue provides excellent acoustics and performance space with outstanding construction quality.",
      author: "Arts Director",
      role: "Winter Opera St Louis",
    },
  },
]

const categories = ["All", "Residential", "Commercial"]
const markets = ["All", "Commercial Development", "Educational", "Financial", "Custom Homes", "Multi-Family", "Luxury Homes", "Urban Homes", "Healthcare", "Hospitality", "Entertainment", "Industrial"]
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
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-slate-300 mb-8">
              Explore our portfolio of exceptional construction projects across residential and commercial markets. Each
              project represents our commitment to quality, innovation, and client satisfaction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">575+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">$50M+</div>
                <div className="text-sm text-slate-400">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">2M+</div>
                <div className="text-sm text-slate-400">Square Feet Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
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
                      <Badge className="bg-blue-500 text-white">{project.category}</Badge>
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
                          className="w-full bg-transparent hover:bg-blue-50 hover:border-blue-200"
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
                        <Badge className="bg-blue-500 text-white">{project.category}</Badge>
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
                          <Ruler className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{project.size}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Filter className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{project.market}</span>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-transparent hover:bg-blue-50 hover:border-blue-200"
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
                  <Badge className="bg-blue-500 text-white">{selectedProject.category}</Badge>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">{selectedProject.size}</div>
                  <div className="text-sm text-slate-600">Size</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">{selectedProject.budget}</div>
                  <div className="text-sm text-slate-600">Budget</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">{selectedProject.duration}</div>
                  <div className="text-sm text-slate-600">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">{selectedProject.completionYear}</div>
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
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
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
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
                <Button asChild className="bg-blue-500 hover:bg-blue-600">
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
