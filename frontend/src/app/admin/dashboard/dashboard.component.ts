import { Component, inject, OnInit, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private api  = inject(ApiService);
  private auth = inject(AuthService);

  stats = signal<any>(null);

  private readonly ALL_QUICK_LINKS = [
    { slug: 'yuvak',      label: 'Yuvak',      path: '/admin/yuvak',      icon: 'pi-user',            iconStyle: 'background:linear-gradient(135deg,#FF6B00,#FF8C38)' },
    { slug: 'yuvati',     label: 'Yuvati',     path: '/admin/yuvati',     icon: 'pi-users',           iconStyle: 'background:linear-gradient(135deg,#1A237E,#3949AB)' },
    { slug: 'attendance', label: 'Attendance', path: '/admin/attendance', icon: 'pi-check-square',    iconStyle: 'background:linear-gradient(135deg,#059669,#10B981)' },
    { slug: 'shibir',     label: 'Shibir',     path: '/admin/shibir',     icon: 'pi-calendar',        iconStyle: 'background:linear-gradient(135deg,#D97706,#F59E0B)' },
    { slug: 'quiz',       label: 'Quiz',       path: '/admin/quiz',       icon: 'pi-question-circle', iconStyle: 'background:linear-gradient(135deg,#BE123C,#F43F5E)' },
    { slug: 'xetra',      label: 'Xetra',      path: '/admin/xetra',      icon: 'pi-map',             iconStyle: 'background:linear-gradient(135deg,#059669,#10B981)' },
    { slug: 'mandal',     label: 'Mandal',     path: '/admin/mandal',     icon: 'pi-home',            iconStyle: 'background:linear-gradient(135deg,#4338CA,#6366F1)' },
    { slug: 'users',      label: 'Users',      path: '/admin/users',      icon: 'pi-cog',             iconStyle: 'background:linear-gradient(135deg,#0D9488,#14B8A6)' },
  ];

  get quickLinks() {
    return this.ALL_QUICK_LINKS.filter(q => this.auth.hasPermission(q.slug, 'can_view'));
  }

  get canAddYuvak()        { return this.auth.hasPermission('yuvak',      'can_create'); }
  get canViewAttendance()  { return this.auth.hasPermission('attendance',  'can_view');  }
  get canViewYuvak()       { return this.auth.hasPermission('yuvak',      'can_view');  }
  get canViewYuvati()      { return this.auth.hasPermission('yuvati',     'can_view');  }

  ngOnInit() {
    this.api.get<any>('dashboard').subscribe(res => {
      if (res.success) this.stats.set(res.data);
    });
  }
}
