import axios from "axios";

const URL = "https://api.weatherstack.com/current";
const API_KEY = "eba5967570e8485f7bb1be336bdf1ed3";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      query: query,
      units: "m",
      access_key: API_KEY,
    },
  });
  return data;
};
