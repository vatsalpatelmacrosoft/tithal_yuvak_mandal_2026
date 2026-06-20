import {
  Toast,
  ToastModule
} from "./chunk-HQLDCRMT.js";
import {
  AuthService
} from "./chunk-WJUWKVEZ.js";
import "./chunk-SPF6R22M.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-YPQPAB3Z.js";
import {
  ToastService
} from "./chunk-JX63ECEV.js";
import "./chunk-UAHN6Q6E.js";
import "./chunk-6KFP5JIF.js";
import {
  Button,
  ButtonModule
} from "./chunk-EWFPHMRU.js";
import "./chunk-YQH4GAYX.js";
import "./chunk-7QANY5TG.js";
import {
  RouterLink
} from "./chunk-B62F6VTM.js";
import "./chunk-VVE7LC7Y.js";
import {
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-2TIVPBG5.js";

// src/app/admin/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "If the number is registered, reset instructions have been sent.");
    \u0275\u0275elementEnd()();
  }
}
function ForgotPasswordComponent_form_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " Enter a valid 10-digit mobile number ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 15);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "label", 16);
    \u0275\u0275text(2, "Mobile Number ");
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275element(6, "i", 19)(7, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ForgotPasswordComponent_form_10_div_8_Template, 2, 0, "div", 21);
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275element(10, "p-button", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.form.get("mo_number")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.form.get("mo_number")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.loading);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  loading = false;
  sent = false;
  form = this.fb.group({ mo_number: ["", [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]] });
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.auth.forgotPassword(this.form.value.mo_number).subscribe({
      next: () => {
        this.sent = true;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error("Request failed");
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(t) {
    return new (t || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 2, consts: [[1, "login-bg"], [1, "login-card"], [1, "brand"], [1, "brand-icon"], [1, "pi", "pi-lock"], [1, "brand-title"], [1, "brand-sub"], ["class", "success-box", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "back-link"], ["routerLink", "/admin/login"], [1, "footer-note"], ["position", "bottom-right"], [1, "success-box"], [1, "pi", "pi-check-circle"], [3, "ngSubmit", "formGroup"], [1, "field-label"], [2, "color", "#EF4444"], [1, "input-wrap"], [1, "pi", "pi-phone", "field-icon"], ["formControlName", "mo_number", "type", "tel", "placeholder", "10-digit mobile number"], ["style", "color:#EF4444;font-size:0.8rem;margin-top:-16px;margin-bottom:14px", 4, "ngIf"], [1, "btn-wrap"], ["type", "submit", "label", "Send Reset Link", "icon", "pi pi-send", 3, "loading"], [2, "color", "#EF4444", "font-size", "0.8rem", "margin-top", "-16px", "margin-bottom", "14px"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275text(6, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275text(8, "Enter your registered mobile number");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ForgotPasswordComponent_div_9_Template, 4, 0, "div", 7)(10, ForgotPasswordComponent_form_10_Template, 11, 3, "form", 8);
      \u0275\u0275elementStart(11, "div", 9)(12, "a", 10);
      \u0275\u0275text(13, "\u2190 Back to Login");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275text(15, "Yuvasabha TDD Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "p-toast", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.sent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.sent);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, NgIf, ButtonModule, Button, ToastModule, Toast], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.login-bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #1A237E 0%,\n      #3949AB 50%,\n      #FF6B00 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 44px 40px 36px;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1A237E,\n      #3949AB);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n}\n.brand-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #1F2937;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6B7280;\n  margin-top: 4px;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 22px;\n}\n.input-wrap[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9CA3AF;\n  font-size: 15px;\n  pointer-events: none;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: 0 14px 0 42px;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border 0.2s;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #3949AB;\n  box-shadow: 0 0 0 3px rgba(57, 73, 171, 0.12);\n}\n.success-box[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  border: 1px solid #6EE7B7;\n  border-radius: 10px;\n  padding: 16px 18px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.success-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10B981;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.success-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #065F46;\n  margin: 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.85rem;\n  color: #6B7280;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3949AB;\n  font-weight: 600;\n}\n.footer-note[_ngcontent-%COMP%] {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.8rem;\n  margin-top: 20px;\n}\n.btn-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n  .btn-wrap .p-button {\n  width: 100%;\n  height: 50px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  justify-content: center;\n  border-radius: 10px !important;\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 34px 22px 28px;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent" });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-DQKNP2B5.js.map
