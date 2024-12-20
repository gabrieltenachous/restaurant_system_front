// src/stores/order.ts
import { defineStore } from "pinia";
import { Order, OrderStatus } from "@/interfaces/order";
import { orders as ordersData } from "@/data/orders";

export const useOrderStore = defineStore("order", {
    state: () => ({
        orders: ordersData as Order[],
    }),
    getters: {
        getAllOrders(state): Order[] {
            return state.orders;
        },
        getOrdersByTable: (state) => (tableId: number): Order[] => {
            return state.orders.filter(order => order.tableId === tableId);
        },
        getOrdersByStatus: (state) => (status: OrderStatus): Order[] => {
            return state.orders.filter(order => order.status === status);
        },
    },
    actions: {
        // Atualiza o status do pedido
        updateOrderStatus(orderId: number, status: OrderStatus) {
            const order = this.orders.find((order) => order.id === orderId);
            if (order) {
                order.status = status;
            }
        },
        // Remove um pedido da lista
        removeOrder(orderId: number) {
            this.orders = this.orders.filter((order) => order.id !== orderId);
        },
        // Adiciona um novo pedido
        addOrder(order: Order) {
            this.orders.push(order);
        },
    },
});
