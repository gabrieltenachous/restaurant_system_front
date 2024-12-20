<!-- src/views/admin/caixa/Caixa.vue -->
<template>
    <section class="caixa-container">
      <h1 class="mb-4 text-center">Caixa - Total por Mesa</h1>
      <!-- Filtros (Opcional) -->
      <div class="filters mb-4">
        <div class="row">
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="filterTable"
              class="form-control"
              placeholder="Filtrar por Mesa"
            />
          </div>
          <div class="col-md-6 mb-2">
            <select v-model="filterStatus" class="form-select">
              <option value="">Todos os Status</option>
              <option value="pending">Pendente</option>
              <option value="preparing">Preparando</option>
              <option value="completed">Concluído</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Lista de Mesas com Total -->
      <div v-if="filteredTables.length" class="tables-list">
        <div class="table-item" v-for="table in filteredTables" :key="table.id">
          <h3>Mesa {{ table.number }}</h3>
          <p>Total: R$ {{ table.total.toFixed(2) }}</p>
        </div>
      </div>
      
      <div v-else class="no-tables">
        <p>Nenhuma mesa com pedidos.</p>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useOrderStore } from '@/stores/order';
  import { useTableStore } from '@/stores/table'; 
  import { OrderStatus } from '@/interfaces/order';
  
  // Inicializa os stores
  const orderStore = useOrderStore();
  const tableStore = useTableStore();
  
  // Filtros
  const filterTable = ref<string>('');
  const filterStatus = ref<OrderStatus | ''>('');
  
  interface TableWithTotal {
      id: number;
      number: string;
      total: number;
  }
  
  // Computed para obter todas as mesas com seus totais
  const tablesWithTotals = computed<TableWithTotal[]>(() => {
      const orders = orderStore.getAllOrders;
      const tables = tableStore.getTables;
  
      return tables.map(table => {
          // Filtra os pedidos da mesa
          let tableOrders = orders.filter(order => order.tableId === table.id);
          
          // Aplica o filtro de status se estiver definido
          if (filterStatus.value) {
              tableOrders = tableOrders.filter(order => order.status === filterStatus.value);
          }
          
          // Calcula o total
          const total = tableOrders.reduce((sum, order) => {
              return sum + order.items.reduce((orderSum, item) => orderSum + (item.price * item.quantity), 0);
          }, 0);
          
          return {
              id: table.id,
              number: table.number,
              total,
          };
      }).filter(table => {
          // Aplica o filtro de mesa (número) se definido
          if (filterTable.value) {
              return table.number.includes(filterTable.value);
          }
          return true;
      });
  });
  
  // Computed para as mesas filtradas com total > 0
  const filteredTables = computed(() => {
      return tablesWithTotals.value.filter(table => table.total > 0);
  });
  </script>
  
  <style scoped>
  .caixa-container {
    padding: 20px;
  }
  
  .filters {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
  }
  
  .tables-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .table-item {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .table-item h3 {
    margin-bottom: 10px;
  }
  
  .table-item p {
    font-size: 1.2em;
    color: #333;
  }
  
  .no-tables {
    text-align: center;
    margin-top: 50px;
    font-size: 1.2em;
  }
  </style>
  