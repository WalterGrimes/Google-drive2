import type React from "react"
import type { Metadata } from "next"
// ✅ НОВЫЕ ИМПОРТЫ
import { GeistSans } from "geist/font/sans" 
import { GeistMono } from "geist/font/mono" 
import '../styles/globals.css'


const geistSans = GeistSans
const geistMono = GeistMono

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
