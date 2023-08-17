import axiosPublic from './AxiosConfig/axiosPublic';

const baseUrl = `/auth`;

const loginService = async (credentials) => {
  const { data } = await axiosPublic.post(`${baseUrl}/login`, credentials);

  return { data};
}

const refreshTokenService = async() => {
    const { data } = await axiosPublic.post(`${baseUrl}/refresh`);

    return { token: data};
};

export { loginService, refreshTokenService };