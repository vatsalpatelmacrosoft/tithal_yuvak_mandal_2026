import {
  Html5Qrcode
} from "./chunk-BPRBJWX5.js";
import {
  Dialog,
  DialogModule
} from "./chunk-X6U3CKWN.js";
import {
  TagModule
} from "./chunk-7UCXK7G3.js";
import {
  SortIcon,
  SortableColumn,
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
  PrimeTemplate
} from "./chunk-7QANY5TG.js";
import {
  ApiService
} from "./chunk-FA5V7IHE.js";
import "./chunk-B62F6VTM.js";
import "./chunk-VVE7LC7Y.js";
import {
  DatePipe,
  NgIf,
  environment,
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
} from "./chunk-2TIVPBG5.js";

// src/app/admin/attendance/attendance.component.ts
var _c0 = () => ({ width: "360px" });
var _c1 = () => ({ "min-width": "46rem" });
var _c2 = () => ({ "min-width": "38rem" });
var _c3 = () => ({ "min-width": "40rem" });
function AttendanceComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "i", 57);
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
function AttendanceComponent_ng_container_105_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function AttendanceComponent_ng_container_105_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.memberTab = "yuvak");
    });
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2, " Yuvak ");
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.memberTab === "yuvak");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.yuvakRecords.length);
  }
}
function AttendanceComponent_ng_container_105_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AttendanceComponent_ng_container_105_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.memberTab = "yuvati");
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2, " Yuvati ");
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.memberTab === "yuvati");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.yuvatiRecords.length);
  }
}
function AttendanceComponent_ng_container_105_p_table_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Yuvak ID");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_container_105_p_table_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 70);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "code", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, a_r4.attendance_date, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.member_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.member_code);
  }
}
function AttendanceComponent_ng_container_105_p_table_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 73);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275text(3, " No Yuvak attendance for this period ");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_container_105_p_table_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 66);
    \u0275\u0275template(1, AttendanceComponent_ng_container_105_p_table_4_ng_template_1_Template, 7, 0, "ng-template", 67)(2, AttendanceComponent_ng_container_105_p_table_4_ng_template_2_Template, 9, 6, "ng-template", 68)(3, AttendanceComponent_ng_container_105_p_table_4_ng_template_3_Template, 4, 0, "ng-template", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.yuvakRecords)("paginator", true)("rows", 20)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(5, _c1));
  }
}
function AttendanceComponent_ng_container_105_p_table_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Yuvati ID");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_container_105_p_table_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 70);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "code", 75);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, a_r5.attendance_date, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.member_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.member_code);
  }
}
function AttendanceComponent_ng_container_105_p_table_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 73);
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275text(3, " No Yuvati attendance for this period ");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_container_105_p_table_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 66);
    \u0275\u0275template(1, AttendanceComponent_ng_container_105_p_table_5_ng_template_1_Template, 7, 0, "ng-template", 67)(2, AttendanceComponent_ng_container_105_p_table_5_ng_template_2_Template, 9, 6, "ng-template", 68)(3, AttendanceComponent_ng_container_105_p_table_5_ng_template_3_Template, 4, 0, "ng-template", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.yuvatiRecords)("paginator", true)("rows", 20)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(5, _c1));
  }
}
function AttendanceComponent_ng_container_105_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275text(2, " You do not have permission to view attendance records. ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275template(2, AttendanceComponent_ng_container_105_button_2_Template, 5, 3, "button", 59)(3, AttendanceComponent_ng_container_105_button_3_Template, 5, 3, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AttendanceComponent_ng_container_105_p_table_4_Template, 4, 6, "p-table", 61)(5, AttendanceComponent_ng_container_105_p_table_5_Template, 4, 6, "p-table", 61)(6, AttendanceComponent_ng_container_105_div_6_Template, 3, 0, "div", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canViewYuvak);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canViewYuvati);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.memberTab === "yuvak" && ctx_r0.canViewYuvak);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.memberTab === "yuvati" && ctx_r0.canViewYuvati);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.canViewYuvak && !ctx_r0.canViewYuvati);
  }
}
function AttendanceComponent_ng_container_106_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function AttendanceComponent_ng_container_106_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nmTab = "yuvak");
    });
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2, " Yuvak ");
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.nmTab === "yuvak");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.yuvakNameWise.length);
  }
}
function AttendanceComponent_ng_container_106_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AttendanceComponent_ng_container_106_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nmTab = "yuvati");
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2, " Yuvati ");
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.nmTab === "yuvati");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.yuvatiNameWise.length);
  }
}
function AttendanceComponent_ng_container_106_p_table_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 84);
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 85);
    \u0275\u0275text(4, "Name ");
    \u0275\u0275element(5, "p-sortIcon", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 87);
    \u0275\u0275text(7, "Yuvak ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 88);
    \u0275\u0275text(9, " Total Present ");
    \u0275\u0275element(10, "p-sortIcon", 89);
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_container_106_p_table_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "code", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 91)(9, "span", 92);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const i_r10 = ctx.rowIndex;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.member_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.member_code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.total_present);
  }
}
function AttendanceComponent_ng_container_106_p_table_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 93);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275text(3, " No Yuvak attendance in this period ");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_container_106_p_table_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 83);
    \u0275\u0275template(1, AttendanceComponent_ng_container_106_p_table_6_ng_template_1_Template, 11, 0, "ng-template", 67)(2, AttendanceComponent_ng_container_106_p_table_6_ng_template_2_Template, 11, 4, "ng-template", 68)(3, AttendanceComponent_ng_container_106_p_table_6_ng_template_3_Template, 4, 0, "ng-template", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.yuvakNameWise)("paginator", true)("rows", 20)("showCurrentPageReport", true)("sortField", "total_present")("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(7, _c2));
  }
}
function AttendanceComponent_ng_container_106_p_table_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 84);
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 85);
    \u0275\u0275text(4, "Name ");
    \u0275\u0275element(5, "p-sortIcon", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 87);
    \u0275\u0275text(7, "Yuvati ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 88);
    \u0275\u0275text(9, " Total Present ");
    \u0275\u0275element(10, "p-sortIcon", 89);
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_container_106_p_table_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "code", 75);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 91)(9, "span", 94);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const i_r12 = ctx.rowIndex;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.member_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.member_code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.total_present);
  }
}
function AttendanceComponent_ng_container_106_p_table_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 93);
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275text(3, " No Yuvati attendance in this period ");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_ng_container_106_p_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 83);
    \u0275\u0275template(1, AttendanceComponent_ng_container_106_p_table_7_ng_template_1_Template, 11, 0, "ng-template", 67)(2, AttendanceComponent_ng_container_106_p_table_7_ng_template_2_Template, 11, 4, "ng-template", 68)(3, AttendanceComponent_ng_container_106_p_table_7_ng_template_3_Template, 4, 0, "ng-template", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.yuvatiNameWise)("paginator", true)("rows", 20)("showCurrentPageReport", true)("sortField", "total_present")("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(7, _c2));
  }
}
function AttendanceComponent_ng_container_106_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275text(2, " You do not have permission to view attendance records. ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 79)(2, "div", 80);
    \u0275\u0275template(3, AttendanceComponent_ng_container_106_button_3_Template, 5, 3, "button", 59)(4, AttendanceComponent_ng_container_106_button_4_Template, 5, 3, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 81);
    \u0275\u0275listener("click", function AttendanceComponent_ng_container_106_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportNameWiseCsv(ctx_r0.nmTab));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AttendanceComponent_ng_container_106_p_table_6_Template, 4, 8, "p-table", 82)(7, AttendanceComponent_ng_container_106_p_table_7_Template, 4, 8, "p-table", 82)(8, AttendanceComponent_ng_container_106_div_8_Template, 3, 0, "div", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.canViewYuvak);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canViewYuvati);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.nmTab === "yuvak" && ctx_r0.canViewYuvak);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.nmTab === "yuvati" && ctx_r0.canViewYuvati);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.canViewYuvak && !ctx_r0.canViewYuvati);
  }
}
function AttendanceComponent_p_table_107_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 96);
    \u0275\u0275text(4, "Yuvak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 96);
    \u0275\u0275text(6, "Yuvati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 96);
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_p_table_107_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 96)(5, "span", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 96)(8, "span", 98);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 96)(11, "span", 99);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, d_r13.attendance_date, "EEE, dd MMM yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r13.yuvak_count);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r13.yuvati_count);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r13.total);
  }
}
function AttendanceComponent_p_table_107_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 93);
    \u0275\u0275element(2, "i", 100);
    \u0275\u0275text(3, " No data for this date range ");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceComponent_p_table_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 95);
    \u0275\u0275template(1, AttendanceComponent_p_table_107_ng_template_1_Template, 9, 0, "ng-template", 67)(2, AttendanceComponent_p_table_107_ng_template_2_Template, 13, 7, "ng-template", 68)(3, AttendanceComponent_p_table_107_ng_template_3_Template, 4, 0, "ng-template", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.dateWise())("paginator", true)("rows", 20)("tableStyle", \u0275\u0275pureFunction0(4, _c3));
  }
}
var AttendanceComponent = class _AttendanceComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  get canViewYuvak() {
    return this.auth.hasPermission("yuvak", "can_view");
  }
  get canViewYuvati() {
    return this.auth.hasPermission("yuvati", "can_view");
  }
  records = signal([]);
  dateWise = signal([]);
  nameWise = signal([]);
  summary = signal({ yuvak: 0, yuvati: 0, total: 0 });
  today = _AttendanceComponent.localDate();
  // Filters
  fromDate = this.today;
  toDate = this.today;
  filterType = "";
  scanDate = this.today;
  static localDate(d = /* @__PURE__ */ new Date()) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  // Manual input
  scanInput = "";
  marking = false;
  lastScanned = "";
  // Main view tab
  activeTab = "list";
  memberTab = "yuvak";
  nmTab = "yuvak";
  // QR dialog scanner
  showScanner = false;
  scannerActive = false;
  qr = null;
  filterOptions = [
    { label: "All Types", value: "" },
    { label: "Yuvak", value: "yuvak" },
    { label: "Yuvati", value: "yuvati" }
  ];
  get yuvakRecords() {
    return this.records().filter((r) => r.member_type === "yuvak");
  }
  get yuvatiRecords() {
    return this.records().filter((r) => r.member_type === "yuvati");
  }
  get yuvakNameWise() {
    return this.nameWise().filter((r) => r.member_type === "yuvak");
  }
  get yuvatiNameWise() {
    return this.nameWise().filter((r) => r.member_type === "yuvati");
  }
  ngOnInit() {
    if (!this.canViewYuvak && this.canViewYuvati) {
      this.memberTab = "yuvati";
      this.nmTab = "yuvati";
    }
    this.load();
  }
  ngOnDestroy() {
    this.stopScanner();
  }
  openScanner() {
    this.showScanner = true;
    setTimeout(() => this.startScanner(), 400);
  }
  startScanner() {
    this.qr = new Html5Qrcode("qr-scan-region");
    this.scannerActive = true;
    this.qr.start({ facingMode: "environment" }, { fps: 12, qrbox: { width: 260, height: 260 } }, (decoded) => {
      this.stopScanner();
      this.showScanner = false;
      this.scanInput = decoded;
      this.markByUuid();
    }, () => {
    }).catch(() => {
      this.toast.error("Camera not accessible. Enter ID manually.");
      this.showScanner = false;
      this.scannerActive = false;
    });
  }
  stopScanner() {
    if (this.qr && this.scannerActive) {
      this.qr.stop().catch(() => {
      });
      this.scannerActive = false;
    }
  }
  onScannerHide() {
    this.stopScanner();
  }
  markByUuid() {
    if (!this.scanInput.trim() || this.marking)
      return;
    this.marking = true;
    this.api.post("attendance/scan", { uuid: this.scanInput.trim(), date: this.scanDate }).subscribe({
      next: (res) => {
        this.marking = false;
        if (res["type"] === "success") {
          const d = res["data"];
          this.toast.success(`Marked: ${d?.name} (${d?.member_code})`);
          this.lastScanned = this.scanInput;
          this.scanInput = "";
          this.load();
        } else if (res["type"] === "duplicate") {
          const d = res["data"];
          this.toast.error(`Already marked: ${d?.name} at ${d?.attendance_time}`);
          this.scanInput = "";
        } else {
          this.toast.error(res["message"] || "Invalid QR Code");
          this.scanInput = "";
        }
      },
      error: (err) => {
        this.marking = false;
        this.toast.error(err.error?.message || "Could not mark attendance");
      }
    });
  }
  load() {
    const params = { from_date: this.fromDate, to_date: this.toDate };
    if (this.filterType)
      params.member_type = this.filterType;
    this.api.get("attendance", params).subscribe((res) => {
      if (res.success) {
        this.records.set(res.data.data || []);
        this.summary.set({
          yuvak: res.data.yuvak_count || 0,
          yuvati: res.data.yuvati_count || 0,
          total: res.data.total || 0
        });
      }
    });
    this.api.get("attendance/date-wise", { from_date: this.fromDate, to_date: this.toDate }).subscribe((res) => {
      if (res.success)
        this.dateWise.set(res.data);
    });
    this.api.get("attendance/name-wise", { from_date: this.fromDate, to_date: this.toDate }).subscribe((res) => {
      if (res.success)
        this.nameWise.set(res.data);
    });
  }
  openDownload(url) {
    const token = localStorage.getItem("tdd_token") || "";
    const sep = url.includes("?") ? "&" : "?";
    const a = document.createElement("a");
    a.href = `${url}${sep}token=${encodeURIComponent(token)}`;
    a.click();
  }
  exportCsv() {
    let url = `${environment.apiUrl}/attendance/export?from_date=${this.fromDate}&to_date=${this.toDate}`;
    if (this.filterType)
      url += `&member_type=${this.filterType}`;
    this.openDownload(url);
  }
  exportNameWiseCsv(memberType) {
    let url = `${environment.apiUrl}/attendance/export-name-wise?from_date=${this.fromDate}&to_date=${this.toDate}`;
    if (memberType)
      url += `&member_type=${memberType}`;
    this.openDownload(url);
  }
  setDatePreset(days) {
    const from = /* @__PURE__ */ new Date();
    from.setDate(from.getDate() - (days - 1));
    this.fromDate = _AttendanceComponent.localDate(from);
    this.toDate = this.today;
    this.load();
  }
  static \u0275fac = function AttendanceComponent_Factory(t) {
    return new (t || _AttendanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceComponent, selectors: [["app-attendance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 113, vars: 36, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "green"], [1, "pi", "pi-check-square"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge"], [1, "att-top"], [1, "table-card", "mark-panel"], [1, "panel-header"], [1, "pi", "pi-qrcode"], [1, "field", 2, "margin-bottom", "14px"], ["pInputText", "", "type", "date", 3, "ngModelChange", "ngModel", "max"], ["type", "button", 1, "camera-scan-btn", 3, "click"], [1, "pi", "pi-camera"], [1, "or-divider"], [1, "field"], [2, "display", "flex", "gap", "8px"], ["pInputText", "", "placeholder", "e.g. TTH01-0001 or UUID", 2, "flex", "1", 3, "ngModelChange", "keydown.enter", "ngModel"], ["icon", "pi pi-check", "pTooltip", "Mark Attendance", 3, "click", "disabled", "loading"], ["class", "last-scanned", 4, "ngIf"], [1, "right-col"], [1, "stat-row"], [1, "att-stat", "saffron"], [1, "att-stat-icon"], [1, "pi", "pi-user"], [1, "att-stat-val"], [1, "att-stat-lbl"], [1, "att-stat", "blue"], [1, "pi", "pi-users"], [1, "att-stat", "green"], [1, "pi", "pi-chart-bar"], [1, "table-card", "filter-panel"], [1, "pi", "pi-filter"], [1, "filter-grid"], [1, "filter-wrap"], [1, "pi", "pi-users", "fw-icon"], ["optionLabel", "label", "optionValue", "value", "styleClass", "fw-dropdown", 3, "ngModelChange", "options", "ngModel"], [1, "preset-row"], [1, "preset-btn", 3, "click"], [1, "action-row"], ["label", "Apply", "icon", "pi pi-search", "styleClass", "w-full", 3, "click"], ["label", "Export CSV", "icon", "pi pi-download", "styleClass", "w-full", 3, "click", "outlined"], [1, "table-card", 2, "margin-top", "20px"], [1, "list-tab-nav"], [1, "list-tab", 3, "click"], [1, "pi", "pi-list"], [1, "tab-count"], [1, "pi", "pi-calendar"], [1, "pi", "pi-id-card"], [4, "ngIf"], ["styleClass", "p-datatable-striped", 3, "value", "paginator", "rows", "tableStyle", 4, "ngIf"], ["header", "Scan QR Code", 3, "visibleChange", "onHide", "visible", "modal", "draggable", "resizable"], [2, "padding", "8px 0"], [2, "font-size", "0.85rem", "color", "#6B7280", "margin", "0 0 14px", "text-align", "center"], ["id", "qr-scan-region", 2, "width", "100%", "border-radius", "10px", "overflow", "hidden"], [1, "last-scanned"], [1, "pi", "pi-check-circle"], [1, "member-tab-nav"], ["class", "member-tab yuvak", 3, "active", "click", 4, "ngIf"], ["class", "member-tab yuvati", 3, "active", "click", 4, "ngIf"], ["currentPageReportTemplate", "{first}-{last} of {totalRecords}", "styleClass", "p-datatable-striped", 3, "value", "paginator", "rows", "showCurrentPageReport", "tableStyle", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "member-tab", "yuvak", 3, "click"], [1, "member-tab-count"], [1, "member-tab", "yuvati", 3, "click"], ["currentPageReportTemplate", "{first}-{last} of {totalRecords}", "styleClass", "p-datatable-striped", 3, "value", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "font-size", "0.85rem", "color", "#6B7280", "white-space", "nowrap"], [2, "font-weight", "500"], [1, "id-badge-saffron"], ["colspan", "3", 1, "empty-state"], [1, "pi", "pi-user", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"], [1, "id-badge-blue"], [1, "pi", "pi-users", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"], [1, "empty-state"], [1, "pi", "pi-lock", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"], [1, "nm-toolbar"], [1, "member-tab-nav", 2, "border-bottom", "none", "padding", "0", "background", "none", "flex", "1"], ["label", "Export CSV", "icon", "pi pi-download", "size", "small", 3, "click", "outlined"], ["currentPageReportTemplate", "{first}-{last} of {totalRecords}", "styleClass", "p-datatable-striped", 3, "value", "paginator", "rows", "showCurrentPageReport", "sortField", "sortOrder", "tableStyle", 4, "ngIf"], ["currentPageReportTemplate", "{first}-{last} of {totalRecords}", "styleClass", "p-datatable-striped", 3, "value", "paginator", "rows", "showCurrentPageReport", "sortField", "sortOrder", "tableStyle"], [2, "width", "3rem"], ["pSortableColumn", "member_name"], ["field", "member_name"], [2, "width", "120px"], ["pSortableColumn", "total_present", 2, "width", "130px", "text-align", "center"], ["field", "total_present"], [2, "color", "#9CA3AF", "font-size", "0.82rem"], [2, "text-align", "center"], [1, "nm-count-badge", "saffron"], ["colspan", "4", 1, "empty-state"], [1, "nm-count-badge", "blue"], ["styleClass", "p-datatable-striped", 3, "value", "paginator", "rows", "tableStyle"], [1, "text-center"], [1, "count-badge", "saffron"], [1, "count-badge", "blue"], [1, "count-badge", "green"], [1, "pi", "pi-calendar", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"]], template: function AttendanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Attendance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Mark and track attendance by QR scan or Member ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275text(15, " Mark Attendance ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "label");
      \u0275\u0275text(18, "Attendance Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.scanDate, $event) || (ctx.scanDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 13);
      \u0275\u0275listener("click", function AttendanceComponent_Template_button_click_20_listener() {
        return ctx.openScanner();
      });
      \u0275\u0275element(21, "i", 14);
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Open Camera to Scan QR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275text(25, "\u2014 or enter manually \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16)(27, "label");
      \u0275\u0275text(28, "UUID or Member ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 17)(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.scanInput, $event) || (ctx.scanInput = $event);
        return $event;
      });
      \u0275\u0275listener("keydown.enter", function AttendanceComponent_Template_input_keydown_enter_30_listener() {
        return ctx.markByUuid();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p-button", 19);
      \u0275\u0275listener("click", function AttendanceComponent_Template_p_button_click_31_listener() {
        return ctx.markByUuid();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(32, AttendanceComponent_div_32_Template, 6, 1, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 21)(34, "div", 22)(35, "div", 23)(36, "div", 24);
      \u0275\u0275element(37, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div")(39, "div", 26);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 27);
      \u0275\u0275text(42, "Yuvak Present");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 28)(44, "div", 24);
      \u0275\u0275element(45, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div")(47, "div", 26);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 27);
      \u0275\u0275text(50, "Yuvati Present");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 30)(52, "div", 24);
      \u0275\u0275element(53, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div")(55, "div", 26);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 27);
      \u0275\u0275text(58, "Total Present");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "div", 32)(60, "div", 9);
      \u0275\u0275element(61, "i", 33);
      \u0275\u0275text(62, " Filter & Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 34)(64, "div", 16)(65, "label");
      \u0275\u0275text(66, "From Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_67_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 16)(69, "label");
      \u0275\u0275text(70, "To Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 16)(73, "label");
      \u0275\u0275text(74, "Member Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 35);
      \u0275\u0275element(76, "i", 36);
      \u0275\u0275elementStart(77, "p-dropdown", 37);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceComponent_Template_p_dropdown_ngModelChange_77_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "div", 38)(79, "button", 39);
      \u0275\u0275listener("click", function AttendanceComponent_Template_button_click_79_listener() {
        return ctx.setDatePreset(1);
      });
      \u0275\u0275text(80, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 39);
      \u0275\u0275listener("click", function AttendanceComponent_Template_button_click_81_listener() {
        return ctx.setDatePreset(7);
      });
      \u0275\u0275text(82, "7 Days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "button", 39);
      \u0275\u0275listener("click", function AttendanceComponent_Template_button_click_83_listener() {
        return ctx.setDatePreset(30);
      });
      \u0275\u0275text(84, "30 Days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 40)(86, "p-button", 41);
      \u0275\u0275listener("click", function AttendanceComponent_Template_p_button_click_86_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p-button", 42);
      \u0275\u0275listener("click", function AttendanceComponent_Template_p_button_click_87_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(88, "div", 43)(89, "div", 44)(90, "button", 45);
      \u0275\u0275listener("click", function AttendanceComponent_Template_button_click_90_listener() {
        return ctx.activeTab = "list";
      });
      \u0275\u0275element(91, "i", 46);
      \u0275\u0275text(92, " Attendance List ");
      \u0275\u0275elementStart(93, "span", 47);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "button", 45);
      \u0275\u0275listener("click", function AttendanceComponent_Template_button_click_95_listener() {
        return ctx.activeTab = "datewise";
      });
      \u0275\u0275element(96, "i", 48);
      \u0275\u0275text(97, " Date-wise ");
      \u0275\u0275elementStart(98, "span", 47);
      \u0275\u0275text(99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "button", 45);
      \u0275\u0275listener("click", function AttendanceComponent_Template_button_click_100_listener() {
        return ctx.activeTab = "namewise";
      });
      \u0275\u0275element(101, "i", 49);
      \u0275\u0275text(102, " Name-wise ");
      \u0275\u0275elementStart(103, "span", 47);
      \u0275\u0275text(104);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(105, AttendanceComponent_ng_container_105_Template, 7, 5, "ng-container", 50)(106, AttendanceComponent_ng_container_106_Template, 9, 6, "ng-container", 50)(107, AttendanceComponent_p_table_107_Template, 4, 5, "p-table", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p-dialog", 52);
      \u0275\u0275twoWayListener("visibleChange", function AttendanceComponent_Template_p_dialog_visibleChange_108_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showScanner, $event) || (ctx.showScanner = $event);
        return $event;
      });
      \u0275\u0275listener("onHide", function AttendanceComponent_Template_p_dialog_onHide_108_listener() {
        return ctx.onScannerHide();
      });
      \u0275\u0275elementStart(109, "div", 53)(110, "p", 54);
      \u0275\u0275text(111, " Point the camera at a member's QR code ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "div", 55);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.summary().total, " Present");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.scanDate);
      \u0275\u0275property("max", ctx.today);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.scanInput);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.scanInput)("loading", ctx.marking);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastScanned);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.summary().yuvak);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.summary().yuvati);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.summary().total);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275property("max", ctx.today);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275property("max", ctx.today);
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.filterOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
      \u0275\u0275advance(10);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "list");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.records().length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "datewise");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.dateWise().length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "namewise");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.nameWise().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "namewise");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "datewise");
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showScanner);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false);
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    NgIf,
    DatePipe,
    TableModule,
    Table,
    PrimeTemplate,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    DropdownModule,
    Dropdown,
    TagModule,
    DialogModule,
    Dialog,
    TooltipModule,
    Tooltip
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.att-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 20px;\n}\n.mark-panel[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #1F2937;\n  margin-bottom: 18px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #F3F4F6;\n}\n.panel-header[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: #3949AB;\n  font-size: 1rem;\n}\n.camera-scan-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #3949AB,\n      #5C6BC0);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  margin-bottom: 4px;\n}\n.camera-scan-btn[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.camera-scan-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.camera-scan-btn[_ngcontent-%COMP%]:active {\n  opacity: 0.78;\n}\n.or-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9CA3AF;\n  font-size: 0.8rem;\n  margin: 12px 0;\n}\n.last-scanned[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #ECFDF5;\n  border-radius: 8px;\n  padding: 11px 14px;\n  font-size: 0.88rem;\n  margin-top: 14px;\n}\n.last-scanned[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: #10B981;\n  font-size: 1.1rem;\n}\n.right-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.stat-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n.att-stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 18px 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n  border-left: 4px solid;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.att-stat.saffron[_ngcontent-%COMP%] {\n  border-color: #FF8F00;\n}\n.att-stat.blue[_ngcontent-%COMP%] {\n  border-color: #1E88E5;\n}\n.att-stat.green[_ngcontent-%COMP%] {\n  border-color: #059669;\n}\n.att-stat[_ngcontent-%COMP%]   .att-stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.att-stat[_ngcontent-%COMP%]   .att-stat-icon[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.att-stat.saffron[_ngcontent-%COMP%]   .att-stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF8F00,\n      #FFA000);\n}\n.att-stat.blue[_ngcontent-%COMP%]   .att-stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1565C0,\n      #1E88E5);\n}\n.att-stat.green[_ngcontent-%COMP%]   .att-stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #047857,\n      #059669);\n}\n.att-stat[_ngcontent-%COMP%]   .att-stat-val[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 700;\n  color: #1F2937;\n  line-height: 1;\n}\n.att-stat[_ngcontent-%COMP%]   .att-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6B7280;\n  margin-top: 3px;\n}\n.filter-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 12px;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 14px;\n}\n.action-row[_ngcontent-%COMP%]     .p-button {\n  flex: 1;\n  justify-content: center;\n}\n.preset-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.preset-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #F3F4F6;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 7px;\n  padding: 7px 0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #374151;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.preset-btn[_ngcontent-%COMP%]:hover {\n  background: #FFF0E0;\n  border-color: #FF8F00;\n  color: #CC5500;\n}\n.list-tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #F3F4F6;\n  padding: 0 4px;\n  background: #FAFBFF;\n}\n.list-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 13px 20px;\n  border: none;\n  background: none;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6B7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.list-tab.active[_ngcontent-%COMP%] {\n  color: #FF6B00;\n  border-bottom-color: #FF6B00;\n}\n.list-tab.active[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: #FF6B00;\n}\n.list-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #374151;\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #6B7280;\n  border-radius: 999px;\n  padding: 1px 8px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.active[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: #FFF0E0;\n  color: #CC5500;\n}\n.member-tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #E5E7EB;\n  background: #F9FAFB;\n  padding: 0 16px;\n}\n.member-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #6B7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.member-tab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.member-tab.yuvak.active[_ngcontent-%COMP%] {\n  color: #CC5500;\n  border-bottom-color: #FF6B00;\n}\n.member-tab.yuvati.active[_ngcontent-%COMP%] {\n  color: #1D4ED8;\n  border-bottom-color: #3B82F6;\n}\n.member-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #374151;\n  background: #F3F4F6;\n}\n.member-tab-count[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 1px 7px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.yuvak[_ngcontent-%COMP%]   .member-tab-count[_ngcontent-%COMP%] {\n  background: #FFF0E0;\n  color: #CC5500;\n}\n.yuvak.active[_ngcontent-%COMP%]   .member-tab-count[_ngcontent-%COMP%] {\n  background: #FF6B00;\n  color: #fff;\n}\n.yuvati[_ngcontent-%COMP%]   .member-tab-count[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D4ED8;\n}\n.yuvati.active[_ngcontent-%COMP%]   .member-tab-count[_ngcontent-%COMP%] {\n  background: #3B82F6;\n  color: #fff;\n}\n.nm-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 16px;\n  border-bottom: 1px solid #E5E7EB;\n  background: #F9FAFB;\n}\n.nm-count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 36px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.nm-count-badge.saffron[_ngcontent-%COMP%] {\n  background: #FFF0E0;\n  color: #CC5500;\n}\n.nm-count-badge.blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D4ED8;\n}\n.id-badge-saffron[_ngcontent-%COMP%] {\n  background: #FFF0E0;\n  color: #CC5500;\n  padding: 2px 8px;\n  border-radius: 5px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.id-badge-blue[_ngcontent-%COMP%] {\n  background: #E0E7FF;\n  color: #3730A3;\n  padding: 2px 8px;\n  border-radius: 5px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.count-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.count-badge.saffron[_ngcontent-%COMP%] {\n  background: #FFF0E0;\n  color: #CC5500;\n}\n.count-badge.blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D4ED8;\n}\n.count-badge.green[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #9CA3AF;\n}\n@media (max-width: 900px) {\n  .att-top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .filter-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .stat-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filter-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=attendance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceComponent, { className: "AttendanceComponent" });
})();
export {
  AttendanceComponent
};
//# sourceMappingURL=chunk-OBAYDQE6.js.map
