"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-16 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h2>
            <p className="text-slate-600 mb-6">
              Thank you for contacting Taylor Leonard Corp. We'll review your message and get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-blue-500 hover:bg-blue-600">
              Send Another Message
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Contact Taylor Leonard Corp</h1>
            <p className="text-lg md:text-xl text-slate-300">
              Have questions about our construction services? Want to discuss a potential project? 
              Get in touch with our team for expert guidance and personalized service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                  <p className="text-slate-600 mb-8">
                    We're here to help with your construction needs. Reach out to us through any of the following
                    methods.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Office Location</h3>
                      <p className="text-slate-600">
                        2017 S Moor Dr
                        <br />
                        Foristell, MO 63348
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">314-489-3229</p>
                      <p className="text-sm text-slate-500">9am - 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">taylorleonardcorp@gmail.com</p>
                      <p className="text-sm text-slate-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                      <div className="text-slate-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: By Appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Consultation */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Project Consultation</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      For project consultations and detailed discussions about your construction needs:
                    </p>
                    <p className="font-semibold text-blue-600">314-489-3229</p>
                    <p className="text-xs text-slate-500 mt-1">Available during business hours</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" name="company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Type of Inquiry</Label>
                      <Select name="inquiryType">
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="project">Project Discussion</SelectItem>
                          <SelectItem value="services">Services Inquiry</SelectItem>
                          <SelectItem value="consultation">Consultation Request</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Please tell us about your inquiry, questions, or how we can help you..."
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <Label htmlFor="newsletter" className="text-sm text-slate-600">
                          I'd like to receive updates about Taylor Leonard Corp projects and construction industry insights
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="terms"
                          name="terms"
                          required
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <Label htmlFor="terms" className="text-sm text-slate-600">
                          I agree to the{" "}
                          <a href="/privacy" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="/terms" className="text-blue-600 hover:underline">
                            Terms of Service
                          </a>{" "}
                          *
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-blue-500 hover:bg-blue-600 py-3 md:py-4"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
