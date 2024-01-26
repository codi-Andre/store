"use client"

import { createContext, useContext, useState } from "react"

interface CartItem {
  id: number
  quantity: number
}

interface CartContextType {
  isOpen: boolean
  cart: CartItem[]
  cartQuantity: number
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  removeItemFromCart: (id: number) => void
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
}

interface CartProps {
  children: React.ReactNode
}

const CartContext = createContext({} as CartContextType)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProps) {
  const [cart, setCart] = useState([] as CartItem[])
  const [isOpen, setIsOpen] = useState(false)
  const cartQuantity = cart.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cart.find((item) => item.id === id)?.quantity || 0
  }

  function removeItemFromCart(id: number) {
    setCart((curItems) => curItems.filter((item) => item.id !== id))
  }

  function increaseCartQuantity(id: number) {
    setCart((curItems) => {
      if (curItems.find((item) => item.id === id)) {
        return curItems.map((item) => {
          if (item.id === id) {
            return { id, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...curItems, { id, quantity: 1 }]
      }
    })
  }

  function decreaseCartQuantity(id: number) {
    setCart((curItems) => {
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id)
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { id, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        cart,
        cartQuantity,
        openCart,
        closeCart,
        getItemQuantity,
        removeItemFromCart,
        increaseCartQuantity,
        decreaseCartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
