import { PPTTemplate } from '@/types';

export const SUPPORTED_FILE_TYPES = {
  'application/pdf': '.pdf',
  'text/plain': '.txt',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
};

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const PPT_TEMPLATES: PPTTemplate[] = [
  {
    id: 'business',
    name: '商务简约',
    description: '适合商务演示的简洁模板',
    preview: '/templates/business-preview.png',
    category: 'business',
  },
  {
    id: 'creative',
    name: '创意设计',
    description: '充满创意的现代化模板',
    preview: '/templates/creative-preview.png',
    category: 'creative',
  },
  {
    id: 'academic',
    name: '学术报告',
    description: '适合学术研究的专业模板',
    preview: '/templates/academic-preview.png',
    category: 'academic',
  },
  {
    id: 'minimal',
    name: '极简风格',
    description: '简洁大方的极简设计',
    preview: '/templates/minimal-preview.png',
    category: 'minimal',
  },
  {
    id: 'colorful',
    name: '多彩活力',
    description: '色彩丰富的活力模板',
    preview: '/templates/colorful-preview.png',
    category: 'colorful',
  },
  {
    id: 'elegant',
    name: '优雅经典',
    description: '经典优雅的设计风格',
    preview: '/templates/elegant-preview.png',
    category: 'elegant',
  },
]; 