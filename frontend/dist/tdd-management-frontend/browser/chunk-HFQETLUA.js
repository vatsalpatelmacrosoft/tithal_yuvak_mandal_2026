import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-MSUHBZS4.js";
import {
  Table,
  TableModule
} from "./chunk-J3THYUN5.js";
import "./chunk-NHVW7JCQ.js";
import "./chunk-ZDB3HVKV.js";
import {
  AuthService
} from "./chunk-WJUWKVEZ.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-JGZM7AHT.js";
import {
  InputText,
  InputTextModule
} from "./chunk-S7HUCEIK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YPQPAB3Z.js";
import {
  ToastService
} from "./chunk-JX63ECEV.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-5E6EQEG5.js";
import "./chunk-UAHN6Q6E.js";
import "./chunk-6KFP5JIF.js";
import {
  Button,
  ButtonModule
} from "./chunk-EWFPHMRU.js";
import "./chunk-YQH4GAYX.js";
import {
  ConfirmationService,
  PrimeTemplate
} from "./chunk-7QANY5TG.js";
import {
  ApiService
} from "./chunk-FA5V7IHE.js";
import {
  Router
} from "./chunk-B62F6VTM.js";
import "./chunk-VVE7LC7Y.js";
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
} from "./chunk-2TIVPBG5.js";

