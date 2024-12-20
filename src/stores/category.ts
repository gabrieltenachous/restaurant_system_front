import { defineStore } from 'pinia';
import { Category } from '@/interfaces/category';
import { categories } from '@/data/categories';

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: categories as Category[],  // Inicializando com os dados fake
  }),
  getters: {
    getCategories(state): Category[] {
      return state.categories;
    },
  },
  actions: {
    // Se precisar de ações mais tarde, como buscar dados da API
    setCategories(categories: Category[]) {
      this.categories = categories;
    },
  },
});
