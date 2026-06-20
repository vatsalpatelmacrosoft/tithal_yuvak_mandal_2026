import {
  Tag,
  TagModule
} from "./chunk-7UCXK7G3.js";
import {
  Table,
  TableModule
} from "./chunk-J3THYUN5.js";
import "./chunk-NHVW7JCQ.js";
import "./chunk-ZDB3HVKV.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-JGZM7AHT.js";
import "./chunk-S7HUCEIK.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YPQPAB3Z.js";
import {
  ToastService
} from "./chunk-JX63ECEV.js";
import {
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
import "./chunk-VVE7LC7Y.js";
import {
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  TitleCasePipe,
  environment,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2TIVPBG5.js";

// src/app/admin/reports/reports.component.ts
var _c0 = () => ({ "min-width": "70rem" });
var _c1 = () => ({ "min-width": "60rem" });
var _c2 = () => ["male", "female", "other"];
var _c3 = () => ({ "min-width": "40rem" });
function ReportsComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ReportsComponent_button_10_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab(t_r2.key));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab === t_r2.key);
    \u0275\u0275advance();
    \u0275\u0275classMap("pi " + t_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.label);
  }
}
function ReportsComponent_ng_container_12_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Quiz Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 19);
    \u0275\u0275text(4, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 19);
    \u0275\u0275text(6, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 19);
    \u0275\u0275text(8, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 19);
    \u0275\u0275text(10, "Incomplete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 19);
    \u0275\u0275text(12, "Highest %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 19);
    \u0275\u0275text(14, "Avg %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 19);
    \u0275\u0275text(16, "Lowest %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 19);
    \u0275\u0275text(18, "Pass %");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_12_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-tag", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 19)(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 19)(11, "span", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 19)(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 19);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 19)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 19);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 19);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r5.title || q_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", q_r5.is_active ? "Active" : "Inactive")("severity", q_r5.is_active ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.question_count);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r5.total_participants);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r5.total_completed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r5.total_incomplete);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 11, q_r5.highest_score, "1.1-1"), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 14, q_r5.average_score, "1.1-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 17, q_r5.lowest_score, "1.1-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(28, 20, q_r5.pass_percentage, "1.1-1"), "%");
  }
}
function ReportsComponent_ng_container_12_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "No quiz data available.");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "i", 13);
    \u0275\u0275text(4, " Overall performance across all quizzes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 14);
    \u0275\u0275listener("click", function ReportsComponent_ng_container_12_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.export("quiz-wise"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-table", 15);
    \u0275\u0275template(7, ReportsComponent_ng_container_12_ng_template_7_Template, 19, 0, "ng-template", 16)(8, ReportsComponent_ng_container_12_ng_template_8_Template, 29, 23, "ng-template", 17)(9, ReportsComponent_ng_container_12_ng_template_9_Template, 3, 0, "ng-template", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.quizWise())("loading", ctx_r2.loadingQ)("tableStyle", \u0275\u0275pureFunction0(4, _c0));
  }
}
function ReportsComponent_ng_container_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2, " Select a quiz above to view participant results ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_ng_container_13_p_table_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 34);
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name / ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 19);
    \u0275\u0275text(10, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 19);
    \u0275\u0275text(12, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 19);
    \u0275\u0275text(14, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 19);
    \u0275\u0275text(16, "Correct");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 19);
    \u0275\u0275text(18, "Wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Submitted");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_13_p_table_7_ng_template_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.yuvak_id);
  }
}
function ReportsComponent_ng_container_13_p_table_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ReportsComponent_ng_container_13_p_table_7_ng_template_2_div_6_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-tag", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 19)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 19);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 19)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 40);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 41);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const i_r8 = ctx.rowIndex;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.name || p_r7.yuvak_id || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.yuvak_id && p_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.typeLabel(p_r7.participant_type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, p_r7.gender));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r7.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.total_marks);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("pct-badge " + (+p_r7.percentage >= 40 ? "pass" : "fail"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 15, p_r7.percentage, "1.1-1"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.correct_answers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.incorrect_answers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r7.submitted_at ? \u0275\u0275pipeBind2(27, 18, p_r7.submitted_at, "dd MMM yy, hh:mm a") : "Not submitted", " ");
  }
}
function ReportsComponent_ng_container_13_p_table_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2, "No participants found for this quiz.");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_13_p_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 15);
    \u0275\u0275template(1, ReportsComponent_ng_container_13_p_table_7_ng_template_1_Template, 21, 0, "ng-template", 16)(2, ReportsComponent_ng_container_13_p_table_7_ng_template_2_Template, 28, 21, "ng-template", 17)(3, ReportsComponent_ng_container_13_p_table_7_ng_template_3_Template, 3, 0, "ng-template", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r2.participants())("loading", ctx_r2.loadingP)("tableStyle", \u0275\u0275pureFunction0(3, _c0));
  }
}
function ReportsComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 26);
    \u0275\u0275element(3, "i", 27);
    \u0275\u0275elementStart(4, "p-dropdown", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_ng_container_13_Template_p_dropdown_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedQuizModel, $event) || (ctx_r2.selectedQuizModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function ReportsComponent_ng_container_13_Template_p_dropdown_onChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onQuizSelect($event.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-button", 29);
    \u0275\u0275listener("click", function ReportsComponent_ng_container_13_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.export("participant-wise"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ReportsComponent_ng_container_13_div_6_Template, 3, 0, "div", 30)(7, ReportsComponent_ng_container_13_p_table_7_Template, 4, 4, "p-table", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.quizzes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedQuizModel);
    \u0275\u0275property("showClear", false);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", !ctx_r2.selectedQuiz());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedQuiz());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedQuiz());
  }
}
function ReportsComponent_ng_container_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2, " Select a quiz above to view question analysis ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_ng_container_14_p_table_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 34);
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Correct Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 19);
    \u0275\u0275text(8, "Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 19);
    \u0275\u0275text(10, "Responses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 19);
    \u0275\u0275text(12, "Correct");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 19);
    \u0275\u0275text(14, "Wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 44);
    \u0275\u0275text(16, "Accuracy");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_14_p_table_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 39);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 40);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 19)(17, "div", 47);
    \u0275\u0275element(18, "div", 48);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const q_r10 = ctx.$implicit;
    const i_r11 = ctx.rowIndex;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r10.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r10.correct_answer == null ? null : q_r10.correct_answer.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r10.marks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r10.total_responses);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r10.correct_responses);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r10.incorrect_responses);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", q_r10.accuracy_percentage + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 10, q_r10.accuracy_percentage, "1.1-1"), "%");
  }
}
function ReportsComponent_ng_container_14_p_table_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2, "No question data available.");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_14_p_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 15);
    \u0275\u0275template(1, ReportsComponent_ng_container_14_p_table_7_ng_template_1_Template, 17, 0, "ng-template", 16)(2, ReportsComponent_ng_container_14_p_table_7_ng_template_2_Template, 22, 13, "ng-template", 17)(3, ReportsComponent_ng_container_14_p_table_7_ng_template_3_Template, 3, 0, "ng-template", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r2.questions())("loading", ctx_r2.loadingQs)("tableStyle", \u0275\u0275pureFunction0(3, _c1));
  }
}
function ReportsComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 26);
    \u0275\u0275element(3, "i", 27);
    \u0275\u0275elementStart(4, "p-dropdown", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_ng_container_14_Template_p_dropdown_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedQuizModel, $event) || (ctx_r2.selectedQuizModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function ReportsComponent_ng_container_14_Template_p_dropdown_onChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onQuizSelect($event.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-button", 29);
    \u0275\u0275listener("click", function ReportsComponent_ng_container_14_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.export("question-wise"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ReportsComponent_ng_container_14_div_6_Template, 3, 0, "div", 30)(7, ReportsComponent_ng_container_14_p_table_7_Template, 4, 4, "p-table", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.quizzes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedQuizModel);
    \u0275\u0275property("showClear", false);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", !ctx_r2.selectedQuiz());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedQuiz());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedQuiz());
  }
}
function ReportsComponent_ng_container_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2, " Select a quiz above to view gender-wise breakdown ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_ng_container_15_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "div", 56);
    \u0275\u0275element(3, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 59);
    \u0275\u0275text(7, "Male");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 60)(9, "div", 56);
    \u0275\u0275element(10, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 59);
    \u0275\u0275text(14, "Female");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 61)(16, "div", 56);
    \u0275\u0275element(17, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 58);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 59);
    \u0275\u0275text(21, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 63)(23, "div", 56);
    \u0275\u0275element(24, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 58);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 59);
    \u0275\u0275text(28, "Total");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getGenderCount("male"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.getGenderCount("female"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.getGenderCount("other"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.getGenderCount("male") + ctx_r2.getGenderCount("female") + ctx_r2.getGenderCount("other"));
  }
}
function ReportsComponent_ng_container_15_div_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 19);
    \u0275\u0275text(4, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 19);
    \u0275\u0275text(6, "Highest %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 19);
    \u0275\u0275text(8, "Average %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 19);
    \u0275\u0275text(10, "Lowest %");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_15_div_7_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 19)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 19);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, s_r13.gender));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r13.total_participants);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, s_r13.highest_score, "1.1-1"), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 10, s_r13.average_score, "1.1-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 13, s_r13.lowest_score, "1.1-1"), "%");
  }
}
function ReportsComponent_ng_container_15_div_7_div_6_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name / ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 19);
    \u0275\u0275text(8, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 19);
    \u0275\u0275text(10, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 19);
    \u0275\u0275text(12, "%");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_15_div_7_div_6_div_1_ng_template_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r14.yuvak_id);
  }
}
function ReportsComponent_ng_container_15_div_7_div_6_div_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ReportsComponent_ng_container_15_div_7_div_6_div_1_ng_template_7_div_6_Template, 2, 1, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-tag", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 19)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 19)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const i_r15 = ctx.rowIndex;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r15 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r14.name || p_r14.yuvak_id || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r14.yuvak_id && p_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.typeLabel(p_r14.participant_type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r14.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.total_marks);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("pct-badge " + (+p_r14.percentage >= 40 ? "pass" : "fail"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 9, p_r14.percentage, "1.1-1"), "% ");
  }
}
function ReportsComponent_ng_container_15_div_7_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-table", 68);
    \u0275\u0275template(6, ReportsComponent_ng_container_15_div_7_div_6_div_1_ng_template_6_Template, 13, 0, "ng-template", 16)(7, ReportsComponent_ng_container_15_div_7_div_6_div_1_ng_template_7_Template, 18, 12, "ng-template", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const gender_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, gender_r16), " Participants ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.genderDetails()[gender_r16])("tableStyle", \u0275\u0275pureFunction0(5, _c3));
  }
}
function ReportsComponent_ng_container_15_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ReportsComponent_ng_container_15_div_7_div_6_div_1_Template, 8, 6, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const gender_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.genderDetails()[gender_r16]) == null ? null : tmp_4_0.length);
  }
}
function ReportsComponent_ng_container_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ReportsComponent_ng_container_15_div_7_div_1_Template, 29, 4, "div", 50);
    \u0275\u0275elementStart(2, "div", 51)(3, "p-table", 52);
    \u0275\u0275template(4, ReportsComponent_ng_container_15_div_7_ng_template_4_Template, 11, 0, "ng-template", 16)(5, ReportsComponent_ng_container_15_div_7_ng_template_5_Template, 17, 16, "ng-template", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ReportsComponent_ng_container_15_div_7_div_6_Template, 2, 1, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingG);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.genderSummary())("loading", ctx_r2.loadingG);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c2));
  }
}
function ReportsComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 26);
    \u0275\u0275element(3, "i", 27);
    \u0275\u0275elementStart(4, "p-dropdown", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_ng_container_15_Template_p_dropdown_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedQuizModel, $event) || (ctx_r2.selectedQuizModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function ReportsComponent_ng_container_15_Template_p_dropdown_onChange_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onQuizSelect($event.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-button", 29);
    \u0275\u0275listener("click", function ReportsComponent_ng_container_15_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.export("gender-wise"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ReportsComponent_ng_container_15_div_6_Template, 3, 0, "div", 30)(7, ReportsComponent_ng_container_15_div_7_Template, 7, 5, "div", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.quizzes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedQuizModel);
    \u0275\u0275property("showClear", false);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", !ctx_r2.selectedQuiz());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedQuiz());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedQuiz());
  }
}
var ReportsComponent = class _ReportsComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  activeTab = "quiz-wise";
  tabs = [
    { key: "quiz-wise", label: "Quiz Wise", icon: "pi-list-check" },
    { key: "participant-wise", label: "Participants", icon: "pi-users" },
    { key: "question-wise", label: "Question Analysis", icon: "pi-question-circle" },
    { key: "gender-wise", label: "Gender Breakdown", icon: "pi-chart-pie" }
  ];
  quizzes = signal([]);
  selectedQuiz = signal(null);
  selectedQuizModel = null;
  // two-way binding model for dropdown
  quizWise = signal([]);
  participants = signal([]);
  questions = signal([]);
  genderSummary = signal([]);
  genderDetails = signal({ male: [], female: [], other: [] });
  loadingQ = false;
  loadingP = false;
  loadingQs = false;
  loadingG = false;
  ngOnInit() {
    this.loadQuizList();
    this.loadQuizWise();
  }
  setTab(key) {
    this.activeTab = key;
  }
  loadQuizList() {
    this.api.get("quiz").subscribe((r) => {
      if (r.success) {
        this.quizzes.set(r.data.map((q) => ({ label: q.title || q.name, value: q.uuid })));
      }
    });
  }
  loadQuizWise() {
    this.loadingQ = true;
    this.api.get("reports/quiz-wise").subscribe({
      next: (r) => {
        if (r.success)
          this.quizWise.set(r.data);
        this.loadingQ = false;
      },
      error: () => {
        this.loadingQ = false;
      }
    });
  }
  onQuizSelect(uuid) {
    this.selectedQuiz.set(uuid);
    this.loadParticipants(uuid);
    this.loadQuestions(uuid);
    this.loadGender(uuid);
  }
  loadParticipants(uuid) {
    this.loadingP = true;
    this.api.get(`reports/participant-wise`, { quiz_uuid: uuid }).subscribe({
      next: (r) => {
        if (r.success)
          this.participants.set(r.data);
        this.loadingP = false;
      },
      error: () => {
        this.loadingP = false;
      }
    });
  }
  loadQuestions(uuid) {
    this.loadingQs = true;
    this.api.get(`reports/question-wise`, { quiz_uuid: uuid }).subscribe({
      next: (r) => {
        if (r.success)
          this.questions.set(r.data);
        this.loadingQs = false;
      },
      error: () => {
        this.loadingQs = false;
      }
    });
  }
  loadGender(uuid) {
    this.loadingG = true;
    this.api.get(`reports/gender-wise`, { quiz_uuid: uuid }).subscribe({
      next: (r) => {
        if (r.success) {
          this.genderSummary.set(r.data.summary || []);
          this.genderDetails.set(r.data.details || {});
        }
        this.loadingG = false;
      },
      error: () => {
        this.loadingG = false;
      }
    });
  }
  export(type) {
    const uuid = this.selectedQuiz();
    const token = localStorage.getItem("tdd_token") || "";
    const url = `${environment.apiUrl}/reports/export?type=${type}&quiz_uuid=${uuid || ""}&format=csv&token=${encodeURIComponent(token)}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${type}-report.csv`;
    a.click();
  }
  typeLabel(t) {
    return t === "registered" ? "Registered" : "External";
  }
  getGenderCount(gender) {
    const s = this.genderSummary().find((r) => r.gender === gender);
    return s ? +s.total_participants : 0;
  }
  static \u0275fac = function ReportsComponent_Factory(t) {
    return new (t || _ReportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "teal"], [1, "pi", "pi-chart-bar"], [1, "hero-title"], [1, "hero-subtitle"], [1, "report-tabs"], ["class", "rtab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "table-card", "tab-body"], [4, "ngIf"], [1, "rtab", 3, "click"], [1, "report-toolbar"], [1, "toolbar-info"], [1, "pi", "pi-info-circle", 2, "color", "#6B7280"], ["label", "Export CSV", "icon", "pi pi-download", "size", "small", 3, "click", "outlined"], ["styleClass", "p-datatable-striped", 3, "value", "loading", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "text-center"], [2, "font-weight", "600", "color", "#1F2937"], [3, "value", "severity"], [1, "stat-pill", "blue"], [1, "stat-pill", "green"], [1, "stat-pill", "orange"], ["colspan", "9", 1, "empty-msg"], [1, "filter-wrap", 2, "min-width", "280px"], [1, "pi", "pi-question-circle", "fw-icon"], ["placeholder", "Select a quiz", "styleClass", "fw-dropdown", 3, "ngModelChange", "onChange", "options", "ngModel", "showClear"], ["label", "Export CSV", "icon", "pi pi-download", "size", "small", 3, "click", "outlined", "disabled"], ["class", "no-quiz-hint", 4, "ngIf"], ["styleClass", "p-datatable-striped", 3, "value", "loading", "tableStyle", 4, "ngIf"], [1, "no-quiz-hint"], [1, "pi", "pi-arrow-up"], [2, "width", "3rem"], [2, "color", "#9CA3AF"], [2, "font-weight", "600"], ["style", "font-size:0.8rem;color:#9CA3AF", 4, "ngIf"], ["severity", "secondary", 3, "value"], [1, "text-center", 2, "color", "#10B981", "font-weight", "600"], [1, "text-center", 2, "color", "#EF4444", "font-weight", "600"], [2, "font-size", "0.82rem", "color", "#6B7280"], [2, "font-size", "0.8rem", "color", "#9CA3AF"], ["colspan", "10", 1, "empty-msg"], [1, "text-center", 2, "min-width", "120px"], [2, "max-width", "340px"], [1, "correct-opt"], [1, "acc-bar"], [1, "acc-fill"], ["colspan", "8", 1, "empty-msg"], ["class", "gender-summary", 4, "ngIf"], [2, "margin-bottom", "24px"], ["styleClass", "p-datatable-striped", 3, "value", "loading"], [4, "ngFor", "ngForOf"], [1, "gender-summary"], [1, "gender-card", "male"], [1, "gender-icon-wrap"], [1, "pi", "pi-user"], [1, "gender-count"], [1, "gender-label"], [1, "gender-card", "female"], [1, "gender-card", "other"], [1, "pi", "pi-users"], [1, "gender-card", "total"], [1, "pi", "pi-chart-pie"], ["class", "gender-section", 4, "ngIf"], [1, "gender-section"], [1, "gender-section-title"], ["styleClass", "p-datatable-striped", 3, "value", "tableStyle"], ["style", "font-size:0.78rem;color:#9CA3AF", 4, "ngIf"], [2, "font-size", "0.78rem", "color", "#9CA3AF"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Quiz Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Analytics, participant results and question-wise breakdowns");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275template(10, ReportsComponent_button_10_Template, 4, 5, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275template(12, ReportsComponent_ng_container_12_Template, 10, 5, "ng-container", 9)(13, ReportsComponent_ng_container_13_Template, 8, 7, "ng-container", 9)(14, ReportsComponent_ng_container_14_Template, 8, 7, "ng-container", 9)(15, ReportsComponent_ng_container_15_Template, 8, 7, "ng-container", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "quiz-wise");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "participant-wise");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "question-wise");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "gender-wise");
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    NgForOf,
    NgIf,
    DecimalPipe,
    DatePipe,
    TitleCasePipe,
    ButtonModule,
    Button,
    PrimeTemplate,
    TableModule,
    Table,
    DropdownModule,
    Dropdown,
    TagModule,
    Tag,
    TooltipModule
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.report-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 12px 12px 0 0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n  border-bottom: 2px solid #F3F4F6;\n  overflow: hidden;\n  margin-bottom: 0;\n}\n.rtab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 22px;\n  border: none;\n  background: none;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6B7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  white-space: nowrap;\n}\n.rtab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.rtab.active[_ngcontent-%COMP%] {\n  color: #FF6B00;\n  border-bottom-color: #FF6B00;\n  background: #FFF9F5;\n}\n.rtab.active[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: #FF6B00;\n}\n.rtab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #374151;\n  background: #F9FAFB;\n}\n.tab-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 12px 12px;\n  padding: 20px;\n}\n.report-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #F3F4F6;\n}\n.report-toolbar[_ngcontent-%COMP%]   .filter-wrap[_ngcontent-%COMP%] {\n  min-width: 280px;\n}\n.toolbar-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: #6B7280;\n}\n.no-quiz-hint[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 56px 24px;\n  color: #9CA3AF;\n  font-size: 0.9rem;\n  background: #F9FAFB;\n  border: 2px dashed #E5E7EB;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.no-quiz-hint[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: #C7D2FE;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.empty-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #9CA3AF;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.stat-pill.blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D4ED8;\n}\n.stat-pill.green[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.stat-pill.orange[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n  color: #D97706;\n}\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.pct-badge.pass[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.pct-badge.fail[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.correct-opt[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 32px;\n  height: 28px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  background: #ECFDF5;\n  color: #059669;\n  font-weight: 800;\n  font-size: 0.85rem;\n  padding: 0 6px;\n}\n.acc-bar[_ngcontent-%COMP%] {\n  position: relative;\n  background: #F3F4F6;\n  border-radius: 4px;\n  height: 22px;\n  overflow: hidden;\n  width: 100%;\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.acc-bar[_ngcontent-%COMP%]   .acc-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #6EE7B7,\n      #10B981);\n  transition: width 0.4s;\n  border-radius: 4px;\n}\n.acc-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #1F2937;\n}\n.gender-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 640px) {\n  .gender-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.gender-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 12px;\n  padding: 20px 16px;\n  text-align: center;\n  transition: box-shadow 0.2s;\n}\n.gender-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.gender-card.male[_ngcontent-%COMP%] {\n  border-top: 3px solid #3B82F6;\n}\n.gender-card.male[_ngcontent-%COMP%]   .gender-icon-wrap[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #3B82F6;\n}\n.gender-card.female[_ngcontent-%COMP%] {\n  border-top: 3px solid #EC4899;\n}\n.gender-card.female[_ngcontent-%COMP%]   .gender-icon-wrap[_ngcontent-%COMP%] {\n  background: #FDF2F8;\n  color: #EC4899;\n}\n.gender-card.other[_ngcontent-%COMP%] {\n  border-top: 3px solid #8B5CF6;\n}\n.gender-card.other[_ngcontent-%COMP%]   .gender-icon-wrap[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #8B5CF6;\n}\n.gender-card.total[_ngcontent-%COMP%] {\n  border-top: 3px solid #0D9488;\n}\n.gender-card.total[_ngcontent-%COMP%]   .gender-icon-wrap[_ngcontent-%COMP%] {\n  background: #F0FDFA;\n  color: #0D9488;\n}\n.gender-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 10px;\n}\n.gender-icon-wrap[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.gender-count[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1F2937;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n.gender-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.gender-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.gender-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #374151;\n  margin-bottom: 10px;\n  padding-left: 10px;\n  border-left: 3px solid #0D9488;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent" });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-4OYOYTIE.js.map
