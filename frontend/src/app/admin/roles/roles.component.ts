import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgFor,
            ButtonModule, SidebarModule, InputTextModule, CheckboxModule, TooltipModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  private api     = inject(ApiService);
  private auth    = inject(AuthService);
  private toast   = inject(ToastService);
  private fb      = inject(FormBuilder);
  private confirm = inject(ConfirmationService);

  get canCreate() { return this.auth.hasPermission('roles', 'can_create'); }
  get canUpdate() { return this.auth.hasPermission('roles', 'can_update'); }
  get canDelete() { return this.auth.hasPermission('roles', 'can_delete'); }

  roles       = signal<any[]>([]);
  selected    = signal<any>(null);
  pending     = signal<any[]>([]);
  private saved: any[] = [];
  dirty       = false;
  showForm    = false;
  saving      = false;
  savingPerms = false;
  isEditRole  = false;
  editRoleUuid = '';

  form = this.fb.group({ name: ['', Validators.required], code: ['', Validators.required] });

  permCols = [
    { key: 'can_view',   label: 'View'   },
    { key: 'can_create', label: 'Create' },
    { key: 'can_update', label: 'Update' },
    { key: 'can_delete', label: 'Delete' },
  ];

  allSelected(key: string): boolean {
    const ps = this.pending();
    return ps.length > 0 && ps.every((p: any) => p[key]);
  }

  toggleAll(key: string, val: boolean) {
    this.pending.update(ps => ps.map((p: any) => ({ ...p, [key]: val })));
    this.dirty = true;
  }

  markDirty() { this.dirty = true; }

  ngOnInit() { this.loadRoles(); }

  loadRoles() { this.api.get<any>('roles').subscribe(r => { if (r.success) this.roles.set(r.data); }); }

  private normPerms(perms: any[]): any[] {
    return perms.map((p: any) => ({
      ...p,
      can_view:   !!p.can_view,
      can_create: !!p.can_create,
      can_update: !!p.can_update,
      can_delete: !!p.can_delete,
    }));
  }

  selectRole(role: any) {
    if (this.dirty) {
      if (!confirm('You have unsaved changes. Discard them?')) return;
    }
    this.selected.set(role);
    this.dirty = false;
    this.api.get<any>(`roles/${role.uuid}`).subscribe(res => {
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

  confirmDelete(role: any) {
    this.confirm.confirm({
      message: `Delete role <strong>${role.name}</strong>? All users assigned to this role will also be archived and lose access.`,
      header: 'Delete Role',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete', rejectLabel: 'Cancel',
      defaultFocus: 'reject',
      accept: () => {
        this.api.delete(`roles/${role.uuid}`).subscribe({
          next: res => {
            if (res.success) {
              this.toast.success('Role deleted');
              if (this.selected()?.uuid === role.uuid) this.selected.set(null);
              this.loadRoles();
            }
          },
          error: err => this.toast.error(err.error?.message || 'Delete failed')
        });
      }
    });
  }

  openForm(role?: any) {
    this.form.reset();
    this.isEditRole = !!role;
    if (role) {
      this.editRoleUuid = role.uuid;
      this.form.patchValue({ name: role.name, code: role.code });
    }
    this.showForm = true;
  }

  saveRole() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    const obs = this.isEditRole
      ? this.api.put(`roles/${this.editRoleUuid}`, this.form.value)
      : this.api.post('roles', this.form.value);
    obs.subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(this.isEditRole ? 'Role updated' : 'Role created');
          this.showForm = false;
          this.loadRoles();
          if (this.isEditRole && this.selected()?.uuid === this.editRoleUuid) {
            this.selected.update(s => ({ ...s, ...this.form.value }));
          }
        }
        this.saving = false;
      },
      error: err => { this.saving = false; this.toast.error(err.error?.message || 'Error'); }
    });
  }

  savePermissions() {
    const role = this.selected(); if (!role) return;
    this.savingPerms = true;
    const perms = this.pending().map((p: any) => ({
      menu_id: p.menu_id,
      can_view:   p.can_view   ? 1 : 0,
      can_create: p.can_create ? 1 : 0,
      can_update: p.can_update ? 1 : 0,
      can_delete: p.can_delete ? 1 : 0,
    }));
    this.api.put(`roles/${role.uuid}/permissions`, { permissions: perms }).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success('Permissions saved');
          this.saved = this.normPerms(JSON.parse(JSON.stringify(this.pending())));
          this.dirty = false;
        }
        this.savingPerms = false;
      },
      error: () => { this.savingPerms = false; this.toast.error('Save failed'); }
    });
  }
}
