import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2TIVPBG5.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http;
  base = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  get(path, params) {
    let httpParams = new HttpParams();
    if (params)
      Object.entries(params).forEach(([k, v]) => {
        if (v != null)
          httpParams = httpParams.set(k, v);
      });
    return this.http.get(`${this.base}/${path}`, { params: httpParams });
  }
  post(path, body) {
    return this.http.post(`${this.base}/${path}`, body);
  }
  put(path, body) {
    return this.http.put(`${this.base}/${path}`, body);
  }
  delete(path) {
    return this.http.delete(`${this.base}/${path}`);
  }
  // Public (no auth)
  publicGet(path) {
    return this.http.get(`${environment.publicUrl}/${path}`);
  }
  publicPost(path, body) {
    return this.http.post(`${environment.publicUrl}/${path}`, body);
  }
  static \u0275fac = function ApiService_Factory(t) {
    return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};

export {
  ApiService
};
//# sourceMappingURL=chunk-FA5V7IHE.js.map
