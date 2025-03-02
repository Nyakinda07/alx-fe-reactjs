import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state: an empty array of recipes
  addRecipe: (newRecipe) => 
    set((state) => ({ recipes: [...state.recipes, newRecipe] })), // Add a new recipe
  setRecipes: (recipes) => set({ recipes }), // Set the entire list of recipes
}));

export default useRecipeStore;