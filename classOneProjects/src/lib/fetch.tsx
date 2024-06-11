import axios from "axios"

async function getFetch({ url, params }: { url: string; params: Record<string, unknown> }) {
  try {
    const { data } = await axios({
      url: url,
      method: "get",
      params: params,
    })
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}

export default getFetch
