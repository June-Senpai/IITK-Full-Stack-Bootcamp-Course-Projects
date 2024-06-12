import { useDebounce } from "../hooks/Debounce"
import { useFetch } from "../lib/fetch"
import { kelvinToCelsius } from "../util/kelvinToCelsius "
import { useSearchParams } from "react-router-dom"

const Weather = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "delhi" })
  const locationQuery = searchParams.get("q") ?? "delhi"
  const debouncedLocation = useDebounce(locationQuery)

  const { data, error, isLoading } = useFetch(
    "weather",
    `https://api.openweathermap.org/data/2.5/forecast`,
    {
      q: debouncedLocation,
      appid: import.meta.env.VITE_WEATHER_API,
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev.toString())
        newParams.set("q", e.target.value)
        return newParams
      },
      { replace: true }
    )
  }

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" value={locationQuery} onChange={handleChange} />
      {isLoading && <p>Loading...</p>}
      {error && <p>An error has occurred: {error.message}</p>}
      {data && !isLoading && !error && (
        <div>
          <h2>Current Conditions</h2>
          <p>Temperature: {kelvinToCelsius(data.list[0].main.temp)} °C</p>
          <p>Temperature: {data.list[0].main.temp} °K</p>
        </div>
      )}
    </div>
  )
}

export default Weather
