"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, FileText, CheckCircle, Upload, X } from "lucide-react"
import { useState } from "react"

export default function QuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const fileNames = files.map((file) => file.name)
    setUploadedFiles((prev) => [...prev, ...fileNames])
  }

  const removeFile = (fileName: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file !== fileName))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-16 flex items-center justify-center">
        <Card className="max-w-lg mx-4">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Quote Request Submitted!</h2>
            <p className="text-slate-600 mb-6">
              Thank you for your detailed quote request. Our team will review your project requirements and contact you
              within 2-3 business days to schedule a consultation.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-orange-800 mb-2">What happens next?</h3>
              <ul className="text-sm text-orange-700 space-y-1 text-left">
                <li>• Initial review of your project details (24-48 hours)</li>
                <li>• Site visit scheduling call from our team</li>
                <li>• On-site consultation and measurements</li>
                <li>• Detailed quote delivery (5-7 business days)</li>
              </ul>
            </div>
            <Button onClick={() => setIsSubmitted(false)} className="bg-orange-500 hover:bg-orange-600">
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Get Your Project Quote</h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to turn your vision into reality? Provide us with your project details and we'll deliver a
              comprehensive quote tailored to your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="p-4 bg-orange-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Submit Details</h3>
                <p className="text-sm text-slate-300">Provide project information and requirements</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-orange-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Site Consultation</h3>
                <p className="text-sm text-slate-300">Schedule an on-site visit with our experts</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-orange-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Receive Quote</h3>
                <p className="text-sm text-slate-300">Get detailed pricing within 5-7 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Project Quote Request</CardTitle>
              <p className="text-slate-600">
                The more details you provide, the more accurate your quote will be. All fields marked with * are
                required.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" name="company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                      <Select name="preferredContact">
                        <SelectTrigger>
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Details</h3>
                  <div className="space-y-6 md:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select name="projectType" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-residential">New Residential Construction</SelectItem>
                            <SelectItem value="residential-renovation">Residential Renovation</SelectItem>
                            <SelectItem value="new-commercial">New Commercial Construction</SelectItem>
                            <SelectItem value="commercial-renovation">Commercial Renovation</SelectItem>
                            <SelectItem value="design-build">Design-Build Project</SelectItem>
                            <SelectItem value="addition">Addition/Extension</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectSize">Approximate Project Size</Label>
                        <Select name="projectSize">
                          <SelectTrigger>
                            <SelectValue placeholder="Select size range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under 1,000 sq ft</SelectItem>
                            <SelectItem value="1000-2500">1,000 - 2,500 sq ft</SelectItem>
                            <SelectItem value="2500-5000">2,500 - 5,000 sq ft</SelectItem>
                            <SelectItem value="5000-10000">5,000 - 10,000 sq ft</SelectItem>
                            <SelectItem value="10000-25000">10,000 - 25,000 sq ft</SelectItem>
                            <SelectItem value="over-25000">Over 25,000 sq ft</SelectItem>
                            <SelectItem value="unknown">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectLocation">Project Location *</Label>
                      <Input
                        id="projectLocation"
                        name="projectLocation"
                        placeholder="Full address or general area"
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget Range *</Label>
                        <Select name="budget" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-100k">Under $100K</SelectItem>
                            <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                            <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                            <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                            <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                            <SelectItem value="over-5m">Over $5M</SelectItem>
                            <SelectItem value="flexible">Flexible/TBD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Desired Start Date</Label>
                        <Select name="timeline">
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (1-3 months)</SelectItem>
                            <SelectItem value="short">3-6 months</SelectItem>
                            <SelectItem value="medium">6-12 months</SelectItem>
                            <SelectItem value="long">12+ months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">Project Description *</Label>
                      <Textarea
                        id="projectDescription"
                        name="projectDescription"
                        rows={6}
                        placeholder="Please provide detailed information about your project including scope, specific requirements, materials preferences, special features, and any other relevant details..."
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Services Needed */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Services Needed</h3>
                  <p className="text-slate-600 mb-4">Select all services that apply to your project:</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {[
                      "Design Services",
                      "Architectural Planning",
                      "Permit Assistance",
                      "Site Preparation",
                      "Foundation Work",
                      "Framing",
                      "Electrical",
                      "Plumbing",
                      "HVAC",
                      "Roofing",
                      "Siding/Exterior",
                      "Interior Finishes",
                      "Flooring",
                      "Kitchen/Bath",
                      "Landscaping",
                      "Project Management",
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox id={service} name="services" value={service} />
                        <Label htmlFor={service} className="text-sm">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Documents</h3>
                  <p className="text-slate-600 mb-4">
                    Upload any relevant documents such as plans, sketches, photos, or inspiration images:
                  </p>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <Label htmlFor="fileUpload" className="cursor-pointer">
                      <span className="text-orange-600 hover:text-orange-700 font-medium">Click to upload files</span>
                      <span className="text-slate-600"> or drag and drop</span>
                    </Label>
                    <Input
                      id="fileUpload"
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.dwg,.doc,.docx"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                    <p className="text-xs text-slate-500 mt-2">
                      Supported formats: PDF, JPG, PNG, DWG, DOC, DOCX (Max 10MB per file)
                    </p>
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {uploadedFiles.map((fileName, index) => (
                        <div key={index} className="flex items-center justify-between bg-slate-50 p-2 rounded">
                          <span className="text-sm text-slate-700">{fileName}</span>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(fileName)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Additional Information</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Special Requirements or Considerations</Label>
                      <Textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        rows={3}
                        placeholder="Any special requirements, accessibility needs, environmental considerations, or other important details..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="questions">Questions for Our Team</Label>
                      <Textarea
                        id="questions"
                        name="questions"
                        rows={3}
                        placeholder="Any specific questions about the construction process, materials, timeline, or our services..."
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation Preferences */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Consultation Preferences</h3>
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="consultationType">Preferred Consultation Type</Label>
                      <Select name="consultationType">
                        <SelectTrigger>
                          <SelectValue placeholder="Select consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="on-site">On-site visit</SelectItem>
                          <SelectItem value="virtual">Virtual meeting</SelectItem>
                          <SelectItem value="office">Office meeting</SelectItem>
                          <SelectItem value="phone">Phone consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Best Time to Contact</Label>
                      <Select name="availability">
                        <SelectTrigger>
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="siteVisit" name="siteVisit" />
                      <Label htmlFor="siteVisit" className="text-sm text-slate-600">
                        I understand that an on-site visit may be required for an accurate quote
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="newsletter" name="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm text-slate-600">
                        I'd like to receive updates about JLTC projects and construction insights
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" name="terms" required />
                      <Label htmlFor="terms" className="text-sm text-slate-600">
                        I agree to the{" "}
                        <a href="/privacy" className="text-orange-600 hover:underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="/terms" className="text-orange-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        *
                      </Label>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Quote Process Timeline</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Initial review: 24-48 hours</li>
                      <li>• Consultation scheduling: 2-3 business days</li>
                      <li>• Site visit (if needed): Within 1 week</li>
                      <li>• Detailed quote delivery: 5-7 business days after site visit</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6"
                  >
                    {isSubmitting ? "Submitting Request..." : "Submit Quote Request"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
