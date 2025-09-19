import axios from "axios";

const axiosInstance = axios.create()

export const setAxiosInstance = (token) => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

axiosInstance.interceptors.request.use((axiosConfig) => {
  return axiosConfig;
});

export default axiosInstance;