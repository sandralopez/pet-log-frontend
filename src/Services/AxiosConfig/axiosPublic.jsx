import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

axiosPublic.defaults.xsrfCookieName = 'jwt'

axiosPublic.interceptors.request.use(
  async (config) => {
    config.withCredentials = true;

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosPublic;