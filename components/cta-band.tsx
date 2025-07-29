import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTABand() {
  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Get a free consultation and quote for your construction project. Our team is ready to bring your vision to life.
        </p>
        <Button size="lg" asChild className="bg-white text-blue-500 hover:bg-slate-100 px-8 py-4 text-lg">
          <Link href="/quote">
            Get Free Quote
          </Link>
        </Button>
        <div className="mt-6">
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="border-white text-white hover:bg-white hover:text-blue-500 px-8 py-4 text-lg bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
