import { ShoppingBagIcon } from "@/assets/icons/shopping-bag"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  category: string
  id: number
  image: string
  price: number
  title: string
}

export function ProductCard({
  category,
  id,
  image,
  price,
  title
}: ProductCardProps) {
  return (
    <Link
      className="group relative inline-block h-96 w-80 rounded-xl bg-primary-100 p-4"
      href={`/product/${id}`}
    >
      <Image
        className="z-10 mx-auto mt-2 h-52 w-52 object-scale-down duration-500 group-hover:scale-110"
        alt=""
        src={image}
        height={250}
        width={250}
        quality={100}
      />

      <p className="mt-6">
        <span className="mr-2 rounded-full bg-secondary-200 px-3 py-1">
          {price.toLocaleString("en-US", {
            style: "currency",
            maximumFractionDigits: 0,
            currency: "USD"
          })}
        </span>{" "}
        <span className="rounded-full bg-accent-200 px-3 py-1">{category}</span>
      </p>

      <p className="mt-3">{title}</p>

      <button
        className="absolute right-2 top-2 rounded-full border-2 border-neutral-200 bg-white p-2 hover:border-0"
        aria-label="Add to the cart"
      >
        <ShoppingBagIcon className="h-8 w-8" />
      </button>
    </Link>
  )
}
