import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-mandal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, TableModule, ButtonModule, SidebarModule,
            InputTextModule, DropdownModule, ConfirmDialogModule, TagModule, TooltipModule],
  templateUrl: './mandal.component.html',
  styleUrls: ['./mandal.component.scss']
})
export class MandalComponent implements OnInit {
  private api     = inject(ApiService);
  readonly auth   = inject(AuthService);
  private toast   = inject(ToastService);
  private fb      = inject(FormBuilder);
  private confirm = inject(ConfirmationService);

  rows    = signal<any[]>([]);
  xetras: any[] = [];
  xetraFilter: any = null;
  show = false; editing: any = null; saving = false;

  form = this.fb.group({
    xetra_id: [null as any, Validators.required],
    name:     ['', Validators.required],
    code:     ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{2,10}$/i)]]
  });

  ngOnInit() {
    this.api.get<any>('xetra').subscribe(r => { if (r.success) this.xetras = r.data; });
    this.load();
  }

  load() {
    const params: any = {};
    if (this.xetraFilter) params.xetra_id = this.xetraFilter;
    this.api.get<any>('mandal', params).subscribe(r => { if (r.success) this.rows.set(r.data); });
  }

  openForm(item?: any) {
    this.editing = item || null;
    this.form.reset(item ? { xetra_id: item.xetra_id, name: item.name, code: item.code } : {});
    this.show = true;
  }

  closeForm() { this.show = false; this.editing = null; }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    const req = this.editing
      ? this.api.put(`mandal/${this.editing.uuid}`, this.form.value)
      : this.api.post('mandal', this.form.value);
    req.subscribe({
      next: res => { if (res.success) { this.toast.success('Mandal saved'); this.closeForm(); this.load(); } this.saving = false; },
      error: err => { this.saving = false; this.toast.error(err.error?.message || 'Error'); }
    });
  }

  confirmDelete(m: any) {
    this.confirm.confirm({
      message: `Archive <strong>${m.name}</strong>?`, header: 'Confirm Archive',
      icon: 'pi pi-exclamation-triangle', acceptLabel: 'Archive', rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-danger', rejectButtonStyleClass: 'p-button-text',
      accept: () => this.api.delete(`mandal/${m.uuid}`).subscribe({ next: () => { this.toast.success('Mandal archived'); this.load(); } })
    });
  }
}
