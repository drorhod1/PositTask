import axios from "axios";
import { config } from "@/config";

export const axiosClient = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

axiosClient.interceptors.request.use(function (config) {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (!error || (error.response && error.response.status === 401)) {}
    return Promise.reject(error);
  }
);
