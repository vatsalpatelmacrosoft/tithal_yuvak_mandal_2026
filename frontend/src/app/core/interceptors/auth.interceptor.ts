// frontend/src/app/core/interceptors/auth.interceptor.ts
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth  = inject(AuthService);
  const toast = inject(ToastService);
  const token = auth.getToken();

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      // Only handle mid-session token expiry — all other errors are handled
      // by the component that made the call to avoid duplicate toasts.
      if (err.status === 401 && token) {
        auth.logout();
        toast.error('Session expired. Please login again.');
      }
      return throwError(() => err);
    })
  );
};
