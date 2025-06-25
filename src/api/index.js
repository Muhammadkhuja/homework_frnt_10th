import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE__BASE_URL,
});

export default axiosInstance;
