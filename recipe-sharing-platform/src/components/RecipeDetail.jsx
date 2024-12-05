import React from "react";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json"; // Import your mock recipe data

function RecipeDetail() {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate();  // To navigate to different routes (optional, for a 'Back' button)
  
  const [recipe, setRecipe] = useState(null);  // State to hold the current recipe
  
  // useEffect to load recipe data when the component mounts
  useEffect(() => {
    // Find the recipe with the matching id
    const foundRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      // If no recipe is found, navigate back or show a 404 page
      navigate("/");  // Redirect to home page or error page
    }
  }, [id, navigate]);  // Dependency array ensures the effect runs when the id changes

  if (!recipe) return <div>Loading...</div>;  // Render loading state until recipe is found

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate("/")}  // Go back to home page
        className="bg-blue-500 text-white py-2 px-4 rounded mb-6"
      >
        Back to Recipes
      </button>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800">{recipe.title}</h1>
          <h2 className="text-lg font-medium text-gray-600 mt-2">{recipe.summary}</h2>

          <h3 className="mt-6 text-xl font-semibold text-gray-700">Ingredients:</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-600">{ingredient}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-gray-700">Instructions:</h3>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-600">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
