import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  id: string
  image: string
  title: string
}

export function CategoryCard({ id, image, title }: CategoryCardProps) {
  return (
    <Link href={`/category/${id}`}>
      <figure className="flex min-w-56 items-center gap-2 rounded-xl bg-white p-2 shadow-2xl duration-300 hover:scale-125">
        <Image
          className="h-16 w-16 object-scale-down"
          alt=""
          src={image}
          height={64}
          width={64}
        />

        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  )
}
