<template>
  <div class="food-detail">
    <h1>{{ food.name }}</h1> 
    <img
      :src="food.imageUrl"
      :alt="food.name"
      class="card-img-top food-image"
    />
    <p>{{ food.description }}</p>
    <p class="food-price">R$ {{ food.price }}</p>
  </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { useRoute } from "vue-router";
    import { useFoodStore } from "@/stores/food";

    const route = useRoute();
    const foodStore = useFoodStore();
    const food = ref<{
      name: string;
      description: string;
      imageUrl: string;
      price: string; // Permitir string
    }>({ name: "", description: "", price: "", imageUrl: "" });

    onMounted(() => {
      console.log("Route params:", route.params);
      const foodId = parseInt(route.params.id as string, 10);
      food.value = foodStore.getFoods.find((f) => f.id === foodId) || {
        name: "Não encontrado",
        description: "Descrição não disponível",
        imageUrl: "#",
        price: "R$ 0,00", // Mantém o formato original
      };

      console.log(food);
    });


</script>

<style scoped>
    .food-detail {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    }

    .food-price {
    font-size: 18px;
    font-weight: bold;
    color: #2ecc71;
    }
</style>
