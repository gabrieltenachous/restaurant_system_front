  <template>
      <!-- Fundo escuro com opacidade -->
      <div v-if="showBackdrop" class="modal-backdrop fade show"></div>
    
      <!-- Modal -->
      <div class="modal fade show" style="display: block;" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
              <button v-if="action" type="button" class="btn btn-primary" @click="performAction">{{ actionText }}</button>
              <button v-if="dangerAction" type="button" class="btn btn-danger" @click="performDangerAction">{{ dangerActionText }}</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        title: String,
        actionText: String,
        dangerActionText: String,
        action: Function, // Ação principal
        dangerAction: Function, // Ação perigosa (como excluir)
        showModal: Boolean, // Controla a exibição do modal
      },
      data() {
        return {
          showBackdrop: this.showModal, // Controla o fundo escuro
        };
      },
      methods: {
        closeModal() {
          this.$emit("close");
        },
        performAction() {
          if (this.action) {
            this.action();
          }
        },
        performDangerAction() {
          if (this.dangerAction) {
            this.dangerAction();
          }
        },
      },
      watch: {
        showModal(newValue) {
          this.showBackdrop = newValue;
        },
      },
    };
    </script>
    
    <style scoped>
    .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro com opacidade */
    }
    </style>
    