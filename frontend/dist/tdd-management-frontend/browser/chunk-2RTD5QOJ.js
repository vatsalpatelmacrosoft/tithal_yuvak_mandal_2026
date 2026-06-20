import {
  Tag,
  TagModule
} from "./chunk-7UCXK7G3.js";
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
import "./chunk-JGZM7AHT.js";
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
  DatePipe,
  NgIf,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2TIVPBG5.js";

// src/app/admin/quiz/quiz-list/quiz-list.component.ts
var _c0 = () => ({ "min-width": "70rem" });
var _c1 = () => ({ width: "420px" });
function QuizListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 19);
    \u0275\u0275text(4, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 20);
    \u0275\u0275text(6, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 20);
    \u0275\u0275text(8, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 21);
    \u0275\u0275text(10, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 22);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function QuizListComponent_ng_template_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r2.description);
  }
}
function QuizListComponent_ng_template_21_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, q_r2.start_datetime, "dd MMM yy, hh:mm a"), " ");
  }
}
function QuizListComponent_ng_template_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, q_r2.end_datetime, "dd MMM yy, hh:mm a"), " ");
  }
}
function QuizListComponent_ng_template_21_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "No schedule");
    \u0275\u0275elementEnd();
  }
}
function QuizListComponent_ng_template_21_p_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 42);
    \u0275\u0275listener("click", function QuizListComponent_ng_template_21_p_button_22_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const q_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyLink(q_r2.slug));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function QuizListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, QuizListComponent_ng_template_21_div_4_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "p-tag", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 26)(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 26)(11, "span", 28);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, QuizListComponent_ng_template_21_div_14_Template, 4, 4, "div", 29)(15, QuizListComponent_ng_template_21_div_15_Template, 4, 4, "div", 29)(16, QuizListComponent_ng_template_21_span_16_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 31)(19, "p-button", 32);
    \u0275\u0275listener("click", function QuizListComponent_ng_template_21_Template_p_button_click_19_listener() {
      const q_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.router.navigate(["/admin/quiz", q_r2.uuid]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p-button", 33);
    \u0275\u0275listener("click", function QuizListComponent_ng_template_21_Template_p_button_click_20_listener() {
      const q_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.router.navigate(["/admin/quiz", q_r2.uuid, "questions"]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-button", 34);
    \u0275\u0275listener("click", function QuizListComponent_ng_template_21_Template_p_button_click_21_listener() {
      const q_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleActive(q_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, QuizListComponent_ng_template_21_p_button_22_Template, 1, 2, "p-button", 35);
    \u0275\u0275elementStart(23, "p-button", 36);
    \u0275\u0275listener("click", function QuizListComponent_ng_template_21_Template_p_button_click_23_listener() {
      const q_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(q_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const q_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r2.title || q_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.statusLabel(q_r2))("severity", ctx_r2.statusSeverity(q_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r2.question_count || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r2.participant_count || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", q_r2.start_datetime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r2.end_datetime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !q_r2.start_datetime && !q_r2.end_datetime);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("icon", q_r2.is_active ? "pi pi-pause-circle" : "pi pi-play-circle")("rounded", true)("text", true)("severity", q_r2.is_active ? "warning" : "success")("pTooltip", q_r2.is_active ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r2.quiz_status === "published");
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function QuizListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, ' No quizzes yet. Click "Create Quiz" to get started. ');
    \u0275\u0275elementEnd()();
  }
}
var QuizListComponent = class _QuizListComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  confirm = inject(ConfirmationService);
  router = inject(Router);
  quizzes = signal([]);
  searchTerm = "";
  get filteredQuizzes() {
    const q = this.searchTerm.toLowerCase().trim();
    return q ? this.quizzes().filter((qz) => (qz.title || qz.name || "").toLowerCase().includes(q)) : this.quizzes();
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.api.get("quiz").subscribe((r) => {
      if (r.success)
        this.quizzes.set(r.data);
    });
  }
  publicQuizUrl(slug) {
    return `${window.location.origin}/quiz/${slug}`;
  }
  copyLink(slug) {
    navigator.clipboard.writeText(this.publicQuizUrl(slug));
    this.toast.success("Quiz link copied!");
  }
  toggleActive(q) {
    this.api.put(`quiz/${q.uuid}/toggle`, {}).subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success(res.data.is_active ? "Quiz activated" : "Quiz deactivated");
          this.load();
        }
      }
    });
  }
  confirmDelete(q) {
    this.confirm.confirm({
      message: `Archive quiz <strong>${q.title || q.name}</strong>? This action cannot be undone.`,
      header: "Confirm Archive",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Archive",
      rejectLabel: "Cancel",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text",
      accept: () => this.api.delete(`quiz/${q.uuid}`).subscribe({
        next: () => {
          this.toast.success("Quiz archived");
          this.load();
        }
      })
    });
  }
  statusSeverity(q) {
    if (!q.is_active)
      return "danger";
    if (q.quiz_status === "published")
      return "success";
    if (q.quiz_status === "draft")
      return "warning";
    return "danger";
  }
  statusLabel(q) {
    if (!q.is_active)
      return "Inactive";
    if (q.quiz_status === "published")
      return "Published";
    return "Draft";
  }
  static \u0275fac = function QuizListComponent_Factory(t) {
    return new (t || _QuizListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizListComponent, selectors: [["app-quiz-list"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService]), \u0275\u0275StandaloneFeature], decls: 24, vars: 9, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", 2, "background", "linear-gradient(135deg,#BE123C,#F43F5E)", "box-shadow", "0 4px 14px rgba(244,63,94,0.35)"], [1, "pi", "pi-question-circle"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge"], [1, "hero-right"], ["label", "Create Quiz", "icon", "pi pi-plus", 3, "click"], [1, "table-card"], [1, "toolbar"], [1, "toolbar-left"], [1, "search-wrap"], [1, "pi", "pi-search", "sw-icon"], ["pInputText", "", "placeholder", "Search quiz title\u2026", 1, "sw-input", 3, "ngModelChange", "ngModel"], ["styleClass", "p-datatable-striped", 3, "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "110px"], [1, "text-center", 2, "width", "80px"], [2, "width", "160px"], [2, "width", "140px"], [2, "font-weight", "600", "color", "#1F2937"], ["style", "font-size:0.82rem;color:#9CA3AF;margin-top:2px;max-width:360px;\n               white-space:nowrap;overflow:hidden;text-overflow:ellipsis", 4, "ngIf"], [3, "value", "severity"], [1, "text-center"], [1, "count-badge", "blue"], [1, "count-badge", "green"], ["style", "font-size:0.82rem;color:#6B7280", 4, "ngIf"], ["style", "color:#D1D5DB;font-size:0.82rem", 4, "ngIf"], [2, "display", "flex", "gap", "2px", "flex-wrap", "wrap"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["icon", "pi pi-list", "size", "small", "severity", "secondary", "pTooltip", "Questions", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["size", "small", "tooltipPosition", "top", 3, "click", "icon", "rounded", "text", "severity", "pTooltip"], ["icon", "pi pi-link", "size", "small", "severity", "info", "pTooltip", "Copy Link", "tooltipPosition", "top", 3, "rounded", "text", "click", 4, "ngIf"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "click", "rounded", "text"], [2, "font-size", "0.82rem", "color", "#9CA3AF", "margin-top", "2px", "max-width", "360px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "font-size", "0.82rem", "color", "#6B7280"], [1, "pi", "pi-play-circle", 2, "color", "#10B981", "font-size", "0.75rem"], [1, "pi", "pi-stop-circle", 2, "color", "#EF4444", "font-size", "0.75rem"], [2, "color", "#D1D5DB", "font-size", "0.82rem"], ["icon", "pi pi-link", "size", "small", "severity", "info", "pTooltip", "Copy Link", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["colspan", "6", 2, "text-align", "center", "padding", "3rem", "color", "#9CA3AF"], [1, "pi", "pi-question-circle", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"]], template: function QuizListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Quiz Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Create, publish and manage MCQ quizzes for members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "p-button", 8);
      \u0275\u0275listener("click", function QuizListComponent_Template_p_button_click_12_listener() {
        return ctx.router.navigate(["/admin/quiz/new"]);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementStart(18, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function QuizListComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "p-table", 15);
      \u0275\u0275template(20, QuizListComponent_ng_template_20_Template, 13, 0, "ng-template", 16)(21, QuizListComponent_ng_template_21_Template, 24, 21, "ng-template", 17)(22, QuizListComponent_ng_template_22_Template, 4, 0, "ng-template", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "p-confirmDialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate2("", ctx.quizzes().length, " Quiz", ctx.quizzes().length !== 1 ? "zes" : "", "");
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.filteredQuizzes)("tableStyle", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c1));
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, DatePipe, TableModule, Table, PrimeTemplate, ButtonModule, Button, TagModule, Tag, InputTextModule, InputText, ConfirmDialogModule, ConfirmDialog, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.count-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.count-badge.blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D4ED8;\n}\n.count-badge.green[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n/*# sourceMappingURL=quiz-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizListComponent, { className: "QuizListComponent" });
})();
export {
  QuizListComponent
};
//# sourceMappingURL=chunk-2RTD5QOJ.js.map
