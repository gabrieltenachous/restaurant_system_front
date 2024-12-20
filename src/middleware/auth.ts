import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export function authMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const token = localStorage.getItem('auth_token');
  const user = sessionStorage.getItem('auth_user');
  const isAdminRoute = to.path.startsWith('/admin');
  // const publicPaths = ['/login', '/home', '/forgot-password',`/home/${to.params['id']}`]; 

  // if (!token && !publicPaths.includes(to.path)) {
  //   return next('/home');
  // }

  // if (token && publicPaths.includes(to.path)) {
  //   return next('/home');
  // }

  if (isAdminRoute && user) {
    const parsedUser = JSON.parse(user); 
    if (!parsedUser.role.includes('admin')) {
      return next('/home');
    }
  }

  next();
}
