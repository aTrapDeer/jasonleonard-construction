"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Building2,
  Compass,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  Lightbulb,
  Settings,
  HardHat,
  Calculator,
  Phone,
  Star,
  Target,
  Zap,
  Home,
  Wrench,
  Droplets,
  Flame,
  TreePine,
  Palette,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const mainServices = [
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    icon: Building2,
    gradient: "from-blue-600 to-blue-700",
    description: "Comprehensive commercial construction services including new construction, full-scale building solutions, tenant buildout/finish, property management, maintenance, 24/7 emergency service, and cleaning services.",
    features: [
      "New Construction & Full-Scale Building Solutions",
      "Tenant Buildout & Finish Work",
      "Property Management & Maintenance",
      "24/7 On-Call Emergency Service",
      "Cleaning Services & Facility Management",
    ],
    process: [
      "Project Planning & Resource Allocation",
      "Permit Acquisition & Approvals",
      "Trade Coordination & Scheduling",
      "Quality Control & Inspections",
      "Project Completion & Handover",
    ],
    idealFor: ["Commercial buildings", "Office complexes", "Retail centers", "Industrial facilities", "Multi-tenant properties"],
    image: "/placeholder.svg?height=300&width=400&text=Commercial+Construction",
    stats: { experience: "30+ Years", satisfaction: "100%" },
  },
  {
    id: "design-build",
    title: "Design-Build",
    icon: Compass,
    gradient: "from-blue-500 to-blue-600",
    description: "Complete design and construction services under one roof for seamless project delivery.",
    features: [
      "Single point of responsibility",
      "Faster project delivery",
      "Cost savings through value engineering",
      "Enhanced collaboration",
      "Reduced risk and change orders",
    ],
    process: [
      "Initial Consultation & Vision Planning",
      "Design Schematics & 3D Modeling",
      "Construction Documentation & Permits",
      "Value Engineering & Optimization",
      "Construction & Quality Control",
    ],
    idealFor: ["Complex commercial projects", "Custom residential homes", "Banks and financial institutions"],
    image: "/placeholder.svg?height=300&width=400&text=Design-Build+Projects",
    stats: { experience: "30+ Years", satisfaction: "100%" },
  },
  {
    id: "residential-construction",
    title: "Residential Construction",
    icon: HardHat,
    gradient: "from-slate-500 to-slate-600",
    description: "Comprehensive residential construction services including design/build, custom homes, renovations, and full-scale interior/exterior work.",
    features: [
      "Design/Build & New Construction",
      "Custom Homes & Additions",
      "Kitchens/Baths/Basement Renovations",
      "Full-Scale Interior/Exterior Work",
      "Structural Construction & Framing",
    ],
    process: [
      "Design Consultation & Planning",
      "Permit Processing & Approvals",
      "Foundation & Framing",
      "Systems Installation & Finishing",
      "Final Walkthrough & Handover",
    ],
    idealFor: ["Custom homes", "Residential renovations", "Home additions", "Kitchen/bath remodels"],
    image: "/placeholder.svg?height=300&width=400&text=Residential+Construction",
    stats: { experience: "30+ Years", satisfaction: "100%" },
  },
  {
    id: "property-management",
    title: "Property Management Services",
    icon: Settings,
    gradient: "from-blue-400 to-blue-500",
    description: "Resident general contractor services tailored for commercial buildings and ongoing maintenance.",
    features: [
      "Resident GC services",
      "Commercial building focus",
      "Ongoing maintenance programs",
      "Emergency response services",
      "Vendor coordination",
    ],
    process: [
      "Property Assessment & Planning",
      "Service Agreement Development",
      "Maintenance Schedule Creation",
      "Regular Inspections & Updates",
      "Emergency Response & Repairs",
    ],
    idealFor: ["Commercial buildings", "Office complexes", "Multi-tenant facilities"],
    image: "/placeholder.svg?height=300&width=400&text=Property+Management",
    stats: { experience: "30+ Years", satisfaction: "100%" },
  },
  {
    id: "construction-management",
    title: "Construction Management",
    icon: Calculator,
    gradient: "from-slate-600 to-slate-700",
    description: "Professional oversight and coordination ensuring quality, schedule, and budget objectives.",
    features: [
      "Professional project oversight",
      "Cost control and budget management",
      "Schedule adherence",
      "Quality assurance",
      "Risk management",
    ],
    process: [
      "Project Setup & System Implementation",
      "Team Coordination & Communication",
      "Progress Monitoring & Reporting",
      "Quality Control & Standards",
      "Project Closeout & Documentation",
    ],
    idealFor: ["Large-scale projects", "Complex coordination needs", "Multi-phase developments"],
    image: "/placeholder.svg?height=300&width=400&text=Construction+Management",
    stats: { experience: "30+ Years", satisfaction: "100%" },
  },
  {
    id: "consulting",
    title: "Construction Consulting",
    icon: Lightbulb,
    gradient: "from-blue-300 to-blue-400",
    description: "Expert guidance and strategic advice throughout your construction journey.",
    features: [
      "Expert industry knowledge",
      "Objective third-party perspective",
      "Risk mitigation strategies",
      "Cost-saving opportunities",
      "Problem-solving expertise",
    ],
    process: [
      "Needs Assessment & Analysis",
      "Research & Investigation",
      "Strategy Development & Planning",
      "Implementation Support",
      "Ongoing Advisory & Monitoring",
    ],
    idealFor: ["Feasibility studies", "Project evaluation", "Due diligence"],
    image: "/placeholder.svg?height=300&width=400&text=Construction+Consulting",
    stats: { experience: "30+ Years", satisfaction: "100%" },
  },
]

