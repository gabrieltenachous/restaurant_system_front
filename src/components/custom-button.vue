<template>
  <button
    :type="type"
    :class="['btn', `btn-${variant}`, sizeClass, additionalClasses]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button', // Pode ser 'button', 'submit', ou 'reset'
    },
    variant: {
      type: String,
      default: 'primary', // 'primary', 'secondary', 'danger', etc.
    },
    size: {
      type: String,
      default: 'block', // 'block', 'sm', ou vazio
    },
    additionalClasses: {
      type: String,
      default: '', // Classes adicionais para customização
    },
    disabled: {
      type: Boolean,
      default: false, // Desabilita o botão
    },
  },
  computed: {
    sizeClass() {
      if (this.size === 'sm') return 'btn-sm';
      if (this.size === 'block') return 'btn-block';
      return ''; // Retorna vazio se nenhuma classe de tamanho foi especificada
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event); // Emite o evento de clique para o pai
    },
  },
};
</script>

<style scoped>
/* Adicione estilos adicionais aqui, se necessário */
</style>
