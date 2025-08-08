import { SUPPORTED_FILE_TYPES, MAX_FILE_SIZE } from './constants';

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function isValidFileType(file: File): boolean {
  return Object.keys(SUPPORTED_FILE_TYPES).indexOf(file.type) !== -1;
}

export function isValidFileSize(file: File): boolean {
  return file.size <= MAX_FILE_SIZE;
}

export function getFileExtension(file: File): string {
  return SUPPORTED_FILE_TYPES[file.type as keyof typeof SUPPORTED_FILE_TYPES] || '';
}

export function extractTextFromFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const content = e.target?.result as string;
      resolve(content);
    };
    
    reader.onerror = () => {
      reject(new Error('文件读取失败'));
    };
    
    if (file.type === 'text/plain') {
      reader.readAsText(file, 'UTF-8');
    } else {
      // 对于 PDF 和 DOCX，这里只是示例
      // 实际项目中需要专门的库来处理这些格式
      reader.readAsText(file);
    }
  });
} 