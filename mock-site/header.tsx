"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Markets", href: "/markets" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "bg-transparent"
      }`}
      style={{
        transform: `translateY(${Math.min(scrollY * 0.1, 10)}px)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg md:text-xl">JL</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-white text-lg md:text-xl tracking-tight">JLTC</div>
              <div className="text-xs text-slate-400 -mt-1 tracking-widest">CONSTRUCTION</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-black/95 backdrop-blur-xl border-l border-white/10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">JL</span>
                </div>
                <div>
                  <div className="font-bold text-white text-xl tracking-tight">JLTC</div>
                  <div className="text-xs text-slate-400 -mt-1 tracking-widest">CONSTRUCTION</div>
                </div>
              </div>

              <nav className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-orange-400 font-medium py-3 border-b border-white/10 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6">
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 rounded-full py-3">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
