import { ProductCard } from "@/components/product-card"
import categories from "@/collections/categories.json"
import { CategoryCard } from "@/components/category-card"
import products from "@/collections/products.json"

async function mockedApi() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return products.filter((product) => product.rating.rate > 4.6)
}

export default async function Home() {
  const featuredProducts = await mockedApi()

  return (
    <main className="container my-6 md:mb-12">
      <section>
        <h2 className="mb-3 mt-6 text-xl font-bold lg:mb-6 lg:mt-12">
          Featured products
        </h2>

        <ul className="flex flex-col flex-wrap items-center justify-evenly gap-4 md:flex-row">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              category={product.category}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 mt-6 text-xl font-bold lg:mb-6 lg:mt-12">
          Categories
        </h2>

        <ul className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.title}>
              <CategoryCard
                id={category.id}
                image={category.image}
                title={category.title}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
