import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert ingredients and steps into arrays
    const newRecipe = {
      id: Date.now(), // unique ID
      title: formData.title,
      ingredients: formData.ingredients
        .split(",")
        .map((item) => item.trim()),
      steps: formData.steps.split(".").map((step) => step.trim()).filter(Boolean),
      image: formData.image || "https://via.placeholder.com/300", // fallback image
    };

    onAddRecipe(newRecipe);

    // Reset form
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
      image: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          value={formData.ingredients}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded h-24"
        />
        <textarea
          name="steps"
          placeholder="Steps (separate sentences with a period)"
          value={formData.steps}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded h-32"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
