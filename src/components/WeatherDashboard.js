import React, { useState, useEffect } from "react";
import { fetchWeather, fetchForecast } from "../api/weatherApi";

const WeatherDashboard = () => {
  const [location, setLocation] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const weatherData = await fetchWeather(location);
        setWeather(weatherData);

        const forecastData = await fetchForecast(location);
        setForecast(forecastData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherData();
  }, [location]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 sm:max-w-lg">
      <h1 className="text-2xl font-bold text-center">Weather Dashboard</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className="w-full px-4 py-2 border rounded-md"
      />
      {weather && (
        <div className="text-center">
          <h2 className="text-xl font-semibold"> {weather.name}</h2>
          <p className="text-gray-600">{weather.weather[0].description}</p>
          <p className="text-gray-800">Temperature: {weather.main.temp}°C</p>
        </div>
      )}
      {forecast && (
        <div>
          <h2 className="text-lg font-semibold">Forecast</h2>
          <div className="space-y-2">
            {forecast.list.slice(0, 5).map((item) => (
              <div key={item.dt} className="flex justify-between">
                <p>{new Date(item.dt * 1000).toLocaleString()}</p>
                <p>{item.weather[0].description}</p>
                <p>Temp: {item.main.temp}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
