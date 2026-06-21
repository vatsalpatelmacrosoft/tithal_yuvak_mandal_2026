import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../../core/services/api.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-quiz-questions',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor, NgIf,
            ButtonModule, InputTextModule, InputTextareaModule, InputNumberModule,
            DropdownModule, SidebarModule, TooltipModule],
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {
  private api     = inject(ApiService);
  private toast   = inject(ToastService);
  private confirm = inject(ConfirmationService);
  private fb      = inject(FormBuilder);
  readonly router = inject(Router);
  private route   = inject(ActivatedRoute);

  quizUuid  = '';
  quiz      = signal<any>(null);
  questions = signal<any[]>([]);
  showForm  = false;
  saving    = false;
  editUuid  = '';

  // Dynamic options for Select / Radio types
  customOptions: string[] = ['', ''];
  correctOptionValue      = '';

  questionTypes = [
    { label: 'MCQ  (A / B / C / D)',  value: 'mcq'    },
    { label: 'Text Input',            value: 'input'   },
    { label: 'Dropdown  (Select)',    value: 'select'  },
    { label: 'Radio Buttons',         value: 'radio'   },
  ];

  mcqAnswerOptions = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
    { label: 'Option D', value: 'd' },
  ];

  form = this.fb.group({
    title:          [''],
    question_type:  ['mcq'],
    // MCQ
    option_a:       [''],
    option_b:       [''],
    option_c:       [''],
    option_d:       [''],
    // MCQ correct = 'a'/'b'/'c'/'d' ; Input correct = free text
    correct_answer: [''],
    marks:          [1],
    display_order:  [0],
  });

  get qType(): string { return this.form.get('question_type')?.value || 'mcq'; }

  get selectableCorrectOptions(): { label: string; value: string }[] {
    return this.customOptions
      .filter(o => o.trim())
      .map(o => ({ label: o, value: o }));
  }

  ngOnInit() {
    this.quizUuid = this.route.snapshot.params['id'];
    this.loadQuiz();
    this.loadQuestions();
  }

  loadQuiz() {
    this.api.get<any>(`quiz/${this.quizUuid}`).subscribe(res => {
      if (res.success) this.quiz.set(res.data);
    });
  }

  loadQuestions() {
    this.api.get<any>(`quiz/${this.quizUuid}/questions`).subscribe(res => {
      if (res.success) this.questions.set(res.data);
    });
  }

  openAdd() {
    this.editUuid           = '';
    this.customOptions      = ['', ''];
    this.correctOptionValue = '';
    this.form.reset({ question_type: 'mcq', correct_answer: 'a', marks: 1,
                      display_order: this.questions().length + 1 });
    this.showForm = true;
  }

  openEdit(q: any) {
    this.editUuid = q.uuid;
    const qType   = q.question_type || 'mcq';

    if (qType === 'select' || qType === 'radio') {
      const opts = Array.isArray(q.options) ? q.options.map((o: any) => o.label ?? o) : [];
      this.customOptions      = opts.length >= 2 ? [...opts] : ['', ''];
      this.correctOptionValue = q.correct_answer || '';
    } else {
      this.customOptions      = ['', ''];
      this.correctOptionValue = '';
    }

    this.form.patchValue({
      title:          q.title,
      question_type:  qType,
      option_a:       q.option_a || '',
      option_b:       q.option_b || '',
      option_c:       q.option_c || '',
      option_d:       q.option_d || '',
      correct_answer: (qType === 'mcq' || qType === 'input') ? (q.correct_answer || '') : '',
      marks:          +q.marks,
      display_order:  +q.display_order,
    });
    this.showForm = true;
  }

  addCustomOption()             { this.customOptions.push(''); }
  removeCustomOption(i: number) {
    if (this.customOptions.length <= 2) return;
    const removed = this.customOptions.splice(i, 1)[0];
    if (this.correctOptionValue === removed) this.correctOptionValue = '';
  }
  trackByIdx(i: number)         { return i; }

  saveQuestion() {
    const qType = this.qType;
    const fv    = this.form.value;

    if (!fv.title?.trim()) { this.toast.error('Question title is required'); return; }

    let payload: any = {
      title:         fv.title!.trim(),
      question_type: qType,
      marks:         fv.marks ?? 1,
      display_order: fv.display_order ?? 0,
    };

    if (qType === 'mcq') {
      if (!fv.option_a?.trim()) { this.toast.error('Option A is required'); return; }
      if (!fv.option_b?.trim()) { this.toast.error('Option B is required'); return; }
      if (!fv.correct_answer)   { this.toast.error('Select the correct answer'); return; }
      Object.assign(payload, {
        option_a:       fv.option_a.trim(),
        option_b:       fv.option_b!.trim(),
        option_c:       fv.option_c?.trim() || null,
        option_d:       fv.option_d?.trim() || null,
        correct_answer: fv.correct_answer,
      });
    } else if (qType === 'input') {
      if (!fv.correct_answer?.trim()) { this.toast.error('Correct answer is required'); return; }
      payload.correct_answer = fv.correct_answer!.trim();
    } else {
      // select / radio
      const valid = this.customOptions.filter(o => o.trim());
      if (valid.length < 2)        { this.toast.error('At least 2 options are required'); return; }
      if (!this.correctOptionValue){ this.toast.error('Select the correct answer'); return; }
      payload.options        = valid.map(o => ({ label: o, value: o }));
      payload.correct_answer = this.correctOptionValue;
    }

    this.saving = true;
    const req = this.editUuid
      ? this.api.put(`questions/${this.editUuid}`, payload)
      : this.api.post(`quiz/${this.quizUuid}/questions`, payload);

    req.subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(this.editUuid ? 'Question updated' : 'Question added');
          this.loadQuestions();
          this.showForm = false;
        }
        this.saving = false;
      },
      error: err => {
        this.toast.error(err.error?.message || 'Failed to save question');
        this.saving = false;
      }
    });
  }

  confirmDelete(q: any) {
    this.confirm.confirm({
      message:                  `Delete question: <strong>${q.title}</strong>?`,
      header:                   'Delete Question',
      icon:                     'pi pi-trash',
      acceptLabel:              'Delete',
      rejectLabel:              'Cancel',
      acceptButtonStyleClass:   'p-button-danger',
      rejectButtonStyleClass:   'p-button-text',
      accept: () => this.api.delete(`questions/${q.uuid}`).subscribe({
        next: res => {
          if (res.success) { this.toast.success('Question deleted'); this.loadQuestions(); }
        }
      })
    });
  }

  moveUp(i: number) {
    if (i === 0) return;
    const qs = [...this.questions()];
    [qs[i], qs[i - 1]] = [qs[i - 1], qs[i]];
    this.questions.set(qs);
    this.saveOrder(qs);
  }

  moveDown(i: number) {
    const qs = this.questions();
    if (i === qs.length - 1) return;
    const updated = [...qs];
    [updated[i], updated[i + 1]] = [updated[i + 1], updated[i]];
    this.questions.set(updated);
    this.saveOrder(updated);
  }

  saveOrder(qs: any[]) {
    this.api.post(`quiz/${this.quizUuid}/reorder`, { order: qs.map(q => q.uuid) }).subscribe();
  }

  // ── Display helpers ─────────────────────────────────────────

  typeLabel(type: string): string {
    const map: Record<string, string> = {
      mcq: 'MCQ', input: 'Input', select: 'Select', radio: 'Radio',
    };
    return map[type] || type;
  }

  typeIcon(type: string): string {
    const map: Record<string, string> = {
      mcq: 'pi-list', input: 'pi-pencil', select: 'pi-chevron-down', radio: 'pi-circle',
    };
    return map[type] || 'pi-question-circle';
  }

  typeColor(type: string): string {
    const map: Record<string, string> = {
      mcq: '#6366F1', input: '#F59E0B', select: '#0D9488', radio: '#BE123C',
    };
    return map[type] || '#9CA3AF';
  }

  mcqOptionLabel(key: string): string {
    return this.mcqAnswerOptions.find(o => o.value === key)?.label || key.toUpperCase();
  }

  displayOptions(q: any): { label: string; value: string; correct: boolean }[] {
    if (q.question_type === 'mcq') {
      return [
        { label: 'A. ' + q.option_a, value: 'a', correct: q.correct_answer === 'a' },
        { label: 'B. ' + q.option_b, value: 'b', correct: q.correct_answer === 'b' },
        ...(q.option_c ? [{ label: 'C. ' + q.option_c, value: 'c', correct: q.correct_answer === 'c' }] : []),
        ...(q.option_d ? [{ label: 'D. ' + q.option_d, value: 'd', correct: q.correct_answer === 'd' }] : []),
      ];
    }
    if (q.question_type === 'select' || q.question_type === 'radio') {
      const opts: any[] = Array.isArray(q.options) ? q.options : [];
      return opts.map(o => ({
        label:   o.label ?? o,
        value:   o.value ?? o,
        correct: q.correct_answer === (o.value ?? o),
      }));
    }
    return [];
  }
}
