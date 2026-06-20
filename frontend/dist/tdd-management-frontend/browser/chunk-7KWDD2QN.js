import {
  Tag,
  TagModule
} from "./chunk-5WJ72OSF.js";
import {
  SelectButton,
  SelectButtonModule,
  Table,
  TableModule
} from "./chunk-B3OHXLFG.js";
import "./chunk-AG2T7FMP.js";
import "./chunk-KOUEGY3L.js";
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
import "./chunk-5IG7FWVL.js";
import "./chunk-NTE4MRI5.js";
import {
  Button,
  ButtonModule
} from "./chunk-6IMXQGBZ.js";
import "./chunk-UQII2K3B.js";
import {
  PrimeTemplate
} from "./chunk-CJX7BHHU.js";
import {
  ApiService
} from "./chunk-IFU6TU4Y.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PUKDGUBM.js";

// src/app/admin/attendance/attendance.component.ts
var _c0 = () => ({ width: "130px" });
function AttendanceComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementStart(2, "span")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " marked present");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lastScanned);
  }
}
function AttendanceComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 41);
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "code", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "p-tag", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.member_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.member_code);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", a_r2.member_type)("severity", a_r2.member_type === "yuvak" ? "success" : "info");
  }
}
function AttendanceComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2, "No records for this date");
    \u0275\u0275elementEnd()();
  }
}
var AttendanceComponent = class _AttendanceComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  records = signal([]);
  summary = signal({ yuvak: 0, yuvati: 0 });
  scanDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  scanInput = "";
  memberType = "yuvak";
  filterDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  filterType = "";
  marking = false;
  lastScanned = "";
  typeOptions = [{ label: "Yuvak", value: "yuvak" }, { label: "Yuvati", value: "yuvati" }];
  filterOptions = [{ label: "All", value: "" }, { label: "Yuvak", value: "yuvak" }, { label: "Yuvati", value: "yuvati" }];
  ngOnInit() {
    this.loadAttendance();
  }
  loadAttendance() {
    const params = { date: this.filterDate };
    if (this.filterType)
      params.member_type = this.filterType;
    this.api.get("attendance", params).subscribe((res) => {
      if (res.success) {
        this.records.set(res.data.data || []);
        this.summary.set({ yuvak: res.data.yuvak_count, yuvati: res.data.yuvati_count });
      }
    });
  }
  markByUuid() {
    if (!this.scanInput.trim())
      return;
    this.marking = true;
    this.api.post("attendance/scan", { uuid: this.scanInput.trim(), member_type: this.memberType, date: this.scanDate }).subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success("Attendance marked!");
          this.lastScanned = this.scanInput;
          this.scanInput = "";
          this.loadAttendance();
        }
        this.marking = false;
      },
      error: (err) => {
        this.marking = false;
        this.toast.error(err.error?.message || "Could not mark attendance");
      }
    });
  }
  static \u0275fac = function AttendanceComponent_Factory(t) {
    return new (t || _AttendanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceComponent, selectors: [["app-attendance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 18, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "green"], [1, "pi", "pi-check-square"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge", 2, "background", "linear-gradient(135deg,#D1FAE5,#A7F3D0)", "color", "#065F46"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "16px", "margin-bottom", "24px"], [2, "background", "#fff", "border-radius", "12px", "padding", "20px", "box-shadow", "0 1px 4px rgba(0,0,0,0.07)", "border-left", "4px solid #FF8F00", "display", "flex", "align-items", "center", "gap", "16px"], [2, "width", "48px", "height", "48px", "border-radius", "12px", "background", "linear-gradient(135deg,#FF8F00,#FFA000)", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "pi", "pi-user", 2, "color", "#fff", "font-size", "1.2rem"], [2, "font-size", "1.8rem", "font-weight", "700", "color", "#1F2937", "line-height", "1"], [2, "font-size", "0.83rem", "color", "#6B7280", "margin-top", "2px"], [2, "background", "#fff", "border-radius", "12px", "padding", "20px", "box-shadow", "0 1px 4px rgba(0,0,0,0.07)", "border-left", "4px solid #1E88E5", "display", "flex", "align-items", "center", "gap", "16px"], [2, "width", "48px", "height", "48px", "border-radius", "12px", "background", "linear-gradient(135deg,#1565C0,#1E88E5)", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "pi", "pi-users", 2, "color", "#fff", "font-size", "1.2rem"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "20px"], [1, "table-card"], [2, "font-weight", "600", "color", "#1F2937", "font-size", "1rem", "margin-bottom", "16px", "display", "flex", "align-items", "center", "gap", "8px"], [1, "pi", "pi-qrcode", 2, "color", "#3949AB"], [1, "field", 2, "margin-bottom", "14px"], [2, "font-size", "0.83rem", "color", "#6B7280", "margin-bottom", "6px", "display", "block"], ["pInputText", "", "type", "date", 2, "width", "100%", "height", "40px", 3, "ngModelChange", "ngModel"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "options", "ngModel"], [2, "background", "#F0F2F5", "border-radius", "10px", "padding", "24px", "text-align", "center", "margin-bottom", "16px"], [1, "pi", "pi-qrcode", 2, "font-size", "3rem", "color", "#9CA3AF", "display", "block", "margin-bottom", "8px"], [2, "color", "#6B7280", "font-size", "0.85rem", "margin", "0"], [1, "field"], [2, "display", "flex", "gap", "8px"], ["pInputText", "", "placeholder", "Scan or type UUID...", 2, "flex", "1", "height", "40px", 3, "ngModelChange", "keydown.enter", "ngModel"], ["icon", "pi pi-check", 3, "click", "disabled", "loading"], ["style", "background:#ECFDF5;border-radius:8px;padding:12px;font-size:0.88rem;margin-top:12px;display:flex;align-items:center;gap:8px", 4, "ngIf"], [1, "pi", "pi-list", 2, "color", "#3949AB"], [2, "display", "flex", "gap", "10px", "margin-bottom", "14px"], ["pInputText", "", "type", "date", 2, "flex", "1", "height", "40px", 3, "ngModelChange", "change", "ngModel"], ["scrollHeight", "320px", "styleClass", "p-datatable-sm p-datatable-striped", 3, "value", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "background", "#ECFDF5", "border-radius", "8px", "padding", "12px", "font-size", "0.88rem", "margin-top", "12px", "display", "flex", "align-items", "center", "gap", "8px"], [1, "pi", "pi-check-circle", 2, "color", "#10B981", "font-size", "1.1rem"], [2, "width", "80px"], [2, "font-weight", "500"], [2, "font-size", "0.78rem", "background", "#FFF0E0", "padding", "2px 6px", "border-radius", "4px"], [3, "value", "severity"], ["colspan", "3", 2, "text-align", "center", "padding", "30px", "color", "#9CA3AF"]], template: function AttendanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Attendance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Mark and review member attendance by QR scan or UUID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div")(16, "div", 11);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275text(19, "Yuvak Present");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
      \u0275\u0275element(22, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "div", 11);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275text(27, "Yuvati Present");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "div", 18);
      \u0275\u0275element(31, "i", 19);
      \u0275\u0275text(32, " Mark Attendance ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 20)(34, "label", 21);
      \u0275\u0275text(35, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.scanDate, $event) || (ctx.scanDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 20)(38, "label", 21);
      \u0275\u0275text(39, "Member Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p-selectButton", 23);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_p_selectButton_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.memberType, $event) || (ctx.memberType = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 24);
      \u0275\u0275element(42, "i", 25);
      \u0275\u0275elementStart(43, "p", 26);
      \u0275\u0275text(44, "QR scan or enter UUID below");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 27)(46, "label", 21);
      \u0275\u0275text(47, "UUID / Member Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 28)(49, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.scanInput, $event) || (ctx.scanInput = $event);
        return $event;
      });
      \u0275\u0275listener("keydown.enter", function AttendanceComponent_Template_input_keydown_enter_49_listener() {
        return ctx.markByUuid();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p-button", 30);
      \u0275\u0275listener("click", function AttendanceComponent_Template_p_button_click_50_listener() {
        return ctx.markByUuid();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(51, AttendanceComponent_div_51_Template, 6, 1, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 17)(53, "div", 18);
      \u0275\u0275element(54, "i", 32);
      \u0275\u0275text(55, " Attendance List ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 33)(57, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_57_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterDate, $event) || (ctx.filterDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AttendanceComponent_Template_input_change_57_listener() {
        return ctx.loadAttendance();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p-dropdown", 23);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_p_dropdown_ngModelChange_58_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AttendanceComponent_Template_p_dropdown_ngModelChange_58_listener() {
        return ctx.loadAttendance();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "p-table", 35);
      \u0275\u0275template(60, AttendanceComponent_ng_template_60_Template, 7, 0, "ng-template", 36)(61, AttendanceComponent_ng_template_61_Template, 8, 4, "ng-template", 37)(62, AttendanceComponent_ng_template_62_Template, 3, 0, "ng-template", 38);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.summary().yuvak + ctx.summary().yuvati, " Present Today ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.summary().yuvak);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.summary().yuvati);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.scanDate);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.typeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.memberType);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.scanInput);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.scanInput)("loading", ctx.marking);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastScanned);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDate);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(17, _c0));
      \u0275\u0275property("options", ctx.filterOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.records())("scrollable", true);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, TableModule, Table, PrimeTemplate, ButtonModule, Button, InputTextModule, InputText, DropdownModule, Dropdown, TagModule, Tag, SelectButtonModule, SelectButton], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=attendance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceComponent, { className: "AttendanceComponent" });
})();
export {
  AttendanceComponent
};
//# sourceMappingURL=chunk-7KWDD2QN.js.map
