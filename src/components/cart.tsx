"use client"

import products from "@/collections/products.json"

import { CloseIcon } from "@/assets/icons/close"
import { useCart } from "@/contexts/cart-context"
import { CartItemCard } from "./cart-item-card"
import { useMemo } from "react"
import Link from "next/link"

export function Cart() {
  const { cart, isOpen, openCart, closeCart, getItemQuantity } = useCart()

  const filteredItems = useMemo(
    () =>
      products.filter((product) => cart.some((item) => item.id === product.id)),
    [cart]
  )

  const total = useMemo(
    () =>
      filteredItems.reduce((acc, cur) => {
        const productQuantity = getItemQuantity(cur.id)

        const productTotal = cur.price * productQuantity

        return parseFloat((acc + productTotal).toFixed(2))
      }, 0),
    [filteredItems, getItemQuantity]
  )

  return (
    <section
      className={`${isOpen ? "flex" : "hidden"} fixed right-0 top-0 h-screen min-w-[22.5rem] max-w-[22.5rem] animate-slide-left
       flex-col bg-neutral-100 shadow-2xl`}
    >
      <h2 className="mb-1 bg-white p-4 text-xl font-bold shadow-md">
        Your cart
      </h2>

      <button
        className="absolute right-2 top-2 p-2"
        aria-label="close cart"
        onClick={() => {
          if (isOpen) {
            closeCart()
          } else {
            openCart()
          }
        }}
      >
        <CloseIcon className="h-8 w-8" />
      </button>

      <ul
        role="list"
        className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4"
      >
        {filteredItems.map((product) => (
          <CartItemCard
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </ul>

      <div className="mt-1 flex justify-between bg-white p-4 shadow-[0px_-2px_10px_rgba(0,0,0,0.2)]">
        <p className="p-2">
          Total:{" "}
          <span>
            {total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}
          </span>
        </p>

        <Link
          className="rounded-full bg-gradient-to-br from-accent-200 to-accent-500 px-6 py-2 shadow-outside duration-300 hover:shadow-none active:shadow-inside"
          href="/"
        >
          Checkout
        </Link>
      </div>
    </section>
  )
}
