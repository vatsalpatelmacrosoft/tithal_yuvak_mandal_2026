import {
  Sidebar,
  SidebarModule
} from "./chunk-7LZ2K3I7.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-MZF3RCZ3.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-KOUEGY3L.js";
import {
  InputTextarea,
  InputTextareaModule
} from "./chunk-AOOUFESW.js";
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-QMTKQQCH.js";
import {
  ToastService
} from "./chunk-H7DSMCQO.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-5IG7FWVL.js";
import "./chunk-NTE4MRI5.js";
import {
  Button,
  ButtonModule
} from "./chunk-6IMXQGBZ.js";
import "./chunk-UQII2K3B.js";
import {
  ConfirmationService,
  PrimeTemplate
} from "./chunk-CJX7BHHU.js";
import {
  ApiService
} from "./chunk-IFU6TU4Y.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-NESC47WB.js";
import "./chunk-RZOKDKRV.js";
import {
  NgForOf,
  NgIf,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PUKDGUBM.js";

// src/app/admin/quiz/quiz-questions/quiz-questions.component.ts
var _c0 = () => ({ width: "540px" });
var _c1 = () => ({ width: "400px" });
var _c2 = () => ({ standalone: true });
function QuizQuestionsComponent_div_17_div_1_div_10_span_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function QuizQuestionsComponent_div_17_div_1_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275template(2, QuizQuestionsComponent_div_17_div_1_div_10_span_1_i_2_Template, 1, 0, "i", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275classProp("correct", opt_r2.correct);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r2.correct);
  }
}
function QuizQuestionsComponent_div_17_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, QuizQuestionsComponent_div_17_div_1_div_10_span_1_Template, 3, 4, "span", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.displayOptions(q_r3));
  }
}
function QuizQuestionsComponent_div_17_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Expected answer: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r3.correct_answer);
  }
}
function QuizQuestionsComponent_div_17_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Correct: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.mcqOptionLabel(q_r3.correct_answer));
  }
}
function QuizQuestionsComponent_div_17_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Correct: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r3.correct_answer);
  }
}
function QuizQuestionsComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 30)(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275element(8, "i", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, QuizQuestionsComponent_div_17_div_1_div_10_Template, 2, 1, "div", 34)(11, QuizQuestionsComponent_div_17_div_1_div_11_Template, 5, 1, "div", 35);
    \u0275\u0275elementStart(12, "div", 36)(13, "span", 37);
    \u0275\u0275element(14, "i", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, QuizQuestionsComponent_div_17_div_1_span_16_Template, 5, 1, "span", 39)(17, QuizQuestionsComponent_div_17_div_1_span_17_Template, 5, 1, "span", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 40)(19, "p-button", 41);
    \u0275\u0275listener("click", function QuizQuestionsComponent_div_17_div_1_Template_p_button_click_19_listener() {
      const i_r5 = \u0275\u0275restoreView(_r1).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.moveUp(i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p-button", 42);
    \u0275\u0275listener("click", function QuizQuestionsComponent_div_17_div_1_Template_p_button_click_20_listener() {
      const i_r5 = \u0275\u0275restoreView(_r1).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.moveDown(i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-button", 43);
    \u0275\u0275listener("click", function QuizQuestionsComponent_div_17_div_1_Template_p_button_click_21_listener() {
      const q_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEdit(q_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p-button", 44);
    \u0275\u0275listener("click", function QuizQuestionsComponent_div_17_div_1_Template_p_button_click_22_listener() {
      const q_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDelete(q_r3));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", i_r5 + 1, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r3.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r3.typeColor(q_r3.question_type));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.typeIcon(q_r3.question_type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.typeLabel(q_r3.question_type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.question_type !== "input");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.question_type === "input");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", q_r3.marks, " mark", +q_r3.marks !== 1 ? "s" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.question_type === "mcq");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.question_type === "select" || q_r3.question_type === "radio");
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("text", true)("disabled", i_r5 === 0);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true)("disabled", i_r5 === ctx_r3.questions().length - 1);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function QuizQuestionsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, QuizQuestionsComponent_div_17_div_1_Template, 23, 23, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.questions());
  }
}
function QuizQuestionsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "div", 55);
    \u0275\u0275text(3, "No questions yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275text(5, " Add MCQ, text input, dropdown select, or radio-button questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 57);
    \u0275\u0275listener("click", function QuizQuestionsComponent_div_18_Template_p_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openAdd());
    });
    \u0275\u0275elementEnd()();
  }
}
function QuizQuestionsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editUuid ? "Edit Question" : "Add Question", " ");
  }
}
function QuizQuestionsComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 60);
    \u0275\u0275text(2, "Options (A \u2013 D)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "div", 17)(5, "label", 18);
    \u0275\u0275text(6, "Option A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17)(9, "label", 18);
    \u0275\u0275text(10, "Option B");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "label");
    \u0275\u0275text(14, "Option C ");
    \u0275\u0275elementStart(15, "span", 64);
    \u0275\u0275text(16, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17)(19, "label");
    \u0275\u0275text(20, "Option D ");
    \u0275\u0275elementStart(21, "span", 64);
    \u0275\u0275text(22, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "label", 18);
    \u0275\u0275text(26, "Correct Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-dropdown", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(27);
    \u0275\u0275property("options", ctx_r3.mcqAnswerOptions);
  }
}
function QuizQuestionsComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 60);
    \u0275\u0275text(2, "Expected Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "label", 18);
    \u0275\u0275text(5, "Correct Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 68);
    \u0275\u0275elementStart(7, "small", 69);
    \u0275\u0275text(8, " Participant's input will be matched case-insensitively. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function QuizQuestionsComponent_ng_container_32_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function QuizQuestionsComponent_ng_container_32_div_6_Template_input_ngModelChange_3_listener($event) {
      const oi_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.customOptions[oi_r9], $event) || (ctx_r3.customOptions[oi_r9] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 80);
    \u0275\u0275listener("click", function QuizQuestionsComponent_ng_container_32_div_6_Template_p_button_click_4_listener() {
      const oi_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeCustomOption(oi_r9));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const oi_r9 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(oi_r9 + 1);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("placeholder", "Option ", oi_r9 + 1, "");
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.customOptions[oi_r9]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true)("disabled", ctx_r3.customOptions.length <= 2);
  }
}
function QuizQuestionsComponent_ng_container_32_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 69);
    \u0275\u0275text(1, " Fill in at least one option above first. ");
    \u0275\u0275elementEnd();
  }
}
function QuizQuestionsComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 60);
    \u0275\u0275text(2, " Options ");
    \u0275\u0275elementStart(3, "span", 70)(4, "p-button", 71);
    \u0275\u0275listener("click", function QuizQuestionsComponent_ng_container_32_Template_p_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addCustomOption());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 72);
    \u0275\u0275template(6, QuizQuestionsComponent_ng_container_32_div_6_Template, 5, 9, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 74)(8, "label", 18);
    \u0275\u0275text(9, "Correct Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-dropdown", 75);
    \u0275\u0275twoWayListener("ngModelChange", function QuizQuestionsComponent_ng_container_32_Template_p_dropdown_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.correctOptionValue, $event) || (ctx_r3.correctOptionValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, QuizQuestionsComponent_ng_container_32_small_11_Template, 2, 0, "small", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("text", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.customOptions)("ngForTrackBy", ctx_r3.trackByIdx);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r3.selectableCorrectOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.correctOptionValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c2))("disabled", ctx_r3.selectableCorrectOptions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectableCorrectOptions.length === 0);
  }
}
function QuizQuestionsComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "p-button", 82);
    \u0275\u0275listener("click", function QuizQuestionsComponent_ng_template_37_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showForm = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 83);
    \u0275\u0275listener("click", function QuizQuestionsComponent_ng_template_37_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveQuestion());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.editUuid ? "Update Question" : "Add Question")("loading", ctx_r3.saving);
  }
}
var QuizQuestionsComponent = class _QuizQuestionsComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  confirm = inject(ConfirmationService);
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  quizUuid = "";
  quiz = signal(null);
  questions = signal([]);
  showForm = false;
  saving = false;
  editUuid = "";
  // Dynamic options for Select / Radio types
  customOptions = ["", ""];
  correctOptionValue = "";
  questionTypes = [
    { label: "MCQ  (A / B / C / D)", value: "mcq" },
    { label: "Text Input", value: "input" },
    { label: "Dropdown  (Select)", value: "select" },
    { label: "Radio Buttons", value: "radio" }
  ];
  mcqAnswerOptions = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
    { label: "Option D", value: "d" }
  ];
  form = this.fb.group({
    title: [""],
    question_type: ["mcq"],
    // MCQ
    option_a: [""],
    option_b: [""],
    option_c: [""],
    option_d: [""],
    // MCQ correct = 'a'/'b'/'c'/'d' ; Input correct = free text
    correct_answer: [""],
    marks: [1],
    display_order: [0]
  });
  get qType() {
    return this.form.get("question_type")?.value || "mcq";
  }
  get selectableCorrectOptions() {
    return this.customOptions.filter((o) => o.trim()).map((o) => ({ label: o, value: o }));
  }
  ngOnInit() {
    this.quizUuid = this.route.snapshot.params["id"];
    this.loadQuiz();
    this.loadQuestions();
  }
  loadQuiz() {
    this.api.get(`quiz/${this.quizUuid}`).subscribe((res) => {
      if (res.success)
        this.quiz.set(res.data);
    });
  }
  loadQuestions() {
    this.api.get(`quiz/${this.quizUuid}/questions`).subscribe((res) => {
      if (res.success)
        this.questions.set(res.data);
    });
  }
  openAdd() {
    this.editUuid = "";
    this.customOptions = ["", ""];
    this.correctOptionValue = "";
    this.form.reset({
      question_type: "mcq",
      correct_answer: "a",
      marks: 1,
      display_order: this.questions().length + 1
    });
    this.showForm = true;
  }
  openEdit(q) {
    this.editUuid = q.uuid;
    const qType = q.question_type || "mcq";
    if (qType === "select" || qType === "radio") {
      const opts = Array.isArray(q.options) ? q.options.map((o) => o.label ?? o) : [];
      this.customOptions = opts.length >= 2 ? [...opts] : ["", ""];
      this.correctOptionValue = q.correct_answer || "";
    } else {
      this.customOptions = ["", ""];
      this.correctOptionValue = "";
    }
    this.form.patchValue({
      title: q.title,
      question_type: qType,
      option_a: q.option_a || "",
      option_b: q.option_b || "",
      option_c: q.option_c || "",
      option_d: q.option_d || "",
      correct_answer: qType === "mcq" || qType === "input" ? q.correct_answer || "" : "",
      marks: +q.marks,
      display_order: +q.display_order
    });
    this.showForm = true;
  }
  addCustomOption() {
    this.customOptions.push("");
  }
  removeCustomOption(i) {
    if (this.customOptions.length <= 2)
      return;
    const removed = this.customOptions.splice(i, 1)[0];
    if (this.correctOptionValue === removed)
      this.correctOptionValue = "";
  }
  trackByIdx(i) {
    return i;
  }
  saveQuestion() {
    const qType = this.qType;
    const fv = this.form.value;
    if (!fv.title?.trim()) {
      this.toast.error("Question title is required");
      return;
    }
    let payload = {
      title: fv.title.trim(),
      question_type: qType,
      marks: fv.marks ?? 1,
      display_order: fv.display_order ?? 0
    };
    if (qType === "mcq") {
      if (!fv.option_a?.trim()) {
        this.toast.error("Option A is required");
        return;
      }
      if (!fv.option_b?.trim()) {
        this.toast.error("Option B is required");
        return;
      }
      if (!fv.correct_answer) {
        this.toast.error("Select the correct answer");
        return;
      }
      Object.assign(payload, {
        option_a: fv.option_a.trim(),
        option_b: fv.option_b.trim(),
        option_c: fv.option_c?.trim() || null,
        option_d: fv.option_d?.trim() || null,
        correct_answer: fv.correct_answer
      });
    } else if (qType === "input") {
      if (!fv.correct_answer?.trim()) {
        this.toast.error("Correct answer is required");
        return;
      }
      payload.correct_answer = fv.correct_answer.trim();
    } else {
      const valid = this.customOptions.filter((o) => o.trim());
      if (valid.length < 2) {
        this.toast.error("At least 2 options are required");
        return;
      }
      if (!this.correctOptionValue) {
        this.toast.error("Select the correct answer");
        return;
      }
      payload.options = valid.map((o) => ({ label: o, value: o }));
      payload.correct_answer = this.correctOptionValue;
    }
    this.saving = true;
    const req = this.editUuid ? this.api.put(`questions/${this.editUuid}`, payload) : this.api.post(`quiz/${this.quizUuid}/questions`, payload);
    req.subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success(this.editUuid ? "Question updated" : "Question added");
          this.loadQuestions();
          this.showForm = false;
        }
        this.saving = false;
      },
      error: (err) => {
        this.toast.error(err.error?.message || "Failed to save question");
        this.saving = false;
      }
    });
  }
  confirmDelete(q) {
    this.confirm.confirm({
      message: `Delete question: <strong>${q.title}</strong>?`,
      header: "Delete Question",
      icon: "pi pi-trash",
      acceptLabel: "Delete",
      rejectLabel: "Cancel",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text",
      accept: () => this.api.delete(`questions/${q.uuid}`).subscribe({
        next: (res) => {
          if (res.success) {
            this.toast.success("Question deleted");
            this.loadQuestions();
          }
        }
      })
    });
  }
  moveUp(i) {
    if (i === 0)
      return;
    const qs = [...this.questions()];
    [qs[i], qs[i - 1]] = [qs[i - 1], qs[i]];
    this.questions.set(qs);
    this.saveOrder(qs);
  }
  moveDown(i) {
    const qs = this.questions();
    if (i === qs.length - 1)
      return;
    const updated = [...qs];
    [updated[i], updated[i + 1]] = [updated[i + 1], updated[i]];
    this.questions.set(updated);
    this.saveOrder(updated);
  }
  saveOrder(qs) {
    this.api.post(`quiz/${this.quizUuid}/reorder`, { order: qs.map((q) => q.uuid) }).subscribe();
  }
  // ── Display helpers ─────────────────────────────────────────
  typeLabel(type) {
    const map = {
      mcq: "MCQ",
      input: "Input",
      select: "Select",
      radio: "Radio"
    };
    return map[type] || type;
  }
  typeIcon(type) {
    const map = {
      mcq: "pi-list",
      input: "pi-pencil",
      select: "pi-chevron-down",
      radio: "pi-circle"
    };
    return map[type] || "pi-question-circle";
  }
  typeColor(type) {
    const map = {
      mcq: "#6366F1",
      input: "#F59E0B",
      select: "#0D9488",
      radio: "#BE123C"
    };
    return map[type] || "#9CA3AF";
  }
  mcqOptionLabel(key) {
    return this.mcqAnswerOptions.find((o) => o.value === key)?.label || key.toUpperCase();
  }
  displayOptions(q) {
    if (q.question_type === "mcq") {
      return [
        { label: "A. " + q.option_a, value: "a", correct: q.correct_answer === "a" },
        { label: "B. " + q.option_b, value: "b", correct: q.correct_answer === "b" },
        ...q.option_c ? [{ label: "C. " + q.option_c, value: "c", correct: q.correct_answer === "c" }] : [],
        ...q.option_d ? [{ label: "D. " + q.option_d, value: "d", correct: q.correct_answer === "d" }] : []
      ];
    }
    if (q.question_type === "select" || q.question_type === "radio") {
      const opts = Array.isArray(q.options) ? q.options : [];
      return opts.map((o) => ({
        label: o.label ?? o,
        value: o.value ?? o,
        correct: q.correct_answer === (o.value ?? o)
      }));
    }
    return [];
  }
  static \u0275fac = function QuizQuestionsComponent_Factory(t) {
    return new (t || _QuizQuestionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizQuestionsComponent, selectors: [["app-quiz-questions"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService]), \u0275\u0275StandaloneFeature], decls: 39, vars: 22, consts: [[1, "back-link", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "form-hero", 2, "border-left-color", "#BE123C"], [1, "form-hero-left"], [1, "form-hero-icon", 2, "background", "linear-gradient(135deg,#BE123C,#F43F5E)", "box-shadow", "0 4px 14px rgba(244,63,94,0.35)"], [1, "pi", "pi-list"], [1, "form-hero-title"], [1, "form-hero-sub"], [1, "hero-badge"], [1, "form-hero-actions"], ["label", "Back to Quiz List", "icon", "pi pi-th-large", 3, "click", "outlined"], ["label", "Add Question", "icon", "pi pi-plus", 3, "click"], ["class", "questions-wrap", 4, "ngIf"], ["class", "empty-questions", 4, "ngIf"], ["position", "right", 3, "visibleChange", "visible", "modal"], ["pTemplate", "header"], [2, "padding", "4px 0", 3, "formGroup"], [1, "field"], [1, "req"], ["pInputTextarea", "", "formControlName", "title", "rows", "3", "placeholder", "Enter the question text\u2026", 2, "width", "100%", "resize", "vertical"], ["formControlName", "question_type", "optionLabel", "label", "optionValue", "value", "placeholder", "Select type", "styleClass", "w-full", 3, "options"], [4, "ngIf"], [1, "field", 2, "margin-top", "4px"], ["formControlName", "marks", "styleClass", "w-full", 3, "min", "step", "showButtons"], ["pTemplate", "footer"], [1, "questions-wrap"], ["class", "question-card", 4, "ngFor", "ngForOf"], [1, "question-card"], [1, "q-num"], [1, "q-body"], [1, "q-title-row"], [1, "q-title"], [1, "q-type-badge"], [1, "pi"], ["class", "q-options", 4, "ngIf"], ["class", "q-input-answer", 4, "ngIf"], [1, "q-meta"], [1, "q-marks"], [1, "pi", "pi-star"], ["class", "q-answer", 4, "ngIf"], [1, "q-actions"], ["icon", "pi pi-arrow-up", "size", "small", "pTooltip", "Move Up", "tooltipPosition", "top", 3, "click", "rounded", "text", "disabled"], ["icon", "pi pi-arrow-down", "size", "small", "pTooltip", "Move Down", "tooltipPosition", "top", 3, "click", "rounded", "text", "disabled"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Delete", "tooltipPosition", "top", 3, "click", "rounded", "text"], [1, "q-options"], ["class", "q-opt", 3, "correct", 4, "ngFor", "ngForOf"], [1, "q-opt"], ["class", "pi pi-check", "style", "margin-left:4px", 4, "ngIf"], [1, "pi", "pi-check", 2, "margin-left", "4px"], [1, "q-input-answer"], [1, "pi", "pi-check-circle"], [1, "q-answer"], [1, "empty-questions"], [1, "pi", "pi-list", 2, "font-size", "3rem", "color", "#D1D5DB", "display", "block", "margin-bottom", "16px"], [2, "font-size", "1.05rem", "font-weight", "600", "color", "#6B7280", "margin-bottom", "6px"], [2, "font-size", "0.88rem", "color", "#9CA3AF", "margin-bottom", "20px"], ["label", "Add First Question", "icon", "pi pi-plus", 3, "click"], [2, "font-weight", "700", "font-size", "1rem", "color", "#1F2937"], [1, "pi", "pi-question-circle", 2, "color", "#BE123C", "margin-right", "8px"], [1, "section-divider"], [1, "q-opts-grid"], ["pInputText", "", "formControlName", "option_a", "placeholder", "Option A"], ["pInputText", "", "formControlName", "option_b", "placeholder", "Option B"], [1, "opt-hint"], ["pInputText", "", "formControlName", "option_c", "placeholder", "Option C"], ["pInputText", "", "formControlName", "option_d", "placeholder", "Option D"], ["formControlName", "correct_answer", "optionLabel", "label", "optionValue", "value", "placeholder", "Select correct option", "styleClass", "w-full", 3, "options"], ["pInputText", "", "formControlName", "correct_answer", "placeholder", "Type the expected answer (case-insensitive match)", 2, "width", "100%"], [2, "color", "#9CA3AF", "font-size", "0.78rem"], [2, "margin-left", "auto"], ["icon", "pi pi-plus", "label", "Add Option", "size", "small", 3, "click", "text"], [1, "custom-options-list"], ["class", "custom-opt-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "field", 2, "margin-top", "14px"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Select correct option", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "ngModelOptions", "disabled"], ["style", "color:#9CA3AF;font-size:0.78rem", 4, "ngIf"], [1, "custom-opt-row"], [1, "opt-num"], ["pInputText", "", 2, "flex", "1", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["icon", "pi pi-times", "severity", "danger", "size", "small", 3, "click", "rounded", "text", "disabled"], [2, "display", "flex", "gap", "10px", "justify-content", "flex-end"], ["label", "Cancel", 3, "click", "outlined"], ["icon", "pi pi-check", 3, "click", "label", "loading"]], template: function QuizQuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function QuizQuestionsComponent_Template_div_click_0_listener() {
        return ctx.router.navigate(["/admin/quiz", ctx.quizUuid]);
      });
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275text(2, " Back to Quiz\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11, "MCQ, Text Input, Select, and Radio questions supported");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 9)(15, "p-button", 10);
      \u0275\u0275listener("click", function QuizQuestionsComponent_Template_p_button_click_15_listener() {
        return ctx.router.navigate(["/admin/quiz"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-button", 11);
      \u0275\u0275listener("click", function QuizQuestionsComponent_Template_p_button_click_16_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, QuizQuestionsComponent_div_17_Template, 2, 1, "div", 12)(18, QuizQuestionsComponent_div_18_Template, 7, 0, "div", 13);
      \u0275\u0275elementStart(19, "p-sidebar", 14);
      \u0275\u0275twoWayListener("visibleChange", function QuizQuestionsComponent_Template_p_sidebar_visibleChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
        return $event;
      });
      \u0275\u0275template(20, QuizQuestionsComponent_ng_template_20_Template, 3, 1, "ng-template", 15);
      \u0275\u0275elementStart(21, "form", 16)(22, "div", 17)(23, "label", 18);
      \u0275\u0275text(24, "Question Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "textarea", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17)(27, "label", 18);
      \u0275\u0275text(28, "Question Type");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "p-dropdown", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, QuizQuestionsComponent_ng_container_30_Template, 28, 1, "ng-container", 21)(31, QuizQuestionsComponent_ng_container_31_Template, 9, 0, "ng-container", 21)(32, QuizQuestionsComponent_ng_container_32_Template, 12, 9, "ng-container", 21);
      \u0275\u0275elementStart(33, "div", 22)(34, "label", 18);
      \u0275\u0275text(35, "Marks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "p-inputNumber", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(37, QuizQuestionsComponent_ng_template_37_Template, 3, 3, "ng-template", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "p-confirmDialog");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("Questions \u2014 ", ((tmp_0_0 = ctx.quiz()) == null ? null : tmp_0_0.title) || ((tmp_0_0 = ctx.quiz()) == null ? null : tmp_0_0.name), "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.questions().length, " Question", ctx.questions().length !== 1 ? "s" : "", "");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.questions().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.questions().length === 0);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showForm);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(8);
      \u0275\u0275property("options", ctx.questionTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.qType === "mcq");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.qType === "input");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.qType === "select" || ctx.qType === "radio");
      \u0275\u0275advance(4);
      \u0275\u0275property("min", 0.5)("step", 0.5)("showButtons", true);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c1));
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    NgModel,
    NgForOf,
    NgIf,
    ButtonModule,
    Button,
    PrimeTemplate,
    InputTextModule,
    InputText,
    InputTextareaModule,
    InputTextarea,
    InputNumberModule,
    InputNumber,
    DropdownModule,
    Dropdown,
    SidebarModule,
    Sidebar,
    ConfirmDialogModule,
    ConfirmDialog,
    TooltipModule,
    Tooltip
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n  .form-hero-actions .p-button:not(.p-button-outlined) {\n  background:\n    linear-gradient(\n      135deg,\n      #BE123C,\n      #F43F5E) !important;\n  border-color: transparent !important;\n  box-shadow: 0 2px 8px rgba(244, 63, 94, 0.3);\n}\n  .form-hero-actions .p-button:not(.p-button-outlined):hover {\n  background:\n    linear-gradient(\n      135deg,\n      #9F1239,\n      #BE123C) !important;\n}\n.questions-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.question-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  background: #fff;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 12px;\n  padding: 18px 16px;\n  align-items: flex-start;\n  transition: box-shadow 0.2s;\n}\n.question-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border-color: #C7D2FE;\n}\n.q-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #BE123C,\n      #F43F5E);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.q-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.q-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1F2937;\n  margin-bottom: 10px;\n  line-height: 1.45;\n}\n.q-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.q-opt[_ngcontent-%COMP%] {\n  background: #F9FAFB;\n  border: 1px solid #E5E7EB;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.82rem;\n  color: #6B7280;\n}\n.q-opt.correct[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  border-color: #6EE7B7;\n  color: #065F46;\n  font-weight: 600;\n}\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.q-marks[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.82rem;\n  color: #D97706;\n  font-weight: 600;\n}\n.q-marks[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.q-answer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.82rem;\n  color: #6B7280;\n}\n.q-answer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10B981;\n  font-size: 0.82rem;\n}\n.q-answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #065F46;\n}\n.q-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.empty-questions[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 24px;\n  background: #fff;\n  border: 2px dashed #E5E7EB;\n  border-radius: 14px;\n}\n.q-opts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 4px;\n}\n.q-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n}\n.q-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.q-type-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.q-input-answer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.83rem;\n  color: #6B7280;\n  margin-bottom: 10px;\n}\n.q-input-answer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.q-input-answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #065F46;\n}\n.section-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #6B7280;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 16px 0 10px;\n  border-bottom: 1px solid #F3F4F6;\n  padding-bottom: 6px;\n}\n.opt-hint[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 0.78rem;\n  font-weight: 400;\n}\n.custom-options-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.custom-opt-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.opt-num[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #F3F4F6;\n  color: #6B7280;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n  .p-sidebar-content {\n  padding: 20px !important;\n}\n/*# sourceMappingURL=quiz-questions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizQuestionsComponent, { className: "QuizQuestionsComponent" });
})();
export {
  QuizQuestionsComponent
};
//# sourceMappingURL=chunk-6HEPLUUE.js.map
