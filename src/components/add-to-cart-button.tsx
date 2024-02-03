"use client"

import { ShoppingBagIcon } from "@/assets/icons/shopping-bag"
import { useCart } from "@/contexts/cart-context"

interface AddToCartButtonProps {
  productId: number
  icon?: boolean
}

export function AddToCartButton({ productId, icon }: AddToCartButtonProps) {
  const { increaseCartQuantity } = useCart()

  if (icon) {
    return (
      <button
        onClick={(e) => increaseCartQuantity(productId)}
        className="absolute right-2 top-2 rounded-full bg-white p-2
         shadow-outside hover:shadow-none  active:shadow-inside"
        aria-label="Add to the cart"
      >
        <ShoppingBagIcon className="h-8 w-8" />
      </button>
    )
  }

  return (
    <button
      onClick={() => increaseCartQuantity(productId)}
      className="my-4 max-w-max rounded-full bg-gradient-to-br from-primary-500
   to-primary-700 px-4 py-2 font-medium text-white
   shadow-outside duration-300 hover:shadow-none active:shadow-inside"
    >
      Add to the cart
    </button>
  )
}
