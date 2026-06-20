import {
  Router
} from "./chunk-B62F6VTM.js";
import {
  HttpClient,
  environment,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2TIVPBG5.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  TOKEN_KEY = "tdd_token";
  USER_KEY = "tdd_user";
  currentUser = signal(this.loadUser());
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  login(moNumber, password) {
    return this.http.post(`${environment.apiUrl}/auth/login`, { mo_number: moNumber, password }).pipe(tap((res) => {
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
    this.router.navigate(["/admin/login"]);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  hasPermission(menuSlug, action) {
    const user = this.currentUser();
    if (!user)
      return false;
    if (user.role_code === "SUPER_ADMIN")
      return true;
    const perm = user.permissions?.find((p) => p.slug === menuSlug);
    return perm ? !!perm[action] : false;
  }
  forgotPassword(moNumber) {
    return this.http.post(`${environment.apiUrl}/auth/forgot-password`, { mo_number: moNumber });
  }
  resetPassword(token, newPassword) {
    return this.http.post(`${environment.apiUrl}/auth/reset-password`, { token, new_password: newPassword });
  }
  loadUser() {
    try {
      return JSON.parse(localStorage.getItem(this.USER_KEY) || "null");
    } catch {
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(t) {
    return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-WJUWKVEZ.js.map
