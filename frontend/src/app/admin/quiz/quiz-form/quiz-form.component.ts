import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ApiService } from '../../../core/services/api.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-quiz-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ButtonModule, InputTextModule,
            InputTextareaModule, DropdownModule, CalendarModule],
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
  private fb    = inject(FormBuilder);
  private api   = inject(ApiService);
  private toast = inject(ToastService);
  readonly router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit   = false;
  editUuid = '';
  saving   = false;
  quizSlug = '';

  statusOptions = [
    { label: 'Draft',     value: 'draft'     },
    { label: 'Published', value: 'published' },
  ];

  form = this.fb.group({
    title:          ['', Validators.required],
    description:    [''],
    instructions:   [''],
    start_datetime: [null as Date | null],
    end_datetime:   [null as Date | null],
    quiz_status:    ['draft'],
    is_active:      [true],
  });

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id && id !== 'new') {
      this.isEdit   = true;
      this.editUuid = id;
      this.loadQuiz(id);
    }
  }

  loadQuiz(uuid: string) {
    this.api.get<any>(`quiz/${uuid}`).subscribe(res => {
      if (res.success) {
        const q = res.data;
        this.quizSlug = q.slug;
        this.form.patchValue({
          title:          q.title || q.name,
          description:    q.description,
          instructions:   q.instructions,
          start_datetime: q.start_datetime ? new Date(q.start_datetime) : null,
          end_datetime:   q.end_datetime   ? new Date(q.end_datetime)   : null,
          quiz_status:    q.quiz_status,
          is_active:      !!q.is_active,
        });
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;

    const val = this.form.value;
    const payload = {
      ...val,
      start_datetime: val.start_datetime ? this.formatDt(val.start_datetime as Date) : null,
      end_datetime:   val.end_datetime   ? this.formatDt(val.end_datetime   as Date) : null,
    };

    const req = this.isEdit
      ? this.api.put(`quiz/${this.editUuid}`, payload)
      : this.api.post('quiz', payload);

    req.subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(this.isEdit ? 'Quiz updated' : 'Quiz created');
          const uuid = (res.data as any).uuid || this.editUuid;
          this.router.navigate(['/admin/quiz', uuid, 'questions']);
        }
        this.saving = false;
      },
      error: err => {
        this.toast.error(err.error?.message || 'Save failed');
        this.saving = false;
      }
    });
  }

  hasError(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  }

  private formatDt(d: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:00`;
  }
}
