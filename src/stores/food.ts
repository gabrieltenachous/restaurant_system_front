import { defineStore } from "pinia";
import { Food } from "@/interfaces/food";
import { foods } from "@/data/food";

export const useFoodStore = defineStore("foodStore", {
  state: () => ({
    allFoods: Object.values(foods).flat() as Food[], // Todos os alimentos
    filteredFoods: [] as Food[], // Alimentos filtrados
  }),
  getters: {
    getFoods(state): Food[] {
      return state.filteredFoods.length ? state.filteredFoods : state.allFoods;
    },
  },
  actions: {
    setFilteredFoods(categoryId: number) {
      this.filteredFoods = this.allFoods.filter((food) => food.categoryId === categoryId);
    },
    resetFilter() {
      this.filteredFoods = [];
    },
  },
});
