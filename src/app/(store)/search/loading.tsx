import { SearchParamsComponent } from "@/components/search-params-component"
import { Suspense } from "react"

export default function SearchLoading() {
  return (
    <main className="container my-6 md:mb-12">
      <Suspense fallback={null}>
        <SearchParamsComponent />
      </Suspense>

      <div className="flex flex-wrap items-center justify-evenly gap-4">
        <div className="h-52 w-80 animate-pulse rounded-lg bg-neutral-200 md:w-[22.5rem]" />
        <div className="h-52 w-80 animate-pulse rounded-lg bg-neutral-200 md:w-[22.5rem]" />
        <div className="h-52 w-80 animate-pulse rounded-lg bg-neutral-200 md:w-[22.5rem]" />
        <div className="h-52 w-80 animate-pulse rounded-lg bg-neutral-200 md:w-[22.5rem]" />
        <div className="h-52 w-80 animate-pulse rounded-lg bg-neutral-200 md:w-[22.5rem]" />
        <div className="h-52 w-80 animate-pulse rounded-lg bg-neutral-200 md:w-[22.5rem]" />
      </div>
    </main>
  )
}
