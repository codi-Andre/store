import type { Metadata } from "next"
import "./globals.css"

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
