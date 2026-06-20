// frontend/src/app/core/guards/auth.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;
  router.navigate(['/admin/login']);
  return false;
};

// frontend/src/app/core/guards/permission.guard.ts
import { ActivatedRouteSnapshot } from '@angular/router';

export const permissionGuard = (route: ActivatedRouteSnapshot) => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  const { menu, action } = route.data as { menu: string; action: string };
  if (auth.hasPermission(menu, action as any)) return true;
  router.navigate(['/admin/dashboard']);
  return false;
};
