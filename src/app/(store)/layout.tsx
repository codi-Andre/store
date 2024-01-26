import { Header } from "@/components/header"
import { CartProvider } from "@/contexts/cart-context"

interface StoreLayoutProps {
  children: React.ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <CartProvider>
      <Header />
      {children}
    </CartProvider>
  )
}
