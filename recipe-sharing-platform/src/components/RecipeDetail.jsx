import { useParams, Link } from "react-router-dom";
import recipesData from "../data/recipes.json"; // ✅ import

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="p-6">
        <Link to="/" className="text-blue-600 underline mb-4 inline-block">
          ← Back to Recipes
        </Link>
        <p className="text-red-600">❌ Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Recipes
      </Link>
      <div className="max-w-2xl mx-auto border rounded-xl shadow p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 italic mb-6">{recipe.summary}</p>

        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
