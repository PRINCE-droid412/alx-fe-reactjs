import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // Import your mock recipe data

function RecipeDetail() {
  const { id } = useParams(); // Extract recipe ID from the URL
  const recipe = data.find((item) => item.id === parseInt(id)); // Find recipe by ID

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">Recipe Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cooking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>

          <a
            href="/"
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
