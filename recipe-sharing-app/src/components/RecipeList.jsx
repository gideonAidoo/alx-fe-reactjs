import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore"; // adjust path if needed

const RecipeDetails = () => {
  const { id } = useParams();

  // ✅ convert both to strings to avoid mismatches
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found!</p>
        <Link to="/">Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px 0" }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {/* ✅ Explicitly render recipe.id */}
      <p>
        <strong>ID:</strong> {recipe.id}
      </p>

      <Link to={`/edit/${recipe.id}`} style={{ marginRight: "10px" }}>
        Edit Recipe
      </Link>
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
