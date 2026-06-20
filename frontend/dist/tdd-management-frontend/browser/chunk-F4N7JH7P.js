import {
  InputNumberModule
} from "./chunk-KOUEGY3L.js";
import {
  InputText,
  InputTextModule
} from "./chunk-FZMUGTLW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule
} from "./chunk-QMTKQQCH.js";
import {
  ToastService
} from "./chunk-H7DSMCQO.js";
import {
  AutoFocus,
  AutoFocusModule,
  Button,
  ButtonModule,
  Ripple,
  RippleModule
} from "./chunk-6IMXQGBZ.js";
import {
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
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Output,
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
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PUKDGUBM.js";

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var _c0 = (a0, a1, a2) => ({
  "p-togglebutton p-button p-component": true,
  "p-button-icon-only": a0,
  "p-highlight": a1,
  "p-disabled": a2
});
var _c1 = (a0, a1) => ({
  "p-button-icon": true,
  "p-button-icon-left": a0,
  "p-button-icon-right": a1
});
var _c2 = (a0) => ({
  $implicit: a0
});
function ToggleButton_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c1, ctx_r0.iconPos === "left", ctx_r0.iconPos === "right"));
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function ToggleButton_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_1_span_0_Template, 1, 7, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.onIcon || ctx_r0.offIcon);
  }
}
function ToggleButton_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.checked));
  }
}
function ToggleButton_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : "" : ctx_r0.hasOffLabel ? ctx_r0.offLabel : "");
  }
}
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton {
  cd;
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel;
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel;
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  templates;
  iconTemplate;
  checked = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  constructor(cd) {
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this.iconTemplate = item.template;
          break;
        default:
          this.iconTemplate = item.template;
          break;
      }
    });
  }
  toggle(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.checked = !this.checked;
    this.onModelChange(this.checked);
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      checked: this.checked
    });
    this.cd.markForCheck();
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  onBlur() {
    this.onModelTouched();
  }
  writeValue(value) {
    this.checked = value;
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
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.offLabel && this.offLabel.length > 0;
  }
  static \u0275fac = function ToggleButton_Factory(t) {
    return new (t || _ToggleButton)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute],
      iconPos: "iconPos",
      autofocus: [InputFlags.HasDecoratorInputTransform, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 4,
    vars: 17,
    consts: [["role", "switch", "pRipple", "", "pAutoFocus", "", 3, "click", "keydown", "ngClass", "ngStyle", "autofocus"], [3, "class", "ngClass"], ["class", "p-button-label", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-button-label"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function ToggleButton_Template_div_click_0_listener($event) {
          return ctx.toggle($event);
        })("keydown", function ToggleButton_Template_div_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        });
        \u0275\u0275template(1, ToggleButton_Conditional_1_Template, 1, 1, "span", 1)(2, ToggleButton_Conditional_2_Template, 1, 4)(3, ToggleButton_span_3_Template, 2, 2, "span", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(13, _c0, ctx.onIcon && ctx.offIcon && !ctx.hasOnLabel && !ctx.hasOffLabel, ctx.checked, ctx.disabled))("ngStyle", ctx.style)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("tabindex", ctx.disabled ? null : ctx.tabindex)("aria-checked", ctx.checked)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("data-pc-name", "togglebutton")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275conditional(1, !ctx.iconTemplate ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.onLabel || ctx.offLabel);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, AutoFocus],
    styles: ['@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus, .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:focus   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus, .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:focus   .p-button[_ngcontent-%COMP%]{position:relative;z-index:1}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child), .p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child):hover, .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%], .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%]:hover, .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child), .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child):hover, .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%]:hover{border-right:0 none}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)   .p-button[_ngcontent-%COMP%]{border-radius:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}'],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton",
      template: `
        <div
            [ngClass]="{ 'p-togglebutton p-button p-component': true, 'p-button-icon-only': onIcon && offIcon && !hasOnLabel && !hasOffLabel, 'p-highlight': checked, 'p-disabled': disabled }"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="toggle($event)"
            (keydown)="onKeyDown($event)"
            [attr.tabindex]="disabled ? null : tabindex"
            role="switch"
            [attr.aria-checked]="checked"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            pRipple
            [attr.data-pc-name]="'togglebutton'"
            [attr.data-pc-section]="'root'"
            pAutoFocus
            [autofocus]="autofocus"
        >
            @if (!iconTemplate) {
                <span
                    *ngIf="onIcon || offIcon"
                    [class]="checked ? this.onIcon : this.offIcon"
                    [ngClass]="{ 'p-button-icon': true, 'p-button-icon-left': iconPos === 'left', 'p-button-icon-right': iconPos === 'right' }"
                    [attr.data-pc-section]="'icon'"
                ></span>
            } @else {
                <ng-container *ngTemplateOutlet="iconTemplate; context: { $implicit: checked }"></ng-container>
            }
            <span class="p-button-label" *ngIf="onLabel || offLabel" [attr.data-pc-section]="'label'">{{ checked ? (hasOnLabel ? onLabel : '') : hasOffLabel ? offLabel : '' }}</span>
        </div>
    `,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default;pointer-events:none}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-button-group .p-button{margin:0}.p-button-group .p-button:focus,.p-button-group p-button:focus .p-button,.p-buttonset .p-button:focus,.p-buttonset p-button:focus .p-button{position:relative;z-index:1}.p-button-group .p-button:not(:last-child),.p-button-group .p-button:not(:last-child):hover,.p-button-group p-button:not(:last-child) .p-button,.p-button-group p-button:not(:last-child) .p-button:hover,.p-buttonset .p-button:not(:last-child),.p-buttonset .p-button:not(:last-child):hover,.p-buttonset p-button:not(:last-child) .p-button,.p-buttonset p-button:not(:last-child) .p-button:hover{border-right:0 none}.p-button-group .p-button:not(:first-of-type):not(:last-of-type),.p-button-group p-button:not(:first-of-type):not(:last-of-type) .p-button,.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button{border-radius:0}.p-button-group .p-button:first-of-type:not(:only-of-type),.p-button-group p-button:first-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:first-of-type:not(:only-of-type),.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group .p-button:last-of-type:not(:only-of-type),.p-button-group p-button:last-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:last-of-type:not(:only-of-type),.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right] spinnericon{order:1}}\n']
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static \u0275fac = function ToggleButtonModule_Factory(t) {
    return new (t || _ToggleButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, RippleModule, SharedModule, AutoFocusModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, SharedModule, AutoFocusModule],
      exports: [ToggleButton, SharedModule],
      declarations: [ToggleButton]
    }]
  }], null, null);
})();

