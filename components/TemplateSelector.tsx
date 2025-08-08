'use client';

import React from 'react';
import { PPTTemplate } from '@/types';
import { PPT_TEMPLATES } from '@/lib/constants';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateSelect: (templateId: string) => void;
}

export default function TemplateSelector({ selectedTemplate, onTemplateSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">选择 PPT 模板</h3>
        <p className="text-sm text-gray-600 mb-4">
          选择一个适合您内容的 PPT 模板
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PPT_TEMPLATES.map((template) => (
          <div
            key={template.id}
            onClick={() => onTemplateSelect(template.id)}
            className={`card cursor-pointer transition-all duration-200 ${
              selectedTemplate === template.id
                ? 'ring-2 ring-primary-500 bg-primary-50'
                : 'hover:shadow-lg hover:border-primary-300'
            }`}
          >
            <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <div className="text-gray-400 text-sm">模板预览</div>
            </div>
            <h4 className="font-medium text-gray-900 mb-1">{template.name}</h4>
            <p className="text-sm text-gray-600">{template.description}</p>
            {selectedTemplate === template.id && (
              <div className="mt-2 flex items-center text-primary-600">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">已选择</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 