import { AccountIcon } from "@/assets/icons/account"
import { SearchIcon } from "@/assets/icons/search"
import { ShoppingBagIcon } from "@/assets/icons/shopping-bag"
import Link from "next/link"

export function Header() {
  return (
    <header
      className="container mt-2 grid grid-cols-[min-content_1fr] items-center
     gap-y-2 sm:grid-cols-[min-content_1fr_max-content] sm:gap-x-4 lg:mt-4"
    >
      <h1>
        <Link
          className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-3xl
         font-bold text-transparent lg:text-4xl xl:text-5xl"
          href="/"
        >
          Store
        </Link>
      </h1>

      <div className="flex justify-self-end">
        <button className="flex items-center gap-1 p-2">
          <ShoppingBagIcon className="h-8 w-8" />{" "}
          <span className="sr-only lg:not-sr-only">Cart (0)</span>
        </button>

        <Link className="flex items-center gap-1 p-2" href="/">
          <span className="sr-only lg:not-sr-only">Account</span>{" "}
          <AccountIcon className="h-8 w-8" />
        </Link>
      </div>

      <form
        className="col-span-2 flex max-h-10 max-w-80 gap-1 rounded-full
       bg-neutral-100 px-4 py-2 sm:col-span-1 sm:col-start-2 sm:row-start-1"
      >
        <SearchIcon className="text-neutral-400" />

        <input
          className="min-w-0 bg-transparent px-1"
          placeholder="Search products..."
          type="text"
        />
      </form>
    </header>
  )
}
