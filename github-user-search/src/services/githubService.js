import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
