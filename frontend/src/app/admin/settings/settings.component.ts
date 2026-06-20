import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

interface FieldConfig {
  label: string;
  required: boolean;
  max_length: number;
}

const FIELD_KEYS = ['name', 'middle_name', 'last_name', 'xetra_name', 'mandal_name', 'address'] as const;
type FieldKey = typeof FIELD_KEYS[number];

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor, NgIf,
            ButtonModule, InputTextModule, InputNumberModule, ToggleButtonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private api   = inject(ApiService);
  private toast = inject(ToastService);

  regOpen  = signal(false);
  saving   = false;
  loading  = true;

  fieldKeys = FIELD_KEYS;
  fields: Record<FieldKey, FieldConfig> = {
    name:        { label: 'Name',        required: true,  max_length: 100 },
    middle_name: { label: 'Middle Name', required: false, max_length: 100 },
    last_name:   { label: 'Last Name',   required: true,  max_length: 100 },
    xetra_name:  { label: 'Xetra Name',  required: false, max_length: 100 },
    mandal_name: { label: 'Mandal Name', required: false, max_length: 100 },
    address:     { label: 'Address',     required: false, max_length: 500 },
  };

  fieldLabels: Record<FieldKey, string> = {
    name:        'Name',
    middle_name: 'Middle Name',
    last_name:   'Last Name',
    xetra_name:  'Xetra Name',
    mandal_name: 'Mandal Name',
    address:     'Address',
  };

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.get<any>('settings').subscribe({
      next: res => {
        if (res.success) {
          this.regOpen.set(!!res.data.reg_open);
          if (res.data.field_config) {
            for (const key of FIELD_KEYS) {
              if (res.data.field_config[key]) {
                this.fields[key] = { ...this.fields[key], ...res.data.field_config[key] };
              }
            }
          }
        }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  save() {
    this.saving = true;
    this.api.post<any>('settings', {
      reg_open:     this.regOpen() ? 1 : 0,
      field_config: this.fields,
    }).subscribe({
      next: res => {
        if (res.success) this.toast.success('Settings saved successfully');
        this.saving = false;
      },
      error: err => {
        this.toast.error(err.error?.message || 'Save failed');
        this.saving = false;
      }
    });
  }

  toggleReg() { this.regOpen.update(v => !v); }
}
