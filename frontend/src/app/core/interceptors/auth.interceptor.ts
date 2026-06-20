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
      if (err.status === 401) {
        auth.logout();
        toast.error('Session expired. Please login again.');
      } else if (err.status === 403) {
        toast.error(err.error?.message || 'Access denied');
      } else if (err.status === 422) {
        // Validation errors handled by components
      } else if (err.status >= 500) {
        toast.error('Server error. Please try again later.');
      } else if (err.status === 0) {
        toast.error('Unable to connect to server.');
      }
      return throwError(() => err);
    })
  );
};