// src/app/admin/yuvak/yuvak-list/yuvak-list.component.ts
var _c0 = () => ({ "min-width": "70rem" });
var _c1 = () => ({ width: "420px" });
function YuvakListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "p-button", 24);
    \u0275\u0275listener("click", function YuvakListComponent_div_11_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCreate());
    });
    \u0275\u0275elementEnd()();
  }
}
function YuvakListComponent_ng_template_25_Template(rf, ctx) {
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
    \u0275\u0275elementStart(13, "th", 25);
    \u0275\u0275text(14, "Welcome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function YuvakListComponent_ng_template_26_p_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 33);
    \u0275\u0275listener("click", function YuvakListComponent_ng_template_26_p_button_19_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const y_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit(y_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function YuvakListComponent_ng_template_26_p_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 34);
    \u0275\u0275listener("click", function YuvakListComponent_ng_template_26_p_button_21_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const y_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(y_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function YuvakListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 28);
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
    \u0275\u0275elementStart(16, "td")(17, "p-button", 29);
    \u0275\u0275listener("click", function YuvakListComponent_ng_template_26_Template_p_button_click_17_listener() {
      const y_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyWelcomeLink(y_r4));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, YuvakListComponent_ng_template_26_p_button_19_Template, 1, 2, "p-button", 30);
    \u0275\u0275elementStart(20, "p-button", 31);
    \u0275\u0275listener("click", function YuvakListComponent_ng_template_26_Template_p_button_click_20_listener() {
      const y_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendNotification(y_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, YuvakListComponent_ng_template_26_p_button_21_Template, 1, 2, "p-button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(y_r4.yuvak_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", y_r4.first_name, " ", y_r4.middle_name, " ", y_r4.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(y_r4.mo_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(y_r4.xetra_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(y_r4.mandal_name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(y_r4.is_karyakar === "no" ? "karyakar-no" : "karyakar-yes");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", y_r4.is_karyakar === "no" ? "No" : \u0275\u0275pipeBind1(15, 17, y_r4.is_karyakar), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true)("loading", ctx_r1.sendingNotify === y_r4.uuid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete);
  }
}
function YuvakListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275element(2, "i", 36);
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
  openWelcomePage(y) {
    const url = `${window.location.origin}/welcome/yuvak/${y.uuid}`;
    window.open(url, "_blank");
  }
  copyWelcomeLink(y) {
    const url = `${window.location.origin}/welcome/yuvak/${y.uuid}`;
    navigator.clipboard.writeText(url).then(() => {
      this.toast.success("Welcome link copied!");
    });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YuvakListComponent, selectors: [["app-yuvak-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 21, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "saffron"], [1, "pi", "pi-user"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge"], ["class", "hero-right", 4, "ngIf"], [1, "table-card"], [1, "toolbar"], [1, "toolbar-left"], [1, "search-wrap"], [1, "pi", "pi-search", "sw-icon"], ["pInputText", "", "placeholder", "Search name, mobile, ID\u2026", 1, "sw-input", 3, "ngModelChange", "ngModel"], [1, "filter-wrap"], [1, "pi", "pi-map-marker", "fw-icon"], ["optionLabel", "name", "optionValue", "id", "placeholder", "All Xetra", "styleClass", "fw-dropdown", 3, "ngModelChange", "options", "ngModel", "showClear"], [1, "pi", "pi-building", "fw-icon"], ["optionLabel", "name", "optionValue", "id", "placeholder", "All Mandal", "styleClass", "fw-dropdown", 3, "ngModelChange", "options", "ngModel", "showClear"], ["currentPageReportTemplate", "{first}-{last} of {totalRecords}", "styleClass", "p-datatable-striped", 3, "onLazyLoad", "value", "lazy", "totalRecords", "rows", "paginator", "loading", "tableStyle", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "hero-right"], ["label", "Add Yuvak", "icon", "pi pi-plus", 3, "click"], [2, "width", "6rem"], [2, "width", "10rem"], [1, "id-badge"], [2, "font-weight", "500"], ["icon", "pi pi-qrcode", "size", "small", "pTooltip", "Copy Welcome Link", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "rounded", "text", "click", 4, "ngIf"], ["icon", "pi pi-send", "severity", "info", "size", "small", "pTooltip", "Send Welcome SMS", "tooltipPosition", "top", 3, "click", "rounded", "text", "loading"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "rounded", "text", "click", 4, "ngIf"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["colspan", "8", 2, "text-align", "center", "padding", "3rem", "color", "#9CA3AF"], [1, "pi", "pi-user", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"]], template: function YuvakListComponent_Template(rf, ctx) {
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
      \u0275\u0275template(11, YuvakListComponent_div_11_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11);
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275elementStart(17, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function YuvakListComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function YuvakListComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275elementStart(20, "p-dropdown", 16);
      \u0275\u0275twoWayListener("ngModelChange", function YuvakListComponent_Template_p_dropdown_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.xetra_id, $event) || (ctx.filters.xetra_id = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function YuvakListComponent_Template_p_dropdown_ngModelChange_20_listener() {
        return ctx.loadData(1);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275elementStart(23, "p-dropdown", 18);
      \u0275\u0275twoWayListener("ngModelChange", function YuvakListComponent_Template_p_dropdown_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.mandal_id, $event) || (ctx.filters.mandal_id = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function YuvakListComponent_Template_p_dropdown_ngModelChange_23_listener() {
        return ctx.loadData(1);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "p-table", 19);
      \u0275\u0275listener("onLazyLoad", function YuvakListComponent_Template_p_table_onLazyLoad_24_listener($event) {
        return ctx.onLazyLoad($event);
      });
      \u0275\u0275template(25, YuvakListComponent_ng_template_25_Template, 17, 0, "ng-template", 20)(26, YuvakListComponent_ng_template_26_Template, 22, 19, "ng-template", 21)(27, YuvakListComponent_ng_template_27_Template, 4, 0, "ng-template", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "p-confirmDialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.total(), " Yuvak");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canCreate);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275property("options", ctx.xetras);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.xetra_id);
      \u0275\u0275property("showClear", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("options", ctx.mandals);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.mandal_id);
      \u0275\u0275property("showClear", true);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.yuvaks())("lazy", true)("totalRecords", ctx.total())("rows", ctx.perPage)("paginator", true)("loading", ctx.loading)("tableStyle", \u0275\u0275pureFunction0(19, _c0))("showCurrentPageReport", true);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c1));
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, TitleCasePipe, TableModule, Table, PrimeTemplate, ButtonModule, Button, InputTextModule, InputText, DropdownModule, Dropdown, ConfirmDialogModule, ConfirmDialog, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.id-badge[_ngcontent-%COMP%] {\n  background: #FFF0E0;\n  color: #CC5500;\n  padding: 2px 8px;\n  border-radius: 5px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n}\n/*# sourceMappingURL=yuvak-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YuvakListComponent, { className: "YuvakListComponent" });
})();
export {
  YuvakListComponent
};
//# sourceMappingURL=chunk-HFQETLUA.js.map
