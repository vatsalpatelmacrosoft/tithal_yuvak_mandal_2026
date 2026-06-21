import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, TitleCasePipe } from '@angular/common';
import { TableModule, TableLazyLoadEvent } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { environment } from '../../../../environments/environment';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-yuvati-list',
  standalone: true,
  imports: [FormsModule, NgIf, TitleCasePipe, TableModule, ButtonModule, InputTextModule,
            DropdownModule, DialogModule, TooltipModule],
  templateUrl: './yuvati-list.component.html',
  styleUrls: ['./yuvati-list.component.scss']
})
export class YuvatiListComponent implements OnInit {
  private api     = inject(ApiService);
  private auth    = inject(AuthService);
  readonly router = inject(Router);
  private toast   = inject(ToastService);
  private confirm = inject(ConfirmationService);

  rows    = signal<any[]>([]);
  total   = signal(0);
  xetras: any[] = []; mandals: any[] = [];
  loading = false; perPage = 15;
  searchTerm = ''; xetraFilter: any = null; mandalFilter: any = null;
  showQrDialog = false; qrTarget: any = null; qrUrl = '';
  private search$ = new Subject<string>();

  get canCreate() { return this.auth.hasPermission('yuvati', 'can_create'); }
  get canUpdate() { return this.auth.hasPermission('yuvati', 'can_update'); }
  get canDelete() { return this.auth.hasPermission('yuvati', 'can_delete'); }

  ngOnInit() {
    this.api.get<any>('xetra').subscribe(r => { if (r.success) this.xetras = r.data; });
    this.api.get<any>('mandal').subscribe(r => { if (r.success) this.mandals = r.data; });
    this.search$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => this.loadData(1));
    this.loadData(1);
  }

  onLazyLoad(event: TableLazyLoadEvent) {
    const page = Math.floor((event.first ?? 0) / (event.rows ?? this.perPage)) + 1;
    this.loadData(page);
  }

  loadData(page = 1) {
    this.loading = true;
    const params: any = { page, limit: this.perPage, search: this.searchTerm };
    if (this.xetraFilter)  params.xetra_id  = this.xetraFilter;
    if (this.mandalFilter) params.mandal_id = this.mandalFilter;
    this.api.get<any>('yuvati', params).subscribe({
      next: res => {
        if (res.success) { this.rows.set(res.data.data); this.total.set(res.data.total); }
        this.loading = false;
      }, error: () => { this.loading = false; }
    });
  }

  onSearch(v: string) { this.search$.next(v); }

  exportCsv() {
    const token = localStorage.getItem('tdd_token') || '';
    let url = `${environment.apiUrl}/yuvati/export?token=${encodeURIComponent(token)}`;
    if (this.searchTerm)    url += `&search=${encodeURIComponent(this.searchTerm)}`;
    if (this.xetraFilter)   url += `&xetra_id=${this.xetraFilter}`;
    if (this.mandalFilter)  url += `&mandal_id=${this.mandalFilter}`;
    const a = document.createElement('a');
    a.href = url;
    a.click();
  }

  sendingNotify: string | null = null;
  sendNotification(y: any) {
    this.sendingNotify = y.uuid;
    this.api.post(`yuvati/${y.uuid}/notify`, {}).subscribe({
      next: res => {
        if (res.success) this.toast.success('Welcome message sent!');
        this.sendingNotify = null;
      },
      error: () => { this.toast.error('Failed to send message'); this.sendingNotify = null; }
    });
  }

  openWelcomePage(y: any) {
    const url = `${window.location.origin}/welcome/yuvati/${y.uuid}`;
    window.open(url, '_blank');
  }

  copyWelcomeLink(y: any) {
    const url = `${window.location.origin}/welcome/yuvati/${y.uuid}`;
    navigator.clipboard.writeText(url).then(() => {
      this.toast.success('Welcome link copied!');
    });
  }

  showQr(y: any) {
    this.qrTarget = y; this.qrUrl = ''; this.showQrDialog = true;
    this.api.get<any>(`yuvati/${y.uuid}/qr`).subscribe(res => { if (res.success) this.qrUrl = res.data.qr_url; });
  }

  confirmDelete(y: any) {
    this.confirm.confirm({
      message: `Archive <strong>${y.first_name} ${y.last_name}</strong>? Their record will be hidden from active lists.`,
      header: 'Confirm Archive',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Archive', rejectLabel: 'Cancel',
      defaultFocus: 'reject',
      accept: () => {
        this.api.delete(`yuvati/${y.uuid}`).subscribe({
          next: res => { if (res.success) { this.toast.success('Yuvati archived'); this.loadData(1); } }
        });
      }
    });
  }
}
