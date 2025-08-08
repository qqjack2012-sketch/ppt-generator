import { useState } from 'react';
import FileUpload from '../components/FileUpload';
import TemplateSelector from '../components/TemplateSelector';
import StatusDisplay from '../components/StatusDisplay';
import Navbar from '../components/Navbar';
import { TemplateOption } from '../types';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState<string>('');
  const [template, setTemplate] = useState<TemplateOption | null>(null);
  const [status, setStatus] = useState<'idle' | 'generating' | 'done'>('idle');
  const [downloadUrl, setDownloadUrl] = useState<string>('');

  const handleSubmit = async () => {
    if (!template || (!file && !pastedText)) return;

    setStatus('generating');
    const formData = new FormData();
    if (file) formData.append('file', file);
    else formData.append('text', pastedText);
    formData.append('templateId', template.id);

    const res = await fetch('/api/generate-ppt', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setDownloadUrl(data.downloadUrl);
    setStatus('done');
  };

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">AI PPT 智能生成器</h2>
          <p className="text-gray-500 mt-2">上传文本 + 选择模板，一键生成 PPT</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6">
          <FileUpload onFileSelect={setFile} onPaste={setPastedText} />
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">选择模板</h3>
          <TemplateSelector selected={template} onSelect={setTemplate} />
        </section>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={status === 'generating'}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === 'generating' ? '生成中...' : '生成 PPT'}
          </button>
        </div>

        <StatusDisplay status={status} downloadUrl={downloadUrl} />
      </main>
    </>
  );
}
