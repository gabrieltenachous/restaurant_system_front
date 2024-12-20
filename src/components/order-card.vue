<template>
  <div class="card order-card mb-3" :class="statusClass" @click="handleCardClick">
    <div class="card-body">
      <h2 class="card-title">Mesa: {{ order.tableId }}</h2>
      <p class="card-text">Pedido Nº: {{ order.orderNumber }}</p>
      <ul class="list-group mb-3">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="item in order.items"
          :key="item.id"
        >
          {{ item.name }}
          <span class="badge bg-primary rounded-pill">{{ item.quantity }}und</span>
        </li>
      </ul>
      <p :class="timerClass">Tempo restante: {{ formattedTime }}</p>
      <div class="d-flex justify-content-between">
        <CustomButton
          variant="primary" 
        >
          Iniciar
        </CustomButton>
        <CustomButton
          variant="success" 
        >
          Finalizar
        </CustomButton>
        <CustomButton
          variant="danger" 
        >
          Remover
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import CustomButton from "@/components/custom-button.vue";
import { Order } from '@/interfaces/order';

const props = defineProps<{
  order: Order;
}>();

const emit = defineEmits(["order-clicked", "update-status", "remove"]);

// Função para converter "HH:MM:SS" em segundos
function parseTimeToSeconds(time: string): number {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    console.error("Invalid time format:", time);
    return 0; // Retorna 0 em caso de formato inválido
  }
  return hours * 3600 + minutes * 60 + seconds;
}

// Função para formatar segundos em "HH:MM:SS"
function formatSecondsToTime(seconds: number): string {
  const absSeconds = Math.abs(seconds);
  const hours = Math.floor(absSeconds / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((absSeconds % 3600) / 60).toString().padStart(2, "0");
  const secs = (absSeconds % 60).toString().padStart(2, "0");
  return `${seconds < 0 ? "-" : ""}${hours}:${minutes}:${secs}`;
}

const handleCardClick = () => {
  emit("order-clicked", props.order);
};

const remainingTime = ref(parseTimeToSeconds(props.order.remainingTime ?? ''));
const formattedTime = computed(() => formatSecondsToTime(remainingTime.value));

const statusClass = computed(() => {
  if (remainingTime.value > 300) return "border-success";
  if (remainingTime.value >= 0) return "border-warning";
  return "border-danger";
});

const timerClass = computed(() => {
  if (remainingTime.value > 300) return "text-success";
  if (remainingTime.value >= 0) return "text-warning";
  return "text-danger";
});

let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  timer = setInterval(() => {
    remainingTime.value--;
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
<style scoped>
.card {
  border-width: 2px;
}
.text-success {
  color: #28a745 !important;
}
.text-warning {
  color: #ffc107 !important;
}
.text-danger {
  color: #dc3545 !important;
}
</style>
