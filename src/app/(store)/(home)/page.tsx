import { ProductCard } from "@/components/product-card"
import { Product } from "@/entities/product"
import { fetchApi } from "@/lib/fetchApi/fetchApi"

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await fetchApi("/products/featured", {
    method: "GET",
    cache: "force-cache",
    headers: {
      accept: "application/json"
    }
  })

  const data = await response.json()

  return data
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <main className="container">
      <section>
        <h2 className="mb-3 mt-6 text-xl font-medium lg:mb-6 lg:mt-12">
          Featured products
        </h2>

        <ul className="flex flex-col flex-wrap items-center justify-evenly gap-4 md:flex-row">
          {featuredProducts.map((product) => (
            <li key={product.id}>
              <ProductCard
                id={product.id}
                category={product.category}
                image={product.image}
                price={product.price}
                title={product.title}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
