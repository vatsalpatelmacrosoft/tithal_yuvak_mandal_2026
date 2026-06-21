import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgIf, DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-shibir',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, DatePipe, TableModule, ButtonModule,
            SidebarModule, InputTextModule, TooltipModule],
  templateUrl: './shibir.component.html',
  styleUrls: ['./shibir.component.scss']
})
export class ShibirComponent implements OnInit {
  private api     = inject(ApiService);
  private auth    = inject(AuthService);
  private toast   = inject(ToastService);
  private fb      = inject(FormBuilder);
  private confirm = inject(ConfirmationService);

  get canCreate() { return this.auth.hasPermission('shibir', 'can_create'); }
  get canUpdate() { return this.auth.hasPermission('shibir', 'can_update'); }
  get canDelete() { return this.auth.hasPermission('shibir', 'can_delete'); }

  rows = signal<any[]>([]); show = false; editing: any = null; saving = false;
  searchTerm = '';
  form = this.fb.group({ name: ['', Validators.required], date: ['', Validators.required] });

  get filteredRows() {
    const q = this.searchTerm.toLowerCase().trim();
    return q ? this.rows().filter(s => s.name.toLowerCase().includes(q)) : this.rows();
  }

  ngOnInit() { this.load(); }
  load() { this.api.get<any>('shibir').subscribe(r => { if (r.success) this.rows.set(r.data); }); }
  openForm(item?: any) { this.editing = item || null; this.form.reset(item ? { name: item.name, date: item.date } : {}); this.show = true; }
  closeForm() { this.show = false; this.editing = null; }
  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; } this.saving = true;
    const req = this.editing ? this.api.put(`shibir/${this.editing.uuid}`, this.form.value) : this.api.post('shibir', this.form.value);
    req.subscribe({
      next: res => { if (res.success) { this.toast.success('Shibir saved'); this.closeForm(); this.load(); } this.saving = false; },
      error: err => { this.saving = false; this.toast.error(err.error?.message || 'Error'); }
    });
  }
  confirmDelete(s: any) {
    this.confirm.confirm({
      message: `Archive <strong>${s.name}</strong>?`, header: 'Confirm Archive',
      icon: 'pi pi-exclamation-triangle', acceptLabel: 'Archive', rejectLabel: 'Cancel',
      defaultFocus: 'reject',
      accept: () => this.api.delete(`shibir/${s.uuid}`).subscribe({ next: () => { this.toast.success('Shibir archived'); this.load(); } })
    });
  }
}
