import axios from "axios";
const API_KEY = "30f9f7db82b0ae7d12df16e2ef1fc45f";
// Current weather
export const getCurrentWeather = async (city) => {
 const res = await axios.get(
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
 );
 return res.data;
};
// Historical (using forecast as approximation)
export const getHistoricalWeather = async (lat, lon) => {
 const res = await axios.get(
   `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
 );
 return res.data;
};

