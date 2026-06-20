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
  FormsModule,
  NgControlStatus,
  NgModel
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
import {
  Router
} from "./chunk-NESC47WB.js";
import "./chunk-RZOKDKRV.js";
import {
  NgIf,
  Subject,
  TitleCasePipe,
  debounceTime,
  distinctUntilChanged,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PUKDGUBM.js";

// src/app/admin/yuvak/yuvak-list/yuvak-list.component.ts
var _c0 = () => ({ "min-width": "70rem" });
var _c1 = () => ({ width: "420px" });
function YuvakListComponent_p_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 19);
    \u0275\u0275listener("click", function YuvakListComponent_p_button_11_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function YuvakListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Yuvak ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Xetra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Mandal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Karyakar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 20);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function YuvakListComponent_ng_template_21_p_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 26);
    \u0275\u0275listener("click", function YuvakListComponent_ng_template_21_p_button_17_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const y_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit(y_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function YuvakListComponent_ng_template_21_p_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 27);
    \u0275\u0275listener("click", function YuvakListComponent_ng_template_21_p_button_19_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const y_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(y_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function YuvakListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, YuvakListComponent_ng_template_21_p_button_17_Template, 1, 2, "p-button", 23);
    \u0275\u0275elementStart(18, "p-button", 24);
    \u0275\u0275listener("click", function YuvakListComponent_ng_template_21_Template_p_button_click_18_listener() {
      const y_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendNotification(y_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, YuvakListComponent_ng_template_21_p_button_19_Template, 1, 2, "p-button", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const y_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(y_r5.yuvak_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", y_r5.first_name, " ", y_r5.middle_name, " ", y_r5.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(y_r5.mo_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(y_r5.xetra_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(y_r5.mandal_name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(y_r5.is_karyakar === "no" ? "karyakar-no" : "karyakar-yes");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", y_r5.is_karyakar === "no" ? "No" : \u0275\u0275pipeBind1(15, 15, y_r5.is_karyakar), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true)("loading", ctx_r1.sendingNotify === y_r5.uuid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete);
  }
}
function YuvakListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275text(3, " No Yuvak records found ");
    \u0275\u0275elementEnd()();
  }
}
var YuvakListComponent = class _YuvakListComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastService);
  confirm = inject(ConfirmationService);
  yuvaks = signal([]);
  total = signal(0);
  xetras = [];
  mandals = [];
  loading = false;
  perPage = 15;
  searchTerm = "";
  filters = { xetra_id: null, mandal_id: null };
  search$ = new Subject();
  get canCreate() {
    return this.auth.hasPermission("yuvak", "can_create");
  }
  get canUpdate() {
    return this.auth.hasPermission("yuvak", "can_update");
  }
  get canDelete() {
    return this.auth.hasPermission("yuvak", "can_delete");
  }
  ngOnInit() {
    this.api.get("xetra").subscribe((r) => {
      if (r.success)
        this.xetras = r.data;
    });
    this.api.get("mandal").subscribe((r) => {
      if (r.success)
        this.mandals = r.data;
    });
    this.search$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => this.loadData(1));
    this.loadData(1);
  }
  onLazyLoad(event) {
    const page = Math.floor((event.first ?? 0) / (event.rows ?? this.perPage)) + 1;
    this.loadData(page);
  }
  loadData(page = 1) {
    this.loading = true;
    const params = { page, limit: this.perPage, search: this.searchTerm };
    if (this.filters.xetra_id)
      params.xetra_id = this.filters.xetra_id;
    if (this.filters.mandal_id)
      params.mandal_id = this.filters.mandal_id;
    this.api.get("yuvak", params).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.yuvaks.set(res.data.data);
          this.total.set(res.data.total);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onSearch(v) {
    this.search$.next(v);
  }
  goToCreate() {
    this.router.navigate(["/admin/yuvak/new"]);
  }
  edit(y) {
    this.router.navigate(["/admin/yuvak", y.uuid]);
  }
  sendingNotify = null;
  sendNotification(y) {
    this.sendingNotify = y.uuid;
    this.api.post(`yuvak/${y.uuid}/notify`, {}).subscribe({
      next: (res) => {
        if (res.success)
          this.toast.success("Welcome message sent!");
        this.sendingNotify = null;
      },
      error: () => {
        this.toast.error("Failed to send message");
        this.sendingNotify = null;
      }
    });
  }
  confirmDelete(y) {
    this.confirm.confirm({
      message: `Archive <strong>${y.first_name} ${y.last_name}</strong>? Their record will be hidden from active lists.`,
      header: "Confirm Archive",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Archive",
      rejectLabel: "Cancel",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.api.delete(`yuvak/${y.uuid}`).subscribe({
          next: (res) => {
            if (res.success) {
              this.toast.success("Yuvak archived");
              this.loadData(1);
            }
          }
        });
      }
    });
  }
  static \u0275fac = function YuvakListComponent_Factory(t) {
    return new (t || _YuvakListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YuvakListComponent, selectors: [["app-yuvak-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 21, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "saffron"], [1, "pi", "pi-user"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge"], ["label", "Add Yuvak", "icon", "pi pi-plus", 3, "click", 4, "ngIf"], [1, "table-card"], [1, "filter-bar"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Search name, mobile, ID...", 2, "width", "260px", 3, "ngModelChange", "ngModel"], ["optionLabel", "name", "optionValue", "id", "placeholder", "All Xetra", 3, "ngModelChange", "options", "ngModel", "showClear"], ["optionLabel", "name", "optionValue", "id", "placeholder", "All Mandal", 3, "ngModelChange", "options", "ngModel", "showClear"], ["currentPageReportTemplate", "{first}-{last} of {totalRecords}", "styleClass", "p-datatable-striped", 3, "onLazyLoad", "value", "lazy", "totalRecords", "rows", "paginator", "loading", "tableStyle", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["label", "Add Yuvak", "icon", "pi pi-plus", 3, "click"], [2, "width", "8rem"], [2, "background", "#FFF0E0", "padding", "2px 7px", "border-radius", "4px", "font-size", "0.82rem"], [2, "font-weight", "500"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "rounded", "text", "click", 4, "ngIf"], ["icon", "pi pi-send", "severity", "info", "size", "small", "pTooltip", "Send Welcome Message", "tooltipPosition", "top", 3, "click", "rounded", "text", "loading"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "rounded", "text", "click", 4, "ngIf"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["colspan", "7", 2, "text-align", "center", "padding", "3rem", "color", "#9CA3AF"], [1, "pi", "pi-user", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"]], template: function YuvakListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Yuvak Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Browse, filter and manage all Yuvak members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, YuvakListComponent_p_button_11_Template, 1, 0, "p-button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "span", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function YuvakListComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function YuvakListComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-dropdown", 13);
      \u0275\u0275twoWayListener("ngModelChange", function YuvakListComponent_Template_p_dropdown_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.xetra_id, $event) || (ctx.filters.xetra_id = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function YuvakListComponent_Template_p_dropdown_ngModelChange_17_listener() {
        return ctx.loadData(1);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-dropdown", 14);
      \u0275\u0275twoWayListener("ngModelChange", function YuvakListComponent_Template_p_dropdown_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.mandal_id, $event) || (ctx.filters.mandal_id = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function YuvakListComponent_Template_p_dropdown_ngModelChange_18_listener() {
        return ctx.loadData(1);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "p-table", 15);
      \u0275\u0275listener("onLazyLoad", function YuvakListComponent_Template_p_table_onLazyLoad_19_listener($event) {
        return ctx.onLazyLoad($event);
      });
      \u0275\u0275template(20, YuvakListComponent_ng_template_20_Template, 15, 0, "ng-template", 16)(21, YuvakListComponent_ng_template_21_Template, 20, 17, "ng-template", 17)(22, YuvakListComponent_ng_template_22_Template, 4, 0, "ng-template", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "p-confirmDialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.total(), " Yuvak");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canCreate);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.xetras);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.xetra_id);
      \u0275\u0275property("showClear", true);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.mandals);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.mandal_id);
      \u0275\u0275property("showClear", true);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.yuvaks())("lazy", true)("totalRecords", ctx.total())("rows", ctx.perPage)("paginator", true)("loading", ctx.loading)("tableStyle", \u0275\u0275pureFunction0(19, _c0))("showCurrentPageReport", true);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c1));
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, TitleCasePipe, TableModule, Table, PrimeTemplate, ButtonModule, Button, InputTextModule, InputText, DropdownModule, Dropdown, ConfirmDialogModule, ConfirmDialog, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=yuvak-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YuvakListComponent, { className: "YuvakListComponent" });
})();
export {
  YuvakListComponent
};
//# sourceMappingURL=chunk-JHXRWB4Q.js.map
