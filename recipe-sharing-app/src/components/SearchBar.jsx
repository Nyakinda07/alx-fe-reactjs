import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term); // Update search term in the store
    filterRecipes(); // Filter recipes based on the new search term
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
    />
  );
};

export default SearchBar;