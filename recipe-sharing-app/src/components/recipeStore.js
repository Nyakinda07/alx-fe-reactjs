import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state: an empty array of recipes
  addRecipe: (newRecipe) => 
    set((state) => ({ recipes: [...state.recipes, newRecipe] })), // Add a new recipe
  deleteRecipe: (recipeId) => 
    set((state) => ({ 
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId) 
    })), // Delete a recipe
  updateRecipe: (updatedRecipe) => 
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })), // Update a recipe
}));

export default useRecipeStore;