import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, TitleCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { Html5Qrcode } from 'html5-qrcode';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

export type ScanResultType = 'success' | 'duplicate' | 'invalid';

export interface ScanResult {
  type: ScanResultType;
  message: string;
  data?: {
    name: string;
    member_code: string;
    member_type: string;
    attendance_time: string;
  };
}

@Component({
  selector: 'app-take-attendance',
  standalone: true,
  imports: [FormsModule, NgIf, TitleCasePipe, ButtonModule, InputTextModule, TooltipModule],
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.scss']
})
export class TakeAttendanceComponent implements OnInit, OnDestroy {
  private api   = inject(ApiService);
  private toast = inject(ToastService);

  readonly today = TakeAttendanceComponent.localDate();

  scanResult     = signal<ScanResult | null>(null);
  scannerActive  = false;
  scannerLoading = false;
  scanDate       = this.today;
  scanInput      = '';

  private static localDate(d = new Date()): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  marking        = false;
  todayCount     = signal({ yuvak: 0, yuvati: 0, total: 0 });
  facingMode: 'environment' | 'user' = 'environment';

  private qr: Html5Qrcode | null = null;
  private processingQr = false;
  private resultTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.loadTodayCount();
    setTimeout(() => this.startScanner(), 400);
  }

  ngOnDestroy() {
    if (this.resultTimer) clearTimeout(this.resultTimer);
    this.stopScanner();
  }

  startScanner() {
    if (this.scannerActive) return;
    this.scannerLoading = true;
    this.qr = new Html5Qrcode('ta-qr-region');
    this.qr.start(
      { facingMode: this.facingMode },
      { fps: 12, qrbox: { width: 240, height: 240 } },
      (decoded) => this.onQrDecoded(decoded),
      () => {}
    ).then(() => {
      this.scannerActive  = true;
      this.scannerLoading = false;
    }).catch(() => {
      this.scannerLoading = false;
      this.toast.error('Camera not accessible. Use manual entry below.');
    });
  }

  stopScanner() {
    if (this.qr && this.scannerActive) {
      this.qr.stop().catch(() => {});
      this.scannerActive = false;
    }
  }

  toggleCamera() {
    this.stopScanner();
    this.facingMode = this.facingMode === 'environment' ? 'user' : 'environment';
    setTimeout(() => this.startScanner(), 300);
  }

  private onQrDecoded(code: string) {
    if (this.processingQr) return;
    this.processingQr = true;
    this.callScanApi(code);
  }

  markByUuid() {
    if (!this.scanInput.trim() || this.marking) return;
    this.marking = true;
    this.callScanApi(this.scanInput.trim());
  }

  private callScanApi(identifier: string) {
    this.api.post<any>('attendance/scan', { uuid: identifier, date: this.scanDate }).subscribe({
      next: (res: any) => {
        if (res['type'] === 'success') this.loadTodayCount();
        if (this.marking) { this.marking = false; this.scanInput = ''; }
        this.showScanResult({ type: res['type'] ?? 'invalid', message: res['message'] ?? '', data: res['data'] });
      },
      error: () => {
        if (this.marking) this.marking = false;
        this.showScanResult({ type: 'invalid', message: 'Invalid QR Code' });
      }
    });
  }

  private showScanResult(result: ScanResult) {
    // Don't reset timer if already showing — keep the first result visible for full 3s
    if (this.resultTimer) return;
    this.scanResult.set(result);
    this.resultTimer = setTimeout(() => {
      this.scanResult.set(null);
      this.resultTimer = null;
      this.processingQr = false; // unlock scanner only after overlay is gone
    }, 3000);
  }

  loadTodayCount() {
    this.api.get<any>('attendance/today').subscribe(res => {
      if (res.success) this.todayCount.set({ yuvak: res.data.yuvak, yuvati: res.data.yuvati, total: res.data.total ?? (res.data.yuvak + res.data.yuvati) });
    });
  }
}
