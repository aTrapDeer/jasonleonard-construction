import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Jason Leonard Taylor Construction | Commercial & Residential Builder",
  description:
    "JLTC delivers exceptional commercial and residential construction projects with 25+ years of experience, industry-leading safety standards, and turnkey solutions.",
  keywords:
    "construction, commercial construction, residential construction, general contractor, design-build, safety-first construction",
  metadataBase: new URL("https://example.com"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
  other: {
    "color-scheme": "light dark",
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
        <Header />
        <main className="min-h-dvh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
