// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch user data by username (simple search)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Fetch users with advanced search (location, repo count, etc.)
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items; // GitHub Search API returns { items: [...] }
  } catch (error) {
    console.error("Error fetching advanced user data:", error);
    return [];
  }
};
