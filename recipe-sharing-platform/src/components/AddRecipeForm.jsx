import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "At least one ingredient is required";
    if (!formData.steps.trim())
      newErrors.steps = "Steps/instructions are required";

    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear field-specific error on change
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop submit if errors exist

    const newRecipe = {
      id: Date.now(),
      title: formData.title,
      ingredients: formData.ingredients
        .split(",")
        .map((item) => item.trim()),
      steps: formData.steps
        .split(".")
        .map((step) => step.trim())
        .filter(Boolean),
      image: formData.image || "https://via.placeholder.com/300",
    };

    onAddRecipe(newRecipe);

    // Reset form
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
      image: "",
    });
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <textarea
            name="ingredients"
            placeholder="Ingredients (comma separated)"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full p-2 border rounded h-24"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <textarea
            name="steps"
            placeholder="Steps (separate sentences with a period)"
            value={formData.steps}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Image */}
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
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
