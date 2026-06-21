import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-yuvati-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf, ButtonModule, InputTextModule,
            InputTextareaModule, DropdownModule, ChipsModule],
  templateUrl: './yuvati-form.component.html',
  styleUrls: ['./yuvati-form.component.scss']
})
export class YuvatiFormComponent implements OnInit {
  private fb    = inject(FormBuilder);
  private api   = inject(ApiService);
  private auth  = inject(AuthService);
  private toast = inject(ToastService);
  readonly router = inject(Router);
  private route = inject(ActivatedRoute);

  get canCreate() { return this.auth.hasPermission('yuvati', 'can_create'); }
  get canUpdate() { return this.auth.hasPermission('yuvati', 'can_update'); }

  karyakarOptions = [
    { label: 'No',       value: 'no' },
    { label: 'Bal',      value: 'bal' },
    { label: 'Yuva',     value: 'yuva' },
    { label: 'Sanyukta', value: 'sanyukta' }
  ];

  form = this.fb.group({
    first_name: ['', Validators.required], middle_name: [''], last_name: ['', Validators.required],
    mo_number: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]], whatsapp_number: [''],
    email: ['', Validators.email], address: [''],
    xetra_id: [null as any, Validators.required], mandal_id: [null as any, Validators.required],
    is_karyakar: ['no'], tags: [[] as string[]],
  });

  xetras: any[] = []; mandals: any[] = []; loadingMandals = false;
  loading = false; saving = false; isEdit = false; editUuid = '';
  apiErrors: Record<string, string> = {};

  ngOnInit() {
    this.api.get<any>('xetra').subscribe(r => { if (r.success) this.xetras = r.data; });

    this.form.get('xetra_id')!.valueChanges.subscribe(xetraId => {
      if (!this.isEdit) {
        this.form.patchValue({ mandal_id: null }, { emitEvent: false });
        this.mandals = [];
      }
      if (!xetraId) return;
      this.loadingMandals = true;
      this.api.get<any>('mandal', { xetra_id: xetraId }).subscribe({
        next: r => { if (r.success) this.mandals = r.data; this.loadingMandals = false; },
        error: () => { this.loadingMandals = false; }
      });
    });

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true; this.editUuid = id; this.loading = true;
      this.api.get<any>(`yuvati/${id}`).subscribe(res => {
        if (res.success) {
          const y = res.data;
          if (y.xetra_id) {
            this.api.get<any>('mandal', { xetra_id: y.xetra_id }).subscribe(r => {
              if (r.success) this.mandals = r.data;
              this.form.patchValue({ ...y, xetra_id: y.xetra_id, mandal_id: y.mandal_id, tags: y.tags || [] });
            });
          } else {
            this.form.patchValue({ ...y, tags: y.tags || [] });
          }
        }
        this.loading = false;
      });
    }
  }

  hasErr(f: string) { const c = this.form.get(f); return (c?.invalid && (c.touched || c.dirty)) || !!this.apiErrors[f]; }
  getErr(f: string) {
    if (this.apiErrors[f]) return this.apiErrors[f];
    const c = this.form.get(f);
    if (c?.errors?.['required']) return 'This field is required';
    if (c?.errors?.['pattern'])  return 'Invalid format';
    if (c?.errors?.['email'])    return 'Invalid email address';
    return '';
  }

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true; this.apiErrors = {};
    const payload = this.form.value;
    const req = this.isEdit ? this.api.put(`yuvati/${this.editUuid}`, payload) : this.api.post('yuvati', payload);
    req.subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(this.isEdit ? 'Yuvati updated successfully' : 'Yuvati added successfully');
          this.router.navigate(['/admin/yuvati']);
        }
        this.saving = false;
      },
      error: err => {
        this.saving = false;
        if (err.error?.errors) { this.apiErrors = err.error.errors; this.form.markAllAsTouched(); }
        else this.toast.error(err.error?.message || 'Save failed');
      }
    });
  }
}
