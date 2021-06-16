
export const baseFetch = async ({url, method = "GET"}) => {
  return await fetch(process.env.baseUrl + url, {
    method
  }).then(res => res.json())
}