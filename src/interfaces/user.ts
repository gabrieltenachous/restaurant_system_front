export interface User {
    id: number;
    name: string;
    cpf: string;
    address: string;
    email: string;
    password: string;
    type: "cook" | "admin" | "waiter" | "cashier";
  }
  