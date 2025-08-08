export interface PPTTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  category: string;
}

export interface UploadedFile {
  file: File;
  name: string;
  size: number;
  type: string;
}

export interface GenerationStatus {
  status: 'idle' | 'generating' | 'success' | 'error';
  message?: string;
  downloadUrl?: string;
}

export interface FormData {
  content: string;
  templateId: string;
  fileName?: string;
} 