import { z } from "zod"
import products from "@/collections/products.json"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const id = z.string().parse(params.id)
  const productId = parseInt(id, 10)

  const product = products.find((product) => product.id === productId)

  if (!product) {
    return Response.json({ message: "Product not found." }, { status: 400 })
  }

  return Response.json(product)
}
