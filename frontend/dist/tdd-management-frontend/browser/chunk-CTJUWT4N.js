import {
  Toast,
  ToastModule
} from "./chunk-HQLDCRMT.js";
import "./chunk-SPF6R22M.js";
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
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  AutoFocus,
  AutoFocusModule,
  Button,
  ButtonModule
} from "./chunk-EWFPHMRU.js";
import "./chunk-YQH4GAYX.js";
import {
  PrimeNGConfig
} from "./chunk-7QANY5TG.js";
import {
  ApiService
} from "./chunk-FA5V7IHE.js";
import {
  ActivatedRoute
} from "./chunk-B62F6VTM.js";
import "./chunk-VVE7LC7Y.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  Output,
  SlicePipe,
  ViewChild,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-2TIVPBG5.js";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var _c0 = ["input"];
var _c1 = (a0, a1, a2, a3) => ({
  "p-radiobutton p-component": true,
  "p-radiobutton-checked": a0,
  "p-radiobutton-disabled": a1,
  "p-radiobutton-focused": a2,
  "p-variant-filled": a3
});
var _c2 = (a0, a1, a2) => ({
  "p-radiobutton-box": true,
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c3 = (a0, a1, a2) => ({
  "p-radiobutton-label": true,
  "p-radiobutton-label-active": a0,
  "p-disabled": a1,
  "p-radiobutton-label-focus": a2
});
function RadioButton_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275listener("click", function RadioButton_label_6_Template_label_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.select($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const input_r2 = \u0275\u0275reference(3);
    \u0275\u0275classMap(ctx_r3.labelStyleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c3, input_r2.checked, ctx_r3.disabled, ctx_r3.focused));
    \u0275\u0275attribute("for", ctx_r3.inputId)("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.label);
  }
}
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(t) {
    return new (t || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton {
  cd;
  injector;
  registry;
  config;
  /**
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * The name of the form control.
   * @group Props
   */
  formControlName;
  /**
   * Name of the radiobutton group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Label of the radiobutton.
   * @group Props
   */
  label;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the label.
   * @group Props
   */
  labelStyleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  checked;
  focused;
  control;
  constructor(cd, injector, registry, config) {
    this.cd = cd;
    this.injector = injector;
    this.registry = registry;
    this.config = config;
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl);
    this.checkName();
    this.registry.add(this.control, this);
  }
  handleClick(event, radioButton, focus) {
    if (this.disabled) {
      return;
    }
    this.select(event);
    if (focus) {
      radioButton.focus();
    }
  }
  select(event) {
    if (!this.disabled) {
      this.inputViewChild.nativeElement.checked = true;
      this.checked = true;
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  writeValue(value) {
    this.checked = value == this.value;
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      this.inputViewChild.nativeElement.checked = this.checked;
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  ngOnDestroy() {
    this.registry.remove(this);
  }
  checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this.throwNameError();
    }
    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
  throwNameError() {
    throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `);
  }
  static \u0275fac = function RadioButton_Factory(t) {
    return new (t || _RadioButton)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      formControlName: "formControlName",
      name: "name",
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      label: "label",
      variant: "variant",
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      labelStyleClass: "labelStyleClass",
      autofocus: [InputFlags.HasDecoratorInputTransform, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 7,
    vars: 30,
    consts: [["input", ""], [3, "click", "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", "pAutoFocus", "", 3, "focus", "blur", "checked", "disabled", "value", "autofocus"], [3, "ngClass"], [1, "p-radiobutton-icon"], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "click", "ngClass"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function RadioButton_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          const input_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(ctx.handleClick($event, input_r2, true));
        });
        \u0275\u0275elementStart(1, "div", 2)(2, "input", 3, 0);
        \u0275\u0275listener("focus", function RadioButton_Template_input_focus_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function RadioButton_Template_input_blur_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "span", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, RadioButton_label_6_Template, 2, 10, "label", 6);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction4(21, _c1, ctx.checked, ctx.disabled, ctx.focused, ctx.variant === "filled" || ctx.config.inputStyle() === "filled"));
        \u0275\u0275attribute("data-pc-name", "radiobutton")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "hiddenInputWrapper");
        \u0275\u0275advance();
        \u0275\u0275property("checked", ctx.checked)("disabled", ctx.disabled)("value", ctx.value)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.tabindex)("data-pc-section", "hiddenInput");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(26, _c2, ctx.checked, ctx.disabled, ctx.focused));
        \u0275\u0275attribute("data-pc-section", "input");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "icon");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle, AutoFocus],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton",
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-radiobutton p-component': true,
                'p-radiobutton-checked': checked,
                'p-radiobutton-disabled': disabled,
                'p-radiobutton-focused': focused,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'radiobutton'"
            [attr.data-pc-section]="'root'"
            (click)="handleClick($event, input, true)"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'">
                <input
                    #input
                    [attr.id]="inputId"
                    type="radio"
                    [attr.name]="name"
                    [checked]="checked"
                    [disabled]="disabled"
                    [value]="value"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.tabindex]="tabindex"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div [ngClass]="{ 'p-radiobutton-box': true, 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }" [attr.data-pc-section]="'input'">
                <span class="p-radiobutton-icon" [attr.data-pc-section]="'icon'"></span>
            </div>
        </div>
        <label
            (click)="select($event)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-radiobutton-label': true, 'p-radiobutton-label-active': input.checked, 'p-disabled': disabled, 'p-radiobutton-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
            >{{ label }}</label
        >
    `,
      providers: [RADIO_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: RadioControlRegistry
  }, {
    type: PrimeNGConfig
  }], {
    value: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static \u0275fac = function RadioButtonModule_Factory(t) {
    return new (t || _RadioButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RadioButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, AutoFocusModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule],
      exports: [RadioButton],
      declarations: [RadioButton]
    }]
  }], null, null);
})();

// src/app/public/quiz/public-quiz.component.ts
var _c02 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c12 = () => ["a", "b", "c", "d"];
function PublicQuizComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3, "Loading quiz\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PublicQuizComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "h2", 11);
    \u0275\u0275text(3, "Quiz Not Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5, "This quiz does not exist or is not published.");
    \u0275\u0275elementEnd()();
  }
}
function PublicQuizComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "h2", 11);
    \u0275\u0275text(3, "Quiz Closed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5, "This quiz is not currently accepting responses.");
    \u0275\u0275elementEnd()();
  }
}
function PublicQuizComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4, "Quiz Not Started Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "This quiz will be available from:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275element(8, "i", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 21);
    \u0275\u0275text(11, "Please come back at the scheduled time to attempt this quiz.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 22)(13, "p-button", 23);
    \u0275\u0275listener("click", function PublicQuizComponent_div_4_Template_p_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step.set("landing"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDateTime((tmp_1_0 = ctx_r1.quiz()) == null ? null : tmp_1_0.start_datetime), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("outlined", true);
  }
}
function PublicQuizComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 24);
    \u0275\u0275element(2, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4, "Quiz Has Ended");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Submissions closed on:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275element(8, "i", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 21);
    \u0275\u0275text(11, "This quiz is no longer accepting responses.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDateTime((tmp_1_0 = ctx_r1.quiz()) == null ? null : tmp_1_0.end_datetime), " ");
  }
}
function PublicQuizComponent_div_6_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.quiz()) == null ? null : tmp_2_0.description);
  }
}
function PublicQuizComponent_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275text(3, " Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.quiz()) == null ? null : tmp_2_0.instructions);
  }
}
function PublicQuizComponent_div_6_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Starts: ", \u0275\u0275pipeBind3(3, 1, (tmp_2_0 = ctx_r1.quiz()) == null ? null : tmp_2_0.start_datetime, 0, 16), " ");
  }
}
function PublicQuizComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275template(7, PublicQuizComponent_div_6_p_7_Template, 2, 1, "p", 31)(8, PublicQuizComponent_div_6_div_8_Template, 6, 1, "div", 32);
    \u0275\u0275elementStart(9, "div", 33)(10, "span");
    \u0275\u0275element(11, "i", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PublicQuizComponent_div_6_span_13_Template, 4, 5, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 36)(15, "p-button", 37);
    \u0275\u0275listener("click", function PublicQuizComponent_div_6_Template_p_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goSelectType());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r1.quiz()) == null ? null : tmp_1_0.title) || ((tmp_1_0 = ctx_r1.quiz()) == null ? null : tmp_1_0.name));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.quiz()) == null ? null : tmp_2_0.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.quiz()) == null ? null : tmp_3_0.instructions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r1.quiz()) == null ? null : tmp_4_0.questions == null ? null : tmp_4_0.questions.length) || 0, " Questions");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.quiz()) == null ? null : tmp_5_0.start_datetime);
  }
}
function PublicQuizComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 42)(2, "div", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Who are you?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Select your participant type to continue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 45)(9, "button", 46);
    \u0275\u0275listener("click", function PublicQuizComponent_div_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectRegistered());
    });
    \u0275\u0275element(10, "i", 47);
    \u0275\u0275elementStart(11, "div", 48);
    \u0275\u0275text(12, "Registered Yuvak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 49);
    \u0275\u0275text(14, "I have a Yuvak ID issued during registration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 50);
    \u0275\u0275element(16, "i", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 46);
    \u0275\u0275listener("click", function PublicQuizComponent_div_7_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectExternal());
    });
    \u0275\u0275element(18, "i", 52);
    \u0275\u0275elementStart(19, "div", 48);
    \u0275\u0275text(20, "External Yuvak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 49);
    \u0275\u0275text(22, "I am not registered in the system");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 50);
    \u0275\u0275element(24, "i", 51);
    \u0275\u0275elementEnd()()()();
  }
}
function PublicQuizComponent_div_8_small_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Yuvak ID is required ");
    \u0275\u0275elementEnd();
  }
}
function PublicQuizComponent_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementStart(2, "div")(3, "div", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.yuvakInfo.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.yuvakInfo.xetra_name, " \xB7 ", ctx_r1.yuvakInfo.mandal_name, "");
  }
}
function PublicQuizComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 42)(2, "div", 43);
    \u0275\u0275element(3, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Enter Yuvak ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your Yuvak ID was issued at the time of registration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "form", 54);
    \u0275\u0275listener("ngSubmit", function PublicQuizComponent_div_8_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validateYuvak());
    });
    \u0275\u0275elementStart(10, "div", 55)(11, "label", 56);
    \u0275\u0275text(12, "Yuvak ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 57);
    \u0275\u0275template(14, PublicQuizComponent_div_8_small_14_Template, 2, 0, "small", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "p-button", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PublicQuizComponent_div_8_div_16_Template, 7, 3, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 61)(18, "p-button", 62);
    \u0275\u0275listener("click", function PublicQuizComponent_div_8_Template_p_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step.set("select-type"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-button", 63);
    \u0275\u0275listener("click", function PublicQuizComponent_div_8_Template_p_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startAsRegistered());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r1.yuvakForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c02, ((tmp_2_0 = ctx_r1.yuvakForm.get("yuvak_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.yuvakForm.get("yuvak_id")) == null ? null : tmp_2_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.yuvakForm.get("yuvak_id")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.yuvakForm.get("yuvak_id")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.validating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.yuvakInfo);
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.yuvakInfo)("loading", ctx_r1.validating);
  }
}
function PublicQuizComponent_div_9_small_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Full name is required ");
    \u0275\u0275elementEnd();
  }
}
function PublicQuizComponent_div_9_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Gender is required ");
    \u0275\u0275elementEnd();
  }
}
function PublicQuizComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 42)(2, "div", 43);
    \u0275\u0275element(3, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Your Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Please fill in your name and gender to continue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "form", 54);
    \u0275\u0275listener("ngSubmit", function PublicQuizComponent_div_9_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startAsExternal());
    });
    \u0275\u0275elementStart(10, "div", 55)(11, "label", 56);
    \u0275\u0275text(12, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 70);
    \u0275\u0275template(14, PublicQuizComponent_div_9_small_14_Template, 2, 0, "small", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 71)(16, "label", 56);
    \u0275\u0275text(17, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "p-dropdown", 72);
    \u0275\u0275template(19, PublicQuizComponent_div_9_small_19_Template, 2, 0, "small", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 61)(21, "p-button", 62);
    \u0275\u0275listener("click", function PublicQuizComponent_div_9_Template_p_button_click_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step.set("select-type"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p-button", 73);
    \u0275\u0275listener("click", function PublicQuizComponent_div_9_Template_p_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startAsExternal());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r1.externalForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ((tmp_2_0 = ctx_r1.externalForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.externalForm.get("name")) == null ? null : tmp_2_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.externalForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.externalForm.get("name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.genderOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.externalForm.get("gender")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.externalForm.get("gender")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.validating);
  }
}
function PublicQuizComponent_div_10_div_7_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function PublicQuizComponent_div_10_div_7_div_6_button_1_Template_button_click_0_listener() {
      const key_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const q_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAnswer(q_r10.id, key_r9));
    });
    \u0275\u0275elementStart(1, "span", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r9 = ctx.$implicit;
    const q_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", ctx_r1.optionText(q_r10, key_r9) ? "" : "none");
    \u0275\u0275classProp("selected", ctx_r1.answers[q_r10.id] === key_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(key_r9.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.optionText(q_r10, key_r9));
  }
}
function PublicQuizComponent_div_10_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, PublicQuizComponent_div_10_div_7_div_6_button_1_Template, 5, 6, "button", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c12));
  }
}
function PublicQuizComponent_div_10_div_7_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function PublicQuizComponent_div_10_div_7_div_7_button_1_Template_button_click_0_listener() {
      const opt_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const q_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAnswer(q_r10.id, opt_r12.value));
    });
    \u0275\u0275elementStart(1, "span", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    const oi_r13 = ctx.index;
    const q_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.answers[q_r10.id] === opt_r12.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(oi_r13 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r12.label);
  }
}
function PublicQuizComponent_div_10_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, PublicQuizComponent_div_10_div_7_div_7_button_1_Template, 5, 4, "button", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSelectOptions(q_r10));
  }
}
function PublicQuizComponent_div_10_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "p-dropdown", 98);
    \u0275\u0275listener("ngModelChange", function PublicQuizComponent_div_10_div_7_div_8_Template_p_dropdown_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const q_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setAnswer(q_r10.id, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.getSelectOptions(q_r10))("ngModel", ctx_r1.getAnswer(q_r10.id));
  }
}
function PublicQuizComponent_div_10_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "input", 100);
    \u0275\u0275listener("input", function PublicQuizComponent_div_10_div_7_div_9_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const q_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setAnswer(q_r10.id, $event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getAnswer(q_r10.id));
  }
}
function PublicQuizComponent_div_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "span", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, PublicQuizComponent_div_10_div_7_div_6_Template, 2, 2, "div", 88)(7, PublicQuizComponent_div_10_div_7_div_7_Template, 2, 1, "div", 88)(8, PublicQuizComponent_div_10_div_7_div_8_Template, 2, 2, "div", 89)(9, PublicQuizComponent_div_10_div_7_div_9_Template, 2, 1, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r10 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("answered", ctx_r1.isAnswered(q_r10.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Q", i_r16 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r10.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !q_r10.question_type || q_r10.question_type === "mcq");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r10.question_type === "radio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r10.question_type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r10.question_type === "input");
  }
}
function PublicQuizComponent_div_10_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.questions().length - ctx_r1.answeredCount(), " unanswered) ");
  }
}
function PublicQuizComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "div", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78);
    \u0275\u0275template(7, PublicQuizComponent_div_10_div_7_Template, 10, 8, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 80)(9, "div", 81)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " of ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " answered ");
    \u0275\u0275template(16, PublicQuizComponent_div_10_span_16_Template, 2, 1, "span", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-button", 83);
    \u0275\u0275listener("click", function PublicQuizComponent_div_10_Template_p_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitQuiz());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r1.quiz()) == null ? null : tmp_1_0.title) || ((tmp_1_0 = ctx_r1.quiz()) == null ? null : tmp_1_0.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.answeredCount(), " / ", ctx_r1.questions().length, " answered ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.questions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.answeredCount());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.questions().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.answeredCount() < ctx_r1.questions().length);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.submitting);
  }
}
function PublicQuizComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103);
    \u0275\u0275element(2, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 106)(6, "span", 107);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 109)(12, "div", 110)(13, "div", 111);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 112);
    \u0275\u0275text(16, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 110)(18, "div", 111);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 112);
    \u0275\u0275text(21, "Attempted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 113)(23, "div", 111);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 112);
    \u0275\u0275text(26, "Correct");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 114)(28, "div", 111);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 112);
    \u0275\u0275text(31, "Wrong");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "p", 115);
    \u0275\u0275text(33, " Your response has been recorded. Thank you for participating! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pass", ((tmp_1_0 = ctx_r1.result()) == null ? null : tmp_1_0.percentage) >= 40);
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-check-circle", ((tmp_2_0 = ctx_r1.result()) == null ? null : tmp_2_0.percentage) >= 40)("pi-times-circle", ((tmp_3_0 = ctx_r1.result()) == null ? null : tmp_3_0.percentage) < 40);
    \u0275\u0275advance();
    \u0275\u0275classProp("pass", ((tmp_4_0 = ctx_r1.result()) == null ? null : tmp_4_0.percentage) >= 40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r1.result()) == null ? null : tmp_5_0.percentage) >= 40 ? "\u{1F389} Well done!" : "Better luck next time", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 16, (tmp_6_0 = ctx_r1.result()) == null ? null : tmp_6_0.percentage, "1.1-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (tmp_7_0 = ctx_r1.result()) == null ? null : tmp_7_0.score, " / ", (tmp_7_0 = ctx_r1.result()) == null ? null : tmp_7_0.total_marks, " marks");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r1.result()) == null ? null : tmp_8_0.total_questions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx_r1.result()) == null ? null : tmp_9_0.attempted_questions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx_r1.result()) == null ? null : tmp_10_0.correct_answers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r1.result()) == null ? null : tmp_11_0.incorrect_answers);
  }
}
var PublicQuizComponent = class _PublicQuizComponent {
  route = inject(ActivatedRoute);
  api = inject(ApiService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  step = signal("loading");
  quiz = signal(null);
  questions = signal([]);
  participantUuid = "";
  result = signal(null);
  // Answer state: map of question_id → selected_answer ('a'|'b'|'c'|'d')
  answers = {};
  validating = false;
  submitting = false;
  yuvakInfo = null;
  genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" }
  ];
  yuvakForm = this.fb.group({
    yuvak_id: ["", Validators.required]
  });
  externalForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    gender: ["", Validators.required]
  });
  ngOnInit() {
    const slug = this.route.snapshot.params["slug"];
    this.api.publicGet(`quiz/${slug}`).subscribe({
      next: (res) => {
        if (res.success) {
          this.quiz.set(res.data);
          this.step.set("landing");
        } else {
          this.step.set("not-found");
        }
      },
      error: (err) => {
        if (err.status === 403)
          this.step.set("closed");
        else
          this.step.set("not-found");
      }
    });
  }
  goSelectType() {
    this.step.set("select-type");
  }
  selectRegistered() {
    this.yuvakForm.reset();
    this.yuvakInfo = null;
    this.step.set("register-yuvak");
  }
  selectExternal() {
    this.externalForm.reset();
    this.step.set("register-external");
  }
  validateYuvak() {
    if (this.yuvakForm.invalid) {
      this.yuvakForm.markAllAsTouched();
      return;
    }
    this.validating = true;
    this.api.publicPost("validate-yuvak", { yuvak_id: this.yuvakForm.value.yuvak_id }).subscribe({
      next: (res) => {
        if (res.success) {
          this.yuvakInfo = res.data;
        } else {
          this.toast.error("Yuvak ID not found.");
        }
        this.validating = false;
      },
      error: (err) => {
        this.toast.error(err.error?.message || "Yuvak ID not found.");
        this.validating = false;
      }
    });
  }
  startAsRegistered() {
    if (!this.yuvakInfo)
      return;
    const slug = this.quiz()?.slug;
    this.validating = true;
    this.api.publicPost(`quiz/${slug}/start`, {
      participant_type: "registered",
      yuvak_id: this.yuvakForm.value.yuvak_id
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.participantUuid = res.data.participant_uuid;
          this.questions.set(res.data.questions || []);
          this.answers = {};
          this.step.set("quiz");
        }
        this.validating = false;
      },
      error: (err) => {
        this.handleStartError(err);
      }
    });
  }
  startAsExternal() {
    if (this.externalForm.invalid) {
      this.externalForm.markAllAsTouched();
      return;
    }
    const slug = this.quiz()?.slug;
    this.validating = true;
    this.api.publicPost(`quiz/${slug}/start`, {
      participant_type: "external",
      name: this.externalForm.value.name,
      gender: this.externalForm.value.gender
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.participantUuid = res.data.participant_uuid;
          this.questions.set(res.data.questions || []);
          this.answers = {};
          this.step.set("quiz");
        }
        this.validating = false;
      },
      error: (err) => {
        this.handleStartError(err);
      }
    });
  }
  handleStartError(err) {
    this.validating = false;
    const msg = err.error?.message || "";
    if (err.status === 403) {
      if (msg.toLowerCase().includes("not started")) {
        this.step.set("not-started");
      } else if (msg.toLowerCase().includes("ended")) {
        this.step.set("ended");
      } else {
        this.step.set("closed");
      }
    } else {
      this.toast.error(msg || "Could not start quiz");
    }
  }
  formatDateTime(dt) {
    if (!dt)
      return "\u2014";
    const d = new Date(dt.replace(" ", "T"));
    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  }
  selectAnswer(questionId, answer) {
    this.answers[questionId] = answer;
  }
  submitQuiz() {
    const slug = this.quiz()?.slug;
    this.submitting = true;
    const answersArr = Object.entries(this.answers).map(([qId, ans]) => ({
      question_id: parseInt(qId),
      selected_answer: ans
    }));
    this.api.publicPost(`quiz/${slug}/submit`, {
      participant_uuid: this.participantUuid,
      answers: answersArr
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.result.set(res.data);
          this.step.set("result");
        }
        this.submitting = false;
      },
      error: (err) => {
        this.toast.error(err.error?.message || "Submission failed");
        this.submitting = false;
      }
    });
  }
  answeredCount() {
    return Object.keys(this.answers).length;
  }
  optionText(q, key) {
    return q[`option_${key}`] || "";
  }
  isAnswered(qId) {
    return qId in this.answers && this.answers[qId] !== "";
  }
  getAnswer(qId) {
    return this.answers[qId] || "";
  }
  setAnswer(qId, val) {
    if (val !== null && val !== void 0)
      this.selectAnswer(qId, val);
  }
  getSelectOptions(q) {
    if (!Array.isArray(q.options))
      return [];
    return q.options.map((o) => ({ label: o.label ?? o, value: o.value ?? o }));
  }
  static \u0275fac = function PublicQuizComponent_Factory(t) {
    return new (t || _PublicQuizComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicQuizComponent, selectors: [["app-public-quiz"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 11, consts: [[1, "quiz-page"], ["class", "quiz-center", 4, "ngIf"], ["class", "quiz-card status-card", 4, "ngIf"], ["class", "quiz-card", 4, "ngIf"], ["class", "quiz-attempt", 4, "ngIf"], ["class", "quiz-card result-card", 4, "ngIf"], ["position", "bottom-right"], [1, "quiz-center"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.5rem", "color", "#BE123C"], [2, "margin-top", "12px", "color", "#6B7280"], [1, "pi", "pi-question-circle", 2, "font-size", "3.5rem", "color", "#D1D5DB", "display", "block", "margin-bottom", "16px"], [2, "color", "#374151", "margin", "0 0 8px"], [2, "color", "#9CA3AF"], [1, "pi", "pi-lock", 2, "font-size", "3.5rem", "color", "#D1D5DB", "display", "block", "margin-bottom", "16px"], [1, "quiz-card", "status-card"], [1, "status-icon", "pending"], [1, "pi", "pi-clock"], [1, "status-title"], [1, "status-desc"], [1, "status-time"], [1, "pi", "pi-calendar"], [1, "status-hint"], [1, "status-footer"], ["label", "Back to Quiz Info", "icon", "pi pi-arrow-left", "styleClass", "w-full", 3, "click", "outlined"], [1, "status-icon", "ended"], [1, "pi", "pi-times-circle"], [1, "quiz-card"], [1, "quiz-header"], [1, "quiz-icon"], [1, "pi", "pi-question-circle"], [1, "quiz-body"], ["class", "quiz-desc", 4, "ngIf"], ["class", "quiz-instructions", 4, "ngIf"], [1, "quiz-meta"], [1, "pi", "pi-list"], [4, "ngIf"], [1, "quiz-footer"], ["label", "Start Quiz", "icon", "pi pi-play", "styleClass", "btn-primary w-full", 3, "click"], [1, "quiz-desc"], [1, "quiz-instructions"], [1, "instr-label"], [1, "pi", "pi-info-circle"], [1, "quiz-header", "small"], [1, "quiz-icon", "small"], [1, "pi", "pi-users"], [1, "type-grid"], [1, "type-card", 3, "click"], [1, "pi", "pi-id-card", 2, "font-size", "2rem", "color", "#BE123C", "margin-bottom", "12px"], [1, "type-title"], [1, "type-desc"], [1, "type-arrow"], [1, "pi", "pi-arrow-right"], [1, "pi", "pi-user-plus", 2, "font-size", "2rem", "color", "#059669", "margin-bottom", "12px"], [1, "pi", "pi-id-card"], [3, "ngSubmit", "formGroup"], [1, "field", 2, "margin-bottom", "16px"], [1, "req"], ["pInputText", "", "formControlName", "yuvak_id", "placeholder", "e.g. YUVAKAHM000001", 2, "width", "100%", "text-transform", "uppercase", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["type", "submit", "label", "Validate ID", "icon", "pi pi-search", "styleClass", "btn-primary w-full", 3, "loading"], ["class", "yuvak-found", 4, "ngIf"], [1, "quiz-footer", "quiz-footer-split"], ["label", "Back", "icon", "pi pi-arrow-left", "styleClass", "btn-back", 3, "click", "outlined"], ["label", "Start Quiz", "icon", "pi pi-play", "styleClass", "btn-primary", 3, "click", "disabled", "loading"], [1, "p-error"], [1, "yuvak-found"], [1, "pi", "pi-check-circle", 2, "color", "#10B981", "font-size", "1.4rem"], [2, "font-weight", "700", "color", "#1F2937"], [2, "font-size", "0.82rem", "color", "#6B7280"], [1, "pi", "pi-user-plus"], ["pInputText", "", "formControlName", "name", "placeholder", "Enter your full name", 2, "width", "100%", 3, "ngClass"], [1, "field", 2, "margin-bottom", "20px"], ["formControlName", "gender", "optionLabel", "label", "optionValue", "value", "placeholder", "Select gender", "styleClass", "w-full", 3, "options"], ["label", "Start Quiz", "icon", "pi pi-play", "styleClass", "btn-primary", 3, "click", "loading"], [1, "quiz-attempt"], [1, "attempt-header"], [1, "attempt-title"], [1, "attempt-progress"], [1, "question-list"], ["class", "q-block", 4, "ngFor", "ngForOf"], [1, "submit-bar"], [1, "submit-info"], ["style", "color:#D97706;margin-left:8px", 4, "ngIf"], ["label", "Submit Quiz", "icon", "pi pi-send", "styleClass", "btn-submit", 3, "click", "loading"], [1, "q-block"], [1, "q-num-row"], [1, "q-num-tag"], [1, "q-text"], ["class", "options-grid", 4, "ngIf"], ["class", "select-wrap", 4, "ngIf"], ["class", "input-wrap", 4, "ngIf"], [1, "options-grid"], ["class", "opt-btn", 3, "selected", "display", "click", 4, "ngFor", "ngForOf"], [1, "opt-btn", 3, "click"], [1, "opt-key"], [1, "opt-text"], ["class", "opt-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "select-wrap"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Choose your answer\u2026", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel"], [1, "input-wrap"], ["pInputText", "", "placeholder", "Type your answer here\u2026", 2, "width", "100%", 3, "input", "value"], [2, "color", "#D97706", "margin-left", "8px"], [1, "quiz-card", "result-card"], [1, "result-icon"], [1, "pi"], [1, "result-title"], [1, "result-score"], [1, "big-score"], [1, "score-label"], [1, "result-stats"], [1, "stat-box"], [1, "stat-v"], [1, "stat-l"], [1, "stat-box", "correct"], [1, "stat-box", "wrong"], [2, "text-align", "center", "color", "#9CA3AF", "font-size", "0.88rem", "margin-top", "20px"]], template: function PublicQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PublicQuizComponent_div_1_Template, 4, 0, "div", 1)(2, PublicQuizComponent_div_2_Template, 6, 0, "div", 1)(3, PublicQuizComponent_div_3_Template, 6, 0, "div", 1)(4, PublicQuizComponent_div_4_Template, 14, 2, "div", 2)(5, PublicQuizComponent_div_5_Template, 12, 1, "div", 2)(6, PublicQuizComponent_div_6_Template, 16, 5, "div", 3)(7, PublicQuizComponent_div_7_Template, 25, 0, "div", 3)(8, PublicQuizComponent_div_8_Template, 20, 10, "div", 3)(9, PublicQuizComponent_div_9_Template, 23, 9, "div", 3)(10, PublicQuizComponent_div_10_Template, 18, 8, "div", 4)(11, PublicQuizComponent_div_11_Template, 34, 19, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "p-toast", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "loading");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "not-found");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "closed");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "not-started");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "ended");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "landing");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "select-type");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "register-yuvak");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "register-external");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "quiz");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === "result");
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
    DecimalPipe,
    SlicePipe,
    NgClass,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    RadioButtonModule,
    DropdownModule,
    Dropdown,
    ToastModule,
    Toast
  ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.quiz-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #FFF5F5 0%,\n      #FFF1F2 40%,\n      #FDF4FF 100%);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 40px 16px 80px;\n}\n.quiz-center[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  color: #6B7280;\n}\n.quiz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 4px 40px rgba(190, 18, 60, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 560px;\n  overflow: hidden;\n}\n.quiz-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #BE123C,\n      #F43F5E);\n  padding: 36px 28px 28px;\n  color: #fff;\n  text-align: center;\n}\n.quiz-header.small[_ngcontent-%COMP%] {\n  padding: 24px 28px 20px;\n}\n.quiz-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  line-height: 1.3;\n}\n.quiz-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 4px;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.quiz-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 0.88rem;\n}\n.quiz-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.quiz-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #fff;\n}\n.quiz-icon.small[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.quiz-icon.small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.quiz-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n}\n.quiz-footer[_ngcontent-%COMP%] {\n  padding: 16px 28px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.quiz-footer.quiz-footer-split[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n  .btn-primary .p-button,   .btn-start .p-button {\n  background:\n    linear-gradient(\n      135deg,\n      #BE123C,\n      #F43F5E) !important;\n  border-color: transparent !important;\n  box-shadow: 0 4px 14px rgba(244, 63, 94, 0.35);\n  font-weight: 700;\n  height: 44px;\n  padding: 0 22px;\n}\n  .btn-primary .p-button:hover,   .btn-start .p-button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #9F1239,\n      #BE123C) !important;\n}\n  .btn-back .p-button {\n  height: 44px;\n  padding: 0 18px;\n}\n.quiz-desc[_ngcontent-%COMP%] {\n  color: #4B5563;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.quiz-instructions[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n  border: 1px solid #FDE68A;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-bottom: 16px;\n}\n.quiz-instructions[_ngcontent-%COMP%]   .instr-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #D97706;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.quiz-instructions[_ngcontent-%COMP%]   .instr-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.quiz-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  color: #374151;\n  line-height: 1.6;\n}\n.quiz-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 0.85rem;\n  color: #6B7280;\n}\n.quiz-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.quiz-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #BE123C;\n}\n  .btn-start .p-button {\n  background:\n    linear-gradient(\n      135deg,\n      #BE123C,\n      #F43F5E) !important;\n  border: none !important;\n  box-shadow: 0 4px 14px rgba(244, 63, 94, 0.4);\n  font-weight: 700;\n  height: 46px;\n  padding: 0 28px;\n}\n.type-grid[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 480px) {\n  .type-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.type-card[_ngcontent-%COMP%] {\n  border: 2px solid #E5E7EB;\n  border-radius: 14px;\n  padding: 24px 16px 20px;\n  background: #fff;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  transition: all 0.2s;\n}\n.type-card[_ngcontent-%COMP%]:hover {\n  border-color: #BE123C;\n  box-shadow: 0 2px 16px rgba(190, 18, 60, 0.12);\n  transform: translateY(-2px);\n}\n.type-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1F2937;\n  margin-bottom: 6px;\n}\n.type-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9CA3AF;\n  line-height: 1.4;\n}\n.type-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  color: #D1D5DB;\n  font-size: 0.85rem;\n}\n.yuvak-found[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 16px;\n  background: #ECFDF5;\n  border: 1.5px solid #6EE7B7;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.quiz-attempt[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 700px;\n}\n.attempt-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px 24px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.attempt-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1F2937;\n}\n.attempt-progress[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #BE123C;\n}\n.question-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.q-block[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  border: 1.5px solid #F3F4F6;\n  transition: border-color 0.2s;\n}\n.q-block[_ngcontent-%COMP%]:hover {\n  border-color: #FECDD3;\n}\n.q-num-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 14px;\n}\n.q-num-tag[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #F3F4F6;\n  color: #9CA3AF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  font-weight: 800;\n  transition: all 0.2s;\n}\n.q-num-tag.answered[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.q-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1F2937;\n  line-height: 1.5;\n  flex: 1;\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n@media (max-width: 540px) {\n  .options-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.opt-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 2px solid #E5E7EB;\n  border-radius: 10px;\n  padding: 10px 14px;\n  background: #fff;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.18s;\n  width: 100%;\n}\n.opt-btn[_ngcontent-%COMP%]:hover {\n  border-color: #FECDD3;\n  background: #FFF5F5;\n}\n.opt-btn.selected[_ngcontent-%COMP%] {\n  border-color: #BE123C;\n  background: #FFF1F2;\n}\n.opt-btn.selected[_ngcontent-%COMP%]   .opt-key[_ngcontent-%COMP%] {\n  background: #BE123C;\n  color: #fff;\n}\n.opt-key[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #F3F4F6;\n  color: #6B7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  font-weight: 800;\n  transition: all 0.18s;\n}\n.opt-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #374151;\n  flex: 1;\n}\n.status-card[_ngcontent-%COMP%] {\n  padding: 40px 28px 32px;\n  text-align: center;\n}\n.status-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  margin: 0 auto 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.status-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #fff;\n}\n.status-icon.pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F59E0B,\n      #FBBF24);\n}\n.status-icon.ended[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6B7280,\n      #9CA3AF);\n}\n.status-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #1F2937;\n  margin-bottom: 8px;\n}\n.status-desc[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #6B7280;\n  margin: 0 0 12px;\n}\n.status-time[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #FFF7ED;\n  border: 1px solid #FDE68A;\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #92400E;\n  margin-bottom: 16px;\n}\n.status-time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D97706;\n  font-size: 0.9rem;\n}\n.status-hint[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #9CA3AF;\n  margin-bottom: 24px;\n}\n.status-footer[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.select-wrap[_ngcontent-%COMP%], .input-wrap[_ngcontent-%COMP%] {\n  padding: 0 16px 8px;\n}\n.select-wrap[_ngcontent-%COMP%]     .p-dropdown, .input-wrap[_ngcontent-%COMP%]     .p-dropdown {\n  width: 100%;\n}\n.submit-bar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 16px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n}\n.submit-info[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6B7280;\n}\n  .btn-submit .p-button {\n  background:\n    linear-gradient(\n      135deg,\n      #BE123C,\n      #F43F5E) !important;\n  border: none !important;\n  font-weight: 700;\n  height: 44px;\n  padding: 0 24px;\n}\n.result-card[_ngcontent-%COMP%] {\n  padding: 32px 28px;\n  text-align: center;\n}\n.result-icon[_ngcontent-%COMP%] {\n  margin: 0 auto 16px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #FEF2F2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #EF4444;\n}\n.result-icon.pass[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n}\n.result-icon.pass[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.result-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #EF4444;\n  margin-bottom: 20px;\n}\n.result-title.pass[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.result-score[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.big-score[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 3rem;\n  font-weight: 900;\n  color: #1F2937;\n  line-height: 1;\n}\n.score-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #9CA3AF;\n  margin-top: 4px;\n}\n.result-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n@media (max-width: 480px) {\n  .result-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-box[_ngcontent-%COMP%] {\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  padding: 14px 8px;\n}\n.stat-box.correct[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  border-color: #6EE7B7;\n}\n.stat-box.correct[_ngcontent-%COMP%]   .stat-v[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.stat-box.wrong[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border-color: #FCA5A5;\n}\n.stat-box.wrong[_ngcontent-%COMP%]   .stat-v[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.stat-v[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1F2937;\n}\n.stat-l[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9CA3AF;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 4px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #374151;\n}\n.field[_ngcontent-%COMP%]   label.req[_ngcontent-%COMP%]::after {\n  content: " *";\n  color: #EF4444;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 40px;\n}\n/*# sourceMappingURL=public-quiz.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicQuizComponent, { className: "PublicQuizComponent" });
})();
export {
  PublicQuizComponent
};
//# sourceMappingURL=chunk-CTJUWT4N.js.map
