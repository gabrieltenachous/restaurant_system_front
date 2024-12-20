<template>
  <div class="order-list">
    <h1>Lista de Pedidos</h1>
    <OrderCard
      v-for="order in orders"
      :key="order.id"
      :order="order"
      @update-status="updateOrderStatus"
      @remove="removeOrder"  
    />
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
import OrderCard from "@/components/order-card.vue";
import { OrderStatus } from "@/interfaces/order";

// Inicializa o store de pedidos
const orderStore = useOrderStore();
const orders = orderStore.orders;

// Função para atualizar o status de um pedido
const updateOrderStatus = (orderId: number, status: OrderStatus) => {
  orderStore.updateOrderStatus(orderId, status);
};

// Função para remover um pedido
const removeOrder = (orderId: number) => {
  orderStore.removeOrder(orderId);
};
</script>

<style scoped>
.order-list {
  max-width: 800px;
  margin: 0 auto;
}
</style>
