// src/data/orders.ts
import { Order } from "@/interfaces/order";

export const orders: Order[] = [
    {
        id: 1,
        tableId: 1,
        orderNumber: "123456",
        items: [
            { id: 1, name: "Espeto de Carne", quantity: 1, price: 10 },
            { id: 2, name: "Picanha", quantity: 1, price: 25 },
            { id: 3, name: "Hot Dog Completo", quantity: 1, price: 15 },
        ],
        remainingTime: "00:00:10",
        status: "pending",
    },
    {
        id: 2,
        tableId: 2,
        orderNumber: "123457",
        items: [
            { id: 4, name: "Refrigerante", quantity: 2, price: 5 },
        ],
        remainingTime: "00:02:30",
        status: "preparing",
    },
    // Adicione mais pedidos conforme necessário
];
