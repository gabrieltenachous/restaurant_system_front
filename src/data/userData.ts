import { User } from "@/interfaces/user";

export const usersData: User[] = [
  {
    id: 1,
    name: "João Silva",
    cpf: "123.456.789-00",
    address: "Rua A, 123",
    email: "joao@email.com",
    password: "senha123",
    type: "admin",
  },
  {
    id: 2,
    name: "Maria Souza",
    cpf: "987.654.321-00",
    address: "Rua B, 456",
    email: "maria@email.com",
    password: "senha456",
    type: "cook",
  },
  // Adicione mais usuários para testar
];
