import axios from "axios";

// Base GitHub API URL
const BASE_URL = "https://api.github.com";

// Get token from .env
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: GITHUB_API_KEY
    ? { Authorization: `token ${GITHUB_API_KEY}` }
    : {}, // Only add if key exists
});

// Function to search GitHub users
export const searchUsers = async (username) => {
  try {
    const response = await api.get(`/search/users?q=${username}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Function to get single user details
export const getUserDetails = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
};
