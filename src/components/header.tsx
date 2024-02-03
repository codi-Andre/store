import { AccountIcon } from "@/assets/icons/account"
import Link from "next/link"
import { CartButton } from "./cart-button"
import { SearchForm } from "./search-form"

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
        <Link className="flex items-center gap-1 p-2" href="/">
          <AccountIcon className="h-8 w-8" />
          <span className="sr-only lg:not-sr-only">Account</span>{" "}
        </Link>

        <CartButton />
      </div>

      <SearchForm />
    </header>
  )
}
