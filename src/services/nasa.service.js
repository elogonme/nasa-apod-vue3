import axios from "axios";
// import config from "../config.json";
const apiKey = import.meta.env.VITE_NASA_API_KEY;
const apiClient = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPicture(date) {
    if (date) {
      return apiClient.get(`?api_key=${apiKey}&date=${date}`);
    }
    return apiClient.get("?api_key=" + apiKey);
  },
  //   getPictureBydate(date) {
  //     return apiClient.get(`?api_key=${apiKey}&date=${date}`);
  //   },
  // postEvent(event) {
  //   return apiClient.post("/events", event);
  // },
};
