import React, { useState, useEffect } from "react";
import recipeData from "../data.json"; // Adjust the path based on your file structure
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a local JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
              <a
                href={`/recipes/${recipe.id}`}
                className="block mt-4 text-blue-600 hover:underline font-medium"
              > View Recipe →</a>
            </div>
            <Link
              to="/add-recipe"
              className="inline-block px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition duration-300"
            >
              Add a New Recipe
            </Link> {/* Recipe List */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
