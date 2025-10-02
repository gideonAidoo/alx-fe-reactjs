import React, { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("/data.json")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    })
    .then((data) => {
      setRecipes(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error loading data:", err);
      setLoading(false);
    });
}, []);


  if (loading) {
    return <p className="text-center mt-10">Loading recipes...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold mt-4">{recipe.title}</h2>
          <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
