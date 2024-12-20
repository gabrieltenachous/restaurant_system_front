<template>
  <div class="mt-4">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
        v-for="food in paginatedFoods"
        :key="food.id"
      >
        <!-- Se estivermos no modo 'navigate', envolver com router-link -->
        <router-link
          v-if="mode === 'navigate'"
          :to="`/home/${food.id}`"
          class="card h-100 food-item"
        >
          <img
            :src="food.imageUrl"
            :alt="food.name"
            class="card-img-top food-image"
          />
          <div class="card-body">
            <h6 class="card-title food-name">{{ food.name }}</h6>
            <p class="card-text food-description">{{ food.description }}</p>
            <p class="card-text food-price">{{ formatPrice(food.price) }}</p>
          </div>
        </router-link>

        <!-- Se estivermos no modo 'order', apenas div e evento de clique -->
        <div
          v-else
          class="card h-100 food-item"
          @click="selectFood(food)"
        >
          <img
            :src="food.imageUrl"
            :alt="food.name"
            class="card-img-top food-image"
          />
          <div class="card-body">
            <h6 class="card-title food-name">{{ food.name }}</h6>
            <p class="card-text food-description">{{ food.description }}</p>
            <p class="card-text food-price">{{ formatPrice(food.price) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Paginação -->
    <div class="d-flex justify-content-center mt-3">
      <nav>
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ disabled: currentPage === 1 }"
            @click="prevPage"
          >
            <span class="page-link">Anterior</span>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            class="page-item"
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            <span class="page-link">{{ page }}</span>
          </li>
          <li
            class="page-item"
            :class="{ disabled: currentPage === totalPages }"
            @click="nextPage"
          >
            <span class="page-link">Próximo</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, defineEmits, defineProps } from 'vue';
import { useFoodStore } from '@/stores/food';
import { Food } from '@/interfaces/food';
import { useFormatPrice } from '@/composables/useFormatPrice';
const { formatPrice } = useFormatPrice();

const emit = defineEmits(['food-selected']);

const props = defineProps({
  mode: {
    type: String,
    default: 'navigate', // 'navigate' ou 'order'
  }
});

const foodStore = useFoodStore();

const currentPage = ref(1);
const itemsPerPage = 10;

// Total de páginas baseado no estado do store
const totalPages = computed(() => Math.ceil(foodStore.getFoods.length / itemsPerPage));

// Itens paginados
const paginatedFoods = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return foodStore.getFoods.slice(start, start + itemsPerPage);
});

// Funções de navegação
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Reseta para a página 1 quando a lista de alimentos mudar
watch(
  () => foodStore.getFoods,
  () => {
    currentPage.value = 1;
  }
);

const selectFood = (food: Food) => {
  // Emitir evento com o alimento selecionado apenas no modo 'order'
  if (props.mode === 'order') {
    emit('food-selected', food);
  }
};
</script>

<style scoped>
/* Estilos permanecem os mesmos */
</style>
