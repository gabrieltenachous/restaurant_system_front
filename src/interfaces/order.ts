// src/interfaces/order.ts

export interface OrderItem {
    id: number;
    name: string;
    quantity: number;
    price: number; // Assegure que é do tipo number
}

export type OrderStatus = "pending" | "preparing" | "completed";

export interface Order {
    id: number;
    tableId: number; // Referência à mesa
    orderNumber: string;
    items: OrderItem[];
    status: OrderStatus;
    remainingTime?: string; // Opcional, usado apenas em alguns contextos
}
