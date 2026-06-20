import {
  MessageService
} from "./chunk-CJX7BHHU.js";
import {
  inject,
  ɵɵdefineInjectable
} from "./chunk-PUKDGUBM.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  msg = inject(MessageService);
  success(message) {
    this.msg.add({ severity: "success", summary: "Success", detail: message, life: 4e3 });
  }
  error(message) {
    this.msg.add({ severity: "error", summary: "Error", detail: message, life: 4e3 });
  }
  warning(message) {
    this.msg.add({ severity: "warn", summary: "Warning", detail: message, life: 4e3 });
  }
  info(message) {
    this.msg.add({ severity: "info", summary: "Info", detail: message, life: 4e3 });
  }
  static \u0275fac = function ToastService_Factory(t) {
    return new (t || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};

export {
  ToastService
};
//# sourceMappingURL=chunk-H7DSMCQO.js.map
