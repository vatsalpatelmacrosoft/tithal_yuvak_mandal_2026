import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { Html5Qrcode } from 'html5-qrcode';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [FormsModule, NgIf, TableModule, ButtonModule, InputTextModule,
            DropdownModule, TagModule, DialogModule],
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit, OnDestroy {
  private api   = inject(ApiService);
  private toast = inject(ToastService);

  records  = signal<any[]>([]);
  summary  = signal({ yuvak: 0, yuvati: 0 });

  scanDate    = new Date().toISOString().slice(0, 10);
  scanInput   = '';
  filterDate  = new Date().toISOString().slice(0, 10);
  filterType  = ''; marking = false; lastScanned = '';

  showScanner   = false;
  scannerActive = false;
  private qr: Html5Qrcode | null = null;

  filterOptions = [{ label: 'All', value: '' }, { label: 'Yuvak', value: 'yuvak' }, { label: 'Yuvati', value: 'yuvati' }];

  ngOnInit() { this.loadAttendance(); }

  ngOnDestroy() { this.stopScanner(); }

  loadAttendance() {
    const params: any = { date: this.filterDate };
    if (this.filterType) params.member_type = this.filterType;
    this.api.get<any>('attendance', params).subscribe(res => {
      if (res.success) {
        this.records.set(res.data.data || []);
        this.summary.set({ yuvak: res.data.yuvak_count, yuvati: res.data.yuvati_count });
      }
    });
  }

  openScanner() {
    this.showScanner = true;
    // Wait for dialog DOM to render before starting camera
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
      () => { /* scan errors are normal — ignore */ }
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
    if (!this.scanInput.trim()) return;
    this.marking = true;
    this.api.post('attendance/scan', { uuid: this.scanInput.trim(), date: this.scanDate }).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success('Attendance marked!');
          this.lastScanned = this.scanInput;
          this.scanInput = '';
          this.loadAttendance();
        }
        this.marking = false;
      },
      error: err => { this.marking = false; this.toast.error(err.error?.message || 'Could not mark attendance'); }
    });
  }
}
