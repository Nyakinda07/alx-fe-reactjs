import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // Initial state: an empty array of recipes
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