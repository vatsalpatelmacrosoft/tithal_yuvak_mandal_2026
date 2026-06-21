import { Component, inject, OnInit, signal } from '@angular/core';
import { NgFor, NgIf, DecimalPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { environment } from '../../../environments/environment';

type TabKey = 'quiz-wise' | 'participant-wise' | 'question-wise' | 'gender-wise';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, DecimalPipe, DatePipe, TitleCasePipe,
            ButtonModule, TableModule, DropdownModule, TagModule, TooltipModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  private api   = inject(ApiService);
  private toast = inject(ToastService);

  activeTab: TabKey = 'quiz-wise';

  tabs = [
    { key: 'quiz-wise'       as TabKey, label: 'Quiz Wise',          icon: 'pi-list-check'    },
    { key: 'participant-wise'as TabKey, label: 'Participants',        icon: 'pi-users'         },
    { key: 'question-wise'   as TabKey, label: 'Question Analysis',   icon: 'pi-question-circle'},
    { key: 'gender-wise'     as TabKey, label: 'Gender Breakdown',    icon: 'pi-chart-pie'     },
  ];

  quizzes       = signal<any[]>([]);
  selectedQuiz  = signal<any>(null);
  selectedQuizModel: any = null;   // two-way binding model for dropdown

  quizWise      = signal<any[]>([]);
  participants  = signal<any[]>([]);
  questions     = signal<any[]>([]);
  genderSummary = signal<any[]>([]);
  genderDetails = signal<any>({ male: [], female: [], other: [] });

  loadingQ  = false;
  loadingP  = false;
  loadingQs = false;
  loadingG  = false;

  activeGenderTab: 'male' | 'female' | 'other' = 'male';

  genderTabs = [
    { key: 'male'   as const, label: 'Male',   color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE' },
    { key: 'female' as const, label: 'Female', color: '#BE185D', bg: '#FDF2F8', border: '#FBCFE8' },
    { key: 'other'  as const, label: 'Other',  color: '#6B7280', bg: '#F9FAFB', border: '#E5E7EB' },
  ];

  ngOnInit() {
    this.loadQuizList();
    this.loadQuizWise();
  }

  setTab(key: TabKey) {
    this.activeTab = key;
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

  export(type: string, gender?: string) {
    const uuid  = this.selectedQuiz();
    const token = localStorage.getItem('tdd_token') || '';
    const genderParam = gender ? `&gender=${gender}` : '';
    const url = `${environment.apiUrl}/reports/export?type=${type}&quiz_uuid=${uuid || ''}${genderParam}&format=csv&token=${encodeURIComponent(token)}`;
    const a = document.createElement('a');
    a.href = url;
    a.download = gender ? `gender-${gender}-report.csv` : `${type}-report.csv`;
    a.click();
  }

  typeLabel(t: string): string {
    return t === 'registered' ? 'Registered' : 'External';
  }

  getGenderCount(gender: string): number {
    const s = this.genderSummary().find((r: any) => r.gender === gender);
    return s ? +s.total_participants : 0;
  }
}
