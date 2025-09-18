
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Automatically generate recommendations on mount
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2> Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Try adding some favorites!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
