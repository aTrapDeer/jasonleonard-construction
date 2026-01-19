"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg md:text-xl text-slate-300">
              Your privacy is important to us. This policy explains how Taylor Leonard Corp collects, uses, and protects your information.
            </p>
            <div className="text-sm text-slate-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Taylor Leonard Corp ("we," "our," or "us") collects information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fill out contact forms on our website</li>
                    <li>Request quotes for construction services</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Contact us via email or phone</li>
                    <li>Apply for employment opportunities</li>
                  </ul>
                  <p>
                    This information may include your name, email address, phone number, company name, project details, and any other information you choose to provide.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Automatically Collected Information</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    When you visit our website, we automatically collect certain information about your device and how you interact with our site, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on each page</li>
                    <li>Referring website or search terms</li>
                    <li>Device information and screen resolution</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve our website functionality and user experience</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Ensure website security and prevent fraud</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Google Analytics and Third-Party Services</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    We use Google Analytics and other third-party services to analyze website traffic and user behavior. These services may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Page views and user interactions</li>
                    <li>Demographic information and interests</li>
                    <li>Conversion tracking and goal completion</li>
                    <li>Real-time user behavior data</li>
                  </ul>
                  <p>
                    Google Analytics uses cookies and may share data with Google in accordance with their privacy policy. You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. How We Use Your Information</h2>
                <div className="space-y-4 text-slate-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and improve our construction services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send project updates and communications</li>
                    <li>Process quote requests and proposals</li>
                    <li>Analyze website usage and improve user experience</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and ensure website security</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers who assist in our operations</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Security</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Secure data transmission protocols</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Rights and Choices</h2>
                <div className="space-y-4 text-slate-700">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Control cookie settings through your browser</li>
                    <li>File a complaint with relevant authorities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Policy</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    If you have any questions about this privacy policy or our data practices, please contact us:
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
