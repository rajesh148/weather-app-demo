import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY_APP // Replace with your OpenWeatherMap API key "4e2eb7a0c837a9ad06f3546a894fa6c3"
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: location,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchForecast = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}forecast`, {
      params: {
        q: location,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
};
