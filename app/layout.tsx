import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BRIBBIT on BASE",
  description: "Join the thriving community of frog lovers rallying behind Baby Ribbit the Frog",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
