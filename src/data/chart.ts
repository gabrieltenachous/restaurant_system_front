import { ChartData } from "@/interfaces/chart";

export const usersChartData: ChartData = {
  labels: ["Garçom", "Caixa", "Cozinheiro", "Admin"],
  series: [10, 5, 7, 2],
};

export const ordersChartData: ChartData = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
  series: [30, 40, 25, 50],
};

export const occupiedTablesChartData: ChartData = {
  labels: ["Mesas Ocupadas", "Mesas Livres"],
  series: [15, 10],
};

export const totalComandasChartData: ChartData = {
  labels: ["Comandas Abertas", "Comandas Fechadas"],
  series: [20, 30],
};
