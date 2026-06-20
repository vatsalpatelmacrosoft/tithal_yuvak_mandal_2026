import {
  Chips,
  ChipsModule
} from "./chunk-F7CU35FU.js";
import {
  InputTextarea,
  InputTextareaModule
} from "./chunk-AOOUFESW.js";
import "./chunk-7NE63XKE.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-CWDKT2OJ.js";
import {
  InputText,
  InputTextModule
} from "./chunk-FZMUGTLW.js";
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
} from "./chunk-QMTKQQCH.js";
import {
  ToastService
} from "./chunk-H7DSMCQO.js";
import "./chunk-5IG7FWVL.js";
import "./chunk-NTE4MRI5.js";
import {
  Button,
  ButtonModule
} from "./chunk-6IMXQGBZ.js";
import "./chunk-UQII2K3B.js";
import "./chunk-CJX7BHHU.js";
import {
  ApiService
} from "./chunk-IFU6TU4Y.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-NESC47WB.js";
import "./chunk-RZOKDKRV.js";
import {
  NgClass,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PUKDGUBM.js";

// src/app/admin/yuvati/yuvati-form/yuvati-form.component.ts
var _c0 = (a0) => ({ "err": a0 });
function YuvatiFormComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getErr("first_name"));
  }
}
function YuvatiFormComponent_small_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getErr("last_name"));
  }
}
function YuvatiFormComponent_small_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getErr("mo_number"));
  }
}
function YuvatiFormComponent_small_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, "Xetra is required");
    \u0275\u0275elementEnd();
  }
}
function YuvatiFormComponent_small_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, "Mandal is required");
    \u0275\u0275elementEnd();
  }
}
var YuvatiFormComponent = class _YuvatiFormComponent {
  fb = inject(FormBuilder);
  api = inject(ApiService);
  toast = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  karyakarOptions = [
    { label: "No", value: "no" },
    { label: "Bal", value: "bal" },
    { label: "Yuva", value: "yuva" },
    { label: "Sanyukta", value: "sanyukta" }
  ];
  form = this.fb.group({
    first_name: ["", Validators.required],
    middle_name: [""],
    last_name: ["", Validators.required],
    mo_number: ["", [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    whatsapp_number: [""],
    email: ["", Validators.email],
    address: [""],
    xetra_id: [null, Validators.required],
    mandal_id: [null, Validators.required],
    is_karyakar: ["no"],
    tags: [[]]
  });
  xetras = [];
  mandals = [];
  loading = false;
  saving = false;
  isEdit = false;
  editUuid = "";
  apiErrors = {};
  ngOnInit() {
    this.api.get("xetra").subscribe((r) => {
      if (r.success)
        this.xetras = r.data;
    });
    this.api.get("mandal").subscribe((r) => {
      if (r.success)
        this.mandals = r.data;
    });
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isEdit = true;
      this.editUuid = id;
      this.loading = true;
      this.api.get(`yuvati/${id}`).subscribe((res) => {
        if (res.success) {
          const y = res.data;
          this.form.patchValue(__spreadProps(__spreadValues({}, y), { xetra_id: y.xetra_id, mandal_id: y.mandal_id, tags: y.tags || [] }));
        }
        this.loading = false;
      });
    }
  }
  hasErr(f) {
    const c = this.form.get(f);
    return c?.invalid && (c.touched || c.dirty) || !!this.apiErrors[f];
  }
  getErr(f) {
    if (this.apiErrors[f])
      return this.apiErrors[f];
    const c = this.form.get(f);
    if (c?.errors?.["required"])
      return "This field is required";
    if (c?.errors?.["pattern"])
      return "Invalid format";
    if (c?.errors?.["email"])
      return "Invalid email address";
    return "";
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.apiErrors = {};
    const payload = this.form.value;
    const req = this.isEdit ? this.api.put(`yuvati/${this.editUuid}`, payload) : this.api.post("yuvati", payload);
    req.subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success(this.isEdit ? "Yuvati updated successfully" : "Yuvati added successfully");
          this.router.navigate(["/admin/yuvati"]);
        }
        this.saving = false;
      },
      error: (err) => {
        this.saving = false;
        if (err.error?.errors) {
          this.apiErrors = err.error.errors;
          this.form.markAllAsTouched();
        } else
          this.toast.error(err.error?.message || "Save failed");
      }
    });
  }
  static \u0275fac = function YuvatiFormComponent_Factory(t) {
    return new (t || _YuvatiFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YuvatiFormComponent, selectors: [["app-yuvati-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 87, vars: 29, consts: [[1, "back-link", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "form-hero", "yuvati-hero"], [1, "form-hero-left"], [1, "form-hero-icon"], [1, "pi", "pi-users"], [1, "form-hero-title"], [1, "form-hero-sub"], [1, "form-hero-actions"], ["label", "Cancel", 3, "click", "outlined"], ["icon", "pi pi-save", 3, "click", "label", "loading"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "pi", "pi-user"], [1, "form-row"], [1, "field"], [1, "req"], ["pInputText", "", "formControlName", "first_name", "placeholder", "First name"], ["class", "p-error", 4, "ngIf"], ["pInputText", "", "formControlName", "middle_name", "placeholder", "Optional"], ["pInputText", "", "formControlName", "last_name", "placeholder", "Last name"], [1, "pi", "pi-phone"], ["pInputText", "", "formControlName", "mo_number", "type", "tel", "placeholder", "10-digit mobile"], ["pInputText", "", "formControlName", "whatsapp_number", "type", "tel", "placeholder", "If different from mobile"], ["pInputText", "", "formControlName", "email", "type", "email", "placeholder", "Email (optional)"], [1, "pi", "pi-map"], ["formControlName", "xetra_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select Xetra", 3, "options", "ngClass"], ["formControlName", "mandal_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select Mandal", 3, "options", "ngClass"], ["formControlName", "is_karyakar", "optionLabel", "label", "optionValue", "value", 3, "options"], [1, "pi", "pi-info-circle"], [1, "field", 2, "margin-bottom", "16px"], ["pInputTextarea", "", "formControlName", "address", "placeholder", "Full residential address", "rows", "3"], ["formControlName", "tags", "placeholder", "Add tag and press Enter"], [1, "form-hero-actions", 2, "justify-content", "flex-end", "margin-bottom", "8px"], ["type", "button", "label", "Cancel", 3, "click", "outlined"], ["type", "submit", "icon", "pi pi-save", 3, "label", "loading"], [1, "p-error"]], template: function YuvatiFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function YuvatiFormComponent_Template_div_click_0_listener() {
        return ctx.router.navigate(["/admin/yuvati"]);
      });
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275text(2, " Back to Yuvati\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "p-button", 9);
      \u0275\u0275listener("click", function YuvatiFormComponent_Template_p_button_click_13_listener() {
        return ctx.router.navigate(["/admin/yuvati"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-button", 10);
      \u0275\u0275listener("click", function YuvatiFormComponent_Template_p_button_click_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "form", 11);
      \u0275\u0275listener("ngSubmit", function YuvatiFormComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275text(19, " Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "label", 17);
      \u0275\u0275text(23, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 18);
      \u0275\u0275template(25, YuvatiFormComponent_small_25_Template, 2, 1, "small", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16)(27, "label");
      \u0275\u0275text(28, "Middle Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 16)(31, "label", 17);
      \u0275\u0275text(32, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 21);
      \u0275\u0275template(34, YuvatiFormComponent_small_34_Template, 2, 1, "small", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "div", 13);
      \u0275\u0275element(37, "i", 22);
      \u0275\u0275text(38, " Contact Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 15)(40, "div", 16)(41, "label", 17);
      \u0275\u0275text(42, "Mobile Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 23);
      \u0275\u0275template(44, YuvatiFormComponent_small_44_Template, 2, 1, "small", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 16)(46, "label");
      \u0275\u0275text(47, "WhatsApp Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 16)(50, "label");
      \u0275\u0275text(51, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "input", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 12)(54, "div", 13);
      \u0275\u0275element(55, "i", 26);
      \u0275\u0275text(56, " Organisation Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 15)(58, "div", 16)(59, "label", 17);
      \u0275\u0275text(60, "Xetra");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "p-dropdown", 27);
      \u0275\u0275template(62, YuvatiFormComponent_small_62_Template, 2, 0, "small", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 16)(64, "label", 17);
      \u0275\u0275text(65, "Mandal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "p-dropdown", 28);
      \u0275\u0275template(67, YuvatiFormComponent_small_67_Template, 2, 0, "small", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 16)(69, "label");
      \u0275\u0275text(70, "Is Karyakar?");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "p-dropdown", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 12)(73, "div", 13);
      \u0275\u0275element(74, "i", 30);
      \u0275\u0275text(75, " Additional Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 31)(77, "label");
      \u0275\u0275text(78, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "textarea", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 16)(81, "label");
      \u0275\u0275text(82, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "p-chips", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 34)(85, "p-button", 35);
      \u0275\u0275listener("click", function YuvatiFormComponent_Template_p_button_click_85_listener() {
        return ctx.router.navigate(["/admin/yuvati"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "p-button", 36);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Yuvati" : "Add New Yuvati");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Update member information" : "Register a new Yuvati member");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEdit ? "Update Yuvati" : "Save Yuvati")("loading", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("err", ctx.hasErr("first_name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasErr("first_name"));
      \u0275\u0275advance(8);
      \u0275\u0275classProp("err", ctx.hasErr("last_name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasErr("last_name"));
      \u0275\u0275advance(9);
      \u0275\u0275classProp("err", ctx.hasErr("mo_number"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasErr("mo_number"));
      \u0275\u0275advance(17);
      \u0275\u0275property("options", ctx.xetras)("ngClass", \u0275\u0275pureFunction1(25, _c0, ctx.hasErr("xetra_id")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasErr("xetra_id"));
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.mandals)("ngClass", \u0275\u0275pureFunction1(27, _c0, ctx.hasErr("mandal_id")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasErr("mandal_id"));
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.karyakarOptions);
      \u0275\u0275advance(14);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEdit ? "Update Yuvati" : "Save Yuvati")("loading", ctx.saving);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass, NgIf, ButtonModule, Button, InputTextModule, InputText, InputTextareaModule, InputTextarea, DropdownModule, Dropdown, ChipsModule, Chips], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.yuvati-hero[_ngcontent-%COMP%] {\n  border-left-color: #1E88E5 !important;\n}\n  .field .p-dropdown {\n  height: 40px !important;\n  border: 1.5px solid #E5E7EB !important;\n  border-radius: 8px !important;\n  width: 100% !important;\n}\n  .field .p-chips .p-chips-multiple-container {\n  border: 1.5px solid #E5E7EB !important;\n  border-radius: 8px !important;\n  min-height: 40px !important;\n  width: 100% !important;\n}\n.form-hero-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1565C0,\n      #3949AB) !important;\n  box-shadow: 0 4px 14px rgba(57, 73, 171, 0.35) !important;\n}\n  .form-hero-actions .p-button:not(.p-button-outlined) {\n  background:\n    linear-gradient(\n      135deg,\n      #1565C0,\n      #3949AB) !important;\n  border-color: transparent !important;\n  box-shadow: 0 2px 8px rgba(57, 73, 171, 0.3);\n}\n  .form-hero-actions .p-button:not(.p-button-outlined):hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0D47A1,\n      #1A237E) !important;\n}\n/*# sourceMappingURL=yuvati-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YuvatiFormComponent, { className: "YuvatiFormComponent" });
})();
export {
  YuvatiFormComponent
};
//# sourceMappingURL=chunk-42NG4UIL.js.map
