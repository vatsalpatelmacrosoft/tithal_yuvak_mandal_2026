import {
  ApiService
} from "./chunk-IFU6TU4Y.js";
import {
  RouterLink
} from "./chunk-NESC47WB.js";
import "./chunk-RZOKDKRV.js";
import {
  NgForOf,
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
  ɵɵproperty,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PUKDGUBM.js";

// src/app/admin/dashboard/dashboard.component.ts
function DashboardComponent_a_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25)(1, "div");
    \u0275\u0275element(2, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", q_r1.path);
    \u0275\u0275advance();
    \u0275\u0275styleMap("width:44px;height:44px;border-radius:12px;" + q_r1.iconStyle + ";display:flex;align-items:center;justify-content:center");
    \u0275\u0275advance();
    \u0275\u0275classMap("pi " + q_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r1.label);
  }
}
var DashboardComponent = class _DashboardComponent {
  api = inject(ApiService);
  stats = signal(null);
  quickLinks = [
    { label: "Yuvak", path: "/admin/yuvak", icon: "pi-user", iconStyle: "background:linear-gradient(135deg,#FF6B00,#FF8C38)" },
    { label: "Yuvati", path: "/admin/yuvati", icon: "pi-users", iconStyle: "background:linear-gradient(135deg,#1A237E,#3949AB)" },
    { label: "Attendance", path: "/admin/attendance", icon: "pi-check-square", iconStyle: "background:linear-gradient(135deg,#059669,#10B981)" },
    { label: "Shibir", path: "/admin/shibir", icon: "pi-calendar", iconStyle: "background:linear-gradient(135deg,#D97706,#F59E0B)" },
    { label: "Quiz", path: "/admin/quiz", icon: "pi-question-circle", iconStyle: "background:linear-gradient(135deg,#BE123C,#F43F5E)" },
    { label: "Xetra", path: "/admin/xetra", icon: "pi-map", iconStyle: "background:linear-gradient(135deg,#059669,#10B981)" },
    { label: "Mandal", path: "/admin/mandal", icon: "pi-home", iconStyle: "background:linear-gradient(135deg,#4338CA,#6366F1)" },
    { label: "Users", path: "/admin/users", icon: "pi-cog", iconStyle: "background:linear-gradient(135deg,#0D9488,#14B8A6)" }
  ];
  ngOnInit() {
    this.api.get("dashboard").subscribe((res) => {
      if (res.success)
        this.stats.set(res.data);
    });
  }
  static \u0275fac = function DashboardComponent_Factory(t) {
    return new (t || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 5, consts: [[2, "background", "linear-gradient(135deg,#1A237E,#3949AB,#FF6B00)", "border-radius", "14px", "padding", "28px 30px", "margin-bottom", "24px", "display", "flex", "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "16px"], [2, "color", "rgba(255,255,255,0.7)", "font-size", "0.85rem", "margin-bottom", "4px"], [2, "color", "#fff", "font-size", "1.5rem", "font-weight", "700", "line-height", "1.2"], [2, "color", "rgba(255,255,255,0.65)", "font-size", "0.88rem", "margin-top", "6px"], [2, "display", "flex", "gap", "10px", "flex-wrap", "wrap"], ["routerLink", "/admin/yuvak/new", 2, "background", "rgba(255,255,255,0.15)", "color", "#fff", "border-radius", "8px", "padding", "9px 16px", "font-size", "0.85rem", "font-weight", "600", "backdrop-filter", "blur(4px)", "border", "1px solid rgba(255,255,255,0.2)", "display", "flex", "align-items", "center", "gap", "6px"], [1, "pi", "pi-user-plus"], ["routerLink", "/admin/attendance", 2, "background", "rgba(255,255,255,0.15)", "color", "#fff", "border-radius", "8px", "padding", "9px 16px", "font-size", "0.85rem", "font-weight", "600", "backdrop-filter", "blur(4px)", "border", "1px solid rgba(255,255,255,0.2)", "display", "flex", "align-items", "center", "gap", "6px"], [1, "pi", "pi-qrcode"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fill,minmax(200px,1fr))", "gap", "16px", "margin-bottom", "24px"], [1, "dash-stat", 2, "border-left-color", "#FF6B00"], [1, "dash-stat-icon", 2, "background", "linear-gradient(135deg,#FF6B00,#FF8C38)"], [1, "pi", "pi-user"], [1, "dash-stat-val"], [1, "dash-stat-lbl"], [1, "dash-stat", 2, "border-left-color", "#3949AB"], [1, "dash-stat-icon", 2, "background", "linear-gradient(135deg,#1A237E,#3949AB)"], [1, "pi", "pi-users"], [1, "dash-stat", 2, "border-left-color", "#059669"], [1, "dash-stat-icon", 2, "background", "linear-gradient(135deg,#059669,#10B981)"], [1, "pi", "pi-check-circle"], [1, "dash-stat", 2, "border-left-color", "#D97706"], [1, "dash-stat-icon", 2, "background", "linear-gradient(135deg,#D97706,#F59E0B)"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fill,minmax(160px,1fr))", "gap", "14px"], ["style", "background:#fff;border-radius:12px;padding:20px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.07);text-align:center;transition:all 0.2s;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none", "onmouseover", "this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.12)'", "onmouseout", "this.style.transform='';this.style.boxShadow='0 1px 4px rgba(0,0,0,0.07)'", 3, "routerLink", 4, "ngFor", "ngForOf"], ["onmouseover", "this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.12)'", "onmouseout", "this.style.transform='';this.style.boxShadow='0 1px 4px rgba(0,0,0,0.07)'", 2, "background", "#fff", "border-radius", "12px", "padding", "20px 16px", "box-shadow", "0 1px 4px rgba(0,0,0,0.07)", "text-align", "center", "transition", "all 0.2s", "display", "flex", "flex-direction", "column", "align-items", "center", "gap", "10px", "text-decoration", "none", 3, "routerLink"], [2, "color", "#fff", "font-size", "18px"], [2, "font-size", "0.85rem", "font-weight", "600", "color", "#374151"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1);
      \u0275\u0275text(3, "Good day, Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275text(5, "Welcome to Yuvasabha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275text(7, "TDD Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "a", 5);
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275text(11, " Add Yuvak ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, " Attendance ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275text(22, "Total Yuvak");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 15)(24, "div", 16);
      \u0275\u0275element(25, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 13);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 14);
      \u0275\u0275text(29, "Total Yuvati");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 19);
      \u0275\u0275element(32, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 13);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 14);
      \u0275\u0275text(36, "Yuvak Present Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 21)(38, "div", 22);
      \u0275\u0275element(39, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 13);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 14);
      \u0275\u0275text(43, "Yuvati Present Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 23);
      \u0275\u0275template(45, DashboardComponent_a_45_Template, 5, 6, "a", 24);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(20);
      \u0275\u0275textInterpolate((tmp_0_0 = (tmp_0_0 = ctx.stats()) == null ? null : tmp_0_0.yuvak_total) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "\u2014");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate((tmp_1_0 = (tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.yuvati_total) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "\u2014");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate((tmp_2_0 = (tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.today_attendance == null ? null : tmp_2_0.today_attendance.yuvak) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate((tmp_3_0 = (tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.today_attendance == null ? null : tmp_3_0.today_attendance.yuvati) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.quickLinks);
    }
  }, dependencies: [NgForOf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-HOWK4QEN.js.map
