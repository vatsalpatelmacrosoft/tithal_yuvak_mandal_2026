import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, DatePipe, TableModule, ButtonModule, TagModule,
            InputTextModule, TooltipModule],
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  private api     = inject(ApiService);
  private auth    = inject(AuthService);
  private toast   = inject(ToastService);
  private confirm = inject(ConfirmationService);
  readonly router = inject(Router);

  get canCreate() { return this.auth.hasPermission('quiz', 'can_create'); }
  get canUpdate() { return this.auth.hasPermission('quiz', 'can_update'); }
  get canDelete() { return this.auth.hasPermission('quiz', 'can_delete'); }

  quizzes    = signal<any[]>([]);
  searchTerm = '';
  sortField = 'created_at'; sortOrder = -1;

  get filteredQuizzes() {
    const q = this.searchTerm.toLowerCase().trim();
    return q
      ? this.quizzes().filter(qz => (qz.title || qz.name || '').toLowerCase().includes(q))
      : this.quizzes();
  }

  ngOnInit() { this.load(); }
  load() {
    const params = { sort_by: this.sortField, sort_dir: this.sortOrder === 1 ? 'asc' : 'desc' };
    this.api.get<any>('quiz', params).subscribe(r => { if (r.success) this.quizzes.set(r.data); });
  }

  onSort(event: any) {
    if (event.sortField) { this.sortField = event.sortField; this.sortOrder = event.sortOrder ?? 1; }
    this.load();
  }

  publicQuizUrl(slug: string) { return `${document.baseURI}quiz/${slug}`; }

  copyLink(slug: string) {
    navigator.clipboard.writeText(this.publicQuizUrl(slug));
    this.toast.success('Quiz link copied!');
  }

  toggleActive(q: any) {
    this.api.put<any>(`quiz/${q.uuid}/toggle`, {}).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success((res.data as any).is_active ? 'Quiz activated' : 'Quiz deactivated');
          this.load();
        }
      }
    });
  }

  confirmEndQuiz(q: any) {
    this.confirm.confirm({
      message: `End <strong>${q.title || q.name}</strong> now? No one will be able to start it after this — this cannot be undone.`,
      header: 'Confirm End Quiz',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'End Quiz',
      rejectLabel: 'Cancel',
      defaultFocus: 'reject',
      accept: () => this.api.put<any>(`quiz/${q.uuid}/end`, {}).subscribe({
        next: res => { if (res.success) { this.toast.success('Quiz ended'); this.load(); } }
      })
    });
  }

  confirmDelete(q: any) {
    this.confirm.confirm({
      message: `Archive quiz <strong>${q.title || q.name}</strong>? This action cannot be undone.`,
      header: 'Confirm Archive',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Archive',
      rejectLabel: 'Cancel',
      defaultFocus: 'reject',
      accept: () => this.api.delete(`quiz/${q.uuid}`).subscribe({
        next: () => { this.toast.success('Quiz archived'); this.load(); }
      })
    });
  }

  statusSeverity(q: any): string {
    if (q.has_ended) return 'danger';
    if (!q.is_active) return 'danger';
    if (q.quiz_status === 'published') return 'success';
    if (q.quiz_status === 'draft') return 'warning';
    return 'danger';
  }

  statusLabel(q: any): string {
    if (q.has_ended) return 'Ended';
    if (!q.is_active) return 'Inactive';
    if (q.quiz_status === 'published') return 'Published';
    return 'Draft';
  }
}
