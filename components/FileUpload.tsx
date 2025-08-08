import { useState, useRef, useEffect } from 'react';

interface Props {
  onFileSelect: (file: File | null) => void;
  onPaste: (text: string) => void;
}

const acceptedTypes = ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export default function FileUpload({ onFileSelect, onPaste }: Props) {
  const [fileName, setFileName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file: File) => {
    if (!acceptedTypes.includes(file.type)) {
      alert('仅支持 PDF、TXT、DOCX 文件');
      onFileSelect(null);
      return;
    }
    setFileName(file.name);
    onFileSelect(file);
  };

  const handlePaste = (e: ClipboardEvent) => {
    const text = e.clipboardData?.getData('text');
    if (text) {
      onPaste(text);
      onFileSelect(null);
      setFileName('（已粘贴纯文本）');
    }
  };

  useEffect(() => {
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        accept=".pdf,.txt,.docx"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      <p className="text-gray-600 font-medium">
        拖拽文件或点击上传（支持 PDF, TXT, DOCX）
      </p>
      <p className="text-sm text-gray-400 mt-1">或直接粘贴纯文本</p>
      {fileName && <p className="mt-3 text-sm text-blue-600">{fileName}</p>}
    </div>
  );
}
