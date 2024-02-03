import { NextRequest } from "next/server"
import { z } from "zod"

import products from "@/collections/products.json"

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get("q"))

  const searchProducts = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

  return Response.json(searchProducts)
}
