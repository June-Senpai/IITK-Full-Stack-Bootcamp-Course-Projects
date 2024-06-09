import axios from "axios"

async function getFetch({ url, params }: { url: string; params?: Record<string, unknown> }) {
  const res = await axios({
    url: url,
    method: "get",
    params: params,
  })
  return res.data
}

export default getFetch
