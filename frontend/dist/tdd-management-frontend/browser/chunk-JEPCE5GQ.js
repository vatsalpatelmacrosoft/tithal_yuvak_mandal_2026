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

// src/app/admin/yuvak/yuvak-form/yuvak-form.component.ts
var _c0 = (a0) => ({ "err": a0 });
function YuvakFormComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getError("first_name"));
  }
}
function YuvakFormComponent_small_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getError("last_name"));
  }
}
function YuvakFormComponent_small_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getError("mo_number"));
  }
}
function YuvakFormComponent_small_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getError("email"));
  }
}
function YuvakFormComponent_small_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1, "Xetra is required");
    \u0275\u0275elementEnd();
  }
}
function YuvakFormComponent_small_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1, "Mandal is required");
    \u0275\u0275elementEnd();
  }
}
var YuvakFormComponent = class _YuvakFormComponent {
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
      this.loadYuvak(id);
    }
  }
  loadYuvak(uuid) {
    this.loading = true;
    this.api.get(`yuvak/${uuid}`).subscribe((res) => {
      if (res.success) {
        const y = res.data;
        this.form.patchValue(__spreadProps(__spreadValues({}, y), { xetra_id: y.xetra_id, mandal_id: y.mandal_id, tags: y.tags || [] }));
      }
      this.loading = false;
    });
  }
  hasError(f) {
    const ctrl = this.form.get(f);
    return ctrl?.invalid && (ctrl.touched || ctrl.dirty) || !!this.apiErrors[f];
  }
  getError(f) {
    if (this.apiErrors[f])
      return this.apiErrors[f];
    const ctrl = this.form.get(f);
    if (ctrl?.errors?.["required"])
      return `This field is required`;
    if (ctrl?.errors?.["pattern"])
      return "Invalid format";
    if (ctrl?.errors?.["email"])
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
    const request = this.isEdit ? this.api.put(`yuvak/${this.editUuid}`, payload) : this.api.post("yuvak", payload);
    request.subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success(this.isEdit ? "Yuvak updated successfully" : "Yuvak added successfully");
          this.router.navigate(["/admin/yuvak"]);
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
  static \u0275fac = function YuvakFormComponent_Factory(t) {
    return new (t || _YuvakFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YuvakFormComponent, selectors: [["app-yuvak-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 88, vars: 32, consts: [[1, "back-link", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "form-hero"], [1, "form-hero-left"], [1, "form-hero-icon"], [1, "pi", "pi-user"], [1, "form-hero-title"], [1, "form-hero-sub"], [1, "form-hero-actions"], ["label", "Cancel", 3, "click", "outlined"], ["icon", "pi pi-save", 3, "click", "label", "loading"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-row"], [1, "field"], [1, "req"], ["pInputText", "", "formControlName", "first_name", "placeholder", "First name"], ["class", "p-error", 4, "ngIf"], ["pInputText", "", "formControlName", "middle_name", "placeholder", "Middle name (optional)"], ["pInputText", "", "formControlName", "last_name", "placeholder", "Last name"], [1, "pi", "pi-phone"], ["pInputText", "", "formControlName", "mo_number", "type", "tel", "placeholder", "10-digit mobile"], ["pInputText", "", "formControlName", "whatsapp_number", "type", "tel", "placeholder", "If different from mobile"], ["pInputText", "", "formControlName", "email", "type", "email", "placeholder", "Email address"], [1, "pi", "pi-map"], ["formControlName", "xetra_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select Xetra", 3, "options", "ngClass"], ["formControlName", "mandal_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select Mandal", 3, "options", "ngClass"], ["formControlName", "is_karyakar", "optionLabel", "label", "optionValue", "value", 3, "options"], [1, "pi", "pi-info-circle"], [1, "field", 2, "margin-bottom", "16px"], ["pInputTextarea", "", "formControlName", "address", "placeholder", "Full residential address", "rows", "3"], ["formControlName", "tags", "placeholder", "Add tag and press Enter"], [1, "form-hero-actions", 2, "justify-content", "flex-end", "margin-bottom", "8px"], ["type", "button", "label", "Cancel", 3, "click", "outlined"], ["type", "submit", "icon", "pi pi-save", 3, "label", "loading"], [1, "p-error"]], template: function YuvakFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function YuvakFormComponent_Template_div_click_0_listener() {
        return ctx.router.navigate(["/admin/yuvak"]);
      });
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275text(2, " Back to Yuvak\n");
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
      \u0275\u0275listener("click", function YuvakFormComponent_Template_p_button_click_13_listener() {
        return ctx.router.navigate(["/admin/yuvak"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-button", 10);
      \u0275\u0275listener("click", function YuvakFormComponent_Template_p_button_click_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "form", 11);
      \u0275\u0275listener("ngSubmit", function YuvakFormComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "i", 5);
      \u0275\u0275text(19, " Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "label", 16);
      \u0275\u0275text(23, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 17);
      \u0275\u0275template(25, YuvakFormComponent_small_25_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 15)(27, "label");
      \u0275\u0275text(28, "Middle Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 15)(31, "label", 16);
      \u0275\u0275text(32, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 20);
      \u0275\u0275template(34, YuvakFormComponent_small_34_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "div", 13);
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275text(38, " Contact Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14)(40, "div", 15)(41, "label", 16);
      \u0275\u0275text(42, "Mobile Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 22);
      \u0275\u0275template(44, YuvakFormComponent_small_44_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 15)(46, "label");
      \u0275\u0275text(47, "WhatsApp Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 15)(50, "label");
      \u0275\u0275text(51, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "input", 24);
      \u0275\u0275template(53, YuvakFormComponent_small_53_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 12)(55, "div", 13);
      \u0275\u0275element(56, "i", 25);
      \u0275\u0275text(57, " Organisation Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 14)(59, "div", 15)(60, "label", 16);
      \u0275\u0275text(61, "Xetra");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "p-dropdown", 26);
      \u0275\u0275template(63, YuvakFormComponent_small_63_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 15)(65, "label", 16);
      \u0275\u0275text(66, "Mandal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "p-dropdown", 27);
      \u0275\u0275template(68, YuvakFormComponent_small_68_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 15)(70, "label");
      \u0275\u0275text(71, "Is Karyakar?");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "p-dropdown", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 12)(74, "div", 13);
      \u0275\u0275element(75, "i", 29);
      \u0275\u0275text(76, " Additional Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 30)(78, "label");
      \u0275\u0275text(79, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "textarea", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 15)(82, "label");
      \u0275\u0275text(83, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "p-chips", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 33)(86, "p-button", 34);
      \u0275\u0275listener("click", function YuvakFormComponent_Template_p_button_click_86_listener() {
        return ctx.router.navigate(["/admin/yuvak"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(87, "p-button", 35);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Yuvak" : "Add New Yuvak");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Update member information" : "Register a new Yuvak member");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEdit ? "Update" : "Save")("loading", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("err", ctx.hasError("first_name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("first_name"));
      \u0275\u0275advance(8);
      \u0275\u0275classProp("err", ctx.hasError("last_name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("last_name"));
      \u0275\u0275advance(9);
      \u0275\u0275classProp("err", ctx.hasError("mo_number"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("mo_number"));
      \u0275\u0275advance(8);
      \u0275\u0275classProp("err", ctx.hasError("email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("email"));
      \u0275\u0275advance(9);
      \u0275\u0275property("options", ctx.xetras)("ngClass", \u0275\u0275pureFunction1(28, _c0, ctx.hasError("xetra_id")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("xetra_id"));
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.mandals)("ngClass", \u0275\u0275pureFunction1(30, _c0, ctx.hasError("mandal_id")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("mandal_id"));
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.karyakarOptions);
      \u0275\u0275advance(14);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEdit ? "Update" : "Save")("loading", ctx.saving);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass, NgIf, ButtonModule, Button, InputTextModule, InputText, InputTextareaModule, InputTextarea, DropdownModule, Dropdown, ChipsModule, Chips], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n  .field .p-dropdown {\n  height: 40px !important;\n  border: 1.5px solid #E5E7EB !important;\n  border-radius: 8px !important;\n  width: 100% !important;\n}\n  .field .p-dropdown.err {\n  border-color: #EF4444 !important;\n}\n  .field .p-chips .p-chips-multiple-container {\n  border: 1.5px solid #E5E7EB !important;\n  border-radius: 8px !important;\n  min-height: 40px !important;\n  width: 100% !important;\n}\n  .form-hero-actions .p-button:not(.p-button-outlined) {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B00,\n      #FF9240) !important;\n  border-color: transparent !important;\n  box-shadow: 0 2px 8px rgba(255, 107, 0, 0.3);\n}\n  .form-hero-actions .p-button:not(.p-button-outlined):hover {\n  background:\n    linear-gradient(\n      135deg,\n      #CC5500,\n      #FF6B00) !important;\n}\n/*# sourceMappingURL=yuvak-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YuvakFormComponent, { className: "YuvakFormComponent" });
})();
export {
  YuvakFormComponent
};
//# sourceMappingURL=chunk-JEPCE5GQ.js.map
