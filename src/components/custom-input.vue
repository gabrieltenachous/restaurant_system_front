<template>
  <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label" :for="id">{{ label }}</label>
    <div v-if="isPassword" class="input-group">
      <input
        :type="isPasswordVisible ? 'text' : 'password'"
        :id="id"
        class="form-control"
        :placeholder="placeholder"
        :value="internalValue"
        @input="onInput"
        :required="required"
      />
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="togglePasswordVisibility"
      >
        <i :class="isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
      </button>
    </div>
    <input
      v-else
      :type="type"
      :id="id"
      class="form-control"
      :placeholder="placeholder"
      :value="internalValue"
      @input="onInput"
      :required="required"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    isPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPasswordVisible: false,
      internalValue: this.modelValue, // Local storage for the value
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    onInput(event) {
      this.internalValue = event.target.value;
      this.$emit('update:modelValue', this.internalValue); // Emit value change
    },
  },
  watch: {
    modelValue(newValue) {
      this.internalValue = newValue; // Sync external modelValue with internalValue
    },
  },
};
</script>

<style scoped>
.input-group {
  display: flex;
  align-items: center;
}
.input-group .btn {
  border-left: none;
}
</style>
