import { Reviews } from "@/components/reviews"
import { Product } from "@/entities/product"
import { fetchApi } from "@/lib/fetchApi/fetchApi"
import Image from "next/image"

interface ProductProps {
  params: { id: string }
}

async function getProduct(id: string): Promise<Product> {
  const response = await fetchApi(`/products/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json"
    }
  })

  const product = await response.json()

  return product
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.id)

  return (
    <main className="container my-6 grid grid-cols-2 md:my-12 lg:grid-cols-4">
      <h2 className="col-span-2 mt-6 text-lg font-bold">{product.title}</h2>

      <p className="lg:col-span-2">{product.category}</p>

      <Image
        className="col-span-2 mx-auto my-4 h-80 w-80 object-scale-down
         lg:col-start-3 lg:row-start-1 lg:row-end-8 lg:h-96 lg:w-96"
        alt=""
        src={product.image}
        height={320}
        width={320}
        quality={100}
      />

      <p className="self-center justify-self-center text-3xl lg:justify-self-start">
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2
        })}
      </p>

      <Reviews ratings={product.rating.rate} reviews={product.rating.count} />

      <button
        className="my-4 max-w-max rounded-full bg-gradient-to-br from-primary-500
       to-primary-700 px-4 py-2 text-white shadow-[4px_4px_4px_rgba(0,0,0,0.3)]
       duration-300 hover:shadow-none"
      >
        Add to the cart
      </button>

      <h3 className="col-span-2 mt-4 font-bold">Description</h3>

      <p className="col-span-2 max-w-[75ch] text-pretty">
        {product.description}
      </p>
    </main>
  )
}
