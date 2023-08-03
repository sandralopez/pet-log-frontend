import axiosPublic from './AxiosConfig/axiosPublic';

const baseUrl = `/auth/login`;

const loginService = async (credentials) => {
  const { data } = await axiosPublic.post(baseUrl, credentials);

  return data;
}


export { loginService };