import {
  Html5Qrcode
} from "./chunk-BPRBJWX5.js";
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
import {
  Button,
  ButtonModule
} from "./chunk-EWFPHMRU.js";
import "./chunk-7QANY5TG.js";
import {
  ApiService
} from "./chunk-FA5V7IHE.js";
import {
  NgIf,
  TitleCasePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2TIVPBG5.js";

// src/app/admin/attendance/take-attendance.component.ts
function TakeAttendanceComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Starting camera\u2026");
    \u0275\u0275elementEnd()();
  }
}
function TakeAttendanceComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Point camera at QR code");
    \u0275\u0275elementEnd()();
  }
}
function TakeAttendanceComponent_div_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275text(4, "Attendance Marked!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32)(8, "span", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 34);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 35);
    \u0275\u0275element(14, "i", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.scanResult().data) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.scanResult().data) == null ? null : tmp_3_0.member_code);
    \u0275\u0275advance();
    \u0275\u0275classProp("saffron", ((tmp_4_0 = ctx_r0.scanResult().data) == null ? null : tmp_4_0.member_type) === "yuvak")("blue", ((tmp_5_0 = ctx_r0.scanResult().data) == null ? null : tmp_5_0.member_type) === "yuvati");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, (tmp_6_0 = ctx_r0.scanResult().data) == null ? null : tmp_6_0.member_type), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r0.scanResult().data) == null ? null : tmp_7_0.attendance_time, "");
  }
}
function TakeAttendanceComponent_div_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275text(4, "Already Marked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32)(8, "span", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 35);
    \u0275\u0275element(11, "i", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.scanResult().data) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.scanResult().data) == null ? null : tmp_3_0.member_code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r0.scanResult().data) == null ? null : tmp_4_0.attendance_time, "");
  }
}
function TakeAttendanceComponent_div_20_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275text(4, "Invalid QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6, "Not recognised. Try again.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function TakeAttendanceComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, TakeAttendanceComponent_div_20_ng_container_1_Template, 16, 10, "ng-container", 27)(2, TakeAttendanceComponent_div_20_ng_container_2_Template, 13, 3, "ng-container", 27)(3, TakeAttendanceComponent_div_20_ng_container_3_Template, 7, 0, "ng-container", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("res-success", ctx_r0.scanResult().type === "success")("res-duplicate", ctx_r0.scanResult().type === "duplicate")("res-invalid", ctx_r0.scanResult().type === "invalid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.scanResult().type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.scanResult().type === "duplicate");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.scanResult().type === "invalid");
  }
}
function TakeAttendanceComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function TakeAttendanceComponent_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startScanner());
    });
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, " Start Camera ");
    \u0275\u0275elementEnd();
  }
}
var TakeAttendanceComponent = class _TakeAttendanceComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  today = _TakeAttendanceComponent.localDate();
  scanResult = signal(null);
  scannerActive = false;
  scannerLoading = false;
  scanDate = this.today;
  scanInput = "";
  static localDate(d = /* @__PURE__ */ new Date()) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  marking = false;
  todayCount = signal({ yuvak: 0, yuvati: 0, total: 0 });
  facingMode = "environment";
  qr = null;
  processingQr = false;
  resultTimer = null;
  ngOnInit() {
    this.loadTodayCount();
    setTimeout(() => this.startScanner(), 400);
  }
  ngOnDestroy() {
    if (this.resultTimer)
      clearTimeout(this.resultTimer);
    this.stopScanner();
  }
  startScanner() {
    if (this.scannerActive)
      return;
    this.scannerLoading = true;
    this.qr = new Html5Qrcode("ta-qr-region");
    this.qr.start({ facingMode: this.facingMode }, { fps: 12, qrbox: { width: 240, height: 240 } }, (decoded) => this.onQrDecoded(decoded), () => {
    }).then(() => {
      this.scannerActive = true;
      this.scannerLoading = false;
    }).catch(() => {
      this.scannerLoading = false;
      this.toast.error("Camera not accessible. Use manual entry below.");
    });
  }
  stopScanner() {
    if (this.qr && this.scannerActive) {
      this.qr.stop().catch(() => {
      });
      this.scannerActive = false;
    }
  }
  toggleCamera() {
    this.stopScanner();
    this.facingMode = this.facingMode === "environment" ? "user" : "environment";
    setTimeout(() => this.startScanner(), 300);
  }
  onQrDecoded(code) {
    if (this.processingQr)
      return;
    this.processingQr = true;
    this.callScanApi(code);
  }
  markByUuid() {
    if (!this.scanInput.trim() || this.marking)
      return;
    this.marking = true;
    this.callScanApi(this.scanInput.trim());
  }
  callScanApi(identifier) {
    this.api.post("attendance/scan", { uuid: identifier, date: this.scanDate }).subscribe({
      next: (res) => {
        if (res["type"] === "success")
          this.loadTodayCount();
        if (this.marking) {
          this.marking = false;
          this.scanInput = "";
        }
        this.showScanResult({ type: res["type"] ?? "invalid", message: res["message"] ?? "", data: res["data"] });
      },
      error: () => {
        if (this.marking)
          this.marking = false;
        this.showScanResult({ type: "invalid", message: "Invalid QR Code" });
      }
    });
  }
  showScanResult(result) {
    if (this.resultTimer)
      return;
    this.scanResult.set(result);
    this.resultTimer = setTimeout(() => {
      this.scanResult.set(null);
      this.resultTimer = null;
      this.processingQr = false;
    }, 3e3);
  }
  loadTodayCount() {
    this.api.get("attendance/today").subscribe((res) => {
      if (res.success)
        this.todayCount.set({ yuvak: res.data.yuvak, yuvati: res.data.yuvati, total: res.data.total ?? res.data.yuvak + res.data.yuvati });
    });
  }
  static \u0275fac = function TakeAttendanceComponent_Factory(t) {
    return new (t || _TakeAttendanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TakeAttendanceComponent, selectors: [["app-take-attendance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 9, consts: [[1, "module-hero"], [1, "ta-layout"], [1, "table-card", "scanner-card"], [1, "sc-header"], [1, "sc-header-left"], [1, "pi", "pi-qrcode", "sc-icon"], [1, "sc-header-right"], ["type", "button", "title", "Flip Camera", 1, "flip-btn", 3, "click"], [1, "pi", "pi-sync"], [1, "field", "scan-date-row"], ["pInputText", "", "type", "date", 3, "ngModelChange", "ngModel", "max"], [1, "cam-wrap"], ["class", "cam-loading", 4, "ngIf"], ["class", "cam-hint", 4, "ngIf"], ["id", "ta-qr-region"], ["class", "result-overlay", 3, "res-success", "res-duplicate", "res-invalid", 4, "ngIf"], ["type", "button", "class", "start-cam-btn", 3, "click", 4, "ngIf"], [1, "or-divider"], [1, "field"], [2, "display", "flex", "gap", "8px"], ["pInputText", "", "placeholder", "e.g. TTH01-0001 or UUID", 2, "flex", "1", 3, "ngModelChange", "keydown.enter", "ngModel"], ["icon", "pi pi-check", "pTooltip", "Mark Attendance", 3, "click", "disabled", "loading"], [1, "cam-loading"], [1, "pi", "pi-spin", "pi-spinner"], [1, "cam-hint"], [1, "pi", "pi-qrcode"], [1, "result-overlay"], [4, "ngIf"], [1, "res-icon-ring", "success"], [1, "pi", "pi-check-circle"], [1, "res-status"], [1, "res-name"], [1, "res-badges"], [1, "res-badge", "id"], [1, "res-badge", "type"], [1, "res-time"], [1, "pi", "pi-clock"], [1, "res-icon-ring", "duplicate"], [1, "res-icon-ring", "invalid"], [1, "pi", "pi-times-circle"], [1, "res-sub"], ["type", "button", 1, "start-cam-btn", 3, "click"], [1, "pi", "pi-camera"]], template: function TakeAttendanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "QR Scanner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function TakeAttendanceComponent_Template_button_click_9_listener() {
        return ctx.toggleCamera();
      });
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11, " Flip ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9)(13, "label");
      \u0275\u0275text(14, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function TakeAttendanceComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.scanDate, $event) || (ctx.scanDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275template(17, TakeAttendanceComponent_div_17_Template, 4, 0, "div", 12)(18, TakeAttendanceComponent_div_18_Template, 4, 0, "div", 13);
      \u0275\u0275element(19, "div", 14);
      \u0275\u0275template(20, TakeAttendanceComponent_div_20_Template, 4, 9, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, TakeAttendanceComponent_button_21_Template, 3, 0, "button", 16);
      \u0275\u0275elementStart(22, "div", 17);
      \u0275\u0275text(23, "\u2014 or enter manually \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 18)(25, "label");
      \u0275\u0275text(26, "UUID or Member ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 19)(28, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function TakeAttendanceComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.scanInput, $event) || (ctx.scanInput = $event);
        return $event;
      });
      \u0275\u0275listener("keydown.enter", function TakeAttendanceComponent_Template_input_keydown_enter_28_listener() {
        return ctx.markByUuid();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p-button", 21);
      \u0275\u0275listener("click", function TakeAttendanceComponent_Template_p_button_click_29_listener() {
        return ctx.markByUuid();
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.scanDate);
      \u0275\u0275property("max", ctx.today);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.scannerLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.scannerActive && !ctx.scanResult());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.scanResult());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.scannerActive && !ctx.scannerLoading);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.scanInput);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.scanInput)("loading", ctx.marking);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, TitleCasePipe, ButtonModule, Button, InputTextModule, InputText, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.ta-layout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 0 32px;\n}\n.scanner-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  padding: 22px;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #F3F4F6;\n}\n.sc-header[_ngcontent-%COMP%]   .sc-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1F2937;\n}\n.sc-header[_ngcontent-%COMP%]   .sc-icon[_ngcontent-%COMP%] {\n  color: #3949AB;\n  font-size: 1.1rem;\n}\n.flip-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 8px;\n  background: #F9FAFB;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.flip-btn[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.flip-btn[_ngcontent-%COMP%]:hover {\n  background: #F3F4F6;\n  color: #374151;\n  border-color: #D1D5DB;\n}\n.scan-date-row[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.scan-date-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.cam-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 360px;\n  background: #0F0F0F;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cam-wrap[_ngcontent-%COMP%]   #ta-qr-region[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.cam-wrap[_ngcontent-%COMP%]   #ta-qr-region[_ngcontent-%COMP%]     video {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: cover;\n}\n.cam-wrap[_ngcontent-%COMP%]   #ta-qr-region[_ngcontent-%COMP%]     canvas {\n  display: none;\n}\n.cam-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: #fff;\n  font-size: 0.9rem;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 5;\n}\n.cam-loading[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #FF8F00;\n}\n.cam-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 0.8rem;\n  padding: 5px 14px;\n  border-radius: 20px;\n  pointer-events: none;\n  z-index: 4;\n  white-space: nowrap;\n}\n.cam-hint[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: #FF8F00;\n  font-size: 0.9rem;\n}\n.result-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px;\n  text-align: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.result-overlay.res-success[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.94);\n}\n.result-overlay.res-duplicate[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.94);\n}\n.result-overlay.res-invalid[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.92);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.res-icon-ring[_ngcontent-%COMP%] {\n  width: 66px;\n  height: 66px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.res-icon-ring[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #fff;\n}\n.res-status[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #fff;\n}\n.res-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #fff;\n}\n.res-sub[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(255, 255, 255, 0.82);\n}\n.res-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n}\n.res-badge[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 3px 11px;\n  font-size: 0.83rem;\n  font-weight: 700;\n  color: #fff;\n}\n.res-badge.id[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.22);\n}\n.res-badge.saffron[_ngcontent-%COMP%] {\n  background: rgba(255, 143, 0, 0.45);\n}\n.res-badge.blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.45);\n}\n.res-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: rgba(255, 255, 255, 0.92);\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.res-time[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.start-cam-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3949AB,\n      #5C6BC0);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 14px;\n  transition: opacity 0.15s;\n}\n.start-cam-btn[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.start-cam-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.or-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9CA3AF;\n  font-size: 0.8rem;\n  margin: 12px 0;\n}\n@media (max-width: 640px) {\n  .ta-layout[_ngcontent-%COMP%] {\n    padding: 0 0 24px;\n  }\n  .scanner-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 16px;\n    border-radius: 12px;\n  }\n  .cam-wrap[_ngcontent-%COMP%] {\n    height: 50vh;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=take-attendance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TakeAttendanceComponent, { className: "TakeAttendanceComponent" });
})();
export {
  TakeAttendanceComponent
};
//# sourceMappingURL=chunk-UCB33SA5.js.map
