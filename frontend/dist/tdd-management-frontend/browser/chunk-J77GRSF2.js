import {
  ApiService
} from "./chunk-IFU6TU4Y.js";
import {
  ActivatedRoute
} from "./chunk-NESC47WB.js";
import "./chunk-RZOKDKRV.js";
import {
  NgIf,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PUKDGUBM.js";

// src/app/public/welcome/welcome.component.ts
function WelcomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3, "\u{1F549}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5, "Tithal Yuvak Mandal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7, "Tithal Mandir Digital");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9)(9, "div", 10);
    \u0275\u0275text(10, "Jai Swaminarayan!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12)(14, "span", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 14);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "span", 16);
    \u0275\u0275text(20, "Xetra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 15)(24, "span", 16);
    \u0275\u0275text(25, "Mandal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 17);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "div", 19);
    \u0275\u0275text(30, "Your Attendance QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "img", 20);
    \u0275\u0275elementStart(32, "div", 21);
    \u0275\u0275text(33, "Show this QR code at the gate for attendance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 22)(35, "span");
    \u0275\u0275text(36, "Save this page or screenshot for future reference");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.member().full_name);
    \u0275\u0275advance();
    \u0275\u0275classProp("yuvak", ctx_r0.member().type === "yuvak")("yuvati", ctx_r0.member().type === "yuvati");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.member().type === "yuvak" ? "Yuvak ID" : "Yuvati ID");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.member().member_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.member().xetra_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.member().mandal_name);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.member().qr_url, \u0275\u0275sanitizeUrl);
  }
}
function WelcomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your profile...");
    \u0275\u0275elementEnd()();
  }
}
function WelcomeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var WelcomeComponent = class _WelcomeComponent {
  route = inject(ActivatedRoute);
  api = inject(ApiService);
  member = signal(null);
  loading = true;
  error = "";
  ngOnInit() {
    const type = this.route.snapshot.paramMap.get("type") || "";
    const uuid = this.route.snapshot.paramMap.get("uuid") || "";
    this.api.publicGet(`welcome/${type}/${uuid}`).subscribe({
      next: (res) => {
        if (res.success)
          this.member.set(res.data);
        else
          this.error = "Member not found.";
        this.loading = false;
      },
      error: () => {
        this.error = "Member not found or link is invalid.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function WelcomeComponent_Factory(t) {
    return new (t || _WelcomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelcomeComponent, selectors: [["app-welcome"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[1, "welcome-page"], ["class", "welcome-card", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "welcome-card"], [1, "welcome-header"], [1, "welcome-logo"], [1, "org-name"], [1, "org-sub"], [1, "welcome-body"], [1, "greeting"], [1, "member-name"], [1, "id-badge"], [1, "id-label"], [1, "id-value"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "qr-section"], [1, "qr-title"], ["alt", "QR Code", 1, "qr-image", 3, "src"], [1, "qr-hint"], [1, "welcome-footer"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "error-icon"]], template: function WelcomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WelcomeComponent_div_1_Template, 37, 10, "div", 1)(2, WelcomeComponent_div_2_Template, 4, 0, "div", 2)(3, WelcomeComponent_div_3_Template, 5, 1, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.member());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
    }
  }, dependencies: [NgIf], styles: ['\n\n.welcome-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #FF8C00 0%,\n      #FF6200 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  font-family: "Segoe UI", sans-serif;\n}\n.welcome-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  max-width: 420px;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.welcome-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF8C00,\n      #FF6200);\n  color: #fff;\n  text-align: center;\n  padding: 32px 24px 28px;\n}\n.welcome-header[_ngcontent-%COMP%]   .welcome-logo[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 8px;\n}\n.welcome-header[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.welcome-header[_ngcontent-%COMP%]   .org-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.85;\n  margin-top: 2px;\n}\n.welcome-body[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n}\n.welcome-body[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6B7280;\n  font-size: 0.9rem;\n  margin-bottom: 4px;\n}\n.welcome-body[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 20px;\n}\n.id-badge[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 12px;\n  padding: 14px 20px;\n  margin-bottom: 20px;\n  gap: 4px;\n}\n.id-badge.yuvak[_ngcontent-%COMP%] {\n  background: #FFF0E0;\n  border: 2px solid #FF8C00;\n}\n.id-badge.yuvati[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  border: 2px solid #6366F1;\n}\n.id-badge[_ngcontent-%COMP%]   .id-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #6B7280;\n}\n.id-badge[_ngcontent-%COMP%]   .id-value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  font-family: "Courier New", monospace;\n  color: #111827;\n  letter-spacing: 2px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #F3F4F6;\n}\n.info-row[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-size: 0.875rem;\n}\n.info-row[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.qr-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.qr-section[_ngcontent-%COMP%]   .qr-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n}\n.qr-section[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 12px;\n  border: 3px solid #E5E7EB;\n  display: block;\n  margin: 0 auto 12px;\n}\n.qr-section[_ngcontent-%COMP%]   .qr-hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #9CA3AF;\n}\n.welcome-footer[_ngcontent-%COMP%] {\n  background: #F9FAFB;\n  border-top: 1px solid #E5E7EB;\n  text-align: center;\n  padding: 14px 24px;\n  font-size: 0.78rem;\n  color: #6B7280;\n}\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.9;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=welcome.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelcomeComponent, { className: "WelcomeComponent" });
})();
export {
  WelcomeComponent
};
//# sourceMappingURL=chunk-J77GRSF2.js.map