const specialtyServices = [
  {
    title: "New Construction",
    description: "Complete new building construction from foundation to finish with modern design and efficiency",
    icon: Building2,
    color: "bg-blue-100 text-blue-600",
    features: ["Modern design", "Energy efficiency", "Quality construction"],
  },
  {
    title: "Tenant Buildout & Finish",
    description: "Custom interior buildout and finishing services for commercial tenant spaces",
    icon: Settings,
    color: "bg-green-100 text-green-600",
    features: ["Custom design", "Quality finishes", "Timely completion"],
  },
  {
    title: "Property Management",
    description: "Comprehensive property management and maintenance services for commercial buildings",
    icon: Shield,
    color: "bg-emerald-100 text-emerald-600",
    features: ["Ongoing maintenance", "Vendor coordination", "Emergency response"],
  },
  {
    title: "24/7 Emergency Services",
    description: "Round-the-clock emergency response and repair services for commercial properties",
    icon: Clock,
    color: "bg-red-100 text-red-600",
    features: ["24/7 availability", "Rapid response", "Expert repairs"],
  },
  {
    title: "Custom Homes",
    description: "Personalized home designs and construction tailored to your vision and lifestyle",
    icon: Home,
    color: "bg-purple-100 text-purple-600",
    features: ["Custom design", "Quality craftsmanship", "Personalized service"],
  },
  {
    title: "Kitchen & Bath Renovations",
    description: "Complete kitchen and bathroom renovations with modern design and functionality",
    icon: Wrench,
    color: "bg-orange-100 text-orange-600",
    features: ["Modern design", "Quality materials", "Functional layouts"],
  },
]

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 construction-texture opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-500 text-white mb-6 px-4 py-2 text-sm">
              Commercial Construction Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Commercial
              <span className="text-blue-500 block">Construction Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              From new construction to property management, we provide complete commercial construction solutions. 
              Our expertise spans new construction, tenant buildout, maintenance, and 24/7 emergency services 
              to keep your commercial properties operating at peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg">
                <Link href="/quote">
                  Get Your Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive commercial construction services designed to meet every business need with precision and expertise.
              From new construction to ongoing maintenance, we're your complete commercial construction partner.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {mainServices.map((service) => {
              const Icon = service.icon
              const isExpanded = expandedService === service.id

              return (
                <Card
                  key={service.id}
                  className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-0 overflow-hidden ${
                    isExpanded ? "shadow-2xl scale-[1.02]" : "hover:scale-[1.01]"
                  }`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />

                  <CardHeader className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </CardTitle>
                    <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                  </CardHeader>

                  <CardContent className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-slate-600 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                          <Target className="h-5 w-5 text-blue-500 mr-2" />
                          Perfect For
                        </h4>
                        <ul className="space-y-2">
                          {service.idealFor.map((item, idx) => (
                            <li key={idx} className="text-slate-600 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t pt-6 mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                              <Zap className="h-5 w-5 text-purple-500 mr-2" />
                              Our Process
                            </h4>
                            <div className="space-y-3">
                              {service.process.map((step, idx) => (
                                <div key={idx} className="flex items-start">
                                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                                    {idx + 1}
                                  </div>
                                  <span className="text-slate-600 text-sm">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                              <Star className="h-5 w-5 text-yellow-500 mr-2" />
                              Additional Benefits
                            </h4>
                            <div className="space-y-2">
                              {service.features.slice(3).map((feature, idx) => (
                                <div key={idx} className="text-slate-600 text-sm flex items-start">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 pt-4 border-t">
                              <div className="flex gap-3">
                                <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 flex-1">
                                  <Link href="/quote">Get Quote</Link>
                                </Button>
                                <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                                  <Link href="/contact">Learn More</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t">
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.stats.experience} Experience
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        {isExpanded ? "Show Less" : "Learn More"}
                        <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Specialty Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise for unique construction challenges and industry-specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {specialtyServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50"
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${service.color} mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-slate-500 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Strategic Partnerships</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              We've built strong relationships with trusted specialists across all construction trades, ensuring seamless project delivery and comprehensive solutions for every client.
            </p>
            <p className="text-slate-700">
              When we don't directly provide a service, our trusted partners step in to deliver the same level of quality and professionalism you expect from Taylor Leonard Corp.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Electrical</h3>
                <p className="text-sm text-slate-600">Licensed electrical contractors for all wiring, lighting, and electrical system needs</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Plumbing</h3>
                <p className="text-sm text-slate-600">Expert plumbing contractors for water, gas, and drainage systems</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Mechanical</h3>
                <p className="text-sm text-slate-600">HVAC and mechanical system specialists for climate control and ventilation</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Roofing</h3>
                <p className="text-sm text-slate-600">Professional roofing contractors for all types of roof installations and repairs</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Concrete & Foundations</h3>
                <p className="text-sm text-slate-600">Foundation specialists and concrete flatwork experts for structural integrity</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Storm/Fire/Water Mitigation</h3>
                <p className="text-sm text-slate-600">Emergency response and damage restoration specialists</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Land Clearing</h3>
                <p className="text-sm text-slate-600">Site preparation and land clearing services for new construction projects</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Landscaping</h3>
                <p className="text-sm text-slate-600">Professional landscaping and outdoor design services</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seamless Project Coordination</h3>
              <p className="text-slate-700">
                Our partnership network ensures that every aspect of your project is handled by qualified professionals. 
                We coordinate all trades, manage timelines, and maintain quality control throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Taylor Leonard Corp */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose Taylor Leonard Corp?</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-12">
              Our commitment to excellence, safety, and client satisfaction sets us apart in the construction industry.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">30+ Years</h3>
                <p className="text-slate-600">Industry Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Perfect Safety</h3>
                <p className="text-slate-600">No Safety Violations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Family Owned</h3>
                <p className="text-slate-600">Community Trusted</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">100%</h3>
                <p className="text-slate-600">Satisfaction Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let's discuss which service is the perfect fit for your construction needs and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg">
              <Link href="/quote">
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
