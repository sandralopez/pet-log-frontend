import axiosPublic from "./axiosPublic";

const baseUrl = '/auth/refresh';

const refreshToken = async() => {
  try {
    const { data } = await axiosPublic.post(baseUrl);

    if (!data) {
      sessionStorage.removeItem("jwt");
      sessionStorage.removeItem("user");
    }

    sessionStorage.setItem("jwt", data);

    return { token: data};
  } catch (error) {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("user");
  }
};

export { refreshToken };