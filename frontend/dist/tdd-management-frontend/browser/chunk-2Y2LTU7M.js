import {
  Calendar,
  CalendarModule
} from "./chunk-NHVW7JCQ.js";
import {
  InputTextarea,
  InputTextareaModule
} from "./chunk-DPHQHCY6.js";
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-YPQPAB3Z.js";
import {
  ToastService
} from "./chunk-JX63ECEV.js";
import "./chunk-5E6EQEG5.js";
import "./chunk-UAHN6Q6E.js";
import "./chunk-6KFP5JIF.js";
import {
  Button,
  ButtonModule
} from "./chunk-EWFPHMRU.js";
import "./chunk-YQH4GAYX.js";
import "./chunk-7QANY5TG.js";
import {
  ApiService
} from "./chunk-FA5V7IHE.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-B62F6VTM.js";
import "./chunk-VVE7LC7Y.js";
import {
  NgIf,
  __spreadProps,
  __spreadValues,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2TIVPBG5.js";

// src/app/admin/quiz/quiz-form/quiz-form.component.ts
var _c0 = () => ({ label: "Active", value: true });
var _c1 = () => ({ label: "Inactive", value: false });
var _c2 = (a0, a1) => [a0, a1];
function QuizFormComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275text(1, "Quiz title is required");
    \u0275\u0275elementEnd();
  }
}
function QuizFormComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, " Slug: ");
    \u0275\u0275elementStart(3, "code", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.quizSlug);
  }
}
var QuizFormComponent = class _QuizFormComponent {
  fb = inject(FormBuilder);
  api = inject(ApiService);
  toast = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  isEdit = false;
  editUuid = "";
  saving = false;
  quizSlug = "";
  statusOptions = [
    { label: "Draft", value: "draft" },
    { label: "Published", value: "published" }
  ];
  form = this.fb.group({
    title: ["", Validators.required],
    description: [""],
    instructions: [""],
    start_datetime: [null],
    end_datetime: [null],
    quiz_status: ["draft"],
    is_active: [true]
  });
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id && id !== "new") {
      this.isEdit = true;
      this.editUuid = id;
      this.loadQuiz(id);
    }
  }
  loadQuiz(uuid) {
    this.api.get(`quiz/${uuid}`).subscribe((res) => {
      if (res.success) {
        const q = res.data;
        this.quizSlug = q.slug;
        this.form.patchValue({
          title: q.title || q.name,
          description: q.description,
          instructions: q.instructions,
          start_datetime: q.start_datetime ? new Date(q.start_datetime) : null,
          end_datetime: q.end_datetime ? new Date(q.end_datetime) : null,
          quiz_status: q.quiz_status,
          is_active: !!q.is_active
        });
      }
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    const val = this.form.value;
    const payload = __spreadProps(__spreadValues({}, val), {
      start_datetime: val.start_datetime ? this.formatDt(val.start_datetime) : null,
      end_datetime: val.end_datetime ? this.formatDt(val.end_datetime) : null
    });
    const req = this.isEdit ? this.api.put(`quiz/${this.editUuid}`, payload) : this.api.post("quiz", payload);
    req.subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success(this.isEdit ? "Quiz updated" : "Quiz created");
          const uuid = res.data.uuid || this.editUuid;
          this.router.navigate(["/admin/quiz", uuid, "questions"]);
        }
        this.saving = false;
      },
      error: (err) => {
        this.toast.error(err.error?.message || "Save failed");
        this.saving = false;
      }
    });
  }
  hasError(field) {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  }
  formatDt(d) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:00`;
  }
  static \u0275fac = function QuizFormComponent_Factory(t) {
    return new (t || _QuizFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizFormComponent, selectors: [["app-quiz-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 70, vars: 21, consts: [[1, "back-link", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "form-hero", 2, "border-left-color", "#BE123C"], [1, "form-hero-left"], [1, "form-hero-icon", 2, "background", "linear-gradient(135deg,#BE123C,#F43F5E)", "box-shadow", "0 4px 14px rgba(244,63,94,0.35)"], [1, "pi", "pi-question-circle"], [1, "form-hero-title"], [1, "form-hero-sub"], [1, "form-hero-actions"], ["label", "Cancel", 3, "click", "outlined"], ["icon", "pi pi-arrow-right", "iconPos", "right", 3, "click", "label", "loading"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "pi", "pi-info-circle"], [1, "form-row"], [1, "field", 2, "grid-column", "1/-1"], [1, "req"], ["pInputText", "", "formControlName", "title", "placeholder", "e.g. Satsang Quiz \u2013 July 2025"], ["class", "p-error", 4, "ngIf"], ["pInputTextarea", "", "formControlName", "description", "rows", "2", "placeholder", "Brief description of the quiz (shown to participants)"], ["pInputTextarea", "", "formControlName", "instructions", "rows", "3", "placeholder", "Instructions shown before the quiz starts (e.g. rules, time limit info, etc.)"], ["style", "font-size:0.83rem;color:#9CA3AF;margin-top:4px", 4, "ngIf"], [1, "pi", "pi-calendar"], [1, "field"], ["formControlName", "start_datetime", "hourFormat", "12", "placeholder", "Select start date/time", "dateFormat", "dd M yy", "styleClass", "w-full", 3, "showTime", "showButtonBar"], ["formControlName", "end_datetime", "hourFormat", "12", "placeholder", "Select end date/time", "dateFormat", "dd M yy", "styleClass", "w-full", 3, "showTime", "showButtonBar"], [2, "color", "#9CA3AF", "font-size", "0.82rem"], [1, "pi", "pi-sliders-h"], ["formControlName", "quiz_status", "optionLabel", "label", "optionValue", "value", 3, "options"], [1, "field", 2, "display", "flex", "flex-direction", "column", "justify-content", "flex-end", "padding-bottom", "4px"], [1, "active-toggle-row"], [2, "margin", "0"], ["formControlName", "is_active", "optionLabel", "label", "optionValue", "value", 3, "options"], [2, "color", "#9CA3AF", "font-size", "0.82rem", "margin-top", "6px"], [1, "p-error"], [2, "font-size", "0.83rem", "color", "#9CA3AF", "margin-top", "4px"], [1, "pi", "pi-link", 2, "font-size", "0.8rem", "vertical-align", "middle"], [2, "background", "#F3F4F6", "padding", "1px 6px", "border-radius", "4px"]], template: function QuizFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function QuizFormComponent_Template_div_click_0_listener() {
        return ctx.router.navigate(["/admin/quiz"]);
      });
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275text(2, " Back to Quiz List\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "p-button", 9);
      \u0275\u0275listener("click", function QuizFormComponent_Template_p_button_click_13_listener() {
        return ctx.router.navigate(["/admin/quiz"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-button", 10);
      \u0275\u0275listener("click", function QuizFormComponent_Template_p_button_click_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "form", 11);
      \u0275\u0275listener("ngSubmit", function QuizFormComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275text(19, " Quiz Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "label", 17);
      \u0275\u0275text(23, "Quiz Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 18);
      \u0275\u0275template(25, QuizFormComponent_small_25_Template, 2, 0, "small", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 15)(27, "div", 16)(28, "label");
      \u0275\u0275text(29, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "textarea", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "label");
      \u0275\u0275text(34, "Instructions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "textarea", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, QuizFormComponent_p_36_Template, 5, 1, "p", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 12)(38, "div", 13);
      \u0275\u0275element(39, "i", 23);
      \u0275\u0275text(40, " Schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 15)(42, "div", 24)(43, "label");
      \u0275\u0275text(44, "Start Date & Time");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "p-calendar", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 24)(47, "label");
      \u0275\u0275text(48, "End Date & Time");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "p-calendar", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "small", 27);
      \u0275\u0275text(51, " Leave blank to allow access at any time (no time restriction). ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 12)(53, "div", 13);
      \u0275\u0275element(54, "i", 28);
      \u0275\u0275text(55, " Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 15)(57, "div", 24)(58, "label");
      \u0275\u0275text(59, "Publication Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "p-dropdown", 29);
      \u0275\u0275elementStart(61, "small", 27);
      \u0275\u0275text(62, " Draft = not accessible to public. Published = accessible via public link. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 30)(64, "div", 31)(65, "label", 32);
      \u0275\u0275text(66, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "p-dropdown", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "small", 34);
      \u0275\u0275text(69, " Inactive quizzes cannot be started by participants even if published. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Quiz" : "Create Quiz");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Update quiz details. Manage questions in the next step." : "Fill basic info, then add MCQ questions.", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEdit ? "Save & Continue" : "Create & Add Questions")("loading", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("ng-invalid", ctx.hasError("title"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("title"));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.quizSlug);
      \u0275\u0275advance(9);
      \u0275\u0275property("showTime", true)("showButtonBar", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("showTime", true)("showButtonBar", true);
      \u0275\u0275advance(11);
      \u0275\u0275property("options", ctx.statusOptions);
      \u0275\u0275advance(7);
      \u0275\u0275property("options", \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pureFunction0(16, _c0), \u0275\u0275pureFunction0(17, _c1)));
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf, ButtonModule, Button, InputTextModule, InputText, InputTextareaModule, InputTextarea, DropdownModule, Dropdown, CalendarModule, Calendar], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n  .form-hero-actions .p-button:not(.p-button-outlined) {\n  background:\n    linear-gradient(\n      135deg,\n      #BE123C,\n      #F43F5E) !important;\n  border-color: transparent !important;\n  box-shadow: 0 2px 8px rgba(244, 63, 94, 0.3);\n}\n  .form-hero-actions .p-button:not(.p-button-outlined):hover {\n  background:\n    linear-gradient(\n      135deg,\n      #9F1239,\n      #BE123C) !important;\n}\n.active-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n/*# sourceMappingURL=quiz-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizFormComponent, { className: "QuizFormComponent" });
})();
export {
  QuizFormComponent
};
//# sourceMappingURL=chunk-2Y2LTU7M.js.map
