import { Card, CardContent } from "@/components/ui/card"
import { Building2, Home, Wrench, Shield, Factory, GraduationCap } from "lucide-react"
import Link from "next/link"

const markets = [
  {
    icon: Building2,
    title: "Commercial",
    description: "Office buildings, retail centers, and mixed-use developments",
    href: "/markets/commercial",
  },
  {
    icon: Home,
    title: "Residential",
    description: "Luxury homes and high-end residential communities",
    href: "/markets/residential",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Schools, universities, and educational facilities",
    href: "/markets/education",
  },
  {
    icon: Shield,
    title: "Healthcare",
    description: "Hospitals, clinics, and medical facilities",
    href: "/markets/healthcare",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Manufacturing, warehouses, and distribution centers",
    href: "/markets/industrial",
  },
  {
    icon: Wrench,
    title: "Design-Build",
    description: "Integrated design and construction services",
    href: "/services/design-build",
  },
]

export function MarketTiles() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Markets We Serve</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From commercial developments to residential luxury, we bring expertise across diverse construction markets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {markets.map((market, index) => {
            const Icon = market.icon
            return (
              <Link key={index} href={market.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200 hover:border-orange-200">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="p-2 md:p-3 bg-orange-100 rounded-lg mr-3 md:mr-4">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900">{market.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-600">{market.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
