import { ProductCard } from "@/components/product-card"
import { redirect } from "next/navigation"
import products from "@/collections/products.json"

interface SearchPageProps {
  searchParams: {
    q: string
  }
}

async function mockedApi(query: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect("/")
  }

  const products = await mockedApi(query)

  return (
    <main className="container my-6 md:mb-12">
      <h2 className="mb-3 text-xl font-bold lg:mb-6 lg:mt-12">
        Results for: {query}
      </h2>

      <ul className="flex flex-col items-center justify-evenly gap-8 md:flex-row md:flex-wrap">
        {products.map((product) => (
          <ProductCard
            expanded
            id={product.id}
            category={product.category}
            image={product.image}
            price={product.price}
            title={product.title}
            key={product.id}
          />
        ))}
      </ul>
    </main>
  )
}
