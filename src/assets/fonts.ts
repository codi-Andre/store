import { Poppins, Inter } from "next/font/google"

export const poppins = Poppins({
  weight: ["500", "700"],
  variable: "--font-poppins",
  subsets: ["latin"]
})

export const inter = Inter({
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  subsets: ["latin"]
})
