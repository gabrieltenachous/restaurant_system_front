<template>
  <!-- Fundo escuro com opacidade -->
  <div v-if="showBackdrop" class="modal-backdrop fade show"></div>

  <!-- Modal -->
  <div class="modal fade show" style="display: block;" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
          <custom-button variant="outline-secondary" size="sm" @click="closeModal">
            <i class="fa fa-times"></i>
          </custom-button>
        </div>
        <div class="modal-body">
          <p>Você tem certeza que deseja excluir este usuário?</p>
        </div>
        <div class="modal-footer">
          <custom-button variant="secondary" @click="closeModal">Cancelar</custom-button>
          <custom-button variant="danger" @click="performAction">Deletar</custom-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/custom-button.vue";

export default {
  props: {
    user: Object,
    title: String,
  },
  components: {
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
    performAction() {
      this.$emit("delete");
    },
  },
};
</script>
