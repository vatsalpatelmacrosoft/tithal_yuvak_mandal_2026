import {
  Password,
  PasswordModule
} from "./chunk-SSUFSAWO.js";
import {
  Toast,
  ToastModule
} from "./chunk-LNCQ4TDH.js";
import {
  AuthService
} from "./chunk-Y6SSSLTD.js";
import "./chunk-7NE63XKE.js";
import "./chunk-FZMUGTLW.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QMTKQQCH.js";
import {
  ToastService
} from "./chunk-H7DSMCQO.js";
import "./chunk-NTE4MRI5.js";
import {
  Button,
  ButtonModule
} from "./chunk-6IMXQGBZ.js";
import "./chunk-UQII2K3B.js";
import "./chunk-CJX7BHHU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-NESC47WB.js";
import "./chunk-RZOKDKRV.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-PUKDGUBM.js";

// src/app/admin/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, " Password must be at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  token = "";
  loading = false;
  form = this.fb.group({ new_password: ["", [Validators.required, Validators.minLength(8)]] });
  ngOnInit() {
    this.token = this.route.snapshot.queryParams["token"] || "";
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (!this.token) {
      this.toast.error("Invalid reset link");
      return;
    }
    this.loading = true;
    this.auth.resetPassword(this.token, this.form.value.new_password).subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success("Password reset! Please login.");
          this.router.navigate(["/admin/login"]);
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.toast.error(err.error?.message || "Reset failed");
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(t) {
    return new (t || _ResetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 5, consts: [[1, "login-page"], [1, "login-left"], [1, "login-logo"], [1, "login-right"], [1, "login-card"], [1, "subtitle"], [3, "ngSubmit", "formGroup"], [1, "form-group", 2, "margin-bottom", "20px"], [1, "required"], ["formControlName", "new_password", "placeholder", "Min 8 characters", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "feedback", "toggleMask"], ["class", "p-error", 4, "ngIf"], ["type", "submit", "label", "Reset Password", "icon", "pi pi-lock", "styleClass", "w-full", 3, "loading"], [2, "text-align", "center", "margin-top", "16px"], ["routerLink", "/admin/login", 2, "color", "var(--primary-color)", "font-size", "0.88rem"], ["position", "bottom-right"], [1, "p-error"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F511}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Choose a strong new password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "h2");
      \u0275\u0275text(11, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 5);
      \u0275\u0275text(13, "Enter your new password below");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "form", 6);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 8);
      \u0275\u0275text(17, "New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-password", 9);
      \u0275\u0275template(19, ResetPasswordComponent_small_19_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "p-button", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275text(23, " \u2190 Back to Login ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(24, "p-toast", 14);
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(14);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("feedback", true)("toggleMask", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("new_password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("new_password")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, NgIf, ButtonModule, Button, PasswordModule, Password, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent" });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-AK7WPTKS.js.map
