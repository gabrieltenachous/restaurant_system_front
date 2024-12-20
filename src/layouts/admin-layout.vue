<template>
    <div class="d-flex">
      <AdminSidebar />
      <div class="flex-grow-1">
        <AdminNavbar />
        <div class="container mt-4">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AdminSidebar from "@/components/admin-side-bar.vue";
  import AdminNavbar from "@/components/admin-nav-bar.vue";
  
  export default {
    components: {
      AdminSidebar,
      AdminNavbar,
    },
  };
  </script>
  
  <style>
  body {
    margin: 0;
  }
  </style>
  