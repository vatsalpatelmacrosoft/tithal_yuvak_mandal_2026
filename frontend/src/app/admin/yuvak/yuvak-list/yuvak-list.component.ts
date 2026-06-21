import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, TitleCasePipe } from '@angular/common';
import { TableModule, TableLazyLoadEvent } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { Yuvak, PaginatedResponse } from '../../../core/models';
import { environment } from '../../../../environments/environment';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-yuvak-list',
  standalone: true,
  imports: [FormsModule, NgIf, TitleCasePipe, TableModule, ButtonModule, InputTextModule,
            DropdownModule, TooltipModule],
  templateUrl: './yuvak-list.component.html',
  styleUrls: ['./yuvak-list.component.scss']
})
export class YuvakListComponent implements OnInit {
  private api     = inject(ApiService);
  private auth    = inject(AuthService);
  private router  = inject(Router);
  private toast   = inject(ToastService);
  private confirm = inject(ConfirmationService);

  yuvaks  = signal<Yuvak[]>([]);
  total   = signal(0);
  xetras: any[] = []; mandals: any[] = [];
  loading = false; perPage = 15;
  searchTerm = '';
  filters = { xetra_id: null as any, mandal_id: null as any };
  private search$ = new Subject<string>();

  get canCreate() { return this.auth.hasPermission('yuvak', 'can_create'); }
  get canUpdate() { return this.auth.hasPermission('yuvak', 'can_update'); }
  get canDelete() { return this.auth.hasPermission('yuvak', 'can_delete'); }

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
    if (this.filters.xetra_id)  params.xetra_id  = this.filters.xetra_id;
    if (this.filters.mandal_id) params.mandal_id = this.filters.mandal_id;

    this.api.get<PaginatedResponse<Yuvak>>('yuvak', params).subscribe({
      next: res => {
        if (res.success && res.data) { this.yuvaks.set(res.data.data); this.total.set(res.data.total); }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onSearch(v: string) { this.search$.next(v); }
  goToCreate() { this.router.navigate(['/admin/yuvak/new']); }
  edit(y: Yuvak) { this.router.navigate(['/admin/yuvak', y.uuid]); }

  exportCsv() {
    const token = localStorage.getItem('tdd_token') || '';
    let url = `${environment.apiUrl}/yuvak/export?token=${encodeURIComponent(token)}`;
    if (this.searchTerm)       url += `&search=${encodeURIComponent(this.searchTerm)}`;
    if (this.filters.xetra_id)  url += `&xetra_id=${this.filters.xetra_id}`;
    if (this.filters.mandal_id) url += `&mandal_id=${this.filters.mandal_id}`;
    const a = document.createElement('a');
    a.href = url;
    a.click();
  }

  openWelcomePage(y: Yuvak) {
    const url = `${window.location.origin}/welcome/yuvak/${y.uuid}`;
    window.open(url, '_blank');
  }

  copyWelcomeLink(y: Yuvak) {
    const url = `${window.location.origin}/welcome/yuvak/${y.uuid}`;
    navigator.clipboard.writeText(url).then(() => {
      this.toast.success('Welcome link copied!');
    });
  }

  sendingNotify: string | null = null;
  sendNotification(y: Yuvak) {
    this.sendingNotify = y.uuid;
    this.api.post(`yuvak/${y.uuid}/notify`, {}).subscribe({
      next: res => {
        if (res.success) this.toast.success('Welcome message sent!');
        this.sendingNotify = null;
      },
      error: () => { this.toast.error('Failed to send message'); this.sendingNotify = null; }
    });
  }

  confirmDelete(y: Yuvak) {
    this.confirm.confirm({
      message: `Archive <strong>${y.first_name} ${y.last_name}</strong>? Their record will be hidden from active lists.`,
      header: 'Confirm Archive',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Archive', rejectLabel: 'Cancel',
      defaultFocus: 'reject',
      accept: () => {
        this.api.delete(`yuvak/${y.uuid}`).subscribe({
          next: res => { if (res.success) { this.toast.success('Yuvak archived'); this.loadData(1); } }
        });
      }
    });
  }
}
