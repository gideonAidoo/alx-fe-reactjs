// src/services/githubService.js

// Basic fetch (by username)
export async function fetchUserData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) return null;
  return await response.json();
}

// Advanced search fetch
export async function fetchAdvancedUserData(username, location, minRepos, page = 1) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query.trim()
  )}&per_page=10&page=${page}`;

  const response = await fetch(url);
  if (!response.ok) return null;
  return await response.json();
}
