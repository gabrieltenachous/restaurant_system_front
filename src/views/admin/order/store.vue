<template>
  <section class="mt-4">
    <h2 class="mb-4">Adicionar Pedido</h2>
    
    <!-- Comanda -->
    <div class="order-details mt-4">
      <h3>Comanda</h3>
      
      <!-- Lista de alimentos selecionados -->
      <div v-if="orderItems.length" class="order-items">
        <div v-for="(item, index) in orderItems" :key="index" class="order-item">
          <p>{{ item.name }} - Quantidade: {{ item.quantity }} - Preço: {{ item.price }}</p>
          <button @click="removeFoodFromOrder(index)">Remover</button>
        </div>
      </div>

      <div v-else>
        <p>Nenhum item adicionado ainda.</p>
      </div>

      <!-- Informações adicionais do pedido -->
      <div class="form-group">
        <label for="order-number">Número do Pedido</label>
        <input
          type="number"
          id="order-number"
          v-model="orderNumber"
          class="form-control"
          placeholder="Número do Pedido"
        />
      </div>
      <div class="form-group">
        <label for="table-number">Número da Mesa</label>
        <input
          type="number"
          id="table-number"
          v-model="tableNumber"
          class="form-control"
          placeholder="Número da Mesa"
        />
      </div>
      <div class="form-group">
        <label for="total-price">Preço Total</label>
        <input
          type="text"
          id="total-price"
          v-model="totalPrice"
          class="form-control" 
          disabled
        />

      </div>

      <button @click="submitOrder" class="btn btn-primary">Adicionar Pedido</button>
    </div>
 

    <!-- Seção de seleção de alimentos -->
    <FoodList mode="order" @food-selected="addFoodToOrder" />

  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFoodStore } from "@/stores/food";
import FoodList from '@/components/food-list.vue'; 
import { Order, OrderItem } from "@/interfaces/order"; 
import { Food } from "@/interfaces/food";

const foodStore = useFoodStore();

const orderItems = ref<OrderItem[]>([]);
const orderNumber = ref<number>(0);
const tableNumber = ref<number>(0);
const totalPrice = ref<number>(0);
  
// Função para adicionar itens do pedido clicado
const addOrderToItems = (order: Order) => {
  // Aqui você adiciona todos os itens do pedido clicado ao array orderItems
  order.items.forEach(item => {
    // Ajuste a estrutura caso seja necessário, por ex: adicionar preço se existir no objeto item
    orderItems.value.push({ ...item, price: 0 }); // Ajuste conforme sua estrutura de dados
  });
  updateTotalPrice();
};

// Função para adicionar alimento selecionado no FoodList
const addFoodToOrder = (food: Food) => {
  const existingItem = orderItems.value.find(item => item.id === food.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    orderItems.value.push({
      id: food.id,
      name: food.name,
      quantity: 1,
      price: food.price, // Agora existe e é numérico
    });
  }
  updateTotalPrice();
};



const removeFoodFromOrder = (index: number) => {
  orderItems.value.splice(index, 1);
  updateTotalPrice();
};

const calculateTotal = () => {
  return orderItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
};

const updateTotalPrice = () => {
  totalPrice.value = calculateTotal();
};

const submitOrder = () => {
  if (orderItems.value.length === 0 || !orderNumber.value || !tableNumber.value) {
    alert("Por favor, adicione pelo menos um item e preencha o número do pedido e da mesa.");
    return;
  }
  const order = {
    orderNumber: orderNumber.value,
    tableNumber: tableNumber.value,
    items: orderItems.value,
    totalPrice: totalPrice.value,
  };

  console.log("Pedido Enviado", order);
  // Aqui você pode integrar com o backend para salvar o pedido
};

// Carregar a lista de pedidos (caso necessário)
</script>
