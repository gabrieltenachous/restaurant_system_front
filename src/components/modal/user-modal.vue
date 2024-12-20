<template>
  <div v-if="showBackdrop" class="modal-backdrop fade show"></div>

  <!-- Modal -->
  <div
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="userModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userModalLabel">
            {{ isEdit ? "Editar Usuário" : "Criar Usuário" }}
          </h5>
          <custom-button
            variant="outline-secondary"
            size="sm"
            @click="closeModal"
          >
            <i class="fa fa-times"></i>
          </custom-button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="save">
            <CustomInput
              label="Nome"
              id="name"
              v-model="user.name"
              placeholder="Digite o nome"
              required
            />
            <CustomInput
              label="CPF"
              id="cpf"
              v-model="user.cpf"
              placeholder="Digite o CPF"
              required
            />
            <CustomInput
              label="Endereço"
              id="address"
              v-model="user.address"
              placeholder="Digite o endereço"
              required
            />
            <CustomInput
              label="Email"
              id="email"
              type="email"
              v-model="user.email"
              placeholder="Digite o email"
              required
            />
            <CustomInput
              label="Senha"
              id="password"
              type="password"
              v-model="user.password"
              placeholder="Digite a senha"
              required
              :isPassword="true"
            />
            <div class="mb-3">
              <CustomSelect
                id="type"
                label="Tipo"
                :options="[
                  { value: 'admin', text: 'Admin' },
                  { value: 'cook', text: 'Cozinheiro' },
                  { value: 'waiter', text: 'Garçom' },
                  { value: 'cashier', text: 'Caixa' }
                ]"
                v-model="user.type"
              />
            </div>
            <custom-button type="submit" variant="primary">
              {{ isEdit ? "Salvar Alterações" : "Criar Usuário" }}
            </custom-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "@/components/custom-input.vue";
import CustomSelect from "@/components/custom-select.vue";
import CustomButton from "@/components/custom-button.vue";

export default {
  props: {
    user: Object,
    isEdit: Boolean,
  },
  components: {
    CustomInput,
    CustomSelect,
    CustomButton,
  },
  data() {
    return {
      showBackdrop: true, // Controlar o fundo escuro
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
      this.showBackdrop = false; // Ocultar o fundo escuro ao fechar
    },
    save() {
      this.$emit("save", this.user);
    },
  },
  watch: {
    showBackdrop(newValue) {
      if (!newValue) {
        document.body.classList.remove("modal-open");
      } else {
        document.body.classList.add("modal-open");
      }
    },
  },
};
</script>
