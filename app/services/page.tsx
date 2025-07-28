"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Building2,
  Compass,
  Hammer,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  Lightbulb,
  Settings,
  Truck,
  HardHat,
  Calculator,
  Phone,
  Star,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const mainServices = [
  {
    id: "design-build",
    title: "Design-Build",
    icon: Compass,
    gradient: "from-blue-500 to-blue-600",
    description: "Integrated design and construction services under one roof for seamless project delivery.",
    features: [
      "Single point of responsibility",
      "Faster project delivery",
      "Cost savings through value engineering",
      "Enhanced collaboration",
      "Reduced risk and change orders",
    ],
    process: [
      "Initial Consultation & Vision Planning",
      "Conceptual Design & 3D Modeling",
      "Design Development & Engineering",
      "Construction Documentation & Permits",
      "Construction & Quality Control",
    ],
    idealFor: ["Complex commercial projects", "Custom residential homes", "Tight timeline projects"],
    image: "/placeholder.svg?height=300&width=400&text=Design-Build+Projects",
    stats: { experience: "25+ Years", projects: "200+", satisfaction: "100%" },
  },
  {
    id: "general-contracting",
    title: "General Contracting",
    icon: HardHat,
    gradient: "from-orange-500 to-red-500",
    description: "Full-service construction management and execution with comprehensive project oversight.",
    features: [
      "Comprehensive project management",
      "Skilled trade coordination",
      "Quality control and assurance",
      "Schedule and budget management",
      "Permit and regulatory compliance",
    ],
    process: [
      "Project Planning & Resource Allocation",
      "Permit Acquisition & Approvals",
      "Trade Coordination & Scheduling",
      "Quality Control & Inspections",
      "Project Completion & Handover",
    ],
    idealFor: ["Large commercial buildings", "Multi-unit residential", "Industrial facilities"],
    image: "/placeholder.svg?height=300&width=400&text=General+Contracting",
    stats: { experience: "25+ Years", projects: "150+", satisfaction: "100%" },
  },
  {
    id: "preconstruction",
    title: "Preconstruction Services",
    icon: Calculator,
    gradient: "from-green-500 to-emerald-600",
    description: "Strategic planning and cost analysis to ensure your project starts on the right foundation.",
    features: [
      "Accurate cost estimation",
      "Risk identification and mitigation",
      "Value engineering opportunities",
      "Constructability analysis",
      "Schedule optimization",
    ],
    process: [
      "Cost Estimation & Budget Analysis",
      "Value Engineering & Optimization",
      "Schedule Development & Planning",
      "Risk Assessment & Mitigation",
      "Final Recommendations & Strategy",
    ],
    idealFor: ["Budget-conscious projects", "Complex developments", "Investment properties"],
    image: "/placeholder.svg?height=300&width=400&text=Preconstruction+Planning",
    stats: { experience: "25+ Years", projects: "300+", satisfaction: "100%" },
  },
  {
    id: "renovations",
    title: "Renovations & Remodeling",
    icon: Hammer,
    gradient: "from-purple-500 to-pink-500",
    description: "Transforming existing spaces with expert craftsmanship and minimal disruption.",
    features: [
      "Minimal disruption to operations",
      "Historic preservation expertise",
      "Code compliance updates",
      "Energy efficiency improvements",
      "Increased property value",
    ],
    process: [
      "Space Assessment & Planning",
      "Design Integration & Permits",
      "Phased Construction Approach",
      "Systems Upgrade & Modernization",
      "Final Integration & Testing",
    ],
    idealFor: ["Historic buildings", "Office renovations", "Retail updates"],
    image: "/placeholder.svg?height=300&width=400&text=Renovation+Projects",
    stats: { experience: "25+ Years", projects: "100+", satisfaction: "100%" },
  },
  {
    id: "project-management",
    title: "Construction Management",
    icon: Settings,
    gradient: "from-red-500 to-rose-600",
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
    idealFor: ["Owner-direct projects", "Complex coordination needs", "Multi-phase developments"],
    image: "/placeholder.svg?height=300&width=400&text=Construction+Management",
    stats: { experience: "25+ Years", projects: "175+", satisfaction: "100%" },
  },
  {
    id: "consulting",
    title: "Construction Consulting",
    icon: Lightbulb,
    gradient: "from-teal-500 to-cyan-600",
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
    idealFor: ["Feasibility studies", "Dispute resolution", "Due diligence"],
    image: "/placeholder.svg?height=300&width=400&text=Construction+Consulting",
    stats: { experience: "25+ Years", projects: "250+", satisfaction: "100%" },
  },
]

const specialtyServices = [
  {
    title: "Healthcare Construction",
    description: "Specialized medical facility construction with strict compliance requirements",
    icon: Shield,
    color: "bg-blue-100 text-blue-600",
    features: ["Medical-grade systems", "Infection control", "Regulatory compliance"],
  },
  {
    title: "Educational Facilities",
    description: "Creating inspiring learning environments with safety-first design",
    icon: Building2,
    color: "bg-green-100 text-green-600",
    features: ["Safety-first design", "Flexible spaces", "Technology integration"],
  },
  {
    title: "Sustainable Building",
    description: "Environmentally responsible construction with LEED certification",
    icon: Award,
    color: "bg-emerald-100 text-emerald-600",
    features: ["LEED certification", "Energy efficiency", "Green technologies"],
  },
  {
    title: "Emergency Services",
    description: "24/7 rapid response for construction emergencies and disasters",
    icon: Truck,
    color: "bg-red-100 text-red-600",
    features: ["24/7 availability", "Rapid mobilization", "Insurance coordination"],
  },
]

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 construction-texture opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-6 px-4 py-2 text-sm">
              Comprehensive Construction Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Services for
              <span className="text-orange-500 block">Every Construction Need</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              From initial concept to final completion, we deliver excellence at every stage. Our comprehensive suite of
              construction services ensures your project succeeds on time, on budget, and beyond expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg">
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Six specialized service areas designed to meet every construction challenge with precision and expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              const isExpanded = expandedService === service.id
              const isEven = index % 2 === 0

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
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">{service.stats.projects}</div>
                        <div className="text-sm text-slate-500">Projects</div>
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
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
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
                                <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 flex-1">
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
                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Specialty Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise for unique construction challenges and industry-specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
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

      {/* Why Choose JLTC */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose JLTC?</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-12">
              Our commitment to excellence, safety, and client satisfaction sets us apart in the construction industry.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">25+ Years</h3>
                <p className="text-slate-600">Industry Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Safety First</h3>
                <p className="text-slate-600">Industry-Leading Standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
                <p className="text-slate-600">Skilled Professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">On-Time</h3>
                <p className="text-slate-600">Delivery Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let's discuss which service is the perfect fit for your construction needs and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg">
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
