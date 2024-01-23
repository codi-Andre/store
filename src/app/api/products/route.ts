import products from "@/collections/products.json"

export function GET() {
  return Response.json(products)
}
