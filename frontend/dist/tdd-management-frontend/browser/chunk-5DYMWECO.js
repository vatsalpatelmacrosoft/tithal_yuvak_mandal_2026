import {
  Tag,
  TagModule
} from "./chunk-5WJ72OSF.js";
import {
  Table,
  TableModule
} from "./chunk-B3OHXLFG.js";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "./chunk-AG2T7FMP.js";
import "./chunk-KOUEGY3L.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-CWDKT2OJ.js";
import "./chunk-FZMUGTLW.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
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
  ButtonModule,
  DomHandler,
  Ripple,
  RippleModule,
  TimesIcon
} from "./chunk-6IMXQGBZ.js";
import "./chunk-UQII2K3B.js";
import {
  PrimeTemplate,
  SharedModule,
  UniqueComponentId
} from "./chunk-CJX7BHHU.js";
import {
  ApiService
} from "./chunk-IFU6TU4Y.js";
import "./chunk-RZOKDKRV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DatePipe,
  DecimalPipe,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Output,
  PLATFORM_ID,
  Renderer2,
  TitleCasePipe,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  environment,
  forwardRef,
  inject,
  isPlatformBrowser,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
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

// node_modules/primeng/fesm2022/primeng-tabview.mjs
var _c0 = ["*"];
function TabPanel_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TabPanel_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TabPanel_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate);
  }
}
function TabPanel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, TabPanel_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", !ctx_r0.selected);
    \u0275\u0275attribute("id", ctx_r0.tabView.getTabContentId(ctx_r0.id))("aria-hidden", !ctx_r0.selected)("aria-labelledby", ctx_r0.tabView.getTabHeaderActionId(ctx_r0.id))("data-pc-name", "tabpanel");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.contentTemplate && (ctx_r0.cache ? ctx_r0.loaded : ctx_r0.selected));
  }
}
var _c1 = ["content"];
var _c2 = ["navbar"];
var _c3 = ["prevBtn"];
var _c4 = ["nextBtn"];
var _c5 = ["inkbar"];
var _c6 = ["elementToObserve"];
var _c7 = (a0) => ({
  "p-tabview p-component": true,
  "p-tabview-scrollable": a0
});
var _c8 = (a0, a1) => ({
  "p-highlight": a0,
  "p-disabled": a1
});
function TabView_button_3_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronLeftIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TabView_button_3_3_ng_template_0_Template(rf, ctx) {
}
function TabView_button_3_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabView_button_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15, 4);
    \u0275\u0275listener("click", function TabView_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navBackward());
    });
    \u0275\u0275template(2, TabView_button_3_ChevronLeftIcon_2_Template, 1, 1, "ChevronLeftIcon", 16)(3, TabView_button_3_3_Template, 1, 0, null, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("tabindex", ctx_r2.tabindex)("aria-label", ctx_r2.prevButtonAriaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.previousIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.previousIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("ngClass", tab_r5.leftIcon);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabView_ng_template_8_li_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275template(1, TabView_ng_template_8_li_0_ng_container_2_span_2_1_Template, 1, 0, null, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tab_r5.leftIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("ngClass", tab_r5.rightIcon);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_1_ng_template_0_Template(rf, ctx) {
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabView_ng_template_8_li_0_ng_container_2_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275template(1, TabView_ng_template_8_li_0_ng_container_2_span_6_1_Template, 1, 0, null, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tab_r5.rightIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TabView_ng_template_8_li_0_ng_container_2_span_1_Template, 1, 1, "span", 21)(2, TabView_ng_template_8_li_0_ng_container_2_span_2_Template, 2, 1, "span", 22);
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TabView_ng_template_8_li_0_ng_container_2_span_5_Template, 1, 1, "span", 24)(6, TabView_ng_template_8_li_0_ng_container_2_span_6_Template, 2, 1, "span", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r5.leftIcon && !tab_r5.leftIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r5.leftIconTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r5.header);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r5.rightIcon && !tab_r5.rightIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r5.rightIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 32);
    \u0275\u0275listener("click", function TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const tab_r5 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close($event, tab_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-tabview-close");
  }
}
function TabView_ng_template_8_li_0_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
}
function TabView_ng_template_8_li_0_ng_container_4_3_ng_template_0_Template(rf, ctx) {
}
function TabView_ng_template_8_li_0_ng_container_4_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabView_ng_template_8_li_0_ng_container_4_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template, 1, 1, "TimesIcon", 30)(2, TabView_ng_template_8_li_0_ng_container_4_span_2_Template, 1, 0, "span", 31)(3, TabView_ng_template_8_li_0_ng_container_4_3_Template, 1, 0, null, 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tab_r5.closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r5.closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tab_r5.closeIconTemplate);
  }
}
function TabView_ng_template_8_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19)(1, "a", 20);
    \u0275\u0275listener("click", function TabView_ng_template_8_li_0_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const tab_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.open($event, tab_r5));
    })("keydown", function TabView_ng_template_8_li_0_Template_a_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const tab_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabKeyDown($event, tab_r5));
    });
    \u0275\u0275template(2, TabView_ng_template_8_li_0_ng_container_2_Template, 7, 5, "ng-container", 16)(3, TabView_ng_template_8_li_0_ng_container_3_Template, 1, 0, "ng-container", 17)(4, TabView_ng_template_8_li_0_ng_container_4_Template, 4, 3, "ng-container", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const tab_r5 = ctx_r6.$implicit;
    const i_r8 = ctx_r6.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r5.headerStyleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(19, _c8, tab_r5.selected, tab_r5.disabled))("ngStyle", tab_r5.headerStyle);
    \u0275\u0275attribute("data-p-disabled", tab_r5.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", tab_r5.tooltip)("tooltipPosition", tab_r5.tooltipPosition)("positionStyle", tab_r5.tooltipPositionStyle)("tooltipStyleClass", tab_r5.tooltipStyleClass);
    \u0275\u0275attribute("id", ctx_r2.getTabHeaderActionId(tab_r5.id))("aria-controls", ctx_r2.getTabContentId(tab_r5.id))("aria-selected", tab_r5.selected)("tabindex", tab_r5.disabled || !tab_r5.selected ? "-1" : ctx_r2.tabindex)("aria-disabled", tab_r5.disabled)("data-pc-index", i_r8)("data-pc-section", "headeraction");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tab_r5.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tab_r5.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r5.closable);
  }
}
function TabView_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabView_ng_template_8_li_0_Template, 5, 22, "li", 18);
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    \u0275\u0275property("ngIf", !tab_r5.closed);
  }
}
function TabView_button_11_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronRightIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TabView_button_11_3_ng_template_0_Template(rf, ctx) {
}
function TabView_button_11_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabView_button_11_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34, 5);
    \u0275\u0275listener("click", function TabView_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navForward());
    });
    \u0275\u0275template(2, TabView_button_11_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 16)(3, TabView_button_11_3_Template, 1, 0, null, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("tabindex", ctx_r2.tabindex)("aria-label", ctx_r2.nextButtonAriaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.nextIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.nextIconTemplate);
  }
}
var TabPanel = class _TabPanel {
  el;
  viewContainer;
  cd;
  /**
   * Defines if tab can be removed.
   * @group Props
   */
  closable = false;
  /**
   * Inline style of the tab header.
   * @group Props
   */
  get headerStyle() {
    return this._headerStyle;
  }
  set headerStyle(headerStyle) {
    this._headerStyle = headerStyle;
    this.tabView.cd.markForCheck();
  }
  /**
   * Style class of the tab header.
   * @group Props
   */
  get headerStyleClass() {
    return this._headerStyleClass;
  }
  set headerStyleClass(headerStyleClass) {
    this._headerStyleClass = headerStyleClass;
    this.tabView.cd.markForCheck();
  }
  /**
   * Whether a lazy loaded panel should avoid getting loaded again on reselection.
   * @group Props
   */
  cache = true;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "top";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Defines if tab is active.
   * @defaultValue false
   * @group Props
   */
  get selected() {
    return !!this._selected;
  }
  set selected(val) {
    this._selected = val;
    if (!this.loaded) {
      this.cd.detectChanges();
    }
    if (val)
      this.loaded = true;
  }
  /**
   * When true, tab cannot be activated.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return !!this._disabled;
  }
  set disabled(disabled) {
    this._disabled = disabled;
    this.tabView.cd.markForCheck();
  }
  /**
   * Title of the tabPanel.
   * @group Props
   */
  get header() {
    return this._header;
  }
  set header(header) {
    this._header = header;
    Promise.resolve().then(() => {
      this.tabView.updateInkBar();
      this.tabView.cd.markForCheck();
    });
  }
  /**
   * Left icon of the tabPanel.
   * @group Props
   * @deprecated since v15.4.2, use `lefticon` template instead.
   */
  get leftIcon() {
    return this._leftIcon;
  }
  set leftIcon(leftIcon) {
    this._leftIcon = leftIcon;
    this.tabView.cd.markForCheck();
  }
  /**
   * Left icon of the tabPanel.
   * @group Props
   * @deprecated since v15.4.2, use `righticon` template instead.
   */
  get rightIcon() {
    return this._rightIcon;
  }
  set rightIcon(rightIcon) {
    this._rightIcon = rightIcon;
    this.tabView.cd.markForCheck();
  }
  templates;
  closed = false;
  view = null;
  _headerStyle;
  _headerStyleClass;
  _selected;
  _disabled;
  _header;
  _leftIcon;
  _rightIcon = void 0;
  loaded = false;
  id;
  contentTemplate;
  headerTemplate;
  leftIconTemplate;
  rightIconTemplate;
  closeIconTemplate;
  tabView;
  constructor(tabView, el, viewContainer, cd) {
    this.el = el;
    this.viewContainer = viewContainer;
    this.cd = cd;
    this.tabView = tabView;
    this.id = UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "righticon":
          this.rightIconTemplate = item.template;
          break;
        case "lefticon":
          this.leftIconTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  ngOnDestroy() {
    this.view = null;
  }
  static \u0275fac = function TabPanel_Factory(t) {
    return new (t || _TabPanel)(\u0275\u0275directiveInject(forwardRef(() => TabView)), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabPanel,
    selectors: [["p-tabPanel"]],
    contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) {
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
      closable: [InputFlags.HasDecoratorInputTransform, "closable", "closable", booleanAttribute],
      headerStyle: "headerStyle",
      headerStyleClass: "headerStyleClass",
      cache: [InputFlags.HasDecoratorInputTransform, "cache", "cache", booleanAttribute],
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      selected: "selected",
      disabled: "disabled",
      header: "header",
      leftIcon: "leftIcon",
      rightIcon: "rightIcon"
    },
    features: [\u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    consts: [["class", "p-tabview-panel", "role", "tabpanel", 3, "hidden", 4, "ngIf"], ["role", "tabpanel", 1, "p-tabview-panel", 3, "hidden"], [4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function TabPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, TabPanel_div_0_Template, 3, 6, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.closed);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanel, [{
    type: Component,
    args: [{
      selector: "p-tabPanel",
      template: `
        <div
            *ngIf="!closed"
            class="p-tabview-panel"
            role="tabpanel"
            [hidden]="!selected"
            [attr.id]="tabView.getTabContentId(id)"
            [attr.aria-hidden]="!selected"
            [attr.aria-labelledby]="tabView.getTabHeaderActionId(id)"
            [attr.data-pc-name]="'tabpanel'"
        >
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </ng-container>
        </div>
    `,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TabView,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => TabView)]
    }]
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }], {
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    headerStyle: [{
      type: Input
    }],
    headerStyleClass: [{
      type: Input
    }],
    cache: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    leftIcon: [{
      type: Input
    }],
    rightIcon: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TabView = class _TabView {
  platformId;
  el;
  cd;
  renderer;
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
   * Whether tab close is controlled at onClose event or not.
   * @defaultValue false
   * @group Props
   */
  controlClose;
  /**
   * When enabled displays buttons at each side of the tab headers to scroll the tab list.
   * @defaultValue false
   * @group Props
   */
  scrollable;
  /**
   * Index of the active tab to change selected tab programmatically.
   * @group Props
   */
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(val) {
    this._activeIndex = val;
    if (this.preventActiveIndexPropagation) {
      this.preventActiveIndexPropagation = false;
      return;
    }
    if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
      this.findSelectedTab().selected = false;
      this.tabs[this._activeIndex].selected = true;
      this.tabChanged = true;
      this.updateScrollBar(val);
    }
  }
  /**
   * When enabled, the focused tab is activated.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Used to define a string aria label attribute the forward navigation button.
   * @group Props
   */
  nextButtonAriaLabel;
  /**
   * Used to define a string aria label attribute the backward navigation button.
   * @group Props
   */
  prevButtonAriaLabel;
  /**
   * When activated, navigation buttons will automatically hide or show based on the available space within the container.
   * @group Props
   */
  autoHideButtons = true;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Callback to invoke on tab change.
   * @param {TabViewChangeEvent} event - Custom tab change event
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke on tab close.
   * @param {TabViewCloseEvent} event - Custom tab close event
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke on the active tab change.
   * @param {number} index - New active index
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  content;
  navbar;
  prevBtn;
  nextBtn;
  inkbar;
  tabPanels;
  templates;
  initialized;
  tabs;
  _activeIndex;
  preventActiveIndexPropagation;
  tabChanged;
  backwardIsDisabled = true;
  forwardIsDisabled = false;
  tabChangesSubscription;
  nextIconTemplate;
  previousIconTemplate;
  resizeObserver;
  container;
  list;
  buttonVisible;
  elementToObserve;
  constructor(platformId, el, cd, renderer) {
    this.platformId = platformId;
    this.el = el;
    this.cd = cd;
    this.renderer = renderer;
  }
  ngAfterContentInit() {
    this.initTabs();
    this.tabChangesSubscription = this.tabPanels.changes.subscribe((_) => {
      this.initTabs();
      this.refreshButtonState();
      this.callResizeObserver();
    });
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "previousicon":
          this.previousIconTemplate = item.template;
          break;
        case "nexticon":
          this.nextIconTemplate = item.template;
          break;
      }
    });
  }
  callResizeObserver() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.autoHideButtons) {
        this.bindResizeObserver();
      }
    }
  }
  ngAfterViewInit() {
    this.callResizeObserver();
  }
  bindResizeObserver() {
    this.container = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="navcontent"]');
    this.list = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="nav"]');
    this.resizeObserver = new ResizeObserver(() => {
      if (this.list.offsetWidth >= this.container.offsetWidth) {
        this.buttonVisible = true;
      } else {
        this.buttonVisible = false;
      }
      this.updateButtonState();
      this.cd.detectChanges();
    });
    this.resizeObserver.observe(this.container);
  }
  unbindResizeObserver() {
    this.resizeObserver.unobserve(this.elementToObserve.nativeElement);
    this.resizeObserver = null;
  }
  ngAfterViewChecked() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.tabChanged) {
        this.updateInkBar();
        this.tabChanged = false;
      }
    }
  }
  ngOnDestroy() {
    if (this.tabChangesSubscription) {
      this.tabChangesSubscription.unsubscribe();
    }
    if (this.resizeObserver) {
      this.unbindResizeObserver();
    }
  }
  getTabHeaderActionId(tabId) {
    return `${tabId}_header_action`;
  }
  getTabContentId(tabId) {
    return `${tabId}_content`;
  }
  initTabs() {
    this.tabs = this.tabPanels.toArray();
    let selectedTab = this.findSelectedTab();
    if (!selectedTab && this.tabs.length) {
      if (this.activeIndex != null && this.tabs.length > this.activeIndex)
        this.tabs[this.activeIndex].selected = true;
      else
        this.tabs[0].selected = true;
      this.tabChanged = true;
    }
    this.cd.markForCheck();
  }
  onTabKeyDown(event, tab) {
    switch (event.code) {
      case "ArrowLeft":
        this.onTabArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onTabArrowRightKey(event);
        break;
      case "Home":
        this.onTabHomeKey(event);
        break;
      case "End":
        this.onTabEndKey(event);
        break;
      case "PageDown":
        this.onTabEndKey(event);
        break;
      case "PageUp":
        this.onTabHomeKey(event);
        break;
      case "Enter":
      case "Space":
        this.open(event, tab);
        break;
      default:
        break;
    }
  }
  onTabArrowLeftKey(event) {
    const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
    const index = DomHandler.getAttribute(prevHeaderAction, "data-pc-index");
    prevHeaderAction ? this.changeFocusedTab(event, prevHeaderAction, index) : this.onTabEndKey(event);
    event.preventDefault();
  }
  onTabArrowRightKey(event) {
    const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
    const index = DomHandler.getAttribute(nextHeaderAction, "data-pc-index");
    nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction, index) : this.onTabHomeKey(event);
    event.preventDefault();
  }
  onTabHomeKey(event) {
    const firstHeaderAction = this.findFirstHeaderAction();
    const index = DomHandler.getAttribute(firstHeaderAction, "data-pc-index");
    this.changeFocusedTab(event, firstHeaderAction, index);
    event.preventDefault();
  }
  onTabEndKey(event) {
    const lastHeaderAction = this.findLastHeaderAction();
    const index = DomHandler.getAttribute(lastHeaderAction, "data-pc-index");
    this.changeFocusedTab(event, lastHeaderAction, index);
    event.preventDefault();
  }
  changeFocusedTab(event, element, index) {
    if (element) {
      DomHandler.focus(element);
      element.scrollIntoView({
        block: "nearest"
      });
      if (this.selectOnFocus) {
        const tab = this.tabs[index];
        this.open(event, tab);
      }
    }
  }
  findNextHeaderAction(tabElement, selfCheck = false) {
    const headerElement = selfCheck ? tabElement : tabElement.nextElementSibling;
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") || DomHandler.getAttribute(headerElement, "data-pc-section") === "inkbar" ? this.findNextHeaderAction(headerElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
  }
  findPrevHeaderAction(tabElement, selfCheck = false) {
    const headerElement = selfCheck ? tabElement : tabElement.previousElementSibling;
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") || DomHandler.getAttribute(headerElement, "data-pc-section") === "inkbar" ? this.findPrevHeaderAction(headerElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
  }
  findFirstHeaderAction() {
    const firstEl = this.navbar.nativeElement.firstElementChild;
    return this.findNextHeaderAction(firstEl, true);
  }
  findLastHeaderAction() {
    const lastEl = this.navbar.nativeElement.lastElementChild;
    const lastHeaderAction = DomHandler.getAttribute(lastEl, "data-pc-section") === "inkbar" ? lastEl.previousElementSibling : lastEl;
    return this.findPrevHeaderAction(lastHeaderAction, true);
  }
  open(event, tab) {
    if (tab.disabled) {
      if (event) {
        event.preventDefault();
      }
      return;
    }
    if (!tab.selected) {
      let selectedTab = this.findSelectedTab();
      if (selectedTab) {
        selectedTab.selected = false;
      }
      this.tabChanged = true;
      tab.selected = true;
      let selectedTabIndex = this.findTabIndex(tab);
      this.preventActiveIndexPropagation = true;
      this.activeIndexChange.emit(selectedTabIndex);
      this.onChange.emit({
        originalEvent: event,
        index: selectedTabIndex
      });
      this.updateScrollBar(selectedTabIndex);
    }
    if (event) {
      event.preventDefault();
    }
  }
  close(event, tab) {
    if (this.controlClose) {
      this.onClose.emit({
        originalEvent: event,
        index: this.findTabIndex(tab),
        close: () => {
          this.closeTab(tab);
        }
      });
    } else {
      this.closeTab(tab);
      this.onClose.emit({
        originalEvent: event,
        index: this.findTabIndex(tab)
      });
    }
  }
  closeTab(tab) {
    if (tab.disabled) {
      return;
    }
    if (tab.selected) {
      this.tabChanged = true;
      tab.selected = false;
      for (let i = 0; i < this.tabs.length; i++) {
        let tabPanel = this.tabs[i];
        if (!tabPanel.closed && !tab.disabled && tabPanel != tab) {
          tabPanel.selected = true;
          break;
        }
      }
    }
    tab.closed = true;
    setTimeout(() => {
      this.updateInkBar();
    });
  }
  findSelectedTab() {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i];
      }
    }
    return null;
  }
  findTabIndex(tab) {
    let index = -1;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] == tab) {
        index = i;
        break;
      }
    }
    return index;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateInkBar() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.navbar) {
        const tabHeader = DomHandler.findSingle(this.navbar.nativeElement, "li.p-highlight");
        if (!tabHeader) {
          return;
        }
        this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + "px";
        this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar.nativeElement).left + "px";
      }
    }
  }
  updateScrollBar(index) {
    let tabHeader = this.navbar.nativeElement.children[index];
    if (tabHeader) {
      tabHeader.scrollIntoView({
        block: "nearest"
      });
    }
  }
  updateButtonState() {
    const content = this.content.nativeElement;
    const {
      scrollLeft,
      scrollWidth
    } = content;
    const width = DomHandler.getWidth(content);
    this.backwardIsDisabled = scrollLeft === 0;
    this.forwardIsDisabled = Math.round(scrollLeft) === scrollWidth - width;
  }
  refreshButtonState() {
    this.container = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="navcontent"]');
    this.list = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="nav"]');
    if (this.list.offsetWidth >= this.container.offsetWidth) {
      if (this.list.offsetWidth >= this.container.offsetWidth) {
        this.buttonVisible = true;
      } else {
        this.buttonVisible = false;
      }
      this.updateButtonState();
      this.cd.markForCheck();
    }
  }
  onScroll(event) {
    this.scrollable && this.updateButtonState();
    event.preventDefault();
  }
  getVisibleButtonWidths() {
    return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
  }
  navBackward() {
    const content = this.content.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft - width;
    content.scrollLeft = pos <= 0 ? 0 : pos;
  }
  navForward() {
    const content = this.content.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft + width;
    const lastPos = content.scrollWidth - width;
    content.scrollLeft = pos >= lastPos ? lastPos : pos;
  }
  static \u0275fac = function TabView_Factory(t) {
    return new (t || _TabView)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabView,
    selectors: [["p-tabView"]],
    contentQueries: function TabView_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, TabPanel, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabPanels = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TabView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
        \u0275\u0275viewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.navbar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.prevBtn = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nextBtn = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inkbar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elementToObserve = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      controlClose: [InputFlags.HasDecoratorInputTransform, "controlClose", "controlClose", booleanAttribute],
      scrollable: [InputFlags.HasDecoratorInputTransform, "scrollable", "scrollable", booleanAttribute],
      activeIndex: "activeIndex",
      selectOnFocus: [InputFlags.HasDecoratorInputTransform, "selectOnFocus", "selectOnFocus", booleanAttribute],
      nextButtonAriaLabel: "nextButtonAriaLabel",
      prevButtonAriaLabel: "prevButtonAriaLabel",
      autoHideButtons: [InputFlags.HasDecoratorInputTransform, "autoHideButtons", "autoHideButtons", booleanAttribute],
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute]
    },
    outputs: {
      onChange: "onChange",
      onClose: "onClose",
      activeIndexChange: "activeIndexChange"
    },
    features: [\u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c0,
    decls: 14,
    vars: 13,
    consts: [["elementToObserve", ""], ["content", ""], ["navbar", ""], ["inkbar", ""], ["prevBtn", ""], ["nextBtn", ""], [3, "ngClass", "ngStyle"], [1, "p-tabview-nav-container"], ["class", "p-tabview-nav-prev p-tabview-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabview-nav-content", 3, "scroll"], ["role", "tablist", 1, "p-tabview-nav"], ["ngFor", "", 3, "ngForOf"], ["role", "presentation", "aria-hidden", "true", 1, "p-tabview-ink-bar"], ["class", "p-tabview-nav-next p-tabview-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabview-panels"], ["type", "button", "pRipple", "", 1, "p-tabview-nav-prev", "p-tabview-nav-btn", "p-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "presentation", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "tab", "pRipple", "", 1, "p-tabview-nav-link", 3, "click", "keydown", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], ["class", "p-tabview-left-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-tabview-left-icon", 4, "ngIf"], [1, "p-tabview-title"], ["class", "p-tabview-right-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-tabview-right-icon", 4, "ngIf"], [1, "p-tabview-left-icon", 3, "ngClass"], [1, "p-tabview-left-icon"], [1, "p-tabview-right-icon", 3, "ngClass"], [1, "p-tabview-right-icon"], [3, "styleClass", "click", 4, "ngIf"], ["class", "tab.closeIconTemplate", 4, "ngIf"], [3, "click", "styleClass"], [1, "tab.closeIconTemplate"], ["type", "button", "pRipple", "", 1, "p-tabview-nav-next", "p-tabview-nav-btn", "p-link", 3, "click"]],
    template: function TabView_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 6)(1, "div", 7, 0);
        \u0275\u0275template(3, TabView_button_3_Template, 4, 4, "button", 8);
        \u0275\u0275elementStart(4, "div", 9, 1);
        \u0275\u0275listener("scroll", function TabView_Template_div_scroll_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScroll($event));
        });
        \u0275\u0275elementStart(6, "ul", 10, 2);
        \u0275\u0275template(8, TabView_ng_template_8_Template, 1, 1, "ng-template", 11);
        \u0275\u0275element(9, "li", 12, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, TabView_button_11_Template, 4, 4, "button", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 14);
        \u0275\u0275projection(13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c7, ctx.scrollable))("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "tabview");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.scrollable && !ctx.backwardIsDisabled && ctx.autoHideButtons);
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "navcontent");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("data-pc-section", "nav");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "inkbar");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.scrollable && !ctx.forwardIsDisabled && ctx.buttonVisible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Tooltip, Ripple, TimesIcon, ChevronLeftIcon, ChevronRightIcon],
    styles: ["@layer primeng{.p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:inline-flex;min-width:100%;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabView, [{
    type: Component,
    args: [{
      selector: "p-tabView",
      template: `
        <div [ngClass]="{ 'p-tabview p-component': true, 'p-tabview-scrollable': scrollable }" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'tabview'">
            <div #elementToObserve class="p-tabview-nav-container">
                <button
                    *ngIf="scrollable && !backwardIsDisabled && autoHideButtons"
                    #prevBtn
                    class="p-tabview-nav-prev p-tabview-nav-btn p-link"
                    (click)="navBackward()"
                    [attr.tabindex]="tabindex"
                    [attr.aria-label]="prevButtonAriaLabel"
                    type="button"
                    pRipple
                >
                    <ChevronLeftIcon *ngIf="!previousIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                </button>
                <div #content class="p-tabview-nav-content" (scroll)="onScroll($event)" [attr.data-pc-section]="'navcontent'">
                    <ul #navbar class="p-tabview-nav" role="tablist" [attr.data-pc-section]="'nav'">
                        <ng-template ngFor let-tab [ngForOf]="tabs" let-i="index">
                            <li role="presentation" [ngClass]="{ 'p-highlight': tab.selected, 'p-disabled': tab.disabled }" [attr.data-p-disabled]="tab.disabled" [ngStyle]="tab.headerStyle" [class]="tab.headerStyleClass" *ngIf="!tab.closed">
                                <a
                                    role="tab"
                                    class="p-tabview-nav-link"
                                    [pTooltip]="tab.tooltip"
                                    [tooltipPosition]="tab.tooltipPosition"
                                    [positionStyle]="tab.tooltipPositionStyle"
                                    [tooltipStyleClass]="tab.tooltipStyleClass"
                                    [attr.id]="getTabHeaderActionId(tab.id)"
                                    [attr.aria-controls]="getTabContentId(tab.id)"
                                    [attr.aria-selected]="tab.selected"
                                    [attr.tabindex]="tab.disabled || !tab.selected ? '-1' : tabindex"
                                    [attr.aria-disabled]="tab.disabled"
                                    [attr.data-pc-index]="i"
                                    [attr.data-pc-section]="'headeraction'"
                                    (click)="open($event, tab)"
                                    (keydown)="onTabKeyDown($event, tab)"
                                    pRipple
                                >
                                    <ng-container *ngIf="!tab.headerTemplate">
                                        <span class="p-tabview-left-icon" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon && !tab.leftIconTemplate"></span>
                                        <span *ngIf="tab.leftIconTemplate" class="p-tabview-left-icon">
                                            <ng-template *ngTemplateOutlet="tab.leftIconTemplate"></ng-template>
                                        </span>
                                        <span class="p-tabview-title">{{ tab.header }}</span>
                                        <span class="p-tabview-right-icon" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon && !tab.rightIconTemplate"></span>
                                        <span *ngIf="tab.rightIconTemplate" class="p-tabview-right-icon">
                                            <ng-template *ngTemplateOutlet="tab.rightIconTemplate"></ng-template>
                                        </span>
                                    </ng-container>
                                    <ng-container *ngTemplateOutlet="tab.headerTemplate"></ng-container>
                                    <ng-container *ngIf="tab.closable">
                                        <TimesIcon *ngIf="!tab.closeIconTemplate" [styleClass]="'p-tabview-close'" (click)="close($event, tab)" />
                                        <span class="tab.closeIconTemplate" *ngIf="tab.closeIconTemplate"></span>
                                        <ng-template *ngTemplateOutlet="tab.closeIconTemplate"></ng-template>
                                    </ng-container>
                                </a>
                            </li>
                        </ng-template>
                        <li #inkbar class="p-tabview-ink-bar" role="presentation" aria-hidden="true" [attr.data-pc-section]="'inkbar'"></li>
                    </ul>
                </div>
                <button
                    *ngIf="scrollable && !forwardIsDisabled && buttonVisible"
                    #nextBtn
                    [attr.tabindex]="tabindex"
                    [attr.aria-label]="nextButtonAriaLabel"
                    class="p-tabview-nav-next p-tabview-nav-btn p-link"
                    (click)="navForward()"
                    type="button"
                    pRipple
                >
                    <ChevronRightIcon *ngIf="!nextIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                </button>
            </div>
            <div class="p-tabview-panels">
                <ng-content></ng-content>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:inline-flex;min-width:100%;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    controlClose: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    activeIndex: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nextButtonAriaLabel: [{
      type: Input
    }],
    prevButtonAriaLabel: [{
      type: Input
    }],
    autoHideButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    activeIndexChange: [{
      type: Output
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    navbar: [{
      type: ViewChild,
      args: ["navbar"]
    }],
    prevBtn: [{
      type: ViewChild,
      args: ["prevBtn"]
    }],
    nextBtn: [{
      type: ViewChild,
      args: ["nextBtn"]
    }],
    inkbar: [{
      type: ViewChild,
      args: ["inkbar"]
    }],
    tabPanels: [{
      type: ContentChildren,
      args: [TabPanel]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    elementToObserve: [{
      type: ViewChild,
      args: ["elementToObserve"]
    }]
  });
})();
var TabViewModule = class _TabViewModule {
  static \u0275fac = function TabViewModule_Factory(t) {
    return new (t || _TabViewModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TabViewModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, TooltipModule, RippleModule, TimesIcon, ChevronLeftIcon, ChevronRightIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabViewModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, TooltipModule, RippleModule, TimesIcon, ChevronLeftIcon, ChevronRightIcon],
      exports: [TabView, TabPanel, SharedModule],
      declarations: [TabView, TabPanel]
    }]
  }], null, null);
})();

// src/app/admin/reports/reports.component.ts
var _c02 = () => ({ "min-width": "70rem" });
var _c12 = () => ({ "min-width": "60rem" });
var _c22 = () => ["male", "female", "other"];
var _c32 = () => ({ "min-width": "40rem" });
function ReportsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Quiz Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 23);
    \u0275\u0275text(4, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 23);
    \u0275\u0275text(6, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Incomplete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Highest %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "Avg %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "Lowest %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 23);
    \u0275\u0275text(18, "Pass %");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-tag", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 23)(8, "span", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 23)(11, "span", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 23)(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 23);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 23)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 23);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 23);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r1.title || q_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", q_r1.is_active ? "Active" : "Inactive")("severity", q_r1.is_active ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r1.question_count);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r1.total_participants);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r1.total_completed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r1.total_incomplete);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 11, q_r1.highest_score, "1.1-1"), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 14, q_r1.average_score, "1.1-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 17, q_r1.lowest_score, "1.1-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(28, 20, q_r1.pass_percentage, "1.1-1"), "%");
  }
}
function ReportsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2, "No quiz data available.");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275text(2, " Select a quiz above to view participant results. ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_p_table_25_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name / Yuvak ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "Correct");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 23);
    \u0275\u0275text(18, "Wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Submitted");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_p_table_25_ng_template_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.yuvak_id);
  }
}
function ReportsComponent_p_table_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ReportsComponent_p_table_25_ng_template_2_div_6_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 23)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 23)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 36);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 37);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const i_r3 = ctx.rowIndex;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name || p_r2.yuvak_id || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r2.yuvak_id && p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.typeLabel(p_r2.participant_type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, p_r2.gender));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.total_marks);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("pct-badge " + (+p_r2.percentage >= 40 ? "pass" : "fail"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 15, p_r2.percentage, "1.1-1"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.correct_answers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.incorrect_answers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r2.submitted_at ? \u0275\u0275pipeBind2(27, 18, p_r2.submitted_at, "dd MMM yy, hh:mm a") : "Not submitted", " ");
  }
}
function ReportsComponent_p_table_25_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2, "No participants found for this quiz.");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_p_table_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 10);
    \u0275\u0275template(1, ReportsComponent_p_table_25_ng_template_1_Template, 21, 0, "ng-template", 11)(2, ReportsComponent_p_table_25_ng_template_2_Template, 28, 21, "ng-template", 12)(3, ReportsComponent_p_table_25_ng_template_3_Template, 3, 0, "ng-template", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.participants())("loading", ctx_r3.loadingP)("tableStyle", \u0275\u0275pureFunction0(3, _c02));
  }
}
function ReportsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Select a quiz above to view question-wise analysis. ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_p_table_32_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Correct Ans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Responses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Correct");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "Wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "Accuracy");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_p_table_32_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 23)(17, "div", 42);
    \u0275\u0275element(18, "div", 43);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    const i_r6 = ctx.rowIndex;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r5.correct_answer == null ? null : q_r5.correct_answer.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.marks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.total_responses);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.correct_responses);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.incorrect_responses);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", q_r5.accuracy_percentage + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 10, q_r5.accuracy_percentage, "1.1-1"), "%");
  }
}
function ReportsComponent_p_table_32_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2, "No question data available.");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_p_table_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 10);
    \u0275\u0275template(1, ReportsComponent_p_table_32_ng_template_1_Template, 17, 0, "ng-template", 11)(2, ReportsComponent_p_table_32_ng_template_2_Template, 22, 13, "ng-template", 12)(3, ReportsComponent_p_table_32_ng_template_3_Template, 3, 0, "ng-template", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.questions())("loading", ctx_r3.loadingQs)("tableStyle", \u0275\u0275pureFunction0(3, _c12));
  }
}
function ReportsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Select a quiz above to view gender-wise breakdown. ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53);
    \u0275\u0275text(6, "Male");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275element(8, "i", 51);
    \u0275\u0275elementStart(9, "div", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 53);
    \u0275\u0275text(12, "Female");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 55);
    \u0275\u0275element(14, "i", 56);
    \u0275\u0275elementStart(15, "div", 52);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 53);
    \u0275\u0275text(18, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 57);
    \u0275\u0275element(20, "i", 58);
    \u0275\u0275elementStart(21, "div", 52);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 53);
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getGenderCount("male"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.getGenderCount("female"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.getGenderCount("other"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.getGenderCount("male") + ctx_r3.getGenderCount("female") + ctx_r3.getGenderCount("other"));
  }
}
function ReportsComponent_div_39_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 23);
    \u0275\u0275text(4, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 23);
    \u0275\u0275text(6, "Highest %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "Average %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Lowest %");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_div_39_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 23)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 23);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, s_r7.gender));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.total_participants);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, s_r7.highest_score, "1.1-1"), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 10, s_r7.average_score, "1.1-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 13, s_r7.lowest_score, "1.1-1"), "%");
  }
}
function ReportsComponent_div_39_div_6_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name / Yuvak ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "%");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_div_39_div_6_div_1_ng_template_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8.yuvak_id);
  }
}
function ReportsComponent_div_39_div_6_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ReportsComponent_div_39_div_6_div_1_ng_template_6_div_6_Template, 2, 1, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 23)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 23);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 23)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r8.name || p_r8.yuvak_id || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r8.yuvak_id && p_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.typeLabel(p_r8.participant_type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r8.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r8.total_marks);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("pct-badge " + (+p_r8.percentage >= 40 ? "pass" : "fail"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 9, p_r8.percentage, "1.1-1"), "% ");
  }
}
function ReportsComponent_div_39_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-table", 62);
    \u0275\u0275template(5, ReportsComponent_div_39_div_6_div_1_ng_template_5_Template, 13, 0, "ng-template", 11)(6, ReportsComponent_div_39_div_6_div_1_ng_template_6_Template, 18, 12, "ng-template", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const gender_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, gender_r10), " Participants");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.genderDetails()[gender_r10])("tableStyle", \u0275\u0275pureFunction0(5, _c32));
  }
}
function ReportsComponent_div_39_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ReportsComponent_div_39_div_6_div_1_Template, 7, 6, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const gender_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r3.genderDetails()[gender_r10]) == null ? null : tmp_3_0.length);
  }
}
function ReportsComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ReportsComponent_div_39_div_1_Template, 25, 4, "div", 45);
    \u0275\u0275elementStart(2, "div", 46)(3, "p-table", 47);
    \u0275\u0275template(4, ReportsComponent_div_39_ng_template_4_Template, 11, 0, "ng-template", 11)(5, ReportsComponent_div_39_ng_template_5_Template, 17, 16, "ng-template", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ReportsComponent_div_39_div_6_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loadingG);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.genderSummary())("loading", ctx_r3.loadingG);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c22));
  }
}
var ReportsComponent = class _ReportsComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  quizzes = signal([]);
  selectedQuiz = signal(null);
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
    const base = environment.apiUrl.replace("/api", "");
    const token = localStorage.getItem("token") || "";
    const url = `${environment.apiUrl}/reports/export?type=${type}&quiz_uuid=${uuid || ""}&format=csv`;
    fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.blob()).then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${type}-report.csv`;
      a.click();
    }).catch(() => this.toast.error("Export failed"));
  }
  typeLabel(t) {
    return t === "registered" ? "Registered" : "External";
  }
  genderIcon(g) {
    return g === "male" ? "pi-user" : g === "female" ? "pi-user" : "pi-users";
  }
  getGenderCount(gender) {
    const s = this.genderSummary().find((r) => r.gender === gender);
    return s ? +s.total_participants : 0;
  }
  static \u0275fac = function ReportsComponent_Factory(t) {
    return new (t || _ReportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 26, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", 2, "background", "linear-gradient(135deg,#0D9488,#14B8A6)", "box-shadow", "0 4px 14px rgba(20,184,166,0.35)"], [1, "pi", "pi-chart-bar"], [1, "hero-title"], [1, "hero-subtitle"], ["header", "Quiz Wise"], [1, "report-toolbar"], [2, "font-size", "0.88rem", "color", "#6B7280"], ["label", "Export CSV", "icon", "pi pi-download", "size", "small", 3, "click", "outlined"], ["styleClass", "p-datatable-striped", 3, "value", "loading", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Participant Wise"], [2, "min-width", "260px"], ["placeholder", "Select a quiz", "styleClass", "w-full", 3, "ngModelChange", "onChange", "options", "ngModel", "showClear"], ["label", "Export CSV", "icon", "pi pi-download", "size", "small", 3, "click", "outlined", "disabled"], ["class", "no-quiz-hint", 4, "ngIf"], ["styleClass", "p-datatable-striped", 3, "value", "loading", "tableStyle", 4, "ngIf"], ["header", "Question Analysis"], ["header", "Gender Wise"], [4, "ngIf"], [1, "text-center"], [2, "font-weight", "600"], [3, "value", "severity"], [1, "stat-pill", "blue"], [1, "stat-pill", "green"], [1, "stat-pill", "orange"], ["colspan", "9", 1, "empty-msg"], [1, "no-quiz-hint"], [1, "pi", "pi-arrow-up", 2, "display", "block", "margin-bottom", "8px", "font-size", "1.4rem", "color", "#C7D2FE"], [2, "color", "#9CA3AF"], ["style", "font-size:0.8rem;color:#9CA3AF", 4, "ngIf"], ["severity", "secondary", 3, "value"], [1, "text-center", 2, "color", "#10B981", "font-weight", "600"], [1, "text-center", 2, "color", "#EF4444", "font-weight", "600"], [2, "font-size", "0.82rem", "color", "#6B7280"], [2, "font-size", "0.8rem", "color", "#9CA3AF"], ["colspan", "10", 1, "empty-msg"], [2, "max-width", "360px"], [1, "correct-opt"], [1, "acc-bar"], [1, "acc-fill"], ["colspan", "8", 1, "empty-msg"], ["class", "gender-summary", 4, "ngIf"], [2, "margin-bottom", "20px"], ["styleClass", "p-datatable-striped", 3, "value", "loading"], [4, "ngFor", "ngForOf"], [1, "gender-summary"], [1, "gender-card", "male"], [1, "pi", "pi-user", "gender-icon"], [1, "gender-count"], [1, "gender-label"], [1, "gender-card", "female"], [1, "gender-card", "other"], [1, "pi", "pi-users", "gender-icon"], [1, "gender-card", "total"], [1, "pi", "pi-chart-pie", "gender-icon"], ["class", "gender-section", 4, "ngIf"], [1, "gender-section"], [1, "gender-section-title"], ["styleClass", "p-datatable-striped", 3, "value", "tableStyle"], ["style", "font-size:0.78rem;color:#9CA3AF", 4, "ngIf"], [2, "font-size", "0.78rem", "color", "#9CA3AF"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Quiz Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Analytics, participant results and gender-wise breakdowns");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "p-tabView")(10, "p-tabPanel", 6)(11, "div", 7)(12, "span", 8);
      \u0275\u0275text(13, "Overall performance across all quizzes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-button", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_p_button_click_14_listener() {
        return ctx.export("quiz-wise");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p-table", 10);
      \u0275\u0275template(16, ReportsComponent_ng_template_16_Template, 19, 0, "ng-template", 11)(17, ReportsComponent_ng_template_17_Template, 29, 23, "ng-template", 12)(18, ReportsComponent_ng_template_18_Template, 3, 0, "ng-template", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "p-tabPanel", 14)(20, "div", 7)(21, "div", 15)(22, "p-dropdown", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_p_dropdown_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedQuiz, $event) || (ctx.selectedQuiz = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ReportsComponent_Template_p_dropdown_onChange_22_listener($event) {
        return ctx.onQuizSelect($event.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p-button", 17);
      \u0275\u0275listener("click", function ReportsComponent_Template_p_button_click_23_listener() {
        return ctx.export("participant-wise");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, ReportsComponent_div_24_Template, 3, 0, "div", 18)(25, ReportsComponent_p_table_25_Template, 4, 4, "p-table", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-tabPanel", 20)(27, "div", 7)(28, "div", 15)(29, "p-dropdown", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_p_dropdown_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedQuiz, $event) || (ctx.selectedQuiz = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ReportsComponent_Template_p_dropdown_onChange_29_listener($event) {
        return ctx.onQuizSelect($event.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "p-button", 17);
      \u0275\u0275listener("click", function ReportsComponent_Template_p_button_click_30_listener() {
        return ctx.export("question-wise");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, ReportsComponent_div_31_Template, 2, 0, "div", 18)(32, ReportsComponent_p_table_32_Template, 4, 4, "p-table", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p-tabPanel", 21)(34, "div", 7)(35, "div", 15)(36, "p-dropdown", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_p_dropdown_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedQuiz, $event) || (ctx.selectedQuiz = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ReportsComponent_Template_p_dropdown_onChange_36_listener($event) {
        return ctx.onQuizSelect($event.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "p-button", 17);
      \u0275\u0275listener("click", function ReportsComponent_Template_p_button_click_37_listener() {
        return ctx.export("gender-wise");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(38, ReportsComponent_div_38_Template, 2, 0, "div", 18)(39, ReportsComponent_div_39_Template, 7, 5, "div", 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.quizWise())("loading", ctx.loadingQ)("tableStyle", \u0275\u0275pureFunction0(25, _c02));
      \u0275\u0275advance(7);
      \u0275\u0275property("options", ctx.quizzes());
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedQuiz);
      \u0275\u0275property("showClear", false);
      \u0275\u0275advance();
      \u0275\u0275property("outlined", true)("disabled", !ctx.selectedQuiz());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedQuiz());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedQuiz());
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.quizzes());
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedQuiz);
      \u0275\u0275property("showClear", false);
      \u0275\u0275advance();
      \u0275\u0275property("outlined", true)("disabled", !ctx.selectedQuiz());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedQuiz());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedQuiz());
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.quizzes());
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedQuiz);
      \u0275\u0275property("showClear", false);
      \u0275\u0275advance();
      \u0275\u0275property("outlined", true)("disabled", !ctx.selectedQuiz());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedQuiz());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedQuiz());
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
    TabViewModule,
    TabView,
    TabPanel,
    TagModule,
    Tag,
    TooltipModule
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.report-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.no-quiz-hint[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  color: #9CA3AF;\n  font-size: 0.9rem;\n  background: #F9FAFB;\n  border: 2px dashed #E5E7EB;\n  border-radius: 10px;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.empty-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #9CA3AF;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.stat-pill.blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D4ED8;\n}\n.stat-pill.green[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.stat-pill.orange[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n  color: #D97706;\n}\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.pct-badge.pass[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.pct-badge.fail[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.correct-opt[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 28px;\n  height: 28px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #ECFDF5;\n  color: #059669;\n  font-weight: 800;\n  font-size: 0.85rem;\n}\n.acc-bar[_ngcontent-%COMP%] {\n  position: relative;\n  background: #F3F4F6;\n  border-radius: 4px;\n  height: 22px;\n  overflow: hidden;\n  width: 100%;\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.acc-bar[_ngcontent-%COMP%]   .acc-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #6EE7B7,\n      #10B981);\n  transition: width 0.4s;\n  border-radius: 4px;\n}\n.acc-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #1F2937;\n}\n.gender-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 640px) {\n  .gender-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.gender-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 12px;\n  padding: 20px 16px;\n  text-align: center;\n  transition: box-shadow 0.2s;\n}\n.gender-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.gender-card.male[_ngcontent-%COMP%] {\n  border-top: 3px solid #3B82F6;\n}\n.gender-card.female[_ngcontent-%COMP%] {\n  border-top: 3px solid #EC4899;\n}\n.gender-card.other[_ngcontent-%COMP%] {\n  border-top: 3px solid #8B5CF6;\n}\n.gender-card.total[_ngcontent-%COMP%] {\n  border-top: 3px solid #0D9488;\n}\n.gender-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-bottom: 10px;\n}\n.male[_ngcontent-%COMP%]   .gender-icon[_ngcontent-%COMP%] {\n  color: #3B82F6;\n}\n.female[_ngcontent-%COMP%]   .gender-icon[_ngcontent-%COMP%] {\n  color: #EC4899;\n}\n.other[_ngcontent-%COMP%]   .gender-icon[_ngcontent-%COMP%] {\n  color: #8B5CF6;\n}\n.total[_ngcontent-%COMP%]   .gender-icon[_ngcontent-%COMP%] {\n  color: #0D9488;\n}\n.gender-count[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1F2937;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n.gender-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.gender-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.gender-section-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #374151;\n  margin-bottom: 10px;\n  padding-left: 4px;\n  border-left: 3px solid #0D9488;\n  padding-left: 10px;\n}\n  .p-tabview-panels {\n  padding: 20px 0 0 0 !important;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent" });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-5DYMWECO.js.map
