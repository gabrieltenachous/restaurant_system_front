<!-- src/components/AdminSidebar.vue -->
<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; height: 100vh;">
    <router-link 
      to="/admin" 
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" 
      :class="{ active: $route.path === '/admin' }"
    >
      <span class="fs-4">Admin Panel</span>
    </router-link> 
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link 
          to="/admin/users" 
          class="nav-link" 
          :class="{ active: $route.path === '/admin/users' }"
        >
          <i class="fa fa-users me-2"></i> Usuários
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/admin/orders" 
          class="nav-link" 
          :class="{ active: $route.path === '/admin/orders' }"
        >
          <i class="fa fa-receipt me-2"></i> Comandas
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/admin/add-order" 
          class="nav-link" 
          :class="{ active: $route.path === '/admin/add-order' }"
        >
          <i class="fa fa-plus me-2"></i> Adicionar Pedidos
        </router-link>
      </li>
      <!-- Novo Menu "Caixa" -->
      <li class="nav-item">
        <router-link 
          to="/admin/caixa" 
          class="nav-link" 
          :class="{ active: $route.path === '/admin/caixa' }"
        >
          <i class="fa fa-cash-register me-2"></i> Caixa
        </router-link>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script setup lang="ts">
// Nenhum script adicional necessário
</script>

<style scoped>
.nav-link.active {
  background-color: #0d6efd;
  color: white !important;
}

.nav-link {
  color: #000;
}

.nav-link:hover {
  background-color: #e2e6ea;
  color: #0d6efd !important;
}
</style>
