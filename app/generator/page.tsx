'use client';

import React, { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import TextInput from '@/components/TextInput';
import TemplateSelector from '@/components/TemplateSelector';
import StatusIndicator from '@/components/StatusIndicator';
import { UploadedFile, GenerationStatus, FormData } from '@/types';
import { extractTextFromFile } from '@/lib/utils';

export default function GeneratorPage() {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [textContent, setTextContent] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [inputMethod, setInputMethod] = useState<'file' | 'text'>('file');
  const [status, setStatus] = useState<GenerationStatus>({ status: 'idle' });

  const handleFileUpload = (file: UploadedFile) => {
    setUploadedFile(file);
    setInputMethod('file');
    setTextContent('');
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTemplate) {
      alert('请选择一个 PPT 模板');
      return;
    }

    if (inputMethod === 'file' && !uploadedFile) {
      alert('请上传文件或输入文本内容');
      return;
    }

    if (inputMethod === 'text' && !textContent.trim()) {
      alert('请输入文本内容');
      return;
    }

    setStatus({ status: 'generating' });

    try {
      let content = '';
      
      if (inputMethod === 'file' && uploadedFile) {
        content = await extractTextFromFile(uploadedFile.file);
      } else {
        content = textContent;
      }

      const formData: FormData = {
        content,
        templateId: selectedTemplate,
        fileName: uploadedFile?.name,
      };

      // 发送到后端 API
      const response = await fetch('/api/generate-ppt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('生成失败');
      }

      const result = await response.json();
      
      setStatus({
        status: 'success',
        downloadUrl: result.downloadUrl,
      });
    } catch (error) {
      setStatus({
        status: 'error',
        message: error instanceof Error ? error.message : '生成失败，请重试',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            PPT 生成器
          </h1>
          <p className="text-lg text-gray-600">
            上传文件或输入文本，选择模板，一键生成精美 PPT
          </p>
        </div>

        {/* 主要内容 */}
        <div className="space-y-8">
          {/* 输入方式选择 */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              选择输入方式
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={() => setInputMethod('file')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  inputMethod === 'file'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                上传文件
              </button>
              <button
                onClick={() => setInputMethod('text')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  inputMethod === 'text'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                输入文本
              </button>
            </div>
          </div>

          {/* 文件上传区域 */}
          {inputMethod === 'file' && (
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                上传文件
              </h2>
              <FileUpload
                onFileUpload={handleFileUpload}
                onFileRemove={handleFileRemove}
                uploadedFile={uploadedFile}
              />
            </div>
          )}

          {/* 文本输入区域 */}
          {inputMethod === 'text' && (
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                输入文本内容
              </h2>
              <TextInput
                value={textContent}
                onChange={setTextContent}
              />
            </div>
          )}

          {/* 模板选择区域 */}
          <div className="card">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateSelect={handleTemplateSelect}
            />
          </div>

          {/* 状态指示器 */}
          {status.status !== 'idle' && (
            <StatusIndicator status={status} />
          )}

          {/* 提交按钮 */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={status.status === 'generating'}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 text-lg"
            >
              {status.status === 'generating' ? '生成中...' : '生成 PPT'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 