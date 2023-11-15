import axios from "axios";

const api = axios.create({
  baseURL: "https",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${JSON.parse(
      localStorage.getItem("accessToken") as string
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
