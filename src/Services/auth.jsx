import axios from 'axios';
import { BASE_URL } from './config';

const baseUrl = `${BASE_URL}/auth/login`;

const loginService = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);

  return data;
}

export { loginService };