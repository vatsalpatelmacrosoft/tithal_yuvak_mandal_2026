import {
  Toast,
  ToastModule
} from "./chunk-LNCQ4TDH.js";
import {
  AuthService
} from "./chunk-Y6SSSLTD.js";
import "./chunk-7NE63XKE.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-5IG7FWVL.js";
import "./chunk-NTE4MRI5.js";
import {
  ButtonModule
} from "./chunk-6IMXQGBZ.js";
import "./chunk-UQII2K3B.js";
import "./chunk-CJX7BHHU.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-NESC47WB.js";
import "./chunk-RZOKDKRV.js";
import {
  NgForOf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PUKDGUBM.js";

// src/app/admin/layout/layout.component.ts
function LayoutComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r1.path)("pTooltip", ctx_r1.collapsed ? item_r1.label : "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("pi ", item_r1.icon, " nav-icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var MENU_ITEMS = [
  { slug: "dashboard", label: "Dashboard", icon: "pi-th-large", path: "/admin/dashboard" },
  { slug: "yuvak", label: "Yuvak", icon: "pi-user", path: "/admin/yuvak" },
  { slug: "yuvati", label: "Yuvati", icon: "pi-users", path: "/admin/yuvati" },
  { slug: "xetra", label: "Xetra", icon: "pi-map", path: "/admin/xetra" },
  { slug: "mandal", label: "Mandal", icon: "pi-home", path: "/admin/mandal" },
  { slug: "attendance", label: "Attendance", icon: "pi-check-square", path: "/admin/attendance" },
  { slug: "shibir", label: "Shibir", icon: "pi-calendar", path: "/admin/shibir" },
  { slug: "quiz", label: "Quiz", icon: "pi-question-circle", path: "/admin/quiz" },
  { slug: "reports", label: "Reports", icon: "pi-chart-bar", path: "/admin/reports" },
  { slug: "users", label: "Users", icon: "pi-cog", path: "/admin/users" },
  { slug: "roles", label: "Roles", icon: "pi-id-card", path: "/admin/roles" },
  { slug: "settings", label: "Settings", icon: "pi-sliders-h", path: "/admin/settings" }
];
var LayoutComponent = class _LayoutComponent {
  auth = inject(AuthService);
  user = this.auth.currentUser;
  menuItems = MENU_ITEMS;
  collapsed = false;
  get userInitial() {
    const name = this.user()?.name || "";
    return name.charAt(0).toUpperCase() || "A";
  }
  canView(slug) {
    return this.auth.hasPermission(slug, "can_view");
  }
  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
  logout() {
    this.auth.logout();
  }
  static \u0275fac = function LayoutComponent_Factory(t) {
    return new (t || _LayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 7, consts: [[1, "app-shell"], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], [1, "brand-text"], [1, "sidebar-nav"], ["routerLinkActive", "active", "class", "nav-item", "tooltipPosition", "right", 3, "routerLink", "pTooltip", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "user-chip"], [1, "user-avatar"], [1, "user-name"], [1, "main-wrapper"], [1, "top-bar"], [1, "topbar-toggle", 3, "click"], [1, "pi", "pi-bars"], [1, "topbar-right"], [1, "topbar-user"], [1, "topbar-avatar"], [1, "topbar-name"], ["pTooltip", "Logout", "tooltipPosition", "bottom", 1, "topbar-logout", 3, "click"], [1, "pi", "pi-sign-out"], [1, "main-content"], ["position", "bottom-right"], ["routerLinkActive", "active", "tooltipPosition", "right", 1, "nav-item", 3, "routerLink", "pTooltip"], [1, "nav-label"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F549}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Yuvak Mandal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 5);
      \u0275\u0275template(8, LayoutComponent_a_8_Template, 4, 6, "a", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 11)(16, "header", 12)(17, "button", 13);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_17_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "span", 17);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 19);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_25_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(26, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "main", 21);
      \u0275\u0275element(28, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(29, "p-toast", 22);
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_5_0;
      \u0275\u0275classProp("sidebar-collapsed", ctx.collapsed);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.userInitial);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.name);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.userInitial);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((tmp_5_0 = ctx.user()) == null ? null : tmp_5_0.name);
    }
  }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, NgForOf, ButtonModule, TooltipModule, Tooltip, ToastModule, Toast], styles: ["\n\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent" });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=chunk-D2WSFP3C.js.map
