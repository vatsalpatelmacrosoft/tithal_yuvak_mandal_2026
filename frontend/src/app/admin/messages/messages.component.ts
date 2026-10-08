import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, DatePipe, TitleCasePipe } from '@angular/common';
import { TableModule, TableLazyLoadEvent } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditorModule } from 'primeng/editor';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { MessageCampaign, MessageRecipient, PaginatedResponse } from '../../core/models';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

type MainTab = 'compose' | 'history';
type TargetType = 'yuvak' | 'yuvati' | 'both';
type Scope = 'all' | 'xetra' | 'mandal' | 'individual';
type PickerType = 'yuvak' | 'yuvati';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, DatePipe, TitleCasePipe, TableModule, ButtonModule,
            InputTextModule, MultiSelectModule, EditorModule, TagModule, DialogModule, TooltipModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  private api   = inject(ApiService);
  private auth  = inject(AuthService);
  private toast = inject(ToastService);

  activeTab: MainTab = 'compose';
  step = 1;

  get canCreate() { return this.auth.hasPermission('messages', 'can_create'); }

  // ── Step 1: Recipients ─────────────────────────────────────────
  targetType: TargetType = 'yuvak';
  scope: Scope = 'all';
  xetras: any[] = [];
  mandals: any[] = [];
  selectedXetraIds: number[] = [];
  selectedMandalIds: number[] = [];
  selectedYuvakUuids = new Set<string>();
  selectedYuvatiUuids = new Set<string>();
  excludedUuids = new Set<string>();

  checking = false;
  checked = false;
  recipients = signal<MessageRecipient[]>([]);

  get validRecipients()   { return this.recipients().filter(r => r.is_valid); }
  get invalidRecipients() { return this.recipients().filter(r => !r.is_valid); }
  get individualCount()   { return this.selectedYuvakUuids.size + this.selectedYuvatiUuids.size; }

  get canCheckRecipients(): boolean {
    if (this.scope === 'xetra')      return this.selectedXetraIds.length > 0;
    if (this.scope === 'mandal')     return this.selectedMandalIds.length > 0;
    if (this.scope === 'individual') return this.individualCount > 0;
    return true;
  }

  // Individual picker dialog
  pickerVisible = false;
  pickerType: PickerType = 'yuvak';
  pickerRows = signal<any[]>([]);
  pickerTotal = signal(0);
  pickerLoading = false;
  pickerPerPage = 20;
  pickerSearch = '';
  private pickerSearch$ = new Subject<string>();

  // ── Step 2: Message ────────────────────────────────────────────
  subject = '';
  messageBody = '';

  get whatsappPreview(): string { return this.buildWhatsAppText(); }

  // ── Step 3: Send queue ─────────────────────────────────────────
  campaign: MessageCampaign | null = null;
  queue: MessageRecipient[] = [];
  currentIndex = 0;
  sending = false;
  marking = false;
  finished = false;

  get currentRecipient(): MessageRecipient | null { return this.queue[this.currentIndex] ?? null; }

  // ── History tab ────────────────────────────────────────────────
  campaigns = signal<MessageCampaign[]>([]);
  historyTotal = signal(0);
  historyLoading = false;
  historyPerPage = 20;
  detailCampaign = signal<MessageCampaign | null>(null);
  detailVisible = false;

  ngOnInit() {
    this.api.get<any>('xetra').subscribe(r => { if (r.success) this.xetras = r.data; });
    this.api.get<any>('mandal').subscribe(r => { if (r.success) this.mandals = r.data; });
    this.pickerSearch$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => this.loadPicker(1));
    this.loadHistory(1);
  }

  setTab(t: MainTab) {
    this.activeTab = t;
    if (t === 'history') this.loadHistory(1);
  }

  // ── Recipient scope changes reset downstream selection ─────────
  onTargetTypeChange() {
    this.selectedYuvakUuids.clear();
    this.selectedYuvatiUuids.clear();
    this.resetCheck();
  }

  onScopeChange() {
    this.selectedXetraIds = [];
    this.selectedMandalIds = [];
    this.selectedYuvakUuids.clear();
    this.selectedYuvatiUuids.clear();
    this.resetCheck();
  }

  resetCheck() {
    this.checked = false;
    this.recipients.set([]);
    this.excludedUuids.clear();
  }

  // ── Individual picker dialog ────────────────────────────────────
  openPicker(type: PickerType) {
    this.pickerType = type;
    this.pickerSearch = '';
    this.pickerVisible = true;
    this.loadPicker(1);
  }

  loadPicker(page = 1) {
    this.pickerLoading = true;
    const resource = this.pickerType === 'yuvak' ? 'yuvak' : 'yuvati';
    this.api.get<PaginatedResponse<any>>(resource, { page, limit: this.pickerPerPage, search: this.pickerSearch }).subscribe({
      next: res => {
        if (res.success && res.data) { this.pickerRows.set(res.data.data); this.pickerTotal.set(res.data.total); }
        this.pickerLoading = false;
      },
      error: () => { this.pickerLoading = false; }
    });
  }

  onPickerLazyLoad(event: TableLazyLoadEvent) {
    this.pickerPerPage = event.rows ?? this.pickerPerPage;
    const page = Math.floor((event.first ?? 0) / this.pickerPerPage) + 1;
    this.loadPicker(page);
  }

  onPickerSearch(v: string) { this.pickerSearch$.next(v); }

  pickerSelectionSet(): Set<string> {
    return this.pickerType === 'yuvak' ? this.selectedYuvakUuids : this.selectedYuvatiUuids;
  }

  isPicked(row: any): boolean { return this.pickerSelectionSet().has(row.uuid); }

  togglePicked(row: any) {
    const set = this.pickerSelectionSet();
    if (set.has(row.uuid)) set.delete(row.uuid); else set.add(row.uuid);
    this.resetCheck();
  }

  closePicker() { this.pickerVisible = false; }

  // ── Check / validate recipients ─────────────────────────────────
  buildCriteria() {
    return {
      target_type: this.targetType,
      scope: this.scope,
      xetra_ids: this.selectedXetraIds,
      mandal_ids: this.selectedMandalIds,
      yuvak_uuids: Array.from(this.selectedYuvakUuids),
      yuvati_uuids: Array.from(this.selectedYuvatiUuids),
    };
  }

  checkRecipients() {
    this.checking = true;
    this.api.post<any>('messages/preview', this.buildCriteria()).subscribe({
      next: res => {
        this.checking = false;
        if (res.success && res.data) {
          this.excludedUuids.clear();
          this.recipients.set(res.data.recipients);
          this.checked = true;
        } else {
          this.toast.error(res.message || 'Failed to resolve recipients');
        }
      },
      error: () => { this.checking = false; this.toast.error('Failed to resolve recipients'); }
    });
  }

  removeRecipient(r: MessageRecipient) {
    this.excludedUuids.add(r.member_uuid);
    this.recipients.update(list => list.filter(x => x.member_uuid !== r.member_uuid));
  }

  goToStep(s: number) { this.step = s; }

  // ── WhatsApp text conversion (Quill HTML -> WhatsApp markdown) ──
  private htmlToWhatsAppText(html: string): string {
    const container = document.createElement('div');
    container.innerHTML = html;

    const walk = (node: ChildNode): string => {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent || '';
      if (node.nodeType !== Node.ELEMENT_NODE) return '';
      const el = node as HTMLElement;
      const inner = Array.from(el.childNodes).map(walk).join('');
      switch (el.tagName) {
        case 'STRONG': case 'B': return `*${inner}*`;
        case 'EM': case 'I': return `_${inner}_`;
        case 'S': case 'STRIKE': case 'DEL': return `~${inner}~`;
        case 'LI': return `• ${inner}\n`;
        case 'BR': return '\n';
        case 'P': case 'DIV': return `${inner}\n`;
        default: return inner;
      }
    };

    return Array.from(container.childNodes).map(walk).join('')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  buildWhatsAppText(): string {
    const body = this.htmlToWhatsAppText(this.messageBody || '');
    return this.subject ? `*${this.subject}*\n\n${body}` : body;
  }

  // ── Send campaign / queue ────────────────────────────────────────
  sendCampaign() {
    if (!this.subject.trim() || !this.messageBody.trim()) {
      this.toast.error('Subject and message are required');
      return;
    }
    this.sending = true;
    const body = {
      ...this.buildCriteria(),
      subject: this.subject,
      message_body: this.messageBody,
      excluded_uuids: Array.from(this.excludedUuids),
    };
    this.api.post<MessageCampaign>('messages', body).subscribe({
      next: res => {
        this.sending = false;
        if (res.success && res.data) {
          this.campaign = res.data;
          this.queue = (res.data.recipients || []).filter(r => r.status === 'pending');
          this.currentIndex = 0;
          this.finished = this.queue.length === 0;
          this.step = 3;
        } else {
          this.toast.error(res.message || 'Failed to create campaign');
        }
      },
      error: () => { this.sending = false; this.toast.error('Failed to create campaign'); }
    });
  }

  openWhatsApp(r: MessageRecipient) {
    const url = `https://wa.me/91${r.used_number}?text=${encodeURIComponent(this.buildWhatsAppText())}`;
    window.open(url, '_blank');
  }

  markCurrent(status: 'sent' | 'skipped') {
    const r = this.currentRecipient;
    if (!r || !this.campaign) return;
    this.marking = true;
    this.api.put<any>(`messages/${this.campaign.uuid}/recipients/${r.id}`, { status }).subscribe({
      next: res => {
        this.marking = false;
        if (res.success) {
          r.status = status;
          this.advanceQueue();
        } else {
          this.toast.error(res.message || 'Failed to update status');
        }
      },
      error: () => { this.marking = false; this.toast.error('Failed to update status'); }
    });
  }

  private advanceQueue() {
    this.currentIndex++;
    if (this.currentIndex >= this.queue.length) {
      this.finished = true;
      this.toast.success('Messaging queue complete');
    }
  }

  startNewMessage() {
    this.step = 1;
    this.checked = false;
    this.recipients.set([]);
    this.excludedUuids.clear();
    this.subject = '';
    this.messageBody = '';
    this.campaign = null;
    this.queue = [];
    this.currentIndex = 0;
    this.finished = false;
    this.selectedXetraIds = [];
    this.selectedMandalIds = [];
    this.selectedYuvakUuids.clear();
    this.selectedYuvatiUuids.clear();
  }

  // ── History ───────────────────────────────────────────────────
  loadHistory(page = 1) {
    this.historyLoading = true;
    this.api.get<PaginatedResponse<MessageCampaign>>('messages', { page, limit: this.historyPerPage }).subscribe({
      next: res => {
        if (res.success && res.data) { this.campaigns.set(res.data.data); this.historyTotal.set(res.data.total); }
        this.historyLoading = false;
      },
      error: () => { this.historyLoading = false; }
    });
  }

  onHistoryLazyLoad(event: TableLazyLoadEvent) {
    this.historyPerPage = event.rows ?? this.historyPerPage;
    const page = Math.floor((event.first ?? 0) / this.historyPerPage) + 1;
    this.loadHistory(page);
  }

  viewDetail(c: MessageCampaign) {
    this.api.get<MessageCampaign>(`messages/${c.uuid}`).subscribe(res => {
      if (res.success && res.data) { this.detailCampaign.set(res.data); this.detailVisible = true; }
    });
  }
}
