import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // Initial state: an empty array of recipes
  searchTerm: '', // Search term for filtering
  filteredRecipes: [], // Filtered recipes based on search term

  // Actions
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
  setRecipes: (recipes) => set({ recipes }), // Set the entire list of recipes

  // Search and filtering
  setSearchTerm: (term) => set({ searchTerm: term }), // Update search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  }, // Filter recipes based on search term
}));

export default useRecipeStore;