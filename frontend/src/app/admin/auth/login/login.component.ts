import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf,
            ButtonModule, InputTextModule, PasswordModule, ToastModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private fb     = inject(FormBuilder);
  private auth   = inject(AuthService);
  private router = inject(Router);
  private toast  = inject(ToastService);

  loading = false;

  form = this.fb.group({
    mo_number: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    password:  ['', Validators.required],
  });

  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.auth.login(this.f['mo_number'].value!, this.f['password'].value!).subscribe({
      next:     () => { this.router.navigate(['/admin/dashboard']); },
      error:    (err) => { this.loading = false; this.toast.error(err.error?.message || 'Login failed'); },
      complete: () => { this.loading = false; }
    });
  }
}
