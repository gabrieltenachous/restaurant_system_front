// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { authMiddleware } from '@/middleware/auth';
import AdminLayout from '@/layouts/admin-layout.vue'; 
import User from '@/views/admin/user/index.vue';
import Order from '@/views/admin/order/index.vue';
import AddOrder from '@/views/admin/order/store.vue';
import Caixa from '@/views/admin/caixa/caixa.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { requiresAuth: false }
  },  
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue'),
    meta: { requiresAuth: false }
  }, 
  {
    path: '/home/:id', 
    name: 'FoodDetail',
    component: () => import('@/views/home/food-detail.vue'), // CORRETO
    meta: { requiresAuth: false }
  },  
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/auth/forgot-password.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    meta: { requiresAuth: true }, // Presumindo que o admin requer autenticação
    children: [
      { 
        path: '', 
        name: 'AdminDashboard', 
        component: () => import('@/views/admin/dashboard.vue'),
        meta: { requiresAuth: true }
      },
      { 
        path: 'users', 
        name: 'AdminUsers', 
        component: User,
        meta: { requiresAuth: true }
      }, 
      { 
        path: 'orders', 
        name: 'AdminOrders', 
        component: Order,
        meta: { requiresAuth: true }
      },
      { 
        path: 'add-order', 
        name: 'AdminAddOrder', 
        component: AddOrder,
        meta: { requiresAuth: true }
      }, 
      {
        path: 'caixa',
        name: 'AdminCaixa',
        component: Caixa,
        meta: { requiresAuth: true }
      },
    ],
  },  
  // Rota 404 (opcional)
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Aplica o middleware de autenticação antes de cada navegação
router.beforeEach(authMiddleware);

export default router;
