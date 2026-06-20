import {
  ExclamationTriangleIcon,
  InfoCircleIcon,
  Toast,
  ToastModule
} from "./chunk-HQLDCRMT.js";
import {
  InputTextarea,
  InputTextareaModule
} from "./chunk-DPHQHCY6.js";
import {
  TimesCircleIcon
} from "./chunk-SPF6R22M.js";
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
import {
  CheckIcon
} from "./chunk-UAHN6Q6E.js";
import "./chunk-6KFP5JIF.js";
import {
  Button,
  ButtonModule
} from "./chunk-EWFPHMRU.js";
import "./chunk-YQH4GAYX.js";
import {
  Footer,
  Header,
  ObjectUtils,
  PrimeTemplate,
  SharedModule
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
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  InputFlags,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  TitleCasePipe,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
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
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2TIVPBG5.js";

// node_modules/primeng/fesm2022/primeng-card.mjs
var _c0 = ["*", [["p-header"]], [["p-footer"]]];
var _c1 = ["*", "p-header", "p-footer"];
function Card_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275template(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.titleTemplate);
  }
}
function Card_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275template(2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.subheader, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.subtitleTemplate);
  }
}
function Card_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
var Card = class _Card {
  el;
  /**
   * Header of the card.
   * @group Props
   */
  header;
  /**
   * Subheader of the card.
   * @group Props
   */
  subheader;
  /**
   * Inline style of the element.
   * @group Props
   */
  set style(value) {
    if (!ObjectUtils.equals(this._style(), value)) {
      this._style.set(value);
    }
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  headerFacet;
  footerFacet;
  templates;
  headerTemplate;
  titleTemplate;
  subtitleTemplate;
  contentTemplate;
  footerTemplate;
  _style = signal(null);
  constructor(el) {
    this.el = el;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "title":
          this.titleTemplate = item.template;
          break;
        case "subtitle":
          this.subtitleTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  static \u0275fac = function Card_Factory(t) {
    return new (t || _Card)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Card,
    selectors: [["p-card"]],
    contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      header: "header",
      subheader: "subheader",
      style: "style",
      styleClass: "styleClass"
    },
    ngContentSelectors: _c1,
    decls: 9,
    vars: 10,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [1, "p-card-subtitle"], [1, "p-card-footer"]],
    template: function Card_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, Card_div_1_Template, 3, 1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275template(3, Card_div_3_Template, 3, 2, "div", 3)(4, Card_div_4_Template, 3, 2, "div", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275projection(6);
        \u0275\u0275template(7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, Card_div_8_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", "p-card p-component")("ngStyle", ctx._style());
        \u0275\u0275attribute("data-pc-name", "card");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.header || ctx.titleTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subheader || ctx.subtitleTemplate);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-card-header img{width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
    type: Component,
    args: [{
      selector: "p-card",
      template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate">
                    {{ header }}
                    <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">
                    {{ subheader }}
                    <ng-container *ngTemplateOutlet="subtitleTemplate"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-card-header img{width:100%}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    header: [{
      type: Input
    }],
    subheader: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CardModule = class _CardModule {
  static \u0275fac = function CardModule_Factory(t) {
    return new (t || _CardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CardModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Card, SharedModule],
      declarations: [Card]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-message.mjs
function UIMessage_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_InfoCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "InfoCircleIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_TimesCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesCircleIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_ExclamationTriangleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ExclamationTriangleIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r0.text, \u0275\u0275sanitizeHtml);
  }
}
function UIMessage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, UIMessage_div_5_span_1_Template, 1, 1, "span", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.escape);
  }
}
function UIMessage_ng_template_6_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.text);
  }
}
function UIMessage_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UIMessage_ng_template_6_span_0_Template, 2, 1, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.escape);
  }
}
var UIMessage = class _UIMessage {
  /**
   * Severity level of the message.
   * @group Props
   */
  severity;
  /**
   * Text content.
   * @group Props
   */
  text;
  /**
   * Whether displaying messages would be escaped or not.
   * @group Props
   */
  escape = true;
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
  get icon() {
    if (this.severity) {
      return this.severity;
    } else {
      return "info";
    }
  }
  get containerClass() {
    return {
      [`p-inline-message-${this.severity}`]: this.severity,
      "p-inline-message-icon-only": this.text == null
    };
  }
  static \u0275fac = function UIMessage_Factory(t) {
    return new (t || _UIMessage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UIMessage,
    selectors: [["p-message"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      severity: "severity",
      text: "text",
      escape: [InputFlags.HasDecoratorInputTransform, "escape", "escape", booleanAttribute],
      style: "style",
      styleClass: "styleClass"
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 8,
    vars: 10,
    consts: [["escapeOut", ""], ["aria-live", "polite", 1, "p-inline-message", "p-component", "p-inline-message", 3, "ngStyle", "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "styleClass"], ["class", "p-inline-message-text", 3, "innerHTML", 4, "ngIf"], [1, "p-inline-message-text", 3, "innerHTML"], ["class", "p-inline-message-text", 4, "ngIf"], [1, "p-inline-message-text"]],
    template: function UIMessage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, UIMessage_CheckIcon_1_Template, 1, 1, "CheckIcon", 2)(2, UIMessage_InfoCircleIcon_2_Template, 1, 1, "InfoCircleIcon", 2)(3, UIMessage_TimesCircleIcon_3_Template, 1, 1, "TimesCircleIcon", 2)(4, UIMessage_ExclamationTriangleIcon_4_Template, 1, 1, "ExclamationTriangleIcon", 2)(5, UIMessage_div_5_Template, 2, 1, "div", 3)(6, UIMessage_ng_template_6_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const escapeOut_r2 = \u0275\u0275reference(7);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", ctx.containerClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.icon === "success");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.icon === "info");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.icon === "error");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.icon === "warn");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.escape)("ngIfElse", escapeOut_r2);
      }
    },
    dependencies: () => [NgClass, NgIf, NgStyle, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
    styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UIMessage, [{
    type: Component,
    args: [{
      selector: "p-message",
      template: `
        <div aria-live="polite" class="p-inline-message p-component p-inline-message" [ngStyle]="style" [class]="styleClass" [ngClass]="containerClass">
            <CheckIcon *ngIf="icon === 'success'" [styleClass]="'p-inline-message-icon'" />
            <InfoCircleIcon *ngIf="icon === 'info'" [styleClass]="'p-inline-message-icon'" />
            <TimesCircleIcon *ngIf="icon === 'error'" [styleClass]="'p-inline-message-icon'" />
            <ExclamationTriangleIcon *ngIf="icon === 'warn'" [styleClass]="'p-inline-message-icon'" />
            <div *ngIf="!escape; else escapeOut">
                <span *ngIf="!escape" class="p-inline-message-text" [innerHTML]="text"></span>
            </div>
            <ng-template #escapeOut>
                <span *ngIf="escape" class="p-inline-message-text">{{ text }}</span>
            </ng-template>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"]
    }]
  }], null, {
    severity: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    escape: [{
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
    }]
  });
})();
var MessageModule = class _MessageModule {
  static \u0275fac = function MessageModule_Factory(t) {
    return new (t || _MessageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MessageModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
      exports: [UIMessage],
      declarations: [UIMessage]
    }]
  }], null, null);
})();

// src/app/public/register/register.component.ts
var _c02 = (a0) => ({ "ng-invalid ng-dirty": a0 });
function RegisterComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p-card")(2, "div", 6);
    \u0275\u0275element(3, "i", 7);
    \u0275\u0275elementStart(4, "h2", 8);
    \u0275\u0275text(5, "Registration Closed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7, "Registration is not available. Please contact the admin.");
    \u0275\u0275elementEnd()()()();
  }
}
function RegisterComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p-card")(2, "div", 6);
    \u0275\u0275element(3, "i", 10);
    \u0275\u0275elementStart(4, "h2", 8);
    \u0275\u0275text(5, "Registration Successful!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "p", 13);
    \u0275\u0275text(10, "Your ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "p", 16);
    \u0275\u0275element(15, "i", 17);
    \u0275\u0275text(16, " Your Welcome Card Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 18)(18, "span", 19);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275listener("click", function RegisterComponent_div_7_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyLink());
    });
    \u0275\u0275element(21, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p", 22);
    \u0275\u0275text(23, " Open this link to view your digital welcome card and QR code. ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Your ", ctx_r1.formType, " ID has been created.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.memberId);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.welcomeLink);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.copied ? "Copied!" : "Copy link");
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-copy", !ctx_r1.copied)("pi-check", ctx_r1.copied);
  }
}
function RegisterComponent_div_8_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErr("first_name"));
  }
}
function RegisterComponent_div_8_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErr("last_name"));
  }
}
function RegisterComponent_div_8_small_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErr("mo_number"));
  }
}
function RegisterComponent_div_8_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1, "Please select a Xetra");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_8_small_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1, "Please select a Mandal");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p-card", 23)(2, "form", 24);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_div_8_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(3, "div", 25)(4, "div", 26)(5, "label", 27);
    \u0275\u0275text(6, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 28);
    \u0275\u0275template(8, RegisterComponent_div_8_small_8_Template, 2, 1, "small", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26)(10, "label");
    \u0275\u0275text(11, "Middle Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 26)(14, "label", 27);
    \u0275\u0275text(15, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 31);
    \u0275\u0275template(17, RegisterComponent_div_8_small_17_Template, 2, 1, "small", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 26)(19, "label", 27);
    \u0275\u0275text(20, "Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 32);
    \u0275\u0275template(22, RegisterComponent_div_8_small_22_Template, 2, 1, "small", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 26)(24, "label");
    \u0275\u0275text(25, "WhatsApp Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 26)(28, "label");
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 26)(32, "label");
    \u0275\u0275text(33, "Karyakar Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-dropdown", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 26)(36, "label", 27);
    \u0275\u0275text(37, "Xetra");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "p-dropdown", 36);
    \u0275\u0275template(39, RegisterComponent_div_8_small_39_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 26)(41, "label", 27);
    \u0275\u0275text(42, "Mandal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "p-dropdown", 37);
    \u0275\u0275template(44, RegisterComponent_div_8_small_44_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 38)(46, "label");
    \u0275\u0275text(47, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "textarea", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 40);
    \u0275\u0275element(50, "p-button", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c02, ctx_r1.hasErr("first_name")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasErr("first_name"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c02, ctx_r1.hasErr("last_name")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasErr("last_name"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c02, ctx_r1.hasErr("mo_number")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasErr("mo_number"));
    \u0275\u0275advance(12);
    \u0275\u0275property("options", ctx_r1.karyakarOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.xetras)("ngClass", \u0275\u0275pureFunction1(23, _c02, ctx_r1.hasErr("xetra_id")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasErr("xetra_id"));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.mandals)("placeholder", ctx_r1.loadingMandals ? "Loading..." : !((tmp_13_0 = ctx_r1.form.get("xetra_id")) == null ? null : tmp_13_0.value) ? "Select Xetra first" : "Select Mandal")("disabled", !((tmp_14_0 = ctx_r1.form.get("xetra_id")) == null ? null : tmp_14_0.value) || ctx_r1.loadingMandals)("ngClass", \u0275\u0275pureFunction1(25, _c02, ctx_r1.hasErr("mandal_id")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasErr("mandal_id"));
    \u0275\u0275advance(6);
    \u0275\u0275property("loading", ctx_r1.saving);
  }
}
var RegisterComponent = class _RegisterComponent {
  route = inject(ActivatedRoute);
  api = inject(ApiService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  formType = "";
  inactive = false;
  success = false;
  saving = false;
  memberId = "";
  memberUuid = "";
  welcomeLink = "";
  copied = false;
  xetras = [];
  mandals = [];
  loadingMandals = false;
  apiErrors = {};
  karyakarOptions = [
    { label: "No", value: "no" },
    { label: "Bal Karyakar", value: "bal" },
    { label: "Yuva Karyakar", value: "yuva" },
    { label: "Sanyukta Karyakar", value: "sanyukta" }
  ];
  form = this.fb.group({
    first_name: ["", Validators.required],
    middle_name: [""],
    last_name: ["", Validators.required],
    mo_number: ["", [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    whatsapp_number: [""],
    email: ["", Validators.email],
    address: [""],
    xetra_id: [null, Validators.required],
    mandal_id: [null, Validators.required],
    is_karyakar: ["no"]
  });
  ngOnInit() {
    this.formType = this.route.snapshot.params["type"];
    this.api.publicGet(`register/${this.formType}`).subscribe({
      next: (res) => {
        if (res.success)
          this.xetras = res.data.xetras;
      },
      error: (err) => {
        if (err.status === 403)
          this.inactive = true;
      }
    });
    this.form.get("xetra_id").valueChanges.subscribe((xetraId) => {
      this.form.patchValue({ mandal_id: null });
      this.mandals = [];
      if (!xetraId)
        return;
      this.loadingMandals = true;
      this.api.publicGet(`mandal?xetra_id=${xetraId}`).subscribe({
        next: (res) => {
          if (res.success)
            this.mandals = res.data;
          this.loadingMandals = false;
        },
        error: () => {
          this.loadingMandals = false;
        }
      });
    });
  }
  copyLink() {
    navigator.clipboard.writeText(this.welcomeLink).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2500);
    });
  }
  hasErr(f) {
    const c = this.form.get(f);
    return c?.invalid && c.touched || !!this.apiErrors[f];
  }
  getErr(f) {
    if (this.apiErrors[f])
      return this.apiErrors[f];
    const c = this.form.get(f);
    if (c?.errors?.["required"])
      return "This field is required";
    if (c?.errors?.["pattern"])
      return "Invalid mobile number (10 digits, starts 6-9)";
    if (c?.errors?.["email"])
      return "Invalid email";
    return "";
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.apiErrors = {};
    this.api.publicPost(`register/${this.formType}`, this.form.value).subscribe({
      next: (res) => {
        if (res.success) {
          this.success = true;
          this.memberId = res.data?.yuvak_id || res.data?.yuvati_id || "";
          this.memberUuid = res.data?.uuid || "";
          this.welcomeLink = `${window.location.origin}/welcome/${this.formType}/${this.memberUuid}`;
        }
        this.saving = false;
      },
      error: (err) => {
        this.saving = false;
        if (err.error?.errors) {
          this.apiErrors = err.error.errors;
          this.form.markAllAsTouched();
        } else
          this.toast.error(err.error?.message || "Registration failed");
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(t) {
    return new (t || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 6, consts: [[1, "public-page"], [1, "public-header"], ["src", "assets/Baps_logo.svg.png", "alt", "BAPS", 2, "width", "40px", "height", "40px", "object-fit", "contain"], ["class", "public-body", 4, "ngIf"], ["position", "bottom-right"], [1, "public-body"], [2, "text-align", "center", "padding", "40px 20px"], [1, "pi", "pi-lock", 2, "font-size", "56px", "color", "#D1D5DB", "display", "block", "margin-bottom", "16px"], [2, "color", "#374151"], [2, "color", "#9CA3AF", "margin-top", "8px"], [1, "pi", "pi-check-circle", 2, "font-size", "56px", "color", "#10B981", "display", "block", "margin-bottom", "16px"], [2, "color", "#6B7280", "margin-top", "8px"], [2, "background", "#FFF0E0", "border-radius", "12px", "padding", "24px", "margin-top", "24px", "display", "inline-block"], [2, "font-size", "0.85rem", "color", "#9CA3AF", "margin-bottom", "4px"], [2, "font-size", "1.5rem", "font-weight", "700", "color", "#CC5500", "letter-spacing", "2px"], [2, "margin-top", "24px", "background", "#F0FDF4", "border", "1px solid #BBF7D0", "border-radius", "12px", "padding", "18px 20px", "text-align", "left"], [2, "font-size", "0.82rem", "color", "#166534", "font-weight", "600", "margin", "0 0 10px", "display", "flex", "align-items", "center", "gap", "6px"], [1, "pi", "pi-link"], [2, "display", "flex", "align-items", "center", "gap", "8px", "background", "#fff", "border", "1px solid #D1FAE5", "border-radius", "8px", "padding", "8px 12px"], [2, "font-size", "0.78rem", "color", "#374151", "flex", "1", "word-break", "break-all", "overflow", "hidden"], [2, "background", "none", "border", "none", "cursor", "pointer", "color", "#059669", "padding", "4px", "flex-shrink", "0", 3, "click", "title"], [1, "pi"], [2, "font-size", "0.76rem", "color", "#4B5563", "margin", "8px 0 0"], ["header", "Personal Details"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field"], [1, "required"], ["pInputText", "", "formControlName", "first_name", "placeholder", "First name", 1, "w-full", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["pInputText", "", "formControlName", "middle_name", "placeholder", "Middle name", 1, "w-full"], ["pInputText", "", "formControlName", "last_name", "placeholder", "Last name", 1, "w-full", 3, "ngClass"], ["pInputText", "", "formControlName", "mo_number", "type", "tel", "placeholder", "10-digit mobile", 1, "w-full", 3, "ngClass"], ["pInputText", "", "formControlName", "whatsapp_number", "type", "tel", "placeholder", "If different from mobile", 1, "w-full"], ["pInputText", "", "formControlName", "email", "type", "email", "placeholder", "Email (optional)", 1, "w-full"], ["formControlName", "is_karyakar", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", 3, "options"], ["formControlName", "xetra_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select Xetra", "styleClass", "w-full", 3, "options", "ngClass"], ["formControlName", "mandal_id", "optionLabel", "name", "optionValue", "id", "styleClass", "w-full", 3, "options", "placeholder", "disabled", "ngClass"], [1, "field", 2, "grid-column", "1/-1"], ["pInputTextarea", "", "formControlName", "address", "placeholder", "Full address", "rows", "3", 1, "w-full"], [2, "margin-top", "20px"], ["type", "submit", "label", "Submit Registration", "icon", "pi pi-user-plus", "styleClass", "w-full", 3, "loading"], [1, "p-error"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "titlecase");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, RegisterComponent_div_6_Template, 8, 0, "div", 3)(7, RegisterComponent_div_7_Template, 24, 8, "div", 3)(8, RegisterComponent_div_8_Template, 51, 27, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "p-toast", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 4, ctx.formType), " Registration");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.inactive);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.inactive && !ctx.success);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass, NgIf, TitleCasePipe, ButtonModule, Button, InputTextModule, InputText, InputTextareaModule, InputTextarea, DropdownModule, Dropdown, CardModule, Card, MessageModule, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent" });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-6AALIVUE.js.map
