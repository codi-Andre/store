import products from "@/collections/products.json"

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const featuredProducts = products.filter(
    (product) => product.rating.rate > 4.6
  )

  return Response.json(featuredProducts)
}
