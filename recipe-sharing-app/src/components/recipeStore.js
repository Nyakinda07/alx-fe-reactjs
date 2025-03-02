import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  // Recipes and search functionality
  recipes: [], // Initial state: an empty array of recipes
  searchTerm: '', // Search term for filtering
  filteredRecipes: [], // Filtered recipes based on search term

  // Favorites and recommendations functionality
  favorites: [], // Array of favorite recipe IDs
  recommendations: [], // Array of recommended recipes

  // Actions for recipes
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

  // Actions for search and filtering
  setSearchTerm: (term) => set({ searchTerm: term }), // Update search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  }, // Filter recipes based on search term

  // Actions for favorites
  addFavorite: (recipeId) => 
    set((state) => ({ favorites: [...state.favorites, recipeId] })), // Add a recipe to favorites
  removeFavorite: (recipeId) => 
    set((state) => ({ 
      favorites: state.favorites.filter((id) => id !== recipeId) 
    })), // Remove a recipe from favorites

  // Actions for recommendations
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter((recipe) =>
      favorites.includes(recipe.id) && Math.random() > 0.5 // Mock logic for recommendations
    );
    set({ recommendations: recommended });
  }, // Generate recommendations based on favorites
}));

export default useRecipeStore;