// ${api.base}weather?q=${query}&units=metric&APPID=${api.key}

import { useState } from "react";

const key = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_API_URL;

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    cityName: "",
    country: "",
    temp: "",
  });

  async function handleGetWeather(e) {
    e.preventDefault();
    if (!city.length) return;
    try {
      const response = await fetch(
        `${baseURL}weather?q=${city}&units=metric&APPID=${key}`
      );
      if (!response.ok) throw new Error("Failed to fetch!");
      const {
        name: cityName,
        sys: { country },
        main: { temp },
      } = await response.json();
      setWeatherData({ cityName, country, temp });
      setCity("");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleGetWeather}>
        <input
          type="text"
          value={city}
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      <div>
        <h1>{weatherData.cityName !== "" && weatherData.cityName}</h1>
        <h2>{weatherData.temp !== "" && weatherData.temp}°c</h2>
      </div>
    </div>
  );
}
