// frontend/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Public
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  {
    path: 'admin/login',
    loadComponent: () => import('./admin/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'admin/forgot-password',
    loadComponent: () => import('./admin/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'admin/reset-password',
    loadComponent: () => import('./admin/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
  },

  // Admin (protected)
  {
    path: 'admin',
    loadComponent: () => import('./admin/layout/layout.component').then(m => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: 'dashboard',  loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },

      // Yuvak
      { path: 'yuvak',      loadComponent: () => import('./admin/yuvak/yuvak-list/yuvak-list.component').then(m => m.YuvakListComponent) },
      { path: 'yuvak/new',  loadComponent: () => import('./admin/yuvak/yuvak-form/yuvak-form.component').then(m => m.YuvakFormComponent) },
      { path: 'yuvak/:id',  loadComponent: () => import('./admin/yuvak/yuvak-form/yuvak-form.component').then(m => m.YuvakFormComponent) },

      // Yuvati
      { path: 'yuvati',     loadComponent: () => import('./admin/yuvati/yuvati-list/yuvati-list.component').then(m => m.YuvatiListComponent) },
      { path: 'yuvati/new', loadComponent: () => import('./admin/yuvati/yuvati-form/yuvati-form.component').then(m => m.YuvatiFormComponent) },
      { path: 'yuvati/:id', loadComponent: () => import('./admin/yuvati/yuvati-form/yuvati-form.component').then(m => m.YuvatiFormComponent) },

      // Org
      { path: 'xetra',      loadComponent: () => import('./admin/xetra/xetra.component').then(m => m.XetraComponent) },
      { path: 'mandal',     loadComponent: () => import('./admin/mandal/mandal.component').then(m => m.MandalComponent) },

      // Users & Roles
      { path: 'users',      loadComponent: () => import('./admin/users/users.component').then(m => m.UsersComponent) },
      { path: 'roles',      loadComponent: () => import('./admin/roles/roles.component').then(m => m.RolesComponent) },

      // Shibir & Attendance
      { path: 'shibir',     loadComponent: () => import('./admin/shibir/shibir.component').then(m => m.ShibirComponent) },
      { path: 'attendance', loadComponent: () => import('./admin/attendance/attendance.component').then(m => m.AttendanceComponent) },

      // Quiz
      { path: 'quiz',          loadComponent: () => import('./admin/quiz/quiz-list/quiz-list.component').then(m => m.QuizListComponent) },
      { path: 'quiz/new',      loadComponent: () => import('./admin/quiz/quiz-form/quiz-form.component').then(m => m.QuizFormComponent) },
      { path: 'quiz/:id',      loadComponent: () => import('./admin/quiz/quiz-form/quiz-form.component').then(m => m.QuizFormComponent) },
      { path: 'quiz/:id/questions', loadComponent: () => import('./admin/quiz/quiz-questions/quiz-questions.component').then(m => m.QuizQuestionsComponent) },

      // Settings
      { path: 'settings',   loadComponent: () => import('./admin/settings/settings.component').then(m => m.SettingsComponent) },

      // Reports
      { path: 'reports',    loadComponent: () => import('./admin/reports/reports.component').then(m => m.ReportsComponent) },
    ]
  },

  // Public pages
  {
    path: 'register/:type',
    loadComponent: () => import('./public/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'quiz/:slug',
    loadComponent: () => import('./public/quiz/public-quiz.component').then(m => m.PublicQuizComponent)
  },
  {
    path: 'welcome/:type/:uuid',
    loadComponent: () => import('./public/welcome/welcome.component').then(m => m.WelcomeComponent)
  },

  { path: '**', redirectTo: 'admin/dashboard' }
];
