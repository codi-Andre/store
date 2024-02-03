import Image from "next/image"
import Link from "next/link"
import { AddToCartButton } from "./add-to-cart-button"

interface ProductCardProps {
  category: string
  id: number
  image: string
  price: number
  title: string
  expanded?: boolean
}

export function ProductCard({
  category,
  id,
  image,
  price,
  title,
  expanded
}: ProductCardProps) {
  if (expanded) {
    return (
      <li className="relative flex max-w-[22.5rem] flex-col items-center rounded-lg bg-accent-100 p-4 pb-2 md:min-w-[22.5rem]">
        <Link className="grid grid-cols-2" href={`/product/${id}`}>
          <Image
            className="row-span-2 h-32 w-32 object-scale-down"
            alt=""
            src={image}
            height={128}
            width={128}
            quality={100}
          />

          <div>
            <p className="product-title">{title}</p>

            <p className="text-sm font-medium text-neutral-400">{category}</p>
          </div>

          <div>
            <p>
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            </p>
          </div>
        </Link>

        <AddToCartButton productId={id} />
      </li>
    )
  }

  return (
    <li className="relative">
      <Link
        className="group inline-block h-96 w-80 rounded-xl bg-primary-100 p-4"
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
          <span className="rounded-full bg-accent-200 px-3 py-1">
            {category}
          </span>
        </p>

        <p className="mt-3">{title}</p>
      </Link>
      <AddToCartButton productId={id} icon />
    </li>
  )
}
