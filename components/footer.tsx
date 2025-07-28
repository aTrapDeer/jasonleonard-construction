import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

const markets = [
  { name: "Commercial", href: "/markets/commercial" },
  { name: "Residential", href: "/markets/residential" },
  { name: "Healthcare", href: "/markets/healthcare" },
  { name: "Education", href: "/markets/education" },
  { name: "Industrial", href: "/markets/industrial" },
]

const services = [
  { name: "Design-Build", href: "/services/design-build" },
  { name: "General Contracting", href: "/services/general-contracting" },
  { name: "Preconstruction", href: "/services/preconstruction" },
  { name: "Renovations", href: "/services/renovations" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Get Quote", href: "/quote" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JL</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">JLTC</div>
                <div className="text-xs text-slate-400 -mt-1">CONSTRUCTION</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Building excellence for over 25 years. From commercial developments to luxury residential projects, JLTC
              delivers exceptional results with safety-first practices.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>123 Construction Way, Builder City, BC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="h-4 w-4" />
                <span>info@jltconstruction.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Markets */}
          <div>
            <h3 className="font-semibold text-white mb-4">Markets</h3>
            <ul className="space-y-2">
              {markets.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-300 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-300 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-300 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-slate-300">Get the latest news and project updates from JLTC.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 rounded-r-none sm:rounded-r-none mb-2 sm:mb-0"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none sm:rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Jason Leonard Taylor Construction. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0 text-center sm:text-left">
            <Link href="/privacy" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
