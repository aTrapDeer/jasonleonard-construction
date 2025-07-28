import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTABand() {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Vision?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Let's discuss your next construction project. Get a free consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-orange-500 hover:bg-slate-100 px-8 py-4 text-lg">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/quote">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