// src/app/admin/settings/settings.component.ts
function SettingsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_43_Template_input_ngModelChange_4_listener($event) {
      const key_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.fields[key_r2].label, $event) || (ctx_r2.fields[key_r2].label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "button", 31);
    \u0275\u0275listener("click", function SettingsComponent_div_43_Template_button_click_6_listener() {
      const key_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fields[key_r2].required = !ctx_r2.fields[key_r2].required);
    });
    \u0275\u0275element(7, "i", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22)(10, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_43_Template_input_ngModelChange_10_listener($event) {
      const key_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.fields[key_r2].max_length, $event) || (ctx_r2.fields[key_r2].max_length = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fieldLabels[key_r2]);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.fields[key_r2].label);
    \u0275\u0275property("placeholder", ctx_r2.fieldLabels[key_r2]);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r2.fields[key_r2].required);
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-check-circle", ctx_r2.fields[key_r2].required)("pi-circle", !ctx_r2.fields[key_r2].required);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.fields[key_r2].required ? "Yes" : "No", " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.fields[key_r2].max_length);
  }
}
var FIELD_KEYS = ["name", "middle_name", "last_name", "xetra_name", "mandal_name", "address"];
var SettingsComponent = class _SettingsComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  regOpen = signal(false);
  saving = false;
  loading = true;
  fieldKeys = FIELD_KEYS;
  fields = {
    name: { label: "Name", required: true, max_length: 100 },
    middle_name: { label: "Middle Name", required: false, max_length: 100 },
    last_name: { label: "Last Name", required: true, max_length: 100 },
    xetra_name: { label: "Xetra Name", required: false, max_length: 100 },
    mandal_name: { label: "Mandal Name", required: false, max_length: 100 },
    address: { label: "Address", required: false, max_length: 500 }
  };
  fieldLabels = {
    name: "Name",
    middle_name: "Middle Name",
    last_name: "Last Name",
    xetra_name: "Xetra Name",
    mandal_name: "Mandal Name",
    address: "Address"
  };
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.api.get("settings").subscribe({
      next: (res) => {
        if (res.success) {
          this.regOpen.set(!!res.data.reg_open);
          if (res.data.field_config) {
            for (const key of FIELD_KEYS) {
              if (res.data.field_config[key]) {
                this.fields[key] = __spreadValues(__spreadValues({}, this.fields[key]), res.data.field_config[key]);
              }
            }
          }
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  save() {
    this.saving = true;
    this.api.post("settings", {
      reg_open: this.regOpen() ? 1 : 0,
      field_config: this.fields
    }).subscribe({
      next: (res) => {
        if (res.success)
          this.toast.success("Settings saved successfully");
        this.saving = false;
      },
      error: (err) => {
        this.toast.error(err.error?.message || "Save failed");
        this.saving = false;
      }
    });
  }
  toggleReg() {
    this.regOpen.update((v) => !v);
  }
  static \u0275fac = function SettingsComponent_Factory(t) {
    return new (t || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 7, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", 2, "background", "linear-gradient(135deg,#4338CA,#6366F1)", "box-shadow", "0 4px 14px rgba(99,102,241,0.35)"], [1, "pi", "pi-cog"], [1, "hero-title"], [1, "hero-subtitle"], ["label", "Save Settings", "icon", "pi pi-save", 3, "click", "loading"], [1, "settings-card"], [1, "settings-card-header"], [1, "pi", "pi-globe"], [1, "settings-reg-row"], [1, "settings-reg-info"], [1, "settings-reg-title"], [1, "settings-reg-desc"], [1, "settings-toggle-wrap"], [1, "reg-toggle", 3, "click"], [1, "toggle-knob"], [1, "toggle-label"], [1, "pi", "pi-list"], [1, "settings-card-desc"], [1, "field-config-table"], [1, "fc-head"], [1, "text-center"], ["class", "fc-row", 4, "ngFor", "ngForOf"], [1, "settings-card", 2, "background", "#F9FAFB", "border", "1.5px dashed #E5E7EB"], [1, "settings-card-header", 2, "color", "#9CA3AF"], [1, "pi", "pi-info-circle"], [2, "margin", "0", "padding-left", "18px", "color", "#6B7280", "font-size", "0.88rem", "line-height", "1.8"], [1, "fc-row"], [1, "fc-name"], ["pInputText", "", 1, "fc-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "fc-req-btn", 3, "click"], [1, "pi"], ["type", "number", "min", "1", "max", "5000", 1, "fc-num-input", 3, "ngModelChange", "ngModel"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Global Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Configure registration and field validation rules");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p-button", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_p_button_click_9_listener() {
        return ctx.save();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Public Registration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div", 12);
      \u0275\u0275text(18, "Registration Open for Public");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13);
      \u0275\u0275text(20, ' When enabled, members can self-register via the public form. When disabled, the form shows "Registration is currently closed." ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_22_listener() {
        return ctx.toggleReg();
      });
      \u0275\u0275element(23, "span", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 7)(27, "div", 8);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Registration Field Configuration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "p", 19);
      \u0275\u0275text(32, " Configure labels, required status, and maximum character length for each registration field. These settings apply to both frontend validation and backend API validation. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 20)(34, "div", 21)(35, "div");
      \u0275\u0275text(36, "Field");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div");
      \u0275\u0275text(38, "Label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 22);
      \u0275\u0275text(40, "Required");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 22);
      \u0275\u0275text(42, "Max Length");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(43, SettingsComponent_div_43_Template, 11, 11, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 24)(45, "div", 25);
      \u0275\u0275element(46, "i", 26);
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "ul", 27)(50, "li");
      \u0275\u0275text(51, "Field labels apply only to the public registration form display.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "li");
      \u0275\u0275text(53, "Required and max-length rules are enforced on submit in both frontend and backend.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "li");
      \u0275\u0275text(55, "Closing registration does not affect members already registered.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("loading", ctx.saving);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.regOpen());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("open", ctx.regOpen());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.regOpen() ? "Open" : "Closed", " ");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.fieldKeys);
    }
  }, dependencies: [
    ReactiveFormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    MinValidator,
    MaxValidator,
    FormsModule,
    NgModel,
    NgForOf,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    InputNumberModule,
    ToggleButtonModule
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 12px;\n  padding: 22px 24px;\n  margin-bottom: 20px;\n}\n.settings-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #374151;\n  margin-bottom: 16px;\n}\n.settings-card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6366F1;\n}\n.settings-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #6B7280;\n  margin: -8px 0 16px;\n  line-height: 1.6;\n}\n.settings-reg-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.settings-reg-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.settings-reg-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1F2937;\n  margin-bottom: 4px;\n}\n.settings-reg-desc[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  color: #6B7280;\n  line-height: 1.55;\n}\n.settings-toggle-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.reg-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 52px;\n  height: 28px;\n  border-radius: 14px;\n  background: #D1D5DB;\n  border: none;\n  cursor: pointer;\n  transition: background 0.25s;\n  padding: 0;\n}\n.reg-toggle.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4338CA,\n      #6366F1);\n}\n.reg-toggle[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 22px;\n  height: 22px;\n  background: #fff;\n  border-radius: 50%;\n  transition: transform 0.25s;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n.reg-toggle.active[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%] {\n  transform: translateX(24px);\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #9CA3AF;\n  min-width: 52px;\n}\n.toggle-label.open[_ngcontent-%COMP%] {\n  color: #4338CA;\n}\n.field-config-table[_ngcontent-%COMP%] {\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.fc-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr 110px 110px;\n  background: #F9FAFB;\n  padding: 10px 16px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #6B7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1.5px solid #E5E7EB;\n}\n.fc-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr 110px 110px;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #F3F4F6;\n  gap: 12px;\n}\n.fc-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.fc-row[_ngcontent-%COMP%]:hover {\n  background: #FAFAFA;\n}\n.fc-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.fc-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 36px;\n  font-size: 0.88rem !important;\n  border: 1.5px solid #E5E7EB !important;\n  border-radius: 6px !important;\n  padding: 0 10px !important;\n}\n.fc-num-input[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 36px;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 6px;\n  padding: 0 10px;\n  font-size: 0.88rem;\n  text-align: center;\n  outline: none;\n}\n.fc-num-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366F1;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.fc-req-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #F3F4F6;\n  border: 1px solid #E5E7EB;\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #9CA3AF;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.fc-req-btn.on[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  border-color: #A5B4FC;\n  color: #4338CA;\n}\n.fc-req-btn.on[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4338CA;\n}\n.fc-req-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent" });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-F4N7JH7P.js.map
