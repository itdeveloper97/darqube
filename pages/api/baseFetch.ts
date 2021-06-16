type HttpMethods = "GET" | "POST" | "PUT" | "DELETE"


export const baseFetch = async ({url, method = "GET"}: {url: string; method: HttpMethods}) => {
  return await fetch(process.env.baseUrl + url, {
    method
  }).then(res => res.json())
}