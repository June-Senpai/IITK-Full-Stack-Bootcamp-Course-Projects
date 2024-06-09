import axios from "axios"

async function getFetch({ url, params }: { url: string; params: Record<string, unknown> }) {
  try {
    const res = await axios({
      url: url,
      method: "get",
      params: params,
    })
    return res.data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}

export default getFetch
