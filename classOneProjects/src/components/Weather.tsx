import { useState } from "react"
import { useDebounce } from "../hooks/Debounce"
import { useFetch } from "../lib/fetch"
import { kelvinToCelsius } from "../util/kelvinToCelsius "

const Weather = () => {
  const [location, setLocation] = useState("delhi")
  const debounce = useDebounce(location)

  const { data, error, isLoading } = useFetch(
    "weather",
    `https://api.openweathermap.org/data/2.5/forecast`,
    {
      q: debounce,
      appid: import.meta.env.VITE_WEATHER_API,
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" value={location} onChange={handleChange} />
      {isLoading && <p>Loading...</p>}
      {error && <p>An error has occurred: {error.message}</p>}
      {data && !isLoading && !error && (
        <div>
          <h2>Current Conditions</h2>
          <p>Temperature: {Math.round(kelvinToCelsius(data.list[0].main.temp))} °C</p>
          <p>Temperature: {data.list[0].main.temp} °K</p>
        </div>
      )}
    </div>
  )
}

export default Weather
