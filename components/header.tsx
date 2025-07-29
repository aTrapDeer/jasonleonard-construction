"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Markets", href: "/markets" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 50)

      // Apply show/hide behavior to all pages including homepage
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Different styles for homepage vs other pages
  const getHeaderClasses = () => {
    const baseTransform = `transform ${isVisible ? "translate-y-0" : "-translate-y-full"}`
    
    if (isHomepage) {
      // Homepage: transparent to black/blur on scroll + hide/show behavior
      return `fixed top-0 w-full z-50 transition-all duration-500 ${baseTransform} ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "bg-transparent"
      }`
    } else {
      // Other pages: black background + hide/show behavior
      return `fixed top-0 w-full z-50 transition-all duration-500 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl ${baseTransform}`
    }
  }

  const getHeaderStyle = () => {
    // Remove the transform that was causing the gap at the top
    return {}
  }

  return (
    <header className={getHeaderClasses()} style={getHeaderStyle()}>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-lg md:text-xl">TL</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-white text-lg md:text-xl leading-tight tracking-wide">
              Taylor Leonard Corp
            </div>
            <div className="text-xs text-white/60 -mt-1 tracking-widest uppercase">Construction</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isActive
                    ? "text-blue-400"
                    : "text-white/80 hover:text-blue-400"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            )
          })}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Button asChild size="sm" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <Link href="/quote">Get Quote</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden p-2 text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-slate-900 border-slate-800">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 pb-8 border-b border-slate-800">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">TL</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg leading-tight">Taylor Leonard Corp</div>
                    <div className="text-xs text-white/60 -mt-1 tracking-wider uppercase">Construction</div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-8">
                  <ul className="space-y-1">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                              isActive
                                ? "text-blue-400 border-blue-400/30"
                                : "text-white/80 hover:text-blue-400"
                            } hover:bg-white/5`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>

                {/* Mobile CTA */}
                <div className="border-t border-slate-800 pt-6">
                  <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 rounded-full py-3 transition-all duration-300 hover:scale-105">
                    <Link href="/quote" onClick={() => setIsOpen(false)}>Get Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
