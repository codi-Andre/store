import { Header } from "@/components/header"

interface StoreLayoutProps {
  children: React.ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}