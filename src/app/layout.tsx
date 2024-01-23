import type { Metadata } from "next"
import "./globals.css"
import { inter, poppins } from "@/assets/fonts"

export const metadata: Metadata = {
  title: "Store",
  description:
    "Fake online store to show off my skills as a developer and designer"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
