import products from "@/collections/products.json"

export function GET() {
  const featuredProducts = products.filter(
    (product) => product.rating.rate > 4.6
  )

  return Response.json(featuredProducts)
}
