import { useState, useEffect } from "react"
import getFetch from "../lib/fetch"

const Weather = () => {
  const [data, setData] = useState(null)
  const location = "delhi" // replace with your actual location

  const handleSearch = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast`
    const params = {
      q: location,
      appid: import.meta.env.VITE_WEATHER_API,
    }
    console.log(url, params)
    try {
      const resData = await getFetch({ url, params })
      setData(resData)
      console.log(resData)
    } catch (error) {
      console.error("Error fetching weather data:", error)
    }
  }

  // Call handleSearch when the component mounts
  useEffect(() => {
    handleSearch()
  }, [])

  return (
    <div>
      <h1>Weather</h1>
      {/* Render your weather data here */}
    </div>
  )
}

export default Weather
