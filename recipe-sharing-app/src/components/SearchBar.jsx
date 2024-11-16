// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..." 
      onChange={handleSearch}
      style={{ padding: '8px', margin: '10px 0', width: '100%' }}
    />
  );
};

export default SearchBar;
