import {
  Sidebar,
  SidebarModule
} from "./chunk-7LZ2K3I7.js";
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
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
import "./chunk-RZOKDKRV.js";
import {
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
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

// src/app/admin/shibir/shibir.component.ts
var _c0 = () => ({ "min-width": "50rem" });
var _c1 = () => ({ width: "420px" });
function ShibirComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 26);
    \u0275\u0275text(8, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ShibirComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "code", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "p-button", 29);
    \u0275\u0275listener("click", function ShibirComponent_ng_template_19_Template_p_button_click_10_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openForm(s_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 30);
    \u0275\u0275listener("click", function ShibirComponent_ng_template_19_Template_p_button_click_11_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(s_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 7, s_r2.date, "dd MMM yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r2.slug);
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function ShibirComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275text(3, " No Shibir found. ");
    \u0275\u0275elementEnd()();
  }
}
function ShibirComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "p-button", 36);
    \u0275\u0275listener("click", function ShibirComponent_ng_template_22_Template_p_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 37);
    \u0275\u0275listener("click", function ShibirComponent_ng_template_22_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.editing ? "Edit Shibir" : "Add Shibir");
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.saving);
  }
}
function ShibirComponent_small_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 38);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function ShibirComponent_small_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 38);
    \u0275\u0275text(1, "Date is required");
    \u0275\u0275elementEnd();
  }
}
function ShibirComponent_p_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, " Slug: ");
    \u0275\u0275elementStart(2, "code", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.editing.slug);
  }
}
var ShibirComponent = class _ShibirComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  confirm = inject(ConfirmationService);
  rows = signal([]);
  show = false;
  editing = null;
  saving = false;
  searchTerm = "";
  form = this.fb.group({ name: ["", Validators.required], date: ["", Validators.required] });
  get filteredRows() {
    const q = this.searchTerm.toLowerCase().trim();
    return q ? this.rows().filter((s) => s.name.toLowerCase().includes(q)) : this.rows();
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.api.get("shibir").subscribe((r) => {
      if (r.success)
        this.rows.set(r.data);
    });
  }
  openForm(item) {
    this.editing = item || null;
    this.form.reset(item ? { name: item.name, date: item.date } : {});
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
    const req = this.editing ? this.api.put(`shibir/${this.editing.uuid}`, this.form.value) : this.api.post("shibir", this.form.value);
    req.subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success("Shibir saved");
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
  confirmDelete(s) {
    this.confirm.confirm({
      message: `Archive <strong>${s.name}</strong>?`,
      header: "Confirm Archive",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Archive",
      rejectLabel: "Cancel",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text",
      accept: () => this.api.delete(`shibir/${s.uuid}`).subscribe({ next: () => {
        this.toast.success("Shibir archived");
        this.load();
      } })
    });
  }
  static \u0275fac = function ShibirComponent_Factory(t) {
    return new (t || _ShibirComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShibirComponent, selectors: [["app-shibir"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 17, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "amber"], [1, "pi", "pi-calendar"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge"], ["label", "Add Shibir", "icon", "pi pi-plus", 3, "click"], [1, "table-card"], [1, "filter-bar"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Search by name...", 2, "width", "260px", 3, "ngModelChange", "ngModel"], ["styleClass", "p-datatable-striped", 3, "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["position", "right", 3, "visibleChange", "visible", "dismissible"], [3, "ngSubmit", "formGroup"], [1, "field", 2, "margin-bottom", "18px"], [1, "required"], ["pInputText", "", "formControlName", "name", "placeholder", "Shibir name", 2, "width", "100%"], ["class", "p-error", 4, "ngIf"], [1, "field", 2, "margin-bottom", "24px"], ["pInputText", "", "type", "date", "formControlName", "date", 2, "width", "100%"], ["style", "font-size:0.83rem;color:#9CA3AF", 4, "ngIf"], [2, "width", "9rem"], [2, "font-weight", "500"], [2, "font-size", "0.78rem", "background", "#F3F4F6", "padding", "2px 8px", "border-radius", "4px", "color", "#6B7280"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["colspan", "4", 2, "text-align", "center", "padding", "3rem", "color", "#9CA3AF"], [1, "pi", "pi-calendar", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "flex", "1", "margin-right", "8px"], [2, "font-weight", "700", "font-size", "1rem", "color", "#1F2937"], [2, "display", "flex", "gap", "8px"], ["label", "Cancel", "size", "small", 3, "click", "outlined"], ["label", "Save", "size", "small", 3, "click", "loading"], [1, "p-error"], [2, "font-size", "0.83rem", "color", "#9CA3AF"], [2, "background", "#F3F4F6", "padding", "2px 6px", "border-radius", "4px"]], template: function ShibirComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Shibir Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Manage Shibir camps and attendance tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "p-button", 7);
      \u0275\u0275listener("click", function ShibirComponent_Template_p_button_click_11_listener() {
        return ctx.openForm();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "span", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ShibirComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "p-table", 13);
      \u0275\u0275template(18, ShibirComponent_ng_template_18_Template, 9, 0, "ng-template", 14)(19, ShibirComponent_ng_template_19_Template, 12, 10, "ng-template", 15)(20, ShibirComponent_ng_template_20_Template, 4, 0, "ng-template", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p-sidebar", 17);
      \u0275\u0275twoWayListener("visibleChange", function ShibirComponent_Template_p_sidebar_visibleChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
        return $event;
      });
      \u0275\u0275template(22, ShibirComponent_ng_template_22_Template, 6, 3, "ng-template", 14);
      \u0275\u0275elementStart(23, "form", 18);
      \u0275\u0275listener("ngSubmit", function ShibirComponent_Template_form_ngSubmit_23_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(24, "div", 19)(25, "label", 20);
      \u0275\u0275text(26, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 21);
      \u0275\u0275template(28, ShibirComponent_small_28_Template, 2, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 23)(30, "label", 20);
      \u0275\u0275text(31, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 24);
      \u0275\u0275template(33, ShibirComponent_small_33_Template, 2, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, ShibirComponent_p_34_Template, 4, 1, "p", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "p-confirmDialog");
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.rows().length, " Shibir");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.filteredRows)("tableStyle", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.show);
      \u0275\u0275property("dismissible", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.form.get("name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.form.get("name")) == null ? null : tmp_8_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("date")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.form.get("date")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editing);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c1));
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, NgIf, DatePipe, TableModule, Table, PrimeTemplate, ButtonModule, Button, SidebarModule, Sidebar, InputTextModule, InputText, ConfirmDialogModule, ConfirmDialog, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=shibir.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShibirComponent, { className: "ShibirComponent" });
})();
export {
  ShibirComponent
};
//# sourceMappingURL=chunk-VIDECGLX.js.map
