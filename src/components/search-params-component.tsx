"use client"

import { useSearchParams } from "next/navigation"

export function SearchParamsComponent() {
  const searchParams = useSearchParams()

  const query = searchParams.get("q")

  return (
    <h2 className="mb-3 text-xl font-bold lg:mb-6 lg:mt-12">
      Results for: {query ?? ""}
    </h2>
  )
}
