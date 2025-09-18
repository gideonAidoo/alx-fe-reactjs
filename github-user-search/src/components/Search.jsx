import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      if (data && data.items?.length > 0) {
        setUsers(data.items);
      } else {
        setError("Looks like we cant find the user"); 
      }
    } catch (err) {
      setError("Looks like we cant find the user"); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        GitHub Advanced User Search 🔍
      </h2>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded-md"
        />

        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded-md"
        />

        <button
          type="submit"
          className="col-span-1 md:col-span-3 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Results */}
      <div className="mt-6 grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 border p-4 rounded-lg shadow-sm hover:shadow-md"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
