import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private msg = inject(MessageService);

  success(message: string) { this.msg.add({ severity: 'success', summary: 'Success', detail: message, life: 4000 }); }
  error(message: string)   { this.msg.add({ severity: 'error',   summary: 'Error',   detail: message, life: 4000 }); }
  warning(message: string) { this.msg.add({ severity: 'warn',    summary: 'Warning', detail: message, life: 4000 }); }
  info(message: string)    { this.msg.add({ severity: 'info',    summary: 'Info',    detail: message, life: 4000 }); }
}
