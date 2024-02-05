export default function ProductLoading() {
  return (
    <main className="container my-6 grid grid-cols-1 justify-center gap-2 md:grid-cols-2 lg:my-12">
      <div className="h-6 w-80 animate-pulse rounded-lg bg-neutral-200 md:col-start-1" />
      <div className="h-4 w-36 animate-pulse rounded-lg bg-neutral-200 md:col-start-1" />
      <div className="h-80 w-80 animate-pulse rounded-lg bg-neutral-200 md:col-start-2 md:row-span-6" />
      <div className="h-12 w-80 animate-pulse rounded-lg bg-neutral-200 md:col-start-1" />
      <div className="h-8 w-36 animate-pulse rounded-lg bg-neutral-200 md:col-start-1" />
      <div className="h-6 w-12 animate-pulse rounded-lg bg-neutral-200 md:col-start-1" />
      <div className="h-16 w-80 animate-pulse rounded-lg bg-neutral-200 md:col-start-1" />
    </main>
  )
}
