import { env } from "@/env"

export function fetchApi(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const prefixApi = "/api"
  const url = new URL(prefixApi.concat(path), baseUrl)

  return fetch(url, init)
}
