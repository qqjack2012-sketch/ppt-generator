'use client';

import React from 'react';
import { Loader2, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { GenerationStatus } from '@/types';

interface StatusIndicatorProps {
  status: GenerationStatus;
}

export default function StatusIndicator({ status }: StatusIndicatorProps) {
  if (status.status === 'idle') {
    return null;
  }

  const getStatusContent = () => {
    switch (status.status) {
      case 'generating':
        return {
          icon: <Loader2 className="h-6 w-6 animate-spin text-primary-500" />,
          title: '正在生成 PPT...',
          message: '请稍候，我们正在为您生成精美的演示文稿',
          className: 'bg-blue-50 border-blue-200 text-blue-800',
        };
      case 'success':
        return {
          icon: <CheckCircle className="h-6 w-6 text-green-500" />,
          title: '生成成功！',
          message: '您的 PPT 已准备就绪，可以下载了',
          className: 'bg-green-50 border-green-200 text-green-800',
        };
      case 'error':
        return {
          icon: <AlertCircle className="h-6 w-6 text-red-500" />,
          title: '生成失败',
          message: status.message || '生成过程中出现错误，请重试',
          className: 'bg-red-50 border-red-200 text-red-800',
        };
      default:
        return null;
    }
  };

  const content = getStatusContent();
  if (!content) return null;

  return (
    <div className={`p-4 rounded-lg border ${content.className}`}>
      <div className="flex items-start space-x-3">
        {content.icon}
        <div className="flex-1">
          <h3 className="font-medium">{content.title}</h3>
          <p className="text-sm mt-1">{content.message}</p>
          {status.status === 'success' && status.downloadUrl && (
            <a
              href={status.downloadUrl}
              download
              className="inline-flex items-center mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              下载 PPT
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 