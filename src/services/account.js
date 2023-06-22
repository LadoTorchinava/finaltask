import axios from "axios";

const BASE_URL = "http://localhost:3004";

const client = axios.create({
  baseURL: BASE_URL,
});

export async function loginUser(params) {
  try {
    const { data } = await client.post(`/login`, {
      email: params.email,
      password: params.password,
    });

    if (data?.accessToken) {
      return data;
    }

    return data;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
}

export async function registerUser(params) {
  try {
    const response = await client.post(`/register`, params);

    return response;
  } catch (error) {
    console.error(error);
  }
}
