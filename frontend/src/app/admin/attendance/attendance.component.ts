import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, DatePipe, TitleCasePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { Html5Qrcode } from 'html5-qrcode';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, DatePipe, TitleCasePipe,
            TableModule, ButtonModule, InputTextModule,
            DropdownModule, TagModule, DialogModule, TooltipModule],
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit, OnDestroy {
  private api   = inject(ApiService);
  private auth  = inject(AuthService);
  private toast = inject(ToastService);

  get canViewAttendance() { return this.auth.hasPermission('attendance', 'can_view'); }
  get canViewYuvak()  { return this.canViewAttendance || this.auth.hasPermission('yuvak',  'can_view'); }
  get canViewYuvati() { return this.canViewAttendance || this.auth.hasPermission('yuvati', 'can_view'); }

  records   = signal<any[]>([]);
  dateWise  = signal<any[]>([]);
  nameWise  = signal<any[]>([]);
  summary   = signal({ yuvak: 0, yuvati: 0, total: 0 });

  xetraOptions = signal<{label: string, value: any}[]>([{ label: 'All Xetras', value: '' }]);
  mandalOptions = signal<{label: string, value: any}[]>([{ label: 'All Mandals', value: '' }]);

  readonly today = AttendanceComponent.localDate();

  // Filters
  fromDate      = this.today;
  toDate        = this.today;
  filterType    = '';
  filterXetraId: any = '';
  filterMandalId: any = '';
  filterFromTime = '';
  filterToTime   = '';
  scanDate   = this.today;

  // Server-driven sort state, one per tab (each hits its own backend endpoint)
  sortField = 'attendance_date'; sortOrder = -1;
  dateWiseSortField = 'attendance_date'; dateWiseSortOrder = -1;
  nameWiseSortField = 'total_present'; nameWiseSortOrder = -1;

  private static localDate(d = new Date()): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  // Manual input
  scanInput = '';
  marking   = false;
  lastScanned = '';

  // Main view tab
  activeTab: 'list' | 'datewise' | 'namewise' = 'list';
  memberTab: 'yuvak' | 'yuvati' = 'yuvak';
  nmTab:     'yuvak' | 'yuvati' = 'yuvak';

  // QR dialog scanner
  showScanner   = false;
  scannerActive = false;
  private qr: Html5Qrcode | null = null;

  filterOptions = [
    { label: 'All Types', value: '' },
    { label: 'Yuvak',     value: 'yuvak' },
    { label: 'Yuvati',    value: 'yuvati' },
  ];

  get yuvakRecords()   { return this.records().filter(r => r.member_type === 'yuvak'); }
  get yuvatiRecords()  { return this.records().filter(r => r.member_type === 'yuvati'); }
  get yuvakNameWise()  { return this.nameWise().filter(r => r.member_type === 'yuvak'); }
  get yuvatiNameWise() { return this.nameWise().filter(r => r.member_type === 'yuvati'); }

  ngOnInit() {
    if (!this.canViewYuvak && this.canViewYuvati) {
      this.memberTab = 'yuvati';
      this.nmTab     = 'yuvati';
    }
    this.loadXetras();
    this.load();
  }

  loadXetras() {
    this.api.get<any>('xetra').subscribe(res => {
      if (res.success) {
        const opts = (res.data || []).map((x: any) => ({ label: x.name, value: x.id }));
        this.xetraOptions.set([{ label: 'All Xetras', value: '' }, ...opts]);
      }
    });
  }

  onXetraChange() {
    this.filterMandalId = '';
    this.mandalOptions.set([{ label: 'All Mandals', value: '' }]);
    if (this.filterXetraId) {
      this.api.get<any>('mandal', { xetra_id: this.filterXetraId }).subscribe(res => {
        if (res.success) {
          const opts = (res.data || []).map((m: any) => ({ label: m.name, value: m.id }));
          this.mandalOptions.set([{ label: 'All Mandals', value: '' }, ...opts]);
        }
      });
    }
    this.load();
  }

  ngOnDestroy() { this.stopScanner(); }

  openScanner() {
    this.showScanner = true;
    setTimeout(() => this.startScanner(), 400);
  }

  private startScanner() {
    this.qr = new Html5Qrcode('qr-scan-region');
    this.scannerActive = true;
    this.qr.start(
      { facingMode: 'environment' },
      { fps: 12, qrbox: { width: 260, height: 260 } },
      (decoded) => {
        this.stopScanner();
        this.showScanner = false;
        this.scanInput = decoded;
        this.markByUuid();
      },
      () => {}
    ).catch(() => {
      this.toast.error('Camera not accessible. Enter ID manually.');
      this.showScanner = false;
      this.scannerActive = false;
    });
  }

  stopScanner() {
    if (this.qr && this.scannerActive) {
      this.qr.stop().catch(() => {});
      this.scannerActive = false;
    }
  }

  onScannerHide() { this.stopScanner(); }

  markByUuid() {
    if (!this.scanInput.trim() || this.marking) return;
    this.marking = true;
    this.api.post<any>('attendance/scan', { uuid: this.scanInput.trim(), date: this.scanDate }).subscribe({
      next: (res: any) => {
        this.marking = false;
        if (res['type'] === 'success') {
          const d = res['data'];
          this.toast.success(`Marked: ${d?.name} (${d?.member_code})`);
          this.lastScanned = this.scanInput;
          this.scanInput = '';
          this.load();
        } else if (res['type'] === 'duplicate') {
          const d = res['data'];
          this.toast.error(`Already marked: ${d?.name} at ${d?.attendance_time}`);
          this.scanInput = '';
        } else {
          this.toast.error(res['message'] || 'Invalid QR Code');
          this.scanInput = '';
        }
      },
      error: err => {
        this.marking = false;
        this.toast.error(err.error?.message || 'Could not mark attendance');
      }
    });
  }

  load() {
    const baseParams: any = { from_date: this.fromDate, to_date: this.toDate };
    if (this.filterType)     baseParams.member_type = this.filterType;
    if (this.filterXetraId)  baseParams.xetra_id    = this.filterXetraId;
    if (this.filterMandalId) baseParams.mandal_id   = this.filterMandalId;
    if (this.filterFromTime) baseParams.from_time   = this.filterFromTime;
    if (this.filterToTime)   baseParams.to_time     = this.filterToTime;

    this.api.get<any>('attendance', {
      ...baseParams, sort_by: this.sortField, sort_dir: this.sortOrder === 1 ? 'asc' : 'desc',
    }).subscribe(res => {
      if (res.success) {
        this.records.set(res.data.data || []);
        this.summary.set({
          yuvak:  res.data.yuvak_count  || 0,
          yuvati: res.data.yuvati_count || 0,
          total:  res.data.total        || 0,
        });
      }
    });

    this.api.get<any>('attendance/date-wise', {
      ...baseParams, sort_by: this.dateWiseSortField, sort_dir: this.dateWiseSortOrder === 1 ? 'asc' : 'desc',
    }).subscribe(res => {
      if (res.success) this.dateWise.set(res.data);
    });

    this.api.get<any>('attendance/name-wise', {
      ...baseParams, sort_by: this.nameWiseSortField, sort_dir: this.nameWiseSortOrder === 1 ? 'asc' : 'desc',
    }).subscribe(res => {
      if (res.success) this.nameWise.set(res.data);
    });
  }

  // customSort's sortFunction fires again whenever [value] changes (e.g. after our own
  // reload updates the signal) — guard on an actual field/order change so that echo
  // doesn't re-trigger load() and loop forever.
  onSortList(event: any) {
    if (event.field && (event.field !== this.sortField || event.order !== this.sortOrder)) {
      this.sortField = event.field; this.sortOrder = event.order ?? 1;
      this.load();
    }
  }

  onSortDateWise(event: any) {
    if (event.field && (event.field !== this.dateWiseSortField || event.order !== this.dateWiseSortOrder)) {
      this.dateWiseSortField = event.field; this.dateWiseSortOrder = event.order ?? 1;
      this.load();
    }
  }

  onSortNameWise(event: any) {
    if (event.field && (event.field !== this.nameWiseSortField || event.order !== this.nameWiseSortOrder)) {
      this.nameWiseSortField = event.field; this.nameWiseSortOrder = event.order ?? 1;
      this.load();
    }
  }

  private openDownload(url: string) {
    const token = localStorage.getItem('tdd_token') || '';
    const sep   = url.includes('?') ? '&' : '?';
    const a = document.createElement('a');
    a.href = `${url}${sep}token=${encodeURIComponent(token)}`;
    a.click();
  }

  exportCsv() {
    let url = `${environment.apiUrl}/attendance/export?from_date=${this.fromDate}&to_date=${this.toDate}`;
    if (this.filterType)     url += `&member_type=${this.filterType}`;
    if (this.filterXetraId)  url += `&xetra_id=${this.filterXetraId}`;
    if (this.filterMandalId) url += `&mandal_id=${this.filterMandalId}`;
    if (this.filterFromTime) url += `&from_time=${encodeURIComponent(this.filterFromTime)}`;
    if (this.filterToTime)   url += `&to_time=${encodeURIComponent(this.filterToTime)}`;
    this.openDownload(url);
  }

  exportNameWiseCsv(memberType?: string) {
    let url = `${environment.apiUrl}/attendance/export-name-wise?from_date=${this.fromDate}&to_date=${this.toDate}`;
    if (memberType)          url += `&member_type=${memberType}`;
    if (this.filterXetraId)  url += `&xetra_id=${this.filterXetraId}`;
    if (this.filterMandalId) url += `&mandal_id=${this.filterMandalId}`;
    if (this.filterFromTime) url += `&from_time=${encodeURIComponent(this.filterFromTime)}`;
    if (this.filterToTime)   url += `&to_time=${encodeURIComponent(this.filterToTime)}`;
    this.openDownload(url);
  }

  setDatePreset(days: number) {
    const from = new Date();
    from.setDate(from.getDate() - (days - 1));
    this.fromDate = AttendanceComponent.localDate(from);
    this.toDate   = this.today;
    this.load();
  }
}
