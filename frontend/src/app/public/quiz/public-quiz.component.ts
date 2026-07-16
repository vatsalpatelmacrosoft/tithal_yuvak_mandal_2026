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
           | 'quiz' | 'result' | 'thank-you' | 'closed' | 'not-started' | 'ended' | 'not-found'
           | 'already-submitted' | 'my-result';

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
  myResult      = signal<any>(null);

  // When true, the select-type/register-* screens are being reused to look up a past
  // submission instead of starting a new attempt; returnStep is where "Back" should land.
  viewingResult = false;
  private returnStep: Step = 'landing';

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
    name:      ['', [Validators.required, Validators.minLength(2)]],
    mo_number: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    gender:    ['', Validators.required],
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

  goSelectType() { this.viewingResult = false; this.step.set('select-type'); }

  goViewMyResult() {
    this.viewingResult = true;
    this.returnStep = this.step();
    this.yuvakForm.reset(); this.externalForm.reset(); this.yuvakInfo = null;
    this.step.set('select-type');
  }

  backFromSelectType() { this.step.set(this.viewingResult ? this.returnStep : 'landing'); }

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

    if (this.viewingResult) {
      this.api.publicPost<any>(`quiz/${slug}/my-result`, {
        participant_type: 'registered',
        identifier: this.yuvakInfo.member_id || this.yuvakInfo.yuvak_id,
      }).subscribe({
        next: res => {
          this.validating = false;
          if (res.success) { this.myResult.set(res.data); this.step.set('my-result'); }
        },
        error: err => { this.validating = false; this.toast.error(err.error?.message || 'No submission found'); }
      });
      return;
    }

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
    const slug = this.quiz()?.slug;

    if (this.viewingResult) {
      const mo = (this.externalForm.value.mo_number || '').trim();
      if (!/^[6-9]\d{9}$/.test(mo)) {
        this.externalForm.get('mo_number')?.markAsTouched();
        this.toast.error('Enter a valid 10-digit mobile number');
        return;
      }
      this.validating = true;
      this.api.publicPost<any>(`quiz/${slug}/my-result`, {
        participant_type: 'external',
        mo_number: mo,
      }).subscribe({
        next: res => {
          this.validating = false;
          if (res.success) { this.myResult.set(res.data); this.step.set('my-result'); }
        },
        error: err => { this.validating = false; this.toast.error(err.error?.message || 'No submission found'); }
      });
      return;
    }

    if (this.externalForm.invalid) { this.externalForm.markAllAsTouched(); return; }
    this.validating = true;
    this.api.publicPost<any>(`quiz/${slug}/start`, {
      participant_type: 'external',
      name:      this.externalForm.value.name,
      mo_number: this.externalForm.value.mo_number,
      gender:    this.externalForm.value.gender,
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
    if (err.status === 409) {
      this.tryAutoShowResult('already-submitted');
    } else if (err.status === 422) {
      this.toast.error(msg || 'Validation error');
    } else if (err.status === 403) {
      if (msg.toLowerCase().includes('not started')) {
        this.step.set('not-started');
      } else if (msg.toLowerCase().includes('ended')) {
        this.tryAutoShowResult('ended');
      } else {
        this.step.set('closed');
      }
    } else {
      this.toast.error(msg || 'Could not start quiz');
    }
  }

  // The identifier/mobile currently held (just typed to validate/start) — reused so we
  // don't have to make the participant re-enter it to look up their own submission.
  private currentIdentifierPayload(): { participant_type: string; identifier?: string; mo_number?: string } | null {
    if (this.yuvakInfo) {
      return { participant_type: 'registered', identifier: this.yuvakInfo.member_id || this.yuvakInfo.yuvak_id };
    }
    if (this.externalForm.value.mo_number) {
      return { participant_type: 'external', mo_number: this.externalForm.value.mo_number };
    }
    return null;
  }

  // Reuse the identifier/mobile just entered to jump straight to the result instead of
  // making them re-enter it after landing on "already submitted" / "ended". Falls back
  // to the manual button+form flow (e.g. after a fresh page reload, where this in-memory
  // state is gone).
  private tryAutoShowResult(fallbackStep: Step) {
    const payload = this.currentIdentifierPayload();
    if (!payload) { this.step.set(fallbackStep); return; }

    const slug = this.quiz()?.slug;
    this.api.publicPost<any>(`quiz/${slug}/my-result`, payload).subscribe({
      next: res => {
        if (res.success) { this.myResult.set(res.data); this.step.set('my-result'); }
        else { this.step.set(fallbackStep); }
      },
      error: () => { this.step.set(fallbackStep); }
    });
  }

  // Right after a successful submission, fetch the same per-question breakdown used by
  // "View My Submitted Answer" so the result screen can show it directly — no extra click.
  private fetchSubmittedAnswers() {
    const payload = this.currentIdentifierPayload();
    if (!payload) return;
    const slug = this.quiz()?.slug;
    this.api.publicPost<any>(`quiz/${slug}/my-result`, payload).subscribe({
      next: res => { if (res.success) this.myResult.set(res.data); }
    });
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
          this.fetchSubmittedAnswers(); // needed either way: with correctness if show_result, selected-only otherwise
          this.step.set(res.data.show_result ? 'result' : 'thank-you');
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

  private answerLabel(a: any, rawValue: string | null | undefined): string {
    if (!rawValue) return '';
    if (!a.question_type || a.question_type === 'mcq') return this.optionText(a, rawValue);
    if (a.question_type === 'radio' || a.question_type === 'select') {
      return this.getSelectOptions(a).find(o => o.value === rawValue)?.label || rawValue;
    }
    return rawValue; // 'input' type: free text
  }

  correctAnswerText(a: any): string {
    return this.answerLabel(a, a.correct_answer);
  }
}
