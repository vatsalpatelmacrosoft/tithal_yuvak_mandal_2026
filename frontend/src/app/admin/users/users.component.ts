import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgIf, DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, DatePipe, TableModule, ButtonModule,
            SidebarModule, InputTextModule, DropdownModule, PasswordModule, ConfirmDialogModule,
            TagModule, TooltipModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private api     = inject(ApiService);
  private toast   = inject(ToastService);
  private fb      = inject(FormBuilder);
  private confirm = inject(ConfirmationService);

  users   = signal<any[]>([]);
  yuvaks: any[] = []; roles: any[] = [];
  showAdd = false; saving = false;
  showChangeRole = false; changeRoleTarget: any = null; newRoleUuid = '';
  searchTerm = '';

  get filteredUsers() {
    const q = this.searchTerm.toLowerCase().trim();
    if (!q) return this.users();
    return this.users().filter(u =>
      `${u.first_name} ${u.last_name}`.toLowerCase().includes(q) ||
      u.mo_number?.includes(q) ||
      u.yuvak_id?.toLowerCase().includes(q) ||
      u.role_name?.toLowerCase().includes(q)
    );
  }

  addForm = this.fb.group({
    yuvak_uuid: ['', Validators.required],
    role_uuid:  ['', Validators.required],
    password:   ['', [Validators.required, Validators.minLength(8)]],
  });

  ngOnInit() {
    this.loadUsers();
    this.api.get<any>('yuvak', { limit: 200 }).subscribe(r => {
      if (r.success) this.yuvaks = r.data.data.map((y: any) => ({
        ...y, display: `${y.first_name} ${y.last_name} — ${y.yuvak_id} (${y.mo_number})`
      }));
    });
    this.api.get<any>('roles').subscribe(r => { if (r.success) this.roles = r.data; });
  }

  loadUsers() { this.api.get<any>('users').subscribe(r => { if (r.success) this.users.set(r.data); }); }

  openAddForm() { this.addForm.reset(); this.showAdd = true; }

  createUser() {
    if (this.addForm.invalid) { this.addForm.markAllAsTouched(); return; }
    this.saving = true;
    this.api.post('users', this.addForm.value).subscribe({
      next: res => { if (res.success) { this.toast.success('User created'); this.showAdd = false; this.loadUsers(); } this.saving = false; },
      error: err => { this.saving = false; this.toast.error(err.error?.message || err.error?.errors?.yuvak_uuid || 'Error'); }
    });
  }

  openChangeRole(u: any) {
    this.changeRoleTarget = u;
    this.newRoleUuid = this.roles.find(r => r.name === u.role_name)?.uuid || '';
    this.showChangeRole = true;
  }

  doChangeRole() {
    this.api.put(`users/${this.changeRoleTarget.uuid}`, { role_uuid: this.newRoleUuid }).subscribe({
      next: () => { this.toast.success('Role updated'); this.showChangeRole = false; this.loadUsers(); },
      error: () => {}
    });
  }

  confirmDelete(u: any) {
    this.confirm.confirm({
      message: `Archive user <strong>${u.first_name} ${u.last_name}</strong>? This will disable their access.`,
      header: 'Confirm Archive',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Archive', rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-danger', rejectButtonStyleClass: 'p-button-text',
      accept: () => this.api.delete(`users/${u.uuid}`).subscribe({ next: () => { this.toast.success('User archived'); this.loadUsers(); } })
    });
  }
}
