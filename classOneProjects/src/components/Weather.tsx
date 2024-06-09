import { useState, useEffect } from "react"
import getFetch from "../lib/fetch"

interface WeatherData {
  list: {
    main: {
      temp: number
    }
  }[]
}

const Weather = () => {
  const [data, setData] = useState<WeatherData | null>(null)
  const [location, setLocation] = useState("delhi")

  useEffect(() => {
    const handleSearch = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast`
      const params = {
        q: location,
        appid: import.meta.env.VITE_WEATHER_API,
      }
      const resData = await getFetch({ url, params })
      console.log(resData)
      setData(resData)
    }
    handleSearch()
  }, [location])

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      {data && (
        <div>
          <h2>Current Conditions</h2>
          <p>Temperature: {data.list[0].main.temp} °C</p>
        </div>
      )}
    </div>
  )
}

export default Weather
