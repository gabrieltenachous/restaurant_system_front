<template>
  <div>
    <h1 class="mb-4 text-center">Painel de Controle</h1>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="chart-container">
          <apexchart
            type="pie"
            :options="chartOptions"
            :series="usersData.series"
          ></apexchart>
          <p class="text-center mt-2">Usuários da Empresa</p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="chart-container">
          <apexchart
            type="donut"
            :options="chartOptions"
            :series="occupiedTablesData.series"
          ></apexchart>
          <p class="text-center mt-2">Mesas Ocupadas</p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="chart-container">
          <apexchart
            type="pie"
            :options="chartOptions"
            :series="totalComandasData.series"
          ></apexchart>
          <p class="text-center mt-2">Total de Comandas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  usersChartData,
  ordersChartData,
  occupiedTablesChartData,
  totalComandasChartData,
} from "@/data/chart";

export default {
  name: "AdminDashboard",
  data() {
    return {
      chartOptions: {
        chart: {
          toolbar: { show: false },
        },
        labels: [],
        responsive: [
          {
            breakpoint: 768, // Para telas menores
            options: {
              chart: {
                width: "100%",
              },
            },
          },
        ],
      },
      usersData: usersChartData,
      ordersData: ordersChartData,
      occupiedTablesData: occupiedTablesChartData,
      totalComandasData: totalComandasChartData,
    };
  },
};
</script>

<style scoped>
.chart-container {
  max-width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
apexchart {
  width: 100%;
  height: 300px; /* Tamanho fixo inicial dos gráficos */
}

@media (max-width: 768px) {
  apexchart {
    height: 250px; /* Ajuste menor para dispositivos móveis */
  }
}
</style>
