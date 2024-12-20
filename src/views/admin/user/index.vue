<template>
  <div>
    <h1>Gerenciar Usuários</h1>
    <p>Aqui você pode gerenciar os usuários do sistema.</p>
    
    <!-- Tabela de Usuários -->
    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.cpf }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.type }}</td>
          <td>
            <button @click="openEditModal(user)" class="btn btn-warning btn-sm">Editar</button>
            <button @click="openDeleteModal(user)" class="btn btn-danger btn-sm">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <!-- Botão para Criar Novo Usuário -->
    <button @click="openCreateModal" class="btn btn-primary">Criar Usuário</button>
    
    <!-- Modals -->
    <user-modal 
      v-if="showModal" 
      :user="currentUser" 
      :isEdit="isEdit" 
      @close="closeModal" 
      @save="saveUser"
    />
    <delete-modal 
      v-if="showDeleteModal" 
      :user="currentUser" 
      @close="closeDeleteModal" 
      @delete="deleteUser"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { usersData } from "@/data/userData";
import UserModal from "@/components/modal/user-modal.vue";
import DeleteModal from "@/components/modal/delete-modal.vue";

export default {
  name: "Users",
  components: {
    UserModal,
    DeleteModal,
  },
  data() {
    return {
      users: usersData,
      showModal: false,
      showDeleteModal: false,
      currentUser: null,
      isEdit: false,
    };
  },
  methods: {
    openCreateModal() {
      // Criação de um objeto usuário vazio
      this.currentUser = {
        id: null,   // id nulo para novo usuário
        name: '',
        cpf: '',
        address: '',
        email: '',
        password: '',
        type: 'admin',
      };
      this.isEdit = false;
      this.showModal = true;
    },
    openEditModal(user) {
      this.currentUser = { ...user };
      this.isEdit = true;
      this.showModal = true;
    },
    openDeleteModal(user) {
      this.currentUser = user;
      this.showDeleteModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    saveUser(user) {
      if (this.isEdit) {
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          this.users[index] = user;
        }
      } else {
        user.id = this.users.length + 1;
        this.users.push(user);
      }
      this.closeModal();
    },
    deleteUser() {
      const index = this.users.findIndex((u) => u.id === this.currentUser.id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
      this.closeDeleteModal();
    },
  },
};
</script>

<style scoped>
.table th, .table td {
  text-align: center;
}
</style>
