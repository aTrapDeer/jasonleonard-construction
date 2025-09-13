import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Building2, Users, Award, Clock, DollarSign, Wrench, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const residentialProjects = [
  {
    title: "109 Bellerosa Dr",
    location: "St. Louis, Missouri",
    size: "Custom Home",
    budget: "Residential Project",
    duration: "Completed",
    image: "/images/properties/homes/109BellerosaDr.jpg",
    features: ["Quality construction", "Modern design", "Professional craftsmanship", "Custom features"],
  },
  {
    title: "6159 Lindell Blvd",
    location: "St. Louis, Missouri",
    size: "Urban Residence",
    budget: "Residential Project",
    duration: "Completed",
    image: "/images/properties/homes/6159LindellBlvd.jpg",
    features: ["Urban location", "Quality renovation", "Modern updates", "Professional finish"],
  },
  {
    title: "Gallery 720 Apartments",
    location: "St. Louis, Missouri",
    size: "Multi-Family",
    budget: "Residential Development",
    duration: "Completed",
    image: "/images/properties/homes/Gallery720Apartments.jpg",
    features: ["Multi-family development", "Modern amenities", "Quality construction", "Urban living"],
  },
  {
    title: "2000 Ruger St",
    location: "St. Louis, Missouri",
    size: "Residential Home",
    budget: "Residential Project",
    duration: "Completed",
    image: "/images/properties/homes/2000RugerSt.jpg",
    features: ["Quality construction", "Residential expertise", "Professional craftsmanship", "Modern updates"],
  },
  {
    title: "Gallery 515 Millennium Luxury",
    location: "St. Louis, Missouri",
    size: "Luxury Development",
    budget: "Premium Project",
    duration: "Completed",
    image: "/images/properties/homes/Gallery515MillenniumLuxury.jpg",
    features: ["Luxury finishes", "Premium construction", "High-end amenities", "Quality craftsmanship"],
  },
  {
    title: "38 Benton Pl",
    location: "St. Louis, Missouri",
    size: "Custom Home",
    budget: "Residential Project",
    duration: "Completed",
    image: "/images/properties/homes/38BentonPl.jpg",
    features: ["Custom design", "Quality construction", "Professional finish", "Modern features"],
  },
]

const commercialProjects = [
  {
    title: "Fox Middle School",
    location: "Fox School District, St. Louis, Missouri",
    size: "Educational Facility",
    budget: "Educational Project",
    duration: "Completed",
    image: "/images/properties/commercial/FoxMiddleSchool.jpg",
    features: ["Educational construction", "Safety compliance", "Modern learning spaces", "Quality craftsmanship"],
  },
  {
    title: "AD Brown Building",
    location: "St. Louis, Missouri",
    size: "Commercial Building",
    budget: "Commercial Project",
    duration: "Completed",
    image: "/images/properties/commercial/AD Brown Building.jpg",
    features: ["Commercial construction", "Professional design", "Quality materials", "Modern systems"],
  },
  {
    title: "816 S Kirkwood Rd",
    location: "St. Louis, Missouri",
    size: "Commercial Property",
    budget: "Commercial Project",
    duration: "Completed",
    image: "/images/properties/commercial/816SKirkwoodRd.jpg",
    features: ["Commercial expertise", "Professional construction", "Quality finish", "Modern features"],
  },
  {
    title: "Sunset Hill Family Chiropractic",
    location: "St. Louis, Missouri",
    size: "Medical Office",
    budget: "Healthcare Project",
    duration: "Completed",
    image: "/images/properties/commercial/SunsetHillFamilyChiropractic.jpg",
    features: ["Healthcare construction", "Professional design", "Medical facility expertise", "Quality craftsmanship"],
  },
  {
    title: "Sq. Wires Restaurant And Market",
    location: "St. Louis, Missouri",
    size: "Restaurant/Retail",
    budget: "Commercial Project",
    duration: "Completed",
    image: "/images/properties/commercial/SqWiresRestaurantAndMarket.jpg",
    features: ["Restaurant construction", "Commercial kitchen", "Retail space", "Professional finish"],
  },
  {
    title: "Winter Opera St Louis",
    location: "St. Louis, Missouri",
    size: "Entertainment Venue",
    budget: "Commercial Project",
    duration: "Completed",
    image: "/images/properties/commercial/WinterOperaStLouis.jpg",
    features: ["Entertainment venue", "Specialized construction", "Acoustic considerations", "Professional craftsmanship"],
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
                <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
                <div className="text-sm text-slate-400">Residential Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">75+</div>
                <div className="text-sm text-slate-400">Commercial Buildings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">$50M+</div>
                <div className="text-sm text-slate-400">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
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
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <Badge className="bg-blue-500 text-white">Commercial Specialists</Badge>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Commercial Construction</h2>
              <p className="text-lg text-slate-600 mb-6">
                We provide comprehensive commercial construction services including new construction, full-scale building solutions, 
                tenant buildout/finish, property management, maintenance, 24/7 emergency service, and cleaning services. 
                Our expertise makes us trusted by top institutions across the region.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">New Construction</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Full-Scale Building Solutions</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Tenant Buildout/Finish</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Property Management</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Cleaning Services</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
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
                <div className="text-2xl font-bold text-blue-500 mb-1">75+</div>
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
                  <div className="text-blue-600 font-semibold mb-4">{project.budget}</div>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-slate-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
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
                src="/images/properties/homes/LuxuryPool.jpg"
                alt="Luxury residential construction with pool - St. Louis"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-500 mb-1">500+</div>
                <div className="text-sm text-slate-600">Residential Projects</div>
                <div className="text-xs text-slate-500 mt-1">Custom Homes & Renovations</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <Badge className="bg-blue-500 text-white">40% Residential Focus</Badge>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Residential Construction</h2>
              <p className="text-lg text-slate-600 mb-6">
                Comprehensive residential construction services including design/build, custom homes, renovations, 
                and full-scale interior/exterior work. We work closely with families to create homes that 
                reflect their unique vision and lifestyle needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Design/Build</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Custom Homes</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Kitchens/Baths</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Full Renovations</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Structural Work</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-slate-700">Finish Work</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
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
                  <div className="text-blue-600 font-semibold mb-4">{project.budget}</div>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-slate-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
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
              <Badge className="bg-blue-500 text-white mb-4 px-4 py-2">Featured Project</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Bonan Towers</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our flagship commercial project showcasing 81,000 square feet of exceptional construction. 
                Currently serving under a 4-year management and maintenance contract, demonstrating our expertise in ongoing commercial facility management.
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
                    <div className="text-3xl font-bold text-blue-500 mb-2">81K</div>
                    <div className="text-sm text-slate-600">Square Feet</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-500 mb-2">4</div>
                    <div className="text-sm text-slate-600">Years</div>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  This major commercial development represents the pinnacle of our construction capabilities, 
                  featuring advanced systems, quality materials, and meticulous attention to detail throughout 
                  the construction process.
                </p>
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
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
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg">
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
