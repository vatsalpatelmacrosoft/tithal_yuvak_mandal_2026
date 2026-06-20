import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NgIf, QRCodeModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private api   = inject(ApiService);

  member  = signal<any>(null);
  qrData  = '';
  loading = true;
  error   = '';

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type') || '';
    const uuid = this.route.snapshot.paramMap.get('uuid') || '';
    this.qrData = uuid;

    this.api.publicGet<any>(`welcome/${type}/${uuid}`).subscribe({
      next: res => {
        if (res.success) {
          this.member.set(res.data);
        } else {
          this.error = 'Member not found.';
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Member not found or link is invalid.';
        this.loading = false;
      }
    });
  }

  copied = false;

  copyWelcomeUrl() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
