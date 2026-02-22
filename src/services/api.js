import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000, // 60 seconds (Render free tier may sleep)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;