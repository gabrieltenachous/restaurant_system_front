<template>
  <div class="category-container">
    <swiper :slides-per-view="'auto'" space-between="16" grab-cursor>
      <swiper-slide
        v-for="category in categories"
        :key="category.id"
        class="category-item"
        @click="selectCategory(category.id)"
      >
        <i :class="`fa fa-${category.icon}`" class="category-icon"></i>
        <h6 class="category-name">{{ category.name }}</h6>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '@/stores/category';
import { useFoodStore } from '@/stores/food';

const categoryStore = useCategoryStore();
const foodStore = useFoodStore();

// Reatividade com storeToRefs
const { getCategories } = storeToRefs(categoryStore);
const categories = getCategories;

const selectCategory = (categoryId: number) => {
  foodStore.setFilteredFoods(categoryId); // Filtrar alimentos pelo ID da categoria
};
</script>

<style scoped>
.category-container {
  padding: 10px 0;
  display: flex;
  justify-content: flex-start; /* Alinha no começo da linha */
  overflow-x: auto; /* Permite scroll horizontal */
  white-space: nowrap; /* Impede quebra de linha */
}

.category-item {
  display: inline-flex; /* Usamos inline-flex para que fiquem alinhados horizontalmente */
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 140px; /* Largura fixa para as categorias */
  margin: 8px; /* Espaçamento entre as categorias */
  cursor: pointer;
  background-color: #f9f9f9; /* Cor de fundo suave */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-item:hover {
  transform: scale(1.05); /* Efeito de zoom no hover */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Efeito de sombra no hover */
}

.category-icon {
  font-size: 36px;
  color: #333;
}

.category-name {
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
</style>
