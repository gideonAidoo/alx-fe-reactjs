import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title, description });
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
