"use client"

import { CloseIcon } from "@/assets/icons/close"
import { MinusIcon } from "@/assets/icons/minus"
import { PlusIcon } from "@/assets/icons/plus"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"

interface CartItemCardProps {
  id: number
  image: string
  price: number
  title: string
}

export function CartItemCard({ id, image, price, title }: CartItemCardProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart
  } = useCart()

  const itemQuantity = getItemQuantity(id)

  return (
    <li
      className="relative grid grid-cols-2 rounded-lg bg-white p-4 text-sm shadow-md"
      key={id}
    >
      <Image
        className="row-span-3 h-24 w-24 self-center justify-self-center object-scale-down"
        alt=""
        src={image}
        height={96}
        width={96}
      />

      <button
        onClick={() => removeItemFromCart(id)}
        className="justify-self-end p-3"
        aria-label="remove item"
      >
        <CloseIcon className="h-6 w-6" />
      </button>

      <p className="row-span-2">{title}</p>

      <div className="col-span-2 flex items-center">
        <p>Quantity:</p>

        <button
          aria-label="decrease item quantity"
          className="p-3"
          onClick={() => decreaseCartQuantity(id)}
        >
          <MinusIcon className="h-6 w-6" />
        </button>

        <p className="text-lg">{itemQuantity}</p>

        <button
          aria-label="increase item quantity"
          className="p-3"
          onClick={() => increaseCartQuantity(id)}
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>

      <p>
        Item price:{" "}
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </p>

      <p className="font-medium">
        Subtotal:{" "}
        {parseFloat((price * itemQuantity).toFixed(2)).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </p>
    </li>
  )
}
