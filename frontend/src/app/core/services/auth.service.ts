// frontend/src/app/core/services/auth.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User, ApiResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'tdd_token';
  private readonly USER_KEY  = 'tdd_user';

  currentUser = signal<User | null>(this.loadUser());

  constructor(private http: HttpClient, private router: Router) {}

  login(moNumber: string, password: string) {
    return this.http.post<ApiResponse<{ token: string; user: User }>>(
      `${environment.apiUrl}/auth/login`,
      { mo_number: moNumber, password }
    ).pipe(tap(res => {
      if (res.success && res.data) {
        localStorage.setItem(this.TOKEN_KEY, res.data.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(res.data.user));
        this.currentUser.set(res.data.user);
      }
    }));
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.router.navigate(['/admin/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  hasPermission(menuSlug: string, action: 'can_view' | 'can_create' | 'can_update' | 'can_delete'): boolean {
    const user = this.currentUser();
    if (!user) return false;
    if (user.role_code === 'SUPER_ADMIN') return true;
    const perm = user.permissions?.find(p => p.slug === menuSlug);
    return perm ? !!perm[action] : false;
  }

  forgotPassword(moNumber: string) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/auth/forgot-password`, { mo_number: moNumber });
  }

  resetPassword(token: string, newPassword: string) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/auth/reset-password`, { token, new_password: newPassword });
  }

  private loadUser(): User | null {
    try { return JSON.parse(localStorage.getItem(this.USER_KEY) || 'null'); }
    catch { return null; }
  }
}
