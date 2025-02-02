// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
   <button
      onClick={handleDelete}
      style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
