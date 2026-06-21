import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators, FormsModule } from '@angular/forms';
import { NgFor, NgIf, DecimalPipe, SlicePipe, NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

function identifierValidator(ctrl: AbstractControl): ValidationErrors | null {
  const val: string = (ctrl.value || '').trim();
  if (!val) return { required: true };
  if (/^\d+$/.test(val)) {
    if (val.length !== 10) return { phoneLength: true };
    if (!/^[6-9]/.test(val)) return { phoneStart: true };
  }
  return null;
}

type Step = 'loading' | 'landing' | 'select-type' | 'register-yuvak' | 'register-external'
           | 'quiz' | 'result' | 'closed' | 'not-started' | 'ended' | 'not-found';

@Component({
  selector: 'app-public-quiz',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor, NgIf, DecimalPipe, SlicePipe, NgClass,
            InputTextModule, RadioButtonModule, DropdownModule, ToastModule],
  templateUrl: './public-quiz.component.html',
  styleUrls: ['./public-quiz.component.scss']
})
export class PublicQuizComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private api   = inject(ApiService);
  private toast = inject(ToastService);
  private fb    = inject(FormBuilder);

  step          = signal<Step>('loading');
  quiz          = signal<any>(null);
  questions     = signal<any[]>([]);
  participantUuid = '';
  result        = signal<any>(null);

  // Answer state: map of question_id → selected_answer ('a'|'b'|'c'|'d')
  answers: Record<number, string> = {};

  validating = false;
  submitting = false;
  yuvakInfo: any = null;

  genderOptions = [
    { label: 'Male',   value: 'male'   },
    { label: 'Female', value: 'female' },
    { label: 'Other',  value: 'other'  },
  ];

  yuvakForm = this.fb.group({
    identifier: ['', identifierValidator],
  });

  get identifierType(): 'mobile' | 'yuvak' | null {
    const val = (this.yuvakForm.value.identifier || '').trim();
    if (!val) return null;
    return /^\d+$/.test(val) ? 'mobile' : 'yuvak';
  }

  externalForm = this.fb.group({
    name:   ['', [Validators.required, Validators.minLength(2)]],
    gender: ['', Validators.required],
  });

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.api.publicGet<any>(`quiz/${slug}`).subscribe({
      next: res => {
        if (res.success) {
          this.quiz.set(res.data);
          this.step.set('landing');
        } else {
          this.step.set('not-found');
        }
      },
      error: err => {
        if (err.status === 403) this.step.set('closed');
        else this.step.set('not-found');
      }
    });
  }

  goSelectType() { this.step.set('select-type'); }

  selectRegistered()  { this.yuvakForm.reset();    this.yuvakInfo = null; this.step.set('register-yuvak');    }
  selectExternal()    { this.externalForm.reset(); this.step.set('register-external'); }

  validateYuvak() {
    if (this.yuvakForm.invalid) { this.yuvakForm.markAllAsTouched(); return; }
    this.validating = true;
    const identifier = (this.yuvakForm.value.identifier || '').trim();
    this.api.publicPost<any>('validate-yuvak', { identifier }).subscribe({
      next: res => {
        if (res.success) { this.yuvakInfo = res.data; }
        else { this.toast.error('Not found. Check Yuvak ID or Mobile Number.'); }
        this.validating = false;
      },
      error: err => {
        this.toast.error(err.error?.message || 'Not found. Check Yuvak ID or Mobile Number.');
        this.validating = false;
      }
    });
  }

  startAsRegistered() {
    if (!this.yuvakInfo) return;
    const slug = this.quiz()?.slug;
    this.validating = true;
    this.api.publicPost<any>(`quiz/${slug}/start`, {
      participant_type: 'registered',
      identifier: this.yuvakInfo.member_id || this.yuvakInfo.yuvak_id,
    }).subscribe({
      next: res => {
        if (res.success) {
          this.participantUuid = res.data.participant_uuid;
          this.questions.set(res.data.questions || []);
          this.answers = {};
          this.step.set('quiz');
        }
        this.validating = false;
      },
      error: err => { this.handleStartError(err); }
    });
  }

  startAsExternal() {
    if (this.externalForm.invalid) { this.externalForm.markAllAsTouched(); return; }
    const slug = this.quiz()?.slug;
    this.validating = true;
    this.api.publicPost<any>(`quiz/${slug}/start`, {
      participant_type: 'external',
      name:   this.externalForm.value.name,
      gender: this.externalForm.value.gender,
    }).subscribe({
      next: res => {
        if (res.success) {
          this.participantUuid = res.data.participant_uuid;
          this.questions.set(res.data.questions || []);
          this.answers = {};
          this.step.set('quiz');
        }
        this.validating = false;
      },
      error: err => { this.handleStartError(err); }
    });
  }

  private handleStartError(err: any) {
    this.validating = false;
    const msg: string = err.error?.message || '';
    if (err.status === 403) {
      if (msg.toLowerCase().includes('not started')) {
        this.step.set('not-started');
      } else if (msg.toLowerCase().includes('ended')) {
        this.step.set('ended');
      } else {
        this.step.set('closed');
      }
    } else {
      this.toast.error(msg || 'Could not start quiz');
    }
  }

  formatDateTime(dt: string | null): string {
    if (!dt) return '—';
    const d = new Date(dt.replace(' ', 'T'));
    return d.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric',
                                       hour: '2-digit', minute: '2-digit', hour12: true });
  }

  selectAnswer(questionId: number, answer: string) {
    this.answers[questionId] = answer;
  }

  submitQuiz() {
    const slug = this.quiz()?.slug;
    this.submitting = true;

    const answersArr = Object.entries(this.answers).map(([qId, ans]) => ({
      question_id:     parseInt(qId),
      selected_answer: ans,
    }));

    this.api.publicPost<any>(`quiz/${slug}/submit`, {
      participant_uuid: this.participantUuid,
      answers:          answersArr,
    }).subscribe({
      next: res => {
        if (res.success) {
          this.result.set(res.data);
          this.step.set('result');
        }
        this.submitting = false;
      },
      error: err => {
        this.toast.error(err.error?.message || 'Submission failed');
        this.submitting = false;
      }
    });
  }

  answeredCount(): number {
    return Object.keys(this.answers).length;
  }

  optionText(q: any, key: string): string {
    return q[`option_${key}`] || '';
  }

  isAnswered(qId: number): boolean {
    return qId in this.answers && this.answers[qId] !== '';
  }

  getAnswer(qId: number): string {
    return this.answers[qId] || '';
  }

  setAnswer(qId: number, val: string) {
    if (val !== null && val !== undefined) this.selectAnswer(qId, val);
  }

  getSelectOptions(q: any): { label: string; value: string }[] {
    if (!Array.isArray(q.options)) return [];
    return q.options.map((o: any) => ({ label: o.label ?? o, value: o.value ?? o }));
  }
}
