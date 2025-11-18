import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  title: "Taylor Leonard Corp | Commercial & Residential Construction",
  description:
    "Taylor Leonard Corp delivers exceptional commercial and residential construction projects with 30+ years of experience, industry-leading safety standards, and comprehensive design-build solutions.",
  keywords:
    "construction, commercial construction, residential construction, general contractor, design-build, property management, maintenance, emergency services, Taylor Leonard Corp",
  metadataBase: new URL("https://taylorleonardcorp.com"),
  openGraph: {
    title: "Taylor Leonard Corp | Commercial & Residential Construction",
    description: "Family-owned, veteran-founded construction company since 1990. Full-service design-build specialists with 100% satisfaction rating.",
    type: "website",
    url: "https://taylorleonardcorp.com",
    siteName: "Taylor Leonard Corp",
    images: [
      {
        url: "/images/Logos/JasonLeonardLogo.png",
        width: 1200,
        height: 630,
        alt: "Taylor Leonard Corp Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Leonard Corp | Commercial & Residential Construction",
    description: "Family-owned, veteran-founded construction company since 1990. Full-service design-build specialists.",
    images: ["/images/Logos/JasonLeonardLogo.png"],
  },
  icons: {
    icon: [
      { url: "/site-icon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/site-icon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    apple: "/images/Logos/NoTextLogoFIXED.png",
    shortcut: "/site-icon.ico",
  },
  other: {
    "color-scheme": "light dark",
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-blue-500/20 selection:text-blue-900`}> 
        <GoogleAnalytics />
        <Header />
        <main className="min-h-dvh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
