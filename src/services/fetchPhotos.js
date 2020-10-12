import axios from "axios";

const URL = "https://api.unsplash.com/search/photos";
const API_KEY = "2xtQmTYUmVAuX1G1lUHMDdqr4vvWd0Vq54JRx9JUo1w";

export const fetchPhotos = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      query: query,
      client_id: API_KEY,
    },
  });
  return data;
};
