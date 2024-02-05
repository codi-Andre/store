export function fetchApi(path: string, init?: RequestInit) {
  const baseUrl = "http:localhost:3000"
  const prefixApi = "/api"
  const url = new URL(prefixApi.concat(path), baseUrl)

  return fetch(url, init)
}
