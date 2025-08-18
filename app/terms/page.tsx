"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 mr-4">
                <Link href="/">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg md:text-xl text-slate-300">
              These terms govern your use of Taylor Leonard Corp's website and services. Please read them carefully.
            </p>
            <div className="text-sm text-slate-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    By accessing and using the Taylor Leonard Corp website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Taylor Leonard Corp provides construction services including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Commercial construction and development</li>
                    <li>Residential construction and renovations</li>
                    <li>Design-build services</li>
                    <li>Property management and maintenance</li>
                    <li>Emergency repair services</li>
                    <li>Construction consulting and project management</li>
                    <li>General contracting services</li>
                  </ul>
                  <p>
                    Our website provides information about our services, allows you to request quotes, and facilitates communication between you and our team.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use License</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Taylor Leonard Corp's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by Taylor Leonard Corp at any time.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Conduct</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    When using our website and services, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Submit false, misleading, or fraudulent information</li>
                    <li>Use the website for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the website or servers</li>
                    <li>Transmit viruses, malware, or other harmful code</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Quote Requests and Communications</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    When you submit a quote request or contact us through our website:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You agree to provide accurate and complete information</li>
                    <li>We will use your information to respond to your inquiry</li>
                    <li>Quote requests are estimates only and subject to change</li>
                    <li>We reserve the right to decline any project or request</li>
                    <li>All communications are subject to our privacy policy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    The materials on Taylor Leonard Corp's website are provided on an 'as is' basis. Taylor Leonard Corp makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p>
                    All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Taylor Leonard Corp and is protected by copyright and other intellectual property laws.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Disclaimer</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    The information on this website is provided for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
                  </p>
                  <p>
                    Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from loss of data or profits arising out of, or in connection with, the use of this website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    In no event shall Taylor Leonard Corp or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Taylor Leonard Corp's website, even if Taylor Leonard Corp or a Taylor Leonard Corp authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                  <p>
                    Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Links to Third-Party Websites</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Our website may contain links to third-party websites or services that are not owned or controlled by Taylor Leonard Corp. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                  </p>
                  <p>
                    You acknowledge and agree that Taylor Leonard Corp shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of the State of Missouri, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Taylor Leonard Corp may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Severability</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    If any provision of these terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Information</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <p className="font-semibold">Taylor Leonard Corp</p>
                    <p>2017 S Moor Dr, Foristell, MO 63348</p>
                    <p>Phone: 314-489-3229</p>
                    <p>Email: taylorleonardcorp@gmail.com</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
