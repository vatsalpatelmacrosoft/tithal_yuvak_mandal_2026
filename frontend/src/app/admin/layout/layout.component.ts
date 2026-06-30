import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';

const MENU_ITEMS = [
  { slug: 'dashboard',       label: 'Dashboard',       icon: 'pi-th-large',        path: '/admin/dashboard'       },
  { slug: 'yuvak',           label: 'Yuvak',           icon: 'pi-user',            path: '/admin/yuvak'           },
  { slug: 'yuvati',          label: 'Yuvati',          icon: 'pi-users',           path: '/admin/yuvati'          },
  { slug: 'xetra',           label: 'Xetra',           icon: 'pi-map',             path: '/admin/xetra'           },
  { slug: 'mandal',          label: 'Mandal',          icon: 'pi-home',            path: '/admin/mandal'          },
  { slug: 'attendance',      label: 'Attendance',      icon: 'pi-check-square',    path: '/admin/attendance'      },
  { slug: 'attendance',      label: 'Take Attendance', icon: 'pi-camera',          path: '/admin/take-attendance' },
  { slug: 'shibir',          label: 'Shibir',          icon: 'pi-calendar',        path: '/admin/shibir'          },
  { slug: 'quiz',            label: 'Quiz',            icon: 'pi-question-circle', path: '/admin/quiz'            },
  { slug: 'reports',         label: 'Reports',         icon: 'pi-chart-bar',       path: '/admin/reports'         },
  { slug: 'users',           label: 'Users',           icon: 'pi-cog',             path: '/admin/users'           },
  { slug: 'roles',           label: 'Roles',           icon: 'pi-id-card',         path: '/admin/roles'           },
  { slug: 'settings',        label: 'Settings',        icon: 'pi-sliders-h',       path: '/admin/settings'        },
];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, ButtonModule, TooltipModule, ToastModule, ConfirmDialogModule],
})
export class LayoutComponent {
  private auth   = inject(AuthService);
  private router = inject(Router);

  user        = this.auth.currentUser;
  collapsed   = false;
  mobileOpen  = false;

  constructor() {
    // Auto-close sidebar on mobile after every navigation
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      if (this.isMobile) this.mobileOpen = false;
    });
  }

  get isMobile(): boolean { return window.innerWidth <= 768; }

  get userInitial(): string {
    return (this.user()?.name || 'A').charAt(0).toUpperCase();
  }

  get menuItems() {
    return MENU_ITEMS.filter(item => this.auth.hasPermission(item.slug, 'can_view'));
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.mobileOpen = !this.mobileOpen;
    } else {
      this.collapsed = !this.collapsed;
    }
  }

  closeMobileSidebar() { this.mobileOpen = false; }
  logout() { this.auth.logout(); }
}
