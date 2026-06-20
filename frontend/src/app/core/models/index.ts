// frontend/src/app/core/models/index.ts

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  last_page: number;
}

export interface User {
  id: number;
  name: string;
  mo_number: string;
  role: string;
  role_code: string;
  permissions: Permission[];
}

export interface Permission {
  slug: string;
  can_view: boolean;
  can_create: boolean;
  can_update: boolean;
  can_delete: boolean;
}

export interface Yuvak {
  id: number;
  uuid: string;
  yuvak_id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  mo_number: string;
  whatsapp_number?: string;
  email?: string;
  address?: string;
  xetra_id: number;
  xetra_name?: string;
  xetra_code?: string;
  mandal_id: number;
  mandal_name?: string;
  is_karyakar: 'no' | 'bal' | 'yuva' | 'sanyukta';
  tags?: string[];
  status: 'active' | 'archive';
  created_at: string;
}

export interface Yuvati extends Omit<Yuvak, 'yuvak_id'> {
  yuvati_id: string;
}

export interface Xetra {
  id: number;
  uuid: string;
  name: string;
  code: string;
  status: string;
}

export interface Mandal {
  id: number;
  uuid: string;
  name: string;
  code: string;
  status: string;
}

export interface Role {
  id: number;
  uuid: string;
  name: string;
  code: string;
  permissions?: MenuPermission[];
}

export interface MenuPermission {
  menu_id: number;
  menu_name: string;
  slug: string;
  can_view: boolean;
  can_create: boolean;
  can_update: boolean;
  can_delete: boolean;
}

export interface Shibir {
  id: number;
  uuid: string;
  name: string;
  date: string;
  slug: string;
  status: string;
}

export interface Quiz {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  quiz_status: 'draft' | 'published' | 'deleted';
  questions?: QuizQuestion[];
}

export interface QuizQuestion {
  id?: number;
  title: string;
  field_type: 'text' | 'number' | 'radio' | 'checkbox' | 'select';
  options?: string[];
  is_required: boolean;
  sort_order?: number;
}

export interface AttendanceRecord {
  id: number;
  attendance_date: string;
  member_type: 'yuvak' | 'yuvati';
  member_id: number;
  member_name: string;
  member_code: string;
  shibir_id?: number;
}
