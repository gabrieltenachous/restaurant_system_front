<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container-fluid">
        <span class="navbar-brand">Admin Dashboard</span>
        <div class="d-flex">
          <button class="btn btn-outline-primary me-2">
            <i class="fa fa-user-circle"></i> Perfil
          </button>
          <button class="btn btn-danger">
            <i class="fa fa-sign-out-alt"></i> Sair
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "admin-nav-bar",
  };
  </script>
  