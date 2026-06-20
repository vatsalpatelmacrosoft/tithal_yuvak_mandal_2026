import {
  Sidebar,
  SidebarModule
} from "./chunk-7LZ2K3I7.js";
import {
  Tag,
  TagModule
} from "./chunk-5WJ72OSF.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-MZF3RCZ3.js";
import {
  Table,
  TableModule
} from "./chunk-B3OHXLFG.js";
import "./chunk-AG2T7FMP.js";
import "./chunk-KOUEGY3L.js";
import {
  AuthService
} from "./chunk-Y6SSSLTD.js";
import "./chunk-CWDKT2OJ.js";
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
import {
  Tooltip,
  TooltipModule
} from "./chunk-5IG7FWVL.js";
import "./chunk-NTE4MRI5.js";
import {
  Button,
  ButtonModule
} from "./chunk-6IMXQGBZ.js";
import "./chunk-UQII2K3B.js";
import {
  ConfirmationService,
  PrimeTemplate
} from "./chunk-CJX7BHHU.js";
import {
  ApiService
} from "./chunk-IFU6TU4Y.js";
import "./chunk-NESC47WB.js";
import "./chunk-RZOKDKRV.js";
import {
  NgIf,
  inject,
  signal,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PUKDGUBM.js";

// src/app/admin/mandal/mandal.component.ts
var _c0 = () => ({ "min-width": "38rem" });
var _c1 = () => ({ width: "420px" });
function MandalComponent_p_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 21);
    \u0275\u0275listener("click", function MandalComponent_p_button_11_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm());
    });
    \u0275\u0275elementEnd();
  }
}
function MandalComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 22);
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function MandalComponent_ng_template_15_p_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 29);
    \u0275\u0275listener("click", function MandalComponent_ng_template_15_p_button_8_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const m_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm(m_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function MandalComponent_ng_template_15_p_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 30);
    \u0275\u0275listener("click", function MandalComponent_ng_template_15_p_button_9_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const m_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(m_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function MandalComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "p-tag", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, MandalComponent_ng_template_15_p_button_8_Template, 1, 2, "p-button", 27)(9, MandalComponent_ng_template_15_p_button_9_Template, 1, 2, "p-button", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const i_r6 = ctx.rowIndex;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", m_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.auth.hasPermission("mandal", "can_update"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.auth.hasPermission("mandal", "can_delete"));
  }
}
function MandalComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275text(3, " No Mandal found. ");
    \u0275\u0275elementEnd()();
  }
}
function MandalComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "p-button", 36);
    \u0275\u0275listener("click", function MandalComponent_ng_template_18_Template_p_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 37);
    \u0275\u0275listener("click", function MandalComponent_ng_template_18_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editing ? "Edit Mandal" : "Add Mandal");
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.saving);
  }
}
function MandalComponent_small_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 38);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function MandalComponent_small_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 38);
    \u0275\u0275text(1, "Code is required");
    \u0275\u0275elementEnd();
  }
}
var MandalComponent = class _MandalComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  confirm = inject(ConfirmationService);
  rows = signal([]);
  show = false;
  editing = null;
  saving = false;
  form = this.fb.group({
    name: ["", Validators.required],
    code: ["", [Validators.required, Validators.pattern(/^[A-Z0-9]{2,10}$/i)]]
  });
  ngOnInit() {
    this.load();
  }
  load() {
    this.api.get("mandal").subscribe((r) => {
      if (r.success)
        this.rows.set(r.data);
    });
  }
  openForm(item) {
    this.editing = item || null;
    this.form.reset(item ? { name: item.name, code: item.code } : {});
    this.show = true;
  }
  closeForm() {
    this.show = false;
    this.editing = null;
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    const req = this.editing ? this.api.put(`mandal/${this.editing.uuid}`, this.form.value) : this.api.post("mandal", this.form.value);
    req.subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success("Mandal saved");
          this.closeForm();
          this.load();
        }
        this.saving = false;
      },
      error: (err) => {
        this.saving = false;
        this.toast.error(err.error?.message || "Error");
      }
    });
  }
  confirmDelete(m) {
    this.confirm.confirm({
      message: `Archive <strong>${m.name}</strong>?`,
      header: "Confirm Archive",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Archive",
      rejectLabel: "Cancel",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text",
      accept: () => this.api.delete(`mandal/${m.uuid}`).subscribe({ next: () => {
        this.toast.success("Mandal archived");
        this.load();
      } })
    });
  }
  static \u0275fac = function MandalComponent_Factory(t) {
    return new (t || _MandalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MandalComponent, selectors: [["app-mandal"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 16, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "indigo"], [1, "pi", "pi-home"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge"], ["label", "Add Mandal", "icon", "pi pi-plus", 3, "click", 4, "ngIf"], [1, "table-card"], ["styleClass", "p-datatable-striped", 3, "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["position", "right", 3, "visibleChange", "visible", "dismissible"], [3, "ngSubmit", "formGroup"], [1, "field", 2, "margin-bottom", "18px"], [1, "required"], ["pInputText", "", "formControlName", "name", "placeholder", "Mandal name", 2, "width", "100%"], ["class", "p-error", 4, "ngIf"], [1, "field", 2, "margin-bottom", "24px"], ["pInputText", "", "formControlName", "code", "placeholder", "e.g. MDL01", 2, "width", "100%"], ["label", "Add Mandal", "icon", "pi pi-plus", 3, "click"], [2, "width", "3.5rem"], [2, "width", "9rem"], [2, "color", "var(--gray-400)", "font-size", "0.82rem"], [2, "font-weight", "500"], ["severity", "info", 3, "value"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "rounded", "text", "click", 4, "ngIf"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "rounded", "text", "click", 4, "ngIf"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["colspan", "4", 2, "text-align", "center", "padding", "3rem", "color", "#9CA3AF"], [1, "pi", "pi-map", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "flex", "1", "margin-right", "8px"], [2, "font-weight", "700", "font-size", "1rem", "color", "#1F2937"], [2, "display", "flex", "gap", "8px"], ["label", "Cancel", "size", "small", 3, "click", "outlined"], ["label", "Save", "size", "small", 3, "click", "loading"], [1, "p-error"]], template: function MandalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Mandal Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Manage local Mandal groups under each Xetra");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, MandalComponent_p_button_11_Template, 1, 0, "p-button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "p-table", 9);
      \u0275\u0275template(14, MandalComponent_ng_template_14_Template, 9, 0, "ng-template", 10)(15, MandalComponent_ng_template_15_Template, 10, 5, "ng-template", 11)(16, MandalComponent_ng_template_16_Template, 4, 0, "ng-template", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-sidebar", 13);
      \u0275\u0275twoWayListener("visibleChange", function MandalComponent_Template_p_sidebar_visibleChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
        return $event;
      });
      \u0275\u0275template(18, MandalComponent_ng_template_18_Template, 6, 3, "ng-template", 10);
      \u0275\u0275elementStart(19, "form", 14);
      \u0275\u0275listener("ngSubmit", function MandalComponent_Template_form_ngSubmit_19_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(20, "div", 15)(21, "label", 16);
      \u0275\u0275text(22, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 17);
      \u0275\u0275template(24, MandalComponent_small_24_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 19)(26, "label", 16);
      \u0275\u0275text(27, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 20);
      \u0275\u0275template(29, MandalComponent_small_29_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(30, "p-confirmDialog");
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.rows().length, " Mandal");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.auth.hasPermission("mandal", "can_create"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.rows())("tableStyle", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(14, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.show);
      \u0275\u0275property("dismissible", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.form.get("name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.form.get("name")) == null ? null : tmp_8_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("code")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.form.get("code")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c1));
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf, TableModule, Table, PrimeTemplate, ButtonModule, Button, SidebarModule, Sidebar, InputTextModule, InputText, ConfirmDialogModule, ConfirmDialog, TagModule, Tag, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=mandal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MandalComponent, { className: "MandalComponent" });
})();
export {
  MandalComponent
};
//# sourceMappingURL=chunk-37ZFNR6P.js.map
