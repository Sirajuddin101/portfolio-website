import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sirajuddin Kamal - Web Developer & IoT Enthusiast",
  description:
    "Full-stack web developer specializing in React, Node.js, Firebase, and IoT development. Building modern, responsive applications with real-time features.",
  keywords: "web developer, full-stack developer, React, Node.js, Firebase, IoT, frontend, backend, Sirajuddin Kamal",
  authors: [{ name: "Sirajuddin Kamal" }],
  creator: "Sirajuddin Kamal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sirajuddin-kamal.vercel.app",
    title: "Sirajuddin Kamal - Web Developer & IoT Enthusiast",
    description: "Full-stack web developer specializing in React, Node.js, Firebase, and IoT development.",
    siteName: "Sirajuddin Kamal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sirajuddin Kamal - Web Developer & IoT Enthusiast",
    description: "Full-stack web developer specializing in React, Node.js, Firebase, and IoT development.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
