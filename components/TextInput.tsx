'use client';

import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextInput({ value, onChange, placeholder = "在此输入或粘贴您的文本内容..." }: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        文本内容
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={8}
        className="input-field resize-none"
      />
      <p className="text-xs text-gray-500">
        字符数: {value.length}
      </p>
    </div>
  );
} 