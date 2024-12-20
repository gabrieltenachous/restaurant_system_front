import { Food } from '@/interfaces/food';

export const foods: Record<number, Food[]> = {
  // Espetos
  1: [
    { id: 1, name: 'Espeto de Carne', description: 'Carne grelhada no espeto', price: 10, imageUrl: 'https://via.placeholder.com/150?text=Espeto+de+Carne',categoryId: 1 },
    { id: 2, name: 'Espeto de Frango', description: 'Frango temperado no espeto', price: 12, imageUrl: 'https://via.placeholder.com/150?text=Espeto+de+Frango',categoryId: 1 },
  ],
  // Carnes
  2: [
    { id: 3, name: 'Picanha', description: 'Picanha fatiada no alho', price: 40, imageUrl: 'https://via.placeholder.com/150?text=Picanha',categoryId: 2 },
    { id: 4, name: 'Costela', description: 'Costela assada com molho barbecue', price: 45, imageUrl: 'https://via.placeholder.com/150?text=Costela',categoryId: 2 },
  ],
  // Hot-dog
  3: [
    { id: 5, name: 'Hot Dog Tradicional', description: 'Salsicha, pão e molho especial', price: 10, imageUrl: 'https://via.placeholder.com/150?text=Hot+Dog',categoryId:3 },
    { id: 6, name: 'Hot Dog Completo', description: 'Com salsicha, milho, purê e batata palha', price: 15, imageUrl: 'https://via.placeholder.com/150?text=Hot+Dog+Completo',categoryId:3 },
  ],
  // Bebidas
  4: [
    { id: 7, name: 'Cerveja', description: 'Cerveja gelada', price: 12, imageUrl: 'https://via.placeholder.com/150?text=Cerveja',categoryId:4},
    { id: 8, name: 'Refrigerante', description: 'Refrigerante de cola', price: 8, imageUrl: 'https://via.placeholder.com/150?text=Refrigerante' ,categoryId:4 },
  ],
  // Pizza
  // 5: [
  //   { id: 9, name: 'Margherita', description: 'Pizza de molho de tomate e queijo', price: 'R$ 30,00', imageUrl: 'https://via.placeholder.com/150?text=Margherita' ,categoryId: 5 },
  //   { id: 10, name: 'Pepperoni', description: 'Pizza com fatias de pepperoni', price: 'R$ 35,00', imageUrl: 'https://via.placeholder.com/150?text=Pepperoni' ,categoryId: 5 },
  // ],
  // // Sobremesas
  // 6: [
  //   { id: 11, name: 'Sorvete', description: 'Sorvete artesanal de chocolate', price: 'R$ 10,00', imageUrl: 'https://via.placeholder.com/150?text=Sorvete' ,categoryId: 6 },
  //   { id: 12, name: 'Petit Gateau', description: 'Bolo quente com sorvete', price: 'R$ 20,00', imageUrl: 'https://via.placeholder.com/150?text=Petit+Gateau' ,categoryId: 6 },
  // ],
  // // Hambúrguer
  // 7: [
  //   { id: 13, name: 'Cheeseburger', description: 'Hambúrguer com queijo e molho especial', price: 'R$ 18,00', imageUrl: 'https://via.placeholder.com/150?text=Cheeseburger' ,categoryId: 7 },
  //   { id: 14, name: 'Bacon Burger', description: 'Hambúrguer com bacon crocante', price: 'R$ 22,00', imageUrl: 'https://via.placeholder.com/150?text=Bacon+Burger' ,categoryId: 7 },
  // ],
  // // Frutos do Mar
  // 8: [
  //   { id: 15, name: 'Camarão Grelhado', description: 'Camarão na manteiga', price: 'R$ 50,00', imageUrl: 'https://via.placeholder.com/150?text=Camar%C3%A3o' ,categoryId: 8 },
  //   { id: 16, name: 'Peixe Assado', description: 'Peixe fresco assado', price: 'R$ 40,00', imageUrl: 'https://via.placeholder.com/150?text=Peixe+Assado' ,categoryId: 8 },
  // ],
  // // Café
  // 9: [
  //   { id: 17, name: 'Café Expresso', description: 'Café puro e encorpado', price: 'R$ 5,00', imageUrl: 'https://via.placeholder.com/150?text=Caf%C3%A9+Expresso' ,categoryId: 9 },
  //   { id: 18, name: 'Cappuccino', description: 'Café com leite e canela', price: 'R$ 8,00', imageUrl: 'https://via.placeholder.com/150?text=Cappuccino' ,categoryId: 9 },
  // ],
  // // Sushi
  // 10: [
  //   { id: 19, name: 'Hot Roll', description: 'Rolinho de sushi frito', price: 'R$ 20,00', imageUrl: 'https://via.placeholder.com/150?text=Hot+Roll' ,categoryId: 10 },
  //   { id: 20, name: 'Salmão', description: 'Salmão fresco em tiras', price: 'R$ 25,00', imageUrl: 'https://via.placeholder.com/150?text=Salm%C3%A3o' ,categoryId: 10 },
  // ],
};
