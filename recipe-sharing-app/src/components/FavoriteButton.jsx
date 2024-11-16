// src/components/FavoriteButton.jsx
import { useRecipeStore } from '../recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const isFavorite = useRecipeStore((state) => state.favorites.includes(recipeId));

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button onClick={toggleFavorite} style={{ marginTop: '10px' }}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
