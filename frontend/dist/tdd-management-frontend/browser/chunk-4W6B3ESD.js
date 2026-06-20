import {
  Sidebar,
  SidebarModule
} from "./chunk-7LZ2K3I7.js";
import {
  Tag,
  TagModule
} from "./chunk-5WJ72OSF.js";
import {
  Password,
  PasswordModule
} from "./chunk-SSUFSAWO.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-MZF3RCZ3.js";
import {
  Table,
  TableModule
} from "./chunk-B3OHXLFG.js";
import "./chunk-AG2T7FMP.js";
import "./chunk-KOUEGY3L.js";
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
  Validators,
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
import "./chunk-RZOKDKRV.js";
import {
  DatePipe,
  NgIf,
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
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
} from "./chunk-PUKDGUBM.js";

// src/app/admin/users/users.component.ts
var _c0 = () => ({ "min-width": "60rem" });
var _c1 = () => ({ width: "460px" });
var _c2 = () => ({ width: "100%" });
var _c3 = () => ({ width: "380px" });
var _c4 = () => ({ width: "420px" });
function UsersComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Yuvak ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Last Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 28);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "p-tag", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 32);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "p-button", 33);
    \u0275\u0275listener("click", function UsersComponent_ng_template_19_Template_p_button_click_14_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openChangeRole(u_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-button", 34);
    \u0275\u0275listener("click", function UsersComponent_ng_template_19_Template_p_button_click_15_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(u_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r2.yuvak_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r2.first_name, " ", u_r2.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.mo_number);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", u_r2.role_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.last_login ? \u0275\u0275pipeBind2(12, 10, u_r2.last_login, "dd/MM/yy HH:mm") : "Never");
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function UsersComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275text(3, " No users found ");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Add User from Yuvak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "p-button", 40);
    \u0275\u0275listener("click", function UsersComponent_ng_template_22_Template_p_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAdd = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 41);
    \u0275\u0275listener("click", function UsersComponent_ng_template_22_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createUser());
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
function UsersComponent_small_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1, "Select a Yuvak");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_small_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1, "Select a Role");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_small_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1, " Min 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Change Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "p-button", 40);
    \u0275\u0275listener("click", function UsersComponent_ng_template_40_Template_p_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showChangeRole = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 43);
    \u0275\u0275listener("click", function UsersComponent_ng_template_40_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.doChangeRole());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("outlined", true);
  }
}
var UsersComponent = class _UsersComponent {
  api = inject(ApiService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  confirm = inject(ConfirmationService);
  users = signal([]);
  yuvaks = [];
  roles = [];
  showAdd = false;
  saving = false;
  showChangeRole = false;
  changeRoleTarget = null;
  newRoleUuid = "";
  searchTerm = "";
  get filteredUsers() {
    const q = this.searchTerm.toLowerCase().trim();
    if (!q)
      return this.users();
    return this.users().filter((u) => `${u.first_name} ${u.last_name}`.toLowerCase().includes(q) || u.mo_number?.includes(q) || u.yuvak_id?.toLowerCase().includes(q) || u.role_name?.toLowerCase().includes(q));
  }
  addForm = this.fb.group({
    yuvak_uuid: ["", Validators.required],
    role_uuid: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });
  ngOnInit() {
    this.loadUsers();
    this.api.get("yuvak", { limit: 200 }).subscribe((r) => {
      if (r.success)
        this.yuvaks = r.data.data.map((y) => __spreadProps(__spreadValues({}, y), {
          display: `${y.first_name} ${y.last_name} \u2014 ${y.yuvak_id} (${y.mo_number})`
        }));
    });
    this.api.get("roles").subscribe((r) => {
      if (r.success)
        this.roles = r.data;
    });
  }
  loadUsers() {
    this.api.get("users").subscribe((r) => {
      if (r.success)
        this.users.set(r.data);
    });
  }
  openAddForm() {
    this.addForm.reset();
    this.showAdd = true;
  }
  createUser() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.api.post("users", this.addForm.value).subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success("User created");
          this.showAdd = false;
          this.loadUsers();
        }
        this.saving = false;
      },
      error: (err) => {
        this.saving = false;
        this.toast.error(err.error?.message || err.error?.errors?.yuvak_uuid || "Error");
      }
    });
  }
  openChangeRole(u) {
    this.changeRoleTarget = u;
    this.newRoleUuid = this.roles.find((r) => r.name === u.role_name)?.uuid || "";
    this.showChangeRole = true;
  }
  doChangeRole() {
    this.api.put(`users/${this.changeRoleTarget.uuid}`, { role_uuid: this.newRoleUuid }).subscribe({
      next: () => {
        this.toast.success("Role updated");
        this.showChangeRole = false;
        this.loadUsers();
      },
      error: () => {
      }
    });
  }
  confirmDelete(u) {
    this.confirm.confirm({
      message: `Archive user <strong>${u.first_name} ${u.last_name}</strong>? This will disable their access.`,
      header: "Confirm Archive",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Archive",
      rejectLabel: "Cancel",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text",
      accept: () => this.api.delete(`users/${u.uuid}`).subscribe({ next: () => {
        this.toast.success("User archived");
        this.loadUsers();
      } })
    });
  }
  static \u0275fac = function UsersComponent_Factory(t) {
    return new (t || _UsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 43, consts: [[1, "module-hero"], [1, "hero-left"], [1, "hero-icon", "teal"], [1, "pi", "pi-cog"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge"], ["label", "Add User", "icon", "pi pi-user-plus", 3, "click"], [1, "table-card"], [1, "filter-bar"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Search name, mobile, role...", 2, "width", "260px", 3, "ngModelChange", "ngModel"], ["styleClass", "p-datatable-striped", 3, "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["position", "right", 3, "visibleChange", "visible", "dismissible"], [3, "ngSubmit", "formGroup"], [1, "field", 2, "margin-bottom", "18px"], [1, "required"], ["formControlName", "yuvak_uuid", "optionLabel", "display", "optionValue", "uuid", "placeholder", "Select Yuvak", "filterBy", "display", 3, "options", "filter"], ["class", "p-error", 4, "ngIf"], ["formControlName", "role_uuid", "optionLabel", "name", "optionValue", "uuid", "placeholder", "Select Role", 3, "options"], [1, "field"], ["formControlName", "password", "placeholder", "Min 8 characters", "inputStyleClass", "w-full", 3, "feedback", "toggleMask"], [2, "margin-bottom", "18px", "color", "#6B7280", "font-size", "0.9rem"], ["optionLabel", "name", "optionValue", "uuid", "placeholder", "Select Role", 3, "ngModelChange", "options", "ngModel"], [2, "width", "8rem"], [2, "background", "#FFF0E0", "padding", "2px 7px", "border-radius", "4px", "font-size", "0.82rem"], [2, "font-weight", "500"], ["severity", "info", 3, "value"], [2, "font-size", "0.85rem", "color", "#6B7280"], ["icon", "pi pi-shield", "size", "small", "pTooltip", "Change Role", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Archive", "tooltipPosition", "top", 3, "click", "rounded", "text"], ["colspan", "6", 2, "text-align", "center", "padding", "3rem", "color", "#9CA3AF"], [1, "pi", "pi-users", 2, "font-size", "2rem", "display", "block", "margin-bottom", "10px", "color", "#D1D5DB"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "flex", "1", "margin-right", "8px"], [2, "font-weight", "700", "font-size", "1rem", "color", "#1F2937"], [2, "display", "flex", "gap", "8px"], ["label", "Cancel", "size", "small", 3, "click", "outlined"], ["label", "Create User", "size", "small", 3, "click", "loading"], [1, "p-error"], ["label", "Update", "size", "small", 3, "click"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Grant portal access to Yuvak members and manage roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "p-button", 7);
      \u0275\u0275listener("click", function UsersComponent_Template_p_button_click_11_listener() {
        return ctx.openAddForm();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "span", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "p-table", 13);
      \u0275\u0275template(18, UsersComponent_ng_template_18_Template, 13, 0, "ng-template", 14)(19, UsersComponent_ng_template_19_Template, 16, 13, "ng-template", 15)(20, UsersComponent_ng_template_20_Template, 4, 0, "ng-template", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p-sidebar", 17);
      \u0275\u0275twoWayListener("visibleChange", function UsersComponent_Template_p_sidebar_visibleChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAdd, $event) || (ctx.showAdd = $event);
        return $event;
      });
      \u0275\u0275template(22, UsersComponent_ng_template_22_Template, 6, 2, "ng-template", 14);
      \u0275\u0275elementStart(23, "form", 18);
      \u0275\u0275listener("ngSubmit", function UsersComponent_Template_form_ngSubmit_23_listener() {
        return ctx.createUser();
      });
      \u0275\u0275elementStart(24, "div", 19)(25, "label", 20);
      \u0275\u0275text(26, "Select Yuvak");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "p-dropdown", 21);
      \u0275\u0275template(28, UsersComponent_small_28_Template, 2, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19)(30, "label", 20);
      \u0275\u0275text(31, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "p-dropdown", 23);
      \u0275\u0275template(33, UsersComponent_small_33_Template, 2, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 24)(35, "label", 20);
      \u0275\u0275text(36, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "p-password", 25);
      \u0275\u0275template(38, UsersComponent_small_38_Template, 2, 0, "small", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "p-sidebar", 17);
      \u0275\u0275twoWayListener("visibleChange", function UsersComponent_Template_p_sidebar_visibleChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showChangeRole, $event) || (ctx.showChangeRole = $event);
        return $event;
      });
      \u0275\u0275template(40, UsersComponent_ng_template_40_Template, 6, 1, "ng-template", 14);
      \u0275\u0275elementStart(41, "p", 26);
      \u0275\u0275text(42, " User: ");
      \u0275\u0275elementStart(43, "strong");
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 24)(46, "label");
      \u0275\u0275text(47, "New Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p-dropdown", 27);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_p_dropdown_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newRoleUuid, $event) || (ctx.newRoleUuid = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(49, "p-confirmDialog");
    }
    if (rf & 2) {
      let tmp_11_0;
      let tmp_14_0;
      let tmp_18_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.users().length, " User");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.filteredUsers)("tableStyle", \u0275\u0275pureFunction0(35, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.showAdd);
      \u0275\u0275property("dismissible", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.addForm);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c2));
      \u0275\u0275property("options", ctx.yuvaks)("filter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.addForm.get("yuvak_uuid")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.addForm.get("yuvak_uuid")) == null ? null : tmp_11_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c2));
      \u0275\u0275property("options", ctx.roles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.addForm.get("role_uuid")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.addForm.get("role_uuid")) == null ? null : tmp_14_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c2));
      \u0275\u0275property("feedback", false)("toggleMask", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_18_0 = ctx.addForm.get("password")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.addForm.get("password")) == null ? null : tmp_18_0.touched));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.showChangeRole);
      \u0275\u0275property("dismissible", true);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", ctx.changeRoleTarget == null ? null : ctx.changeRoleTarget.first_name, " ", ctx.changeRoleTarget == null ? null : ctx.changeRoleTarget.last_name, "");
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c2));
      \u0275\u0275property("options", ctx.roles);
      \u0275\u0275twoWayProperty("ngModel", ctx.newRoleUuid);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c4));
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, NgIf, DatePipe, TableModule, Table, PrimeTemplate, ButtonModule, Button, SidebarModule, Sidebar, InputTextModule, InputText, DropdownModule, Dropdown, PasswordModule, Password, ConfirmDialogModule, ConfirmDialog, TagModule, Tag, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent" });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-4W6B3ESD.js.map
