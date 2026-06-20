import { Component, inject, OnInit, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private api = inject(ApiService);
  stats = signal<any>(null);

  quickLinks = [
    { label: 'Yuvak',      path: '/admin/yuvak',      icon: 'pi-user',         iconStyle: 'background:linear-gradient(135deg,#FF6B00,#FF8C38)' },
    { label: 'Yuvati',     path: '/admin/yuvati',     icon: 'pi-users',        iconStyle: 'background:linear-gradient(135deg,#1A237E,#3949AB)' },
    { label: 'Attendance', path: '/admin/attendance', icon: 'pi-check-square', iconStyle: 'background:linear-gradient(135deg,#059669,#10B981)' },
    { label: 'Shibir',     path: '/admin/shibir',     icon: 'pi-calendar',     iconStyle: 'background:linear-gradient(135deg,#D97706,#F59E0B)' },
    { label: 'Quiz',       path: '/admin/quiz',       icon: 'pi-question-circle', iconStyle: 'background:linear-gradient(135deg,#BE123C,#F43F5E)' },
    { label: 'Xetra',     path: '/admin/xetra',      icon: 'pi-map',          iconStyle: 'background:linear-gradient(135deg,#059669,#10B981)' },
    { label: 'Mandal',    path: '/admin/mandal',     icon: 'pi-home',         iconStyle: 'background:linear-gradient(135deg,#4338CA,#6366F1)' },
    { label: 'Users',     path: '/admin/users',      icon: 'pi-cog',          iconStyle: 'background:linear-gradient(135deg,#0D9488,#14B8A6)' },
  ];

  ngOnInit() {
    this.api.get<any>('dashboard').subscribe(res => {
      if (res.success) this.stats.set(res.data);
    });
  }
}
