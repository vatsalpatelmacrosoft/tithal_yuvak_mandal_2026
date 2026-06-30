import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf, TitleCasePipe, ButtonModule, InputTextModule,
            InputTextareaModule, DropdownModule, CardModule, MessageModule, ToastModule],
  template: `
    <div class="public-page">
      <div class="public-header">
        <img src="assets/Baps_logo.svg.png" alt="BAPS" style="width:40px;height:40px;object-fit:contain">
        <h1>{{ formType | titlecase }} Registration</h1>
      </div>

      <!-- Inactive -->
      <div class="public-body" *ngIf="inactive">
        <p-card>
          <div style="text-align:center;padding:40px 20px">
            <i class="pi pi-lock" style="font-size:56px;color:#D1D5DB;display:block;margin-bottom:16px"></i>
            <h2 style="color:#374151">Registration Closed</h2>
            <p style="color:#9CA3AF;margin-top:8px">Registration is not available. Please contact the admin.</p>
          </div>
        </p-card>
      </div>

      <!-- Success -->
      <div class="public-body" *ngIf="success">
        <p-card>
          <div style="text-align:center;padding:40px 20px">
            <i class="pi pi-check-circle" style="font-size:56px;color:#10B981;display:block;margin-bottom:16px"></i>
            <h2 style="color:#374151">Registration Successful!</h2>
            <p style="color:#6B7280;margin-top:8px">Your {{ formType }} ID has been created.</p>
            <div style="background:#FFF0E0;border-radius:12px;padding:24px;margin-top:24px;display:inline-block">
              <p style="font-size:0.85rem;color:#9CA3AF;margin-bottom:4px">Your ID</p>
              <p style="font-size:1.5rem;font-weight:700;color:#CC5500;letter-spacing:2px">{{ memberId }}</p>
            </div>

            <!-- Welcome Link -->
            <div style="margin-top:24px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:18px 20px;text-align:left">
              <p style="font-size:0.82rem;color:#166534;font-weight:600;margin:0 0 10px;display:flex;align-items:center;gap:6px">
                <i class="pi pi-link"></i> Your Welcome Card Link
              </p>
              <div style="display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #D1FAE5;border-radius:8px;padding:8px 12px">
                <span style="font-size:0.78rem;color:#374151;flex:1;word-break:break-all;overflow:hidden">{{ welcomeLink }}</span>
                <button (click)="copyLink()"
                        style="background:none;border:none;cursor:pointer;color:#059669;padding:4px;flex-shrink:0"
                        [title]="copied ? 'Copied!' : 'Copy link'">
                  <i class="pi" [class.pi-copy]="!copied" [class.pi-check]="copied"></i>
                </button>
              </div>
              <p style="font-size:0.76rem;color:#4B5563;margin:8px 0 0">
                Open this link to view your digital welcome card and QR code.
              </p>
            </div>
          </div>
        </p-card>
      </div>

      <!-- Form -->
      <div class="public-body" *ngIf="!inactive && !success">
        <p-card header="Personal Details">
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class="form-grid">
              <div class="field">
                <label class="required">First Name</label>
                <input pInputText formControlName="first_name" placeholder="First name" class="w-full"
                  [ngClass]="{'ng-invalid ng-dirty': hasErr('first_name')}">
                <small class="p-error" *ngIf="hasErr('first_name')">{{ getErr('first_name') }}</small>
              </div>
              <div class="field">
                <label>Middle Name</label>
                <input pInputText formControlName="middle_name" placeholder="Middle name" class="w-full">
              </div>
              <div class="field">
                <label class="required">Last Name</label>
                <input pInputText formControlName="last_name" placeholder="Last name" class="w-full"
                  [ngClass]="{'ng-invalid ng-dirty': hasErr('last_name')}">
                <small class="p-error" *ngIf="hasErr('last_name')">{{ getErr('last_name') }}</small>
              </div>
              <div class="field">
                <label class="required">Mobile Number</label>
                <input pInputText formControlName="mo_number" type="tel" placeholder="10-digit mobile" class="w-full"
                  [ngClass]="{'ng-invalid ng-dirty': hasErr('mo_number')}">
                <small class="p-error" *ngIf="hasErr('mo_number')">{{ getErr('mo_number') }}</small>
              </div>
              <div class="field">
                <label>WhatsApp Number</label>
                <input pInputText formControlName="whatsapp_number" type="tel"
                  placeholder="If different from mobile" class="w-full">
              </div>
              <div class="field">
                <label>Email</label>
                <input pInputText formControlName="email" type="email" placeholder="Email (optional)" class="w-full">
              </div>
              <div class="field">
                <label>Karyakar Type</label>
                <p-dropdown [options]="karyakarOptions" formControlName="is_karyakar"
                  optionLabel="label" optionValue="value" styleClass="w-full" />
              </div>
              <div class="field">
                <label class="required">Xetra</label>
                <p-dropdown [options]="xetras" formControlName="xetra_id"
                  optionLabel="name" optionValue="id" placeholder="Select Xetra" styleClass="w-full"
                  [ngClass]="{'ng-invalid ng-dirty': hasErr('xetra_id')}" />
                <small class="p-error" *ngIf="hasErr('xetra_id')">Please select a Xetra</small>
              </div>
              <div class="field">
                <label class="required">Mandal</label>
                <p-dropdown [options]="mandals" formControlName="mandal_id"
                  optionLabel="name" optionValue="id"
                  [placeholder]="loadingMandals ? 'Loading...' : (!form.get('xetra_id')?.value ? 'Select Xetra first' : 'Select Mandal')"
                  styleClass="w-full" [disabled]="!form.get('xetra_id')?.value || loadingMandals"
                  [ngClass]="{'ng-invalid ng-dirty': hasErr('mandal_id')}" />
                <small class="p-error" *ngIf="hasErr('mandal_id')">Please select a Mandal</small>
              </div>
              <div class="field" style="grid-column:1/-1">
                <label>Address</label>
                <textarea pInputTextarea formControlName="address" placeholder="Full address"
                  class="w-full" rows="3"></textarea>
              </div>
            </div>

            <div style="margin-top:20px">
              <p-button type="submit" label="Submit Registration" icon="pi pi-user-plus"
                [loading]="saving" styleClass="w-full" />
            </div>
          </form>
        </p-card>
      </div>
    </div>
    <p-toast position="bottom-right" />
  `
})
export class RegisterComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private api   = inject(ApiService);
  private toast = inject(ToastService);
  private fb    = inject(FormBuilder);

  formType    = ''; inactive = false; success = false; saving = false;
  memberId    = ''; memberUuid = ''; welcomeLink = ''; copied = false;
  xetras: any[] = []; mandals: any[] = []; loadingMandals = false;
  apiErrors: Record<string, string> = {};

  karyakarOptions = [
    { label: 'No',               value: 'no'       },
    { label: 'Bal Karyakar',     value: 'bal'      },
    { label: 'Yuva Karyakar',    value: 'yuva'     },
    { label: 'Sanyukta Karyakar',value: 'sanyukta' },
  ];

  form = this.fb.group({
    first_name: ['', Validators.required], middle_name: [''], last_name: ['', Validators.required],
    mo_number: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]], whatsapp_number: [''],
    email: ['', Validators.email], address: [''],
    xetra_id: [null, Validators.required], mandal_id: [null, Validators.required],
    is_karyakar: ['no'],
  });

  ngOnInit() {
    this.formType = this.route.snapshot.params['type'];
    this.api.publicGet<any>(`register/${this.formType}`).subscribe({
      next: res => { if (res.success) this.xetras = res.data.xetras; },
      error: err => { if (err.status === 403) this.inactive = true; }
    });

    this.form.get('xetra_id')!.valueChanges.subscribe(xetraId => {
      this.form.patchValue({ mandal_id: null });
      this.mandals = [];
      if (!xetraId) return;
      this.loadingMandals = true;
      this.api.publicGet<any>(`mandal?xetra_id=${xetraId}`).subscribe({
        next: res => { if (res.success) this.mandals = res.data; this.loadingMandals = false; },
        error: () => { this.loadingMandals = false; }
      });
    });
  }

  copyLink() {
    navigator.clipboard.writeText(this.welcomeLink).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2500);
    });
  }

  hasErr(f: string) { const c = this.form.get(f); return (c?.invalid && c.touched) || !!this.apiErrors[f]; }
  getErr(f: string) {
    if (this.apiErrors[f]) return this.apiErrors[f];
    const c = this.form.get(f);
    if (c?.errors?.['required']) return 'This field is required';
    if (c?.errors?.['pattern'])  return 'Invalid mobile number (10 digits, starts 6-9)';
    if (c?.errors?.['email'])    return 'Invalid email';
    return '';
  }

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true; this.apiErrors = {};
    this.api.publicPost<any>(`register/${this.formType}`, this.form.value).subscribe({
      next: res => {
        if (res.success) {
          this.success    = true;
          this.memberId   = res.data?.yuvak_id || res.data?.yuvati_id || '';
          this.memberUuid = res.data?.uuid || '';
          this.welcomeLink = `${document.baseURI}welcome/${this.formType}/${this.memberUuid}`;
        }
        this.saving = false;
      },
      error: err => {
        this.saving = false;
        if (err.error?.errors) { this.apiErrors = err.error.errors; this.form.markAllAsTouched(); }
        else this.toast.error(err.error?.message || 'Registration failed');
      }
    });
  }
}
