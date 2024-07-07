import axios from "axios";

export const axiosInstance = axios.create({
  //   baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});