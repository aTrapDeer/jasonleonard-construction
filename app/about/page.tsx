import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Clock, Shield, Handshake, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Jason",
    title: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Veteran founder with extensive experience in construction. Jason leads Taylor Leonard Corp with a commitment to quality and client satisfaction across all projects.",
    experience: "30+ years",
    specialties: ["Project Leadership", "Client Relations", "Strategic Planning"],
  },
  {
    name: "Sam",
    title: "Operations Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sam brings operational excellence to Taylor Leonard Corp, ensuring smooth project execution and quality control across all construction activities.",
    experience: "20+ years",
    specialties: ["Operations Management", "Quality Control", "Team Leadership"],
  },
  {
    name: "Joe",
    title: "Project Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Joe's project management expertise helps tackle complex construction challenges with precision and ensures projects are delivered on time and within budget.",
    experience: "15+ years",
    specialties: ["Project Management", "Construction Coordination", "Client Communication"],
  },
]

const timeline = [
  {
    year: "1990",
    title: "Brush Ups Founded",
    description:
      "The company began as Brush Ups, establishing a foundation in construction services.",
  },
  {
    year: "2003",
    title: "Rebranded to Taylor Leonard Corp",
    description: "After significant events, the company was rebranded and reorganized as Taylor Leonard Corp.",
  },
  {
    year: "2010",
    title: "Commercial Expansion",
    description: "Expanded into major commercial construction, focusing on banks, schools, and medical buildings.",
  },
  {
    year: "2015",
    title: "Safety Excellence",
    description:
      "Achieved exceptional safety record with no health or safety violations, establishing industry-leading standards.",
  },
  {
    year: "2020",
    title: "Property Management Services",
    description: "Added property management services as resident GC, tailored for commercial buildings.",
  },
  {
    year: "2024",
    title: "Over 2,000 Projects",
    description:
      "Celebrating over 2,000 completed projects with 100% satisfaction rating and $50M+ in total project value.",
  },
]

const coreValues = [
  {
    icon: Shield,
    title: "Safety First",
    description: "No records of health or safety violations - we prioritize the safety and well-being of everyone.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "100% satisfaction rating across 2,000+ projects with exceptional craftsmanship.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Trusted with top financial institutions and providing security for high-profile projects.",
  },
  {
    icon: Target,
    title: "Full Service",
    description: "Complete design-build services from initial schematics through final construction.",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Veteran founded and family owned business with deep commitment to our community.",
  },
  {
    icon: Clock,
    title: "Proven Experience",
    description: "Over 30 years of experience with 575+ completed projects and 2M+ square feet built.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">About Taylor Leonard Corp</h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8">
                Since 1990, we've been a family-owned, veteran-founded construction company delivering exceptional 
                results across commercial and residential markets. Our commitment to quality and safety has earned 
                us a 100% satisfaction rating across over 2,000 completed projects.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">1990</div>
                  <div className="text-sm text-slate-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">2000+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Taylor Leonard Corp team at construction site"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-lg text-slate-600">
                Built on a foundation of integrity, craftsmanship, and genuine care for our clients.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-xl leading-relaxed mb-6">
                Taylor Leonard Corp began with a simple belief: construction should be about more than just building 
                structures—it should be about building relationships, trust, and lasting value for our clients and communities.
              </p>

              <p className="mb-6">
                Originally founded in 1990, our company was rebranded and reorganized as Taylor Leonard Corp 
                in 2003. This transformation marked the beginning of our current era of excellence, bringing together 
                veteran leadership and a commitment to exceptional service.
              </p>

              <p className="mb-6">
                As a family-owned, veteran-founded business, we've grown to serve both commercial and residential markets, 
                with 60% of our work in commercial construction including banks, schools, medical buildings, and warehousing, 
                and 40% in residential projects. We provide complete design-build services, handling everything from initial 
                schematics through final construction.
              </p>

              <p className="mb-6">
                Our partnership with ServiPro and our role as resident general contractor for commercial property management 
                services demonstrates our commitment to long-term client relationships. We're trusted by top financial 
                institutions, providing security and reliability in every project we undertake.
              </p>

              <p className="text-lg font-medium text-slate-800">
                Today, Taylor Leonard Corp stands as a testament to what's possible when you combine experience, integrity, 
                and a genuine desire to serve others. With over 2,000 completed projects, 2 million+ square feet built, 
                and a perfect safety record, we continue to set the standard for construction excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our values aren't just words on a wall—they're the principles that guide every decision we make and every
              project we undertake.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Deliver</h2>
              <p className="text-lg text-slate-600 mb-8">
                Every Taylor Leonard Corp project comes with our complete commitment to excellence. Here's what you can expect when you
                work with us:
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Perfect Safety Record</h3>
                    <p className="text-slate-600">
                      No records of any health or safety violations - we maintain the highest safety standards on every project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">100% Satisfaction</h3>
                    <p className="text-slate-600">
                      Perfect satisfaction rating across over 2,000 completed projects with exceptional attention to detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Handshake className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Trusted by Financial Institutions</h3>
                    <p className="text-slate-600">
                      Providing security and reliability for top financial institutions through our proven track record.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Full Service Design-Build</h3>
                    <p className="text-slate-600">
                      Complete services from design and construction schematics through final build and delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Family Owned Values</h3>
                    <p className="text-slate-600">
                      Veteran founded and family owned business with personal commitment to every client relationship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Taylor Leonard Corp construction quality"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-500 mb-1">$50M+</div>
                <div className="text-sm text-slate-600">Total Project Value</div>
                <div className="text-xs text-slate-500 mt-1">2,000+ Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the experienced professionals who guide Taylor Leonard Corp's vision and ensure every project meets our high
              standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                  <Badge variant="secondary" className="mb-4">
                    {member.experience}
                  </Badge>
                  <p className="text-sm text-slate-600 mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="text-xs text-slate-500">
                        • {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Over 30 years of steady growth, continuous learning, and unwavering commitment to our clients and community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden sm:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="hidden sm:flex absolute left-2 md:left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg" />
                    <div className="sm:ml-8 md:ml-16 bg-slate-50 rounded-lg p-4 md:p-6 w-full">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-blue-500 text-white mr-3">{item.year}</Badge>
                        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We'd love to learn about your project and explore how we can help bring your vision to life. Let's start
            with a conversation.
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
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
