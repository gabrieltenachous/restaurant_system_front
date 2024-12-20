<template>
  <section class="container">
    <CategoryList />
    <FoodList mode="navigate" />
  </section>
</template>

<script setup lang="ts">
import CategoryList from '@/components/category-list.vue';
import FoodList from '@/components/food-list.vue';
</script>
