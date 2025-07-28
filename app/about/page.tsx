import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Clock, Shield, Handshake, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Jason Leonard Taylor",
    title: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 25 years in construction, Jason founded JLTC with a vision to deliver exceptional quality while maintaining the highest safety standards. His hands-on approach and commitment to client relationships have been the foundation of our success.",
    experience: "25+ years",
    specialties: ["Project Leadership", "Client Relations", "Strategic Planning"],
  },
  {
    name: "Maria Rodriguez",
    title: "Vice President of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Maria brings 18 years of operational excellence to JLTC. Her expertise in project management and team coordination ensures every project runs smoothly from start to finish.",
    experience: "18 years",
    specialties: ["Operations Management", "Quality Control", "Team Leadership"],
  },
  {
    name: "David Chen",
    title: "Chief Project Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "David's engineering background and 15 years of project management experience help us tackle the most complex construction challenges with precision and innovation.",
    experience: "15 years",
    specialties: ["Project Management", "Engineering Solutions", "Risk Management"],
  },
  {
    name: "Sarah Mitchell",
    title: "Director of Safety & Compliance",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah's dedication to safety excellence has helped JLTC maintain our industry-leading safety record. Her proactive approach to compliance keeps our teams and clients protected.",
    experience: "12 years",
    specialties: ["Safety Management", "Regulatory Compliance", "Training Programs"],
  },
]

const timeline = [
  {
    year: "1998",
    title: "Company Founded",
    description:
      "Jason Leonard Taylor establishes JLTC with a focus on quality residential construction and client satisfaction.",
  },
  {
    year: "2003",
    title: "Commercial Expansion",
    description: "Expanded into commercial construction, completing our first major office building project.",
  },
  {
    year: "2008",
    title: "Safety Excellence",
    description:
      "Achieved industry-leading safety certification and implemented comprehensive safety training programs.",
  },
  {
    year: "2012",
    title: "Sustainable Building",
    description: "Became certified in green building practices and completed our first LEED-certified project.",
  },
  {
    year: "2018",
    title: "Technology Integration",
    description:
      "Invested in cutting-edge construction technology and project management systems for enhanced efficiency.",
  },
  {
    year: "2023",
    title: "25 Years Strong",
    description:
      "Celebrating 25 years of excellence with over 125 completed projects and a growing team of dedicated professionals.",
  },
]

const coreValues = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every decision we make prioritizes the safety and well-being of our team, clients, and communities.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We're committed to delivering exceptional craftsmanship that stands the test of time.",
  },
  {
    icon: Handshake,
    title: "Honest Relationships",
    description: "We build lasting partnerships through transparency, integrity, and open communication.",
  },
  {
    icon: Target,
    title: "Reliable Delivery",
    description: "Our clients count on us to deliver projects on time, on budget, and beyond expectations.",
  },
  {
    icon: Users,
    title: "Team Excellence",
    description: "We invest in our people because great teams build great projects.",
  },
  {
    icon: Clock,
    title: "Continuous Improvement",
    description: "We're always learning, growing, and finding better ways to serve our clients.",
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
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">About JLTC</h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8">
                For over 25 years, we've been more than just builders—we've been partners in bringing visions to life.
                Our story is one of steady growth, unwavering values, and a simple commitment: to do right by our
                clients, our team, and our community.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">1998</div>
                  <div className="text-sm text-slate-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">125+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="JLTC team at construction site"
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
                JLTC began with a simple belief: construction should be about more than just building structures—it
                should be about building relationships, trust, and lasting value for our clients and communities.
              </p>

              <p className="mb-6">
                When Jason Leonard Taylor founded our company in 1998, he brought with him years of hands-on experience
                and a vision for how construction could be done better. Not flashier or faster, but better—with more
                attention to detail, clearer communication, and a genuine commitment to doing what's right.
              </p>

              <p className="mb-6">
                Over the years, we've grown from a small residential contractor to a full-service construction company
                handling everything from luxury homes to complex commercial projects. But our core values haven't
                changed. We still believe in showing up every day with the same work ethic, the same attention to
                safety, and the same respect for our clients that got us started.
              </p>

              <p className="mb-6">
                We're proud of what we've built—not just the buildings, but the relationships, the reputation, and the
                team of dedicated professionals who make it all possible. Every project is a chance to prove ourselves
                again, and we don't take that responsibility lightly.
              </p>

              <p className="text-lg font-medium text-slate-800">
                Today, JLTC stands as a testament to what's possible when you combine experience, integrity, and a
                genuine desire to serve others. We're not the biggest construction company out there, and that's by
                design. We'd rather be known for the quality of our work than the quantity of our projects.
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
                    <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-orange-600" />
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
                Every JLTC project comes with our complete commitment to excellence. Here's what you can expect when you
                work with us:
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Safety-First Approach</h3>
                    <p className="text-slate-600">
                      Industry-leading safety protocols that protect everyone on the job site and ensure peace of mind
                      for our clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Exceptional Craftsmanship</h3>
                    <p className="text-slate-600">
                      Attention to detail and quality materials that result in buildings designed to last for
                      generations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                    <Handshake className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Clear Communication</h3>
                    <p className="text-slate-600">
                      Regular updates, transparent pricing, and honest conversations throughout every phase of your
                      project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">On-Time, On-Budget Delivery</h3>
                    <p className="text-slate-600">
                      Reliable project management that respects your timeline and budget without compromising on
                      quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Collaborative Partnership</h3>
                    <p className="text-slate-600">
                      We work with you, not just for you, ensuring your vision guides every decision we make.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="JLTC construction quality"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-orange-500 mb-1">0.85</div>
                <div className="text-sm text-slate-600">EMR Safety Rating</div>
                <div className="text-xs text-slate-500 mt-1">Industry Leading</div>
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
              Meet the experienced professionals who guide JLTC's vision and ensure every project meets our high
              standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                  <p className="text-orange-600 font-medium mb-2">{member.title}</p>
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
              25 years of steady growth, continuous learning, and unwavering commitment to our clients and community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-orange-200 hidden sm:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="hidden sm:flex absolute left-2 md:left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg" />
                    <div className="sm:ml-8 md:ml-16 bg-slate-50 rounded-lg p-4 md:p-6 w-full">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-orange-500 text-white mr-3">{item.year}</Badge>
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
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
