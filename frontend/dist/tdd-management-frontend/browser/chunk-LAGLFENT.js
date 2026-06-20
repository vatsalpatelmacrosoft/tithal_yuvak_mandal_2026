import {
  Sidebar,
  SidebarModule
} from "./chunk-7LZ2K3I7.js";
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
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QMTKQQCH.js";
import {
  ToastService
} from "./chunk-H7DSMCQO.js";
import {
  CheckIcon
} from "./chunk-NTE4MRI5.js";
import {
  AutoFocus,
  AutoFocusModule,
  Button,
  ButtonModule
} from "./chunk-6IMXQGBZ.js";
import "./chunk-UQII2K3B.js";
import {
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-CJX7BHHU.js";
import {
  ApiService
} from "./chunk-IFU6TU4Y.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  EventEmitter,
  Injector,
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
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
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PUKDGUBM.js";

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
var _c0 = ["input"];
var _c1 = (a0, a1, a2, a3) => ({
  "p-checkbox p-component": true,
  "p-checkbox-checked": a0,
  "p-checkbox-disabled": a1,
  "p-checkbox-focused": a2,
  "p-variant-filled": a3
});
var _c2 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c3 = (a0, a1, a2) => ({
  "p-checkbox-label": true,
  "p-checkbox-label-active": a0,
  "p-disabled": a1,
  "p-checkbox-label-focus": a2
});
function Checkbox_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r2.checkboxIcon);
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_5_ng_container_1_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-checkbox-icon");
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Checkbox_ng_container_5_ng_container_1_span_1_Template, 1, 2, "span", 8)(2, Checkbox_ng_container_5_ng_container_1_CheckIcon_2_Template, 1, 2, "CheckIcon", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.checkboxIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.checkboxIcon);
  }
}
function Checkbox_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Checkbox_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Checkbox_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Checkbox_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275template(1, Checkbox_ng_container_5_span_2_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "icon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.checkboxIconTemplate);
  }
}
function Checkbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Checkbox_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Checkbox_ng_container_5_span_2_Template, 2, 2, "span", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.checkboxIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.checkboxIconTemplate);
  }
}
function Checkbox_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 14);
    \u0275\u0275listener("click", function Checkbox_label_6_Template_label_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      const input_r2 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(ctx_r2.onClick($event, input_r2, true));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.labelStyleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c3, ctx_r2.checked(), ctx_r2.disabled, ctx_r2.focused));
    \u0275\u0275attribute("for", ctx_r2.inputId)("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label, "");
  }
}
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Checkbox),
  multi: true
};
var Checkbox = class _Checkbox {
  cd;
  injector;
  config;
  /**
   * Value of the checkbox.
   * @group Props
   */
  value;
  /**
   * Name of the checkbox group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Allows to select a boolean value instead of multiple values.
   * @group Props
   */
  binary;
  /**
   * Label of the checkbox.
   * @group Props
   */
  label;
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
   * Form control value.
   * @group Props
   */
  formControl;
  /**
   * Icon class of the checkbox icon.
   * @group Props
   */
  checkboxIcon;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that checkbox must be checked before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Callback to invoke on value change.
   * @param {CheckboxChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
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
  templates;
  checkboxIconTemplate;
  model;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focused = false;
  constructor(cd, injector, config) {
    this.cd = cd;
    this.injector = injector;
    this.config = config;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this.checkboxIconTemplate = item.template;
          break;
      }
    });
  }
  onClick(event, checkbox, focus) {
    event.preventDefault();
    if (this.disabled || this.readonly) {
      return;
    }
    this.updateModel(event);
    if (focus) {
      checkbox.focus();
    }
  }
  updateModel(event) {
    let newModelValue;
    const selfControl = this.injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    const currentModelValue = selfControl && !this.formControl ? selfControl.value : this.model;
    if (!this.binary) {
      if (this.checked())
        newModelValue = currentModelValue.filter((val) => !ObjectUtils.equals(val, this.value));
      else
        newModelValue = currentModelValue ? [...currentModelValue, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.model = newModelValue;
      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this.checked() ? this.falseValue : this.trueValue;
      this.model = newModelValue;
      this.onModelChange(newModelValue);
    }
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }
  handleChange(event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  writeValue(model) {
    this.model = model;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    setTimeout(() => {
      this.disabled = val;
      this.cd.markForCheck();
    });
  }
  checked() {
    return this.binary ? this.model === this.trueValue : ObjectUtils.contains(this.value, this.model);
  }
  static \u0275fac = function Checkbox_Factory(t) {
    return new (t || _Checkbox)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Checkbox,
    selectors: [["p-checkbox"]],
    contentQueries: function Checkbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Checkbox_Query(rf, ctx) {
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
      name: "name",
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      binary: [InputFlags.HasDecoratorInputTransform, "binary", "binary", booleanAttribute],
      label: "label",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      style: "style",
      styleClass: "styleClass",
      labelStyleClass: "labelStyleClass",
      formControl: "formControl",
      checkboxIcon: "checkboxIcon",
      readonly: [InputFlags.HasDecoratorInputTransform, "readonly", "readonly", booleanAttribute],
      required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
      autofocus: [InputFlags.HasDecoratorInputTransform, "autofocus", "autofocus", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      variant: "variant"
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 7,
    vars: 37,
    consts: [["input", ""], [3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "pAutoFocus", "", 3, "change", "focus", "blur", "value", "checked", "disabled", "readonly", "autofocus"], [1, "p-checkbox-box", 3, "click", "ngClass"], [4, "ngIf"], [3, "class", "ngClass", "click", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], ["class", "p-checkbox-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"], [3, "click", "ngClass"]],
    template: function Checkbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "input", 3, 0);
        \u0275\u0275listener("change", function Checkbox_Template_input_change_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleChange($event));
        })("focus", function Checkbox_Template_input_focus_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function Checkbox_Template_input_blur_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275listener("click", function Checkbox_Template_div_click_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          const input_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(ctx.onClick($event, input_r2, true));
        });
        \u0275\u0275template(5, Checkbox_ng_container_5_Template, 3, 2, "ng-container", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, Checkbox_label_6_Template, 2, 10, "label", 6);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction4(28, _c1, ctx.checked(), ctx.disabled, ctx.focused, ctx.variant === "filled" || ctx.config.inputStyle() === "filled"));
        \u0275\u0275attribute("data-pc-name", "checkbox")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "hiddenInputWrapper")("data-p-hidden-accessible", true);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.value)("checked", ctx.checked())("disabled", ctx.disabled)("readonly", ctx.readonly)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("required", ctx.required)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked())("data-pc-section", "hiddenInput");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(33, _c2, ctx.checked(), ctx.disabled, ctx.focused));
        \u0275\u0275attribute("data-p-highlight", ctx.checked())("data-p-disabled", ctx.disabled)("data-p-focused", ctx.focused)("data-pc-section", "input");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.checked());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, CheckIcon],
    styles: ["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkbox, [{
    type: Component,
    args: [{
      selector: "p-checkbox",
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-checkbox p-component': true,
                'p-checkbox-checked': checked(),
                'p-checkbox-disabled': disabled,
                'p-checkbox-focused': focused,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'checkbox'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    [value]="value"
                    [attr.name]="name"
                    [checked]="checked()"
                    [attr.tabindex]="tabindex"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [attr.required]="required"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-checked]="checked()"
                    (change)="handleChange($event)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div
                class="p-checkbox-box"
                [ngClass]="{ 'p-highlight': checked(), 'p-disabled': disabled, 'p-focus': focused }"
                (click)="onClick($event, input, true)"
                [attr.data-p-highlight]="checked()"
                [attr.data-p-disabled]="disabled"
                [attr.data-p-focused]="focused"
                [attr.data-pc-section]="'input'"
            >
                <ng-container *ngIf="checked()">
                    <ng-container *ngIf="!checkboxIconTemplate">
                        <span *ngIf="checkboxIcon" class="p-checkbox-icon" [ngClass]="checkboxIcon" [attr.data-pc-section]="'icon'"></span>
                        <CheckIcon *ngIf="!checkboxIcon" [styleClass]="'p-checkbox-icon'" [attr.data-pc-section]="'icon'" />
                    </ng-container>
                    <span *ngIf="checkboxIconTemplate" class="p-checkbox-icon" [attr.data-pc-section]="'icon'">
                        <ng-template *ngTemplateOutlet="checkboxIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
        </div>
        <label
            (click)="onClick($event, input, true)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-checkbox-label': true, 'p-checkbox-label-active': checked(), 'p-disabled': disabled, 'p-checkbox-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
        >
            {{ label }}</label
        >
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: PrimeNGConfig
  }], {
    value: [{
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
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
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
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    formControl: [{
      type: Input
    }],
    checkboxIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    onChange: [{
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
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CheckboxModule = class _CheckboxModule {
  static \u0275fac = function CheckboxModule_Factory(t) {
    return new (t || _CheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CheckboxModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, AutoFocusModule, CheckIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule, CheckIcon],
      exports: [Checkbox, SharedModule],
      declarations: [Checkbox]
    }]
  }], null, null);
})();

