"use client"

import { SearchIcon } from "@/assets/icons/search"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent } from "react"

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="col-span-2 flex max-h-10 max-w-80 gap-1 rounded-full
       bg-neutral-100 px-4 py-2 sm:col-span-1 sm:col-start-2 sm:row-start-1"
    >
      <SearchIcon className="text-neutral-400" />

      <input
        className="min-w-0 bg-transparent px-1"
        placeholder="Search products..."
        type="text"
        name="q"
        required
        defaultValue={query ?? ""}
      />
    </form>
  )
}
