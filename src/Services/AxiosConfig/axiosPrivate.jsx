import axios from "axios";
import { refreshToken } from "./refreshToken";

const axiosPrivate = axios.create();

axiosPrivate.defaults.baseURL = 'http://localhost:3000/api/v1';

axiosPrivate.interceptors.request.use(
  async (config) => {
    const jwt = sessionStorage.getItem("jwt");

    if (jwt) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${jwt}`,
      };

      config.withCredentials = true;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await refreshToken();

      if (result?.token) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.token}`,
        };
      }

      return axiosPrivate(config);
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;