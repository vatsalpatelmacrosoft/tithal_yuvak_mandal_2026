import {
  Password,
  PasswordModule
} from "./chunk-YVXPXYEQ.js";
import {
  Toast,
  ToastModule
} from "./chunk-HQLDCRMT.js";
import {
  AuthService
} from "./chunk-WJUWKVEZ.js";
import "./chunk-SPF6R22M.js";
import {
  InputText,
  InputTextModule
} from "./chunk-S7HUCEIK.js";
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
  Router,
  RouterLink
} from "./chunk-B62F6VTM.js";
import "./chunk-VVE7LC7Y.js";
import {
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-2TIVPBG5.js";

// src/app/admin/auth/login/login.component.ts
function LoginComponent_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 21);
    \u0275\u0275text(1, " Enter a valid 10-digit mobile number ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_small_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 21);
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastService);
  loading = false;
  form = this.fb.group({
    mo_number: ["", [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    password: ["", Validators.required]
  });
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.auth.login(this.f["mo_number"].value, this.f["password"].value).subscribe({
      next: () => {
        this.router.navigate(["/admin/dashboard"]);
      },
      error: (err) => {
        this.loading = false;
        this.toast.error(err.error?.message || "Login failed");
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(t) {
    return new (t || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 10, consts: [[1, "login-bg"], [1, "login-card"], [1, "brand-top"], [1, "logo-ring"], ["src", "assets/Baps_logo.svg.png", "alt", "BAPS Logo", 1, "logo-img"], [1, "divider-line"], [3, "ngSubmit", "formGroup"], [1, "field"], [1, "form-label"], [1, "input-icon-wrap"], [1, "pi", "pi-mobile", "field-icon"], ["pInputText", "", "formControlName", "mo_number", "type", "tel", "placeholder", "10-digit mobile number"], ["class", "p-error", 4, "ngIf"], [1, "lc-pw"], ["formControlName", "password", "placeholder", "Enter your password", "inputStyleClass", "w-full", 3, "feedback", "toggleMask"], [1, "btn-wrap"], ["type", "submit", "label", "Sign In", "icon", "pi pi-sign-in", 3, "loading"], [1, "forgot-link"], ["routerLink", "/admin/forgot-password"], [1, "footer-note"], ["position", "bottom-right"], [1, "p-error"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Yuvak Mandal Tithal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Yuvak & Yuvati Admin Portal");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "hr", 5);
      \u0275\u0275elementStart(10, "form", 6);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
      \u0275\u0275text(13, "Mobile Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275element(15, "i", 10)(16, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, LoginComponent_small_17_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 7)(19, "label", 8);
      \u0275\u0275text(20, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 13);
      \u0275\u0275element(22, "p-password", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, LoginComponent_small_23_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275element(25, "p-button", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17)(27, "a", 18);
      \u0275\u0275text(28, "Forgot password?");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 19);
      \u0275\u0275text(30, "Yuvak Mandal Tithal \xA0\u2022\xA0 Admin Portal");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(31, "p-toast", 20);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.f["mo_number"].invalid && ctx.f["mo_number"].touched)("ng-dirty", ctx.f["mo_number"].invalid && ctx.f["mo_number"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["mo_number"].invalid && ctx.f["mo_number"].touched);
      \u0275\u0275advance(5);
      \u0275\u0275property("feedback", false)("toggleMask", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275advance(2);
      \u0275\u0275property("loading", ctx.loading);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    NgIf,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    PasswordModule,
    Password,
    ToastModule,
    Toast
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.login-bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      #1A237E 0%,\n      #283593 45%,\n      #3949AB 75%,\n      #1565C0 100%);\n  padding: 24px 16px;\n  position: relative;\n  overflow: hidden;\n}\n.login-bg[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -18%;\n  right: -6%;\n  width: 420px;\n  height: 420px;\n  border-radius: 50%;\n  background: rgba(255, 107, 0, 0.1);\n  pointer-events: none;\n}\n.login-bg[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -14%;\n  left: -4%;\n  width: 360px;\n  height: 360px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n  pointer-events: none;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 48px 44px 40px;\n  box-shadow: 0 28px 72px rgba(0, 0, 0, 0.38);\n  position: relative;\n  z-index: 1;\n}\n.brand-top[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.logo-ring[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  box-shadow: 0 10px 28px rgba(255, 107, 0, 0.25);\n  border: 3px solid #FF8C38;\n  overflow: hidden;\n}\n.logo-img[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 74px;\n  object-fit: contain;\n}\n.brand-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: #1A237E;\n  margin: 0 0 5px;\n}\n.brand-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #9CA3AF;\n  margin: 0;\n}\n.divider-line[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #F1F5F9;\n  margin: 0 0 28px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.input-icon-wrap[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9CA3AF;\n  font-size: 16px;\n  z-index: 2;\n  pointer-events: none;\n}\n.input-icon-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: 0 14px 0 42px;\n  font-size: 0.95rem;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  background: #FAFAFA;\n  font-family: inherit;\n}\n.input-icon-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #3949AB;\n  box-shadow: 0 0 0 3px rgba(57, 73, 171, 0.12);\n  background: #fff;\n}\n.input-icon-wrap[_ngcontent-%COMP%]   input.ng-invalid.ng-dirty[_ngcontent-%COMP%] {\n  border-color: #EF4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n  .lc-pw {\n  display: block;\n}\n  .lc-pw .p-password {\n  display: block;\n}\n  .lc-pw .p-password input {\n  width: 100%;\n  height: 50px;\n  padding: 0 42px 0 14px;\n  font-size: 0.95rem;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  background: #FAFAFA;\n  font-family: inherit;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n  .lc-pw .p-password input:focus {\n  border-color: #3949AB;\n  box-shadow: 0 0 0 3px rgba(57, 73, 171, 0.12);\n  background: #fff;\n  outline: none;\n}\n  .lc-pw .p-password .p-password-toggle-icon {\n  color: #9CA3AF;\n  right: 14px;\n}\n.btn-wrap[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 16px;\n}\n  .btn-wrap .p-button {\n  width: 100%;\n  height: 52px;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B00,\n      #FF8C38);\n  border: none;\n  border-radius: 12px;\n  font-size: 1.02rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  box-shadow: 0 8px 20px rgba(255, 107, 0, 0.32);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n  .btn-wrap .p-button:hover:not([disabled]) {\n  background:\n    linear-gradient(\n      135deg,\n      #CC5500,\n      #FF6B00);\n  box-shadow: 0 10px 26px rgba(255, 107, 0, 0.45);\n  transform: translateY(-2px);\n}\n  .btn-wrap .p-button:active:not([disabled]) {\n  transform: translateY(0);\n}\n.forgot-link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.86rem;\n  color: #6B7280;\n}\n.forgot-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FF6B00;\n  font-weight: 600;\n  text-decoration: none;\n}\n.forgot-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer-note[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.38);\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 500px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 36px 24px 30px;\n    border-radius: 18px;\n  }\n  .logo-ring[_ngcontent-%COMP%] {\n    width: 68px;\n    height: 68px;\n  }\n  .logo-img[_ngcontent-%COMP%] {\n    width: 56px;\n    height: 56px;\n  }\n  .brand-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 360px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 28px 18px 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-TGIG7YAO.js.map
