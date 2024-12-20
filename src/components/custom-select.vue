<template>
    <div class="form-group">
      <label :for="id" class="form-label">{{ label }}</label>
      <select :id="id" class="form-control" :value="modelValue" @change="updateValue">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        required: true,
      },
      modelValue: {
        type: String,
        default: "",
      },
    },
    methods: {
      updateValue(event) {
        this.$emit("update:modelValue", event.target.value); // Emitindo o evento
      },
    },
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  </style>
  