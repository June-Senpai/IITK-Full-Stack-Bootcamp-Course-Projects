import { useQuery } from "@tanstack/react-query"
import axios from "axios"

async function getFetch({ url, params }: { url: string; params: Record<string, unknown> }) {
  const { data } = await axios({
    url: url,
    method: "get",
    params: params,
  })
  return data
}

export const useFetch = (
  queryKey: string,
  url: string,
  params: Record<string, unknown>,
  staleTime: number = Infinity
) => {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => getFetch({ url, params }),
    staleTime: staleTime,
  })
}
