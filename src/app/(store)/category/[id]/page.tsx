import products from "@/collections/products.json"
import { ProductCard } from "@/components/product-card"

interface CategoryProps {
  params: {
    id: string
  }
}

async function mockedAPI(category: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  category = category.replace("-", " ")

  return products.filter((product) => product.category === category)
}

export default async function CategoryPage({ params }: CategoryProps) {
  const filteredProducts = await mockedAPI(params.id)

  return (
    <main className="container my-6 md:mb-24">
      <h2 className="mb-3 text-xl font-bold lg:mb-6 lg:mt-12"></h2>

      <ul className="flex flex-col items-center justify-evenly gap-8 md:flex-row md:flex-wrap">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            category={product.category}
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
            expanded
          />
        ))}
      </ul>
    </main>
  )
}
