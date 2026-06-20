import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf, ButtonModule, PasswordModule, ToastModule],
  template: `
    <div class="login-page">
      <div class="login-left">
        <span class="login-logo">🔑</span>
        <h1>New Password</h1>
        <p>Choose a strong new password</p>
      </div>
      <div class="login-right">
        <div class="login-card">
          <h2>Reset Password</h2>
          <p class="subtitle">Enter your new password below</p>
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class="form-group" style="margin-bottom:20px">
              <label class="required">New Password</label>
              <p-password formControlName="new_password" [feedback]="true" [toggleMask]="true"
                placeholder="Min 8 characters" styleClass="w-full" inputStyleClass="w-full">
              </p-password>
              <small class="p-error" *ngIf="form.get('new_password')?.invalid && form.get('new_password')?.touched">
                Password must be at least 8 characters
              </small>
            </div>
            <p-button type="submit" label="Reset Password" icon="pi pi-lock"
              [loading]="loading" styleClass="w-full">
            </p-button>
          </form>
          <div style="text-align:center;margin-top:16px">
            <a routerLink="/admin/login" style="color:var(--primary-color);font-size:0.88rem">
              ← Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
    <p-toast position="bottom-right" />
  `
})
export class ResetPasswordComponent implements OnInit {
  private auth  = inject(AuthService);
  private toast = inject(ToastService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb    = inject(FormBuilder);
  private token = '';
  loading = false;
  form = this.fb.group({ new_password: ['', [Validators.required, Validators.minLength(8)]] });

  ngOnInit() { this.token = this.route.snapshot.queryParams['token'] || ''; }

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    if (!this.token) { this.toast.error('Invalid reset link'); return; }
    this.loading = true;
    this.auth.resetPassword(this.token, this.form.value.new_password!).subscribe({
      next: res => {
        if (res.success) { this.toast.success('Password reset! Please login.'); this.router.navigate(['/admin/login']); }
        this.loading = false;
      },
      error: err => { this.loading = false; this.toast.error(err.error?.message || 'Reset failed'); }
    });
  }
}
