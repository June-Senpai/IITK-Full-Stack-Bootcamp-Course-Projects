import { useState, useEffect, useRef } from "react"
import getFetch from "../lib/fetch"
import { debounce } from "../util/debounce"

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
  const [searchTerm, setSearchTerm] = useState(location) // Immediate update state

  // useRef to store the debounced function
  const debouncedSetLocation = useRef(
    debounce((newLocation: string) => {
      setLocation(newLocation)
    }, 500)
  ).current

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocation = e.target.value
    setSearchTerm(newLocation) // Immediate update for input
    debouncedSetLocation(newLocation) // Debounced update for location state
  }

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" value={searchTerm} onChange={handleChange} />
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
