"use client"

import { ShoppingBagIcon } from "@/assets/icons/shopping-bag"
import { useCart } from "@/contexts/cart-context"

export function CartButton() {
  const { cartQuantity, openCart, isOpen, closeCart } = useCart()

  return (
    <button
      className="flex items-center gap-1 p-2"
      onClick={() => {
        if (isOpen) {
          closeCart()
        } else {
          openCart()
        }
      }}
    >
      <span className="sr-only lg:not-sr-only">Cart ({cartQuantity})</span>
      <ShoppingBagIcon className="h-8 w-8" />
    </button>
  )
}