// src/app/admin/roles/roles.component.ts
var _c02 = () => ({ width: "380px" });
function RolesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function RolesComponent_div_16_Template_div_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRole(r_r2));
    });
    \u0275\u0275elementStart(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ((tmp_2_0 = ctx_r2.selected()) == null ? null : tmp_2_0.uuid) === r_r2.uuid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.code);
  }
}
function RolesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2, " No roles yet ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_18_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "SUPER ADMIN");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "p-button", 44);
    \u0275\u0275listener("click", function RolesComponent_div_18_div_8_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 45);
    \u0275\u0275listener("click", function RolesComponent_div_18_div_8_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.savePermissions());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.savingPerms);
  }
}
function RolesComponent_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, " Saved ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_18_th_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 48)(1, "div", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "p-checkbox", 50);
    \u0275\u0275listener("ngModelChange", function RolesComponent_div_18_th_15_Template_p_checkbox_ngModelChange_3_listener($event) {
      const col_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleAll(col_r6.key, $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", col_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.allSelected(col_r6.key))("binary", true);
  }
}
function RolesComponent_div_18_tr_17_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 54)(1, "p-checkbox", 50);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_18_tr_17_td_3_Template_p_checkbox_ngModelChange_1_listener($event) {
      const col_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const p_r9 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(p_r9[col_r8.key], $event) || (p_r9[col_r8.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RolesComponent_div_18_tr_17_td_3_Template_p_checkbox_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.markDirty());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", p_r9[col_r8.key]);
    \u0275\u0275property("binary", true);
  }
}
function RolesComponent_div_18_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RolesComponent_div_18_tr_17_td_3_Template, 2, 2, "td", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const even_r10 = ctx.even;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", even_r10 ? "#FAFBFF" : "#fff");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.menu_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.permCols);
  }
}
function RolesComponent_div_18_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "p-button", 44);
    \u0275\u0275listener("click", function RolesComponent_div_18_div_18_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 45);
    \u0275\u0275listener("click", function RolesComponent_div_18_div_18_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.savePermissions());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.savingPerms);
  }
}
function RolesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div")(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6, " Manage module-level permissions ");
    \u0275\u0275template(7, RolesComponent_div_18_span_7_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, RolesComponent_div_18_div_8_Template, 3, 2, "div", 34)(9, RolesComponent_div_18_div_9_Template, 3, 0, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "table", 36)(11, "thead")(12, "tr", 37)(13, "th", 38);
    \u0275\u0275text(14, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RolesComponent_div_18_th_15_Template, 4, 3, "th", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, RolesComponent_div_18_tr_17_Template, 4, 4, "tr", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, RolesComponent_div_18_div_18_Template, 3, 2, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r2.selected()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r2.selected()) == null ? null : tmp_2_0.code) === "SUPER_ADMIN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dirty);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dirty);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.permCols);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pending());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dirty);
  }
}
function RolesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275text(3, " Select a role from the left to manage permissions ");
    \u0275\u0275elementEnd()();
  }
}
function RolesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 60);
    \u0275\u0275text(2, "Add Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "p-button", 44);
    \u0275\u0275listener("click", function RolesComponent_ng_template_21_Template_p_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 61);
    \u0275\u0275listener("click", function RolesComponent_ng_template_21_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveRole());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.saving);
  }
}
function RolesComponent_small_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 62);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_small_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 62);
    \u0275\u0275text(1, "Code is required");
    \u0275\u0275elementEnd();
  }
}
var RolesComponent = class _RolesComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  roles = signal([]);
  selected = signal(null);
  pending = signal([]);
  saved = [];
  dirty = false;
  showForm = false;
  saving = false;
  savingPerms = false;
  form = this.fb.group({ name: ["", Validators.required], code: ["", Validators.required] });
  permCols = [
    { key: "can_view", label: "View" },
    { key: "can_create", label: "Create" },
    { key: "can_update", label: "Update" },
    { key: "can_delete", label: "Delete" }
  ];
  allSelected(key) {
    const ps = this.pending();
    return ps.length > 0 && ps.every((p) => p[key]);
  }
  toggleAll(key, val) {
    this.pending.update((ps) => ps.map((p) => __spreadProps(__spreadValues({}, p), { [key]: val })));
    this.dirty = true;
  }
  markDirty() {
    this.dirty = true;
  }
  ngOnInit() {
    this.loadRoles();
  }
  loadRoles() {
    this.api.get("roles").subscribe((r) => {
      if (r.success)
        this.roles.set(r.data);
    });
  }
  normPerms(perms) {
    return perms.map((p) => __spreadProps(__spreadValues({}, p), {
      can_view: !!p.can_view,
      can_create: !!p.can_create,
      can_update: !!p.can_update,
      can_delete: !!p.can_delete
    }));
  }
  selectRole(role) {
    if (this.dirty) {
      if (!confirm("You have unsaved changes. Discard them?"))
        return;
    }
    this.selected.set(role);
    this.dirty = false;
    this.api.get(`roles/${role.uuid}`).subscribe((res) => {
      if (res.success) {
        const normalized = this.normPerms(res.data.permissions || []);
        this.saved = JSON.parse(JSON.stringify(normalized));
        this.pending.set(JSON.parse(JSON.stringify(normalized)));
      }
    });
  }
  cancelChanges() {
    this.pending.set(this.normPerms(JSON.parse(JSON.stringify(this.saved))));
    this.dirty = false;
  }
  openForm() {
    this.form.reset();
    this.showForm = true;
  }
  saveRole() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.api.post("roles", this.form.value).subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success("Role created");
          this.showForm = false;
          this.loadRoles();
        }
        this.saving = false;
      },
      error: (err) => {
        this.saving = false;
        this.toast.error(err.error?.message || "Error");
      }
    });
  }
  savePermissions() {
    const role = this.selected();
    if (!role)
      return;
    this.savingPerms = true;
    const perms = this.pending().map((p) => ({
      menu_id: p.menu_id,
      can_view: p.can_view ? 1 : 0,
      can_create: p.can_create ? 1 : 0,
      can_update: p.can_update ? 1 : 0,
      can_delete: p.can_delete ? 1 : 0
    }));
    this.api.put(`roles/${role.uuid}/permissions`, { permissions: perms }).subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success("Permissions saved");
          this.saved = this.normPerms(JSON.parse(JSON.stringify(this.pending())));
          this.dirty = false;
        }
        this.savingPerms = false;
      },
      error: () => {
        this.savingPerms = false;
        this.toast.error("Save failed");
      }
    });
  }
  static \u0275fac = function RolesComponent_Factory(t) {
    return new (t || _RolesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 13, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "indigo"], [1, "pi", "pi-id-card"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge"], ["label", "Add Role", "icon", "pi pi-plus", 3, "click"], [2, "display", "grid", "grid-template-columns", "280px 1fr", "gap", "20px"], [1, "table-card", 2, "padding", "0", "overflow", "hidden"], [2, "padding", "12px 16px", "background", "#F8FAFC", "border-bottom", "1px solid #E5E7EB", "font-size", "0.78rem", "font-weight", "700", "text-transform", "uppercase", "letter-spacing", "0.06em", "color", "#6B7280"], ["class", "role-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["style", "padding:32px;text-align:center;color:#9CA3AF", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "table-card", "style", "display:flex;align-items:center;justify-content:center;min-height:220px", 4, "ngIf"], ["position", "right", 3, "visibleChange", "visible", "dismissible"], ["pTemplate", "header"], [3, "ngSubmit", "formGroup"], [1, "field", 2, "margin-bottom", "18px"], [1, "required"], ["pInputText", "", "formControlName", "name", "placeholder", "e.g. Coordinator", 2, "width", "100%"], ["class", "p-error", 4, "ngIf"], [1, "field"], ["pInputText", "", "formControlName", "code", "placeholder", "e.g. COORD", 2, "width", "100%", "text-transform", "uppercase"], [1, "role-item", 3, "click"], [1, "role-name"], [1, "role-code"], [2, "padding", "32px", "text-align", "center", "color", "#9CA3AF"], [1, "pi", "pi-id-card", 2, "font-size", "1.5rem", "display", "block", "margin-bottom", "8px"], [1, "table-card"], [2, "padding", "16px 20px", "border-bottom", "1px solid #F3F4F6", "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "font-weight", "700", "color", "#1F2937", "font-size", "1rem"], [2, "font-size", "0.82rem", "color", "#6B7280", "margin-top", "2px"], ["style", "margin-left:8px;background:#FEF3C7;color:#92400E;border-radius:4px;padding:2px 8px;font-size:0.72rem;font-weight:700", 4, "ngIf"], ["style", "display:flex;gap:8px", 4, "ngIf"], ["style", "font-size:0.82rem;color:#9CA3AF;display:flex;align-items:center;gap:5px", 4, "ngIf"], [2, "width", "100%", "border-collapse", "collapse"], [2, "background", "#F8FAFC"], [2, "padding", "12px 16px", "text-align", "left", "font-size", "0.78rem", "font-weight", "700", "text-transform", "uppercase", "letter-spacing", "0.05em", "color", "#6B7280", "border-bottom", "2px solid #E5E7EB"], ["style", "width:110px;padding:12px 8px;border-bottom:2px solid #E5E7EB", 4, "ngFor", "ngForOf"], ["class", "perm-row", 3, "background", 4, "ngFor", "ngForOf"], ["style", "padding:14px 20px;border-top:1px solid #F3F4F6;background:#F8FAFC;display:flex;justify-content:flex-end;gap:8px", 4, "ngIf"], [2, "margin-left", "8px", "background", "#FEF3C7", "color", "#92400E", "border-radius", "4px", "padding", "2px 8px", "font-size", "0.72rem", "font-weight", "700"], [2, "display", "flex", "gap", "8px"], ["label", "Cancel", "size", "small", 3, "click", "outlined"], ["label", "Save Permissions", "icon", "pi pi-save", "size", "small", 3, "click", "loading"], [2, "font-size", "0.82rem", "color", "#9CA3AF", "display", "flex", "align-items", "center", "gap", "5px"], [1, "pi", "pi-check-circle", 2, "color", "#10B981"], [2, "width", "110px", "padding", "12px 8px", "border-bottom", "2px solid #E5E7EB"], [1, "col-header"], [3, "ngModelChange", "ngModel", "binary"], [1, "perm-row"], [2, "font-weight", "500", "text-transform", "capitalize", "color", "#374151"], ["class", "perm-check", 4, "ngFor", "ngForOf"], [1, "perm-check"], [2, "padding", "14px 20px", "border-top", "1px solid #F3F4F6", "background", "#F8FAFC", "display", "flex", "justify-content", "flex-end", "gap", "8px"], [1, "table-card", 2, "display", "flex", "align-items", "center", "justify-content", "center", "min-height", "220px"], [2, "text-align", "center", "color", "#9CA3AF"], [1, "pi", "pi-arrow-left", 2, "font-size", "1.5rem", "display", "block", "margin-bottom", "10px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "flex", "1", "margin-right", "8px"], [2, "font-weight", "700", "font-size", "1rem", "color", "#1F2937"], ["label", "Create", "size", "small", 3, "click", "loading"], [1, "p-error"]], template: function RolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Roles & Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Define roles and control what each role can access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "p-button", 7);
      \u0275\u0275listener("click", function RolesComponent_Template_p_button_click_11_listener() {
        return ctx.openForm();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div", 10);
      \u0275\u0275text(15, " All Roles ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, RolesComponent_div_16_Template, 5, 4, "div", 11)(17, RolesComponent_div_17_Template, 3, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, RolesComponent_div_18_Template, 19, 7, "div", 13)(19, RolesComponent_div_19_Template, 4, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p-sidebar", 15);
      \u0275\u0275twoWayListener("visibleChange", function RolesComponent_Template_p_sidebar_visibleChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
        return $event;
      });
      \u0275\u0275template(21, RolesComponent_ng_template_21_Template, 6, 2, "ng-template", 16);
      \u0275\u0275elementStart(22, "form", 17);
      \u0275\u0275listener("ngSubmit", function RolesComponent_Template_form_ngSubmit_22_listener() {
        return ctx.saveRole();
      });
      \u0275\u0275elementStart(23, "div", 18)(24, "label", 19);
      \u0275\u0275text(25, "Role Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 20);
      \u0275\u0275template(27, RolesComponent_small_27_Template, 2, 0, "small", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 22)(29, "label", 19);
      \u0275\u0275text(30, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 23);
      \u0275\u0275template(32, RolesComponent_small_32_Template, 2, 0, "small", 21);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.roles().length, " Role");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.roles());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.roles().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selected());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selected());
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(12, _c02));
      \u0275\u0275twoWayProperty("visible", ctx.showForm);
      \u0275\u0275property("dismissible", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("name")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.form.get("name")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.form.get("code")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.form.get("code")) == null ? null : tmp_10_0.touched));
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
    NgIf,
    NgForOf,
    ButtonModule,
    Button,
    PrimeTemplate,
    SidebarModule,
    Sidebar,
    InputTextModule,
    InputText,
    CheckboxModule,
    Checkbox
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=roles.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent" });
})();
export {
  RolesComponent
};
//# sourceMappingURL=chunk-LAGLFENT.js.map
