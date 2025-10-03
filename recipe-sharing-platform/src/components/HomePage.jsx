import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data/recipes.json"; // ✅ import directly

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData); // ✅ load directly from import
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🍴 Delicious Recipes</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
