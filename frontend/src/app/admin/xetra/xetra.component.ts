import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-xetra',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TableModule, ButtonModule, SidebarModule,
            InputTextModule, TagModule, TooltipModule],
  templateUrl: './xetra.component.html',
  styleUrls: ['./xetra.component.scss']
})
export class XetraComponent implements OnInit {
  private api     = inject(ApiService);
  private auth    = inject(AuthService);
  private toast   = inject(ToastService);
  private fb      = inject(FormBuilder);
  private confirm = inject(ConfirmationService);

  rows     = signal<any[]>([]);
  showForm = false; editItem: any = null; saving = false;

  form = this.fb.group({
    name: ['', Validators.required],
    code: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{2,10}$/i)]]
  });

  get canCreate() { return this.auth.hasPermission('xetra', 'can_create'); }
  get canUpdate() { return this.auth.hasPermission('xetra', 'can_update'); }
  get canDelete() { return this.auth.hasPermission('xetra', 'can_delete'); }

  ngOnInit() { this.load(); }
  load() { this.api.get<any>('xetra').subscribe(r => { if (r.success) this.rows.set(r.data); }); }

  openForm(item?: any) {
    this.editItem = item || null;
    this.form.reset(item ? { name: item.name, code: item.code } : {});
    this.showForm = true;
  }
  closeForm() { this.showForm = false; this.editItem = null; }

  onSave() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    const req = this.editItem
      ? this.api.put(`xetra/${this.editItem.uuid}`, this.form.value)
      : this.api.post('xetra', this.form.value);
    req.subscribe({
      next: res => { if (res.success) { this.toast.success('Xetra saved'); this.closeForm(); this.load(); } this.saving = false; },
      error: err => { this.saving = false; this.toast.error(err.error?.errors?.name || err.error?.message || 'Save failed'); }
    });
  }

  confirmDelete(x: any) {
    this.confirm.confirm({
      message: `Archive <strong>${x.name}</strong>? This action can be undone by admin.`,
      header: 'Confirm Archive', icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Archive', rejectLabel: 'Cancel',
      defaultFocus: 'reject',
      accept: () => this.api.delete(`xetra/${x.uuid}`).subscribe({
        next: () => { this.toast.success('Xetra archived'); this.load(); }
      })
    });
  }
}
