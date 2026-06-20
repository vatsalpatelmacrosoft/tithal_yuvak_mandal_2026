import { Component, inject, OnInit, signal } from '@angular/core';
import { NgFor, NgIf, DecimalPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, DecimalPipe, DatePipe, TitleCasePipe,
            ButtonModule, TableModule, DropdownModule, TabViewModule, TagModule, TooltipModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  private api   = inject(ApiService);
  private toast = inject(ToastService);

  quizzes        = signal<any[]>([]);
  selectedQuiz   = signal<any>(null);

  quizWise       = signal<any[]>([]);
  participants   = signal<any[]>([]);
  questions      = signal<any[]>([]);
  genderSummary  = signal<any[]>([]);
  genderDetails  = signal<any>({male:[], female:[], other:[]});

  loadingQ  = false;
  loadingP  = false;
  loadingQs = false;
  loadingG  = false;

  ngOnInit() {
    this.loadQuizList();
    this.loadQuizWise();
  }

  loadQuizList() {
    this.api.get<any>('quiz').subscribe(r => {
      if (r.success) {
        this.quizzes.set(r.data.map((q: any) => ({ label: q.title || q.name, value: q.uuid })));
      }
    });
  }

  loadQuizWise() {
    this.loadingQ = true;
    this.api.get<any>('reports/quiz-wise').subscribe({
      next: r => { if (r.success) this.quizWise.set(r.data); this.loadingQ = false; },
      error: () => { this.loadingQ = false; }
    });
  }

  onQuizSelect(uuid: string) {
    this.selectedQuiz.set(uuid);
    this.loadParticipants(uuid);
    this.loadQuestions(uuid);
    this.loadGender(uuid);
  }

  loadParticipants(uuid: string) {
    this.loadingP = true;
    this.api.get<any>(`reports/participant-wise`, { quiz_uuid: uuid }).subscribe({
      next: r => { if (r.success) this.participants.set(r.data); this.loadingP = false; },
      error: () => { this.loadingP = false; }
    });
  }

  loadQuestions(uuid: string) {
    this.loadingQs = true;
    this.api.get<any>(`reports/question-wise`, { quiz_uuid: uuid }).subscribe({
      next: r => { if (r.success) this.questions.set(r.data); this.loadingQs = false; },
      error: () => { this.loadingQs = false; }
    });
  }

  loadGender(uuid: string) {
    this.loadingG = true;
    this.api.get<any>(`reports/gender-wise`, { quiz_uuid: uuid }).subscribe({
      next: r => {
        if (r.success) {
          this.genderSummary.set(r.data.summary || []);
          this.genderDetails.set(r.data.details || {});
        }
        this.loadingG = false;
      },
      error: () => { this.loadingG = false; }
    });
  }

  export(type: string) {
    const uuid = this.selectedQuiz();
    const base = environment.apiUrl.replace('/api', '');
    const token = localStorage.getItem('token') || '';
    const url = `${environment.apiUrl}/reports/export?type=${type}&quiz_uuid=${uuid || ''}&format=csv`;
    // Download via temporary anchor with auth header via fetch+blob
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.blob())
      .then(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${type}-report.csv`;
        a.click();
      })
      .catch(() => this.toast.error('Export failed'));
  }

  typeLabel(t: string): string {
    return t === 'registered' ? 'Registered' : 'External';
  }

  genderIcon(g: string): string {
    return g === 'male' ? 'pi-user' : g === 'female' ? 'pi-user' : 'pi-users';
  }

  getGenderCount(gender: string): number {
    const s = this.genderSummary().find((r: any) => r.gender === gender);
    return s ? +s.total_participants : 0;
  }
}
