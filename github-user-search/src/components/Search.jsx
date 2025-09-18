import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      if (data) {
        setUser(data);
      } else {
        setError("Looks like we cant find the user"); // ✅ exact match
      }
    } catch (err) {
      setError("Looks like we cant find the user"); // ✅ exact match
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        GitHub User Search 🔍
      </h2>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 bg-gray-100 p-4 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md flex-1"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {user && (
        <div className="mt-6 border p-4 rounded-lg shadow-sm text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h3 className="font-semibold mt-2">{user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
