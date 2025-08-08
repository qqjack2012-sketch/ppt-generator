import { useState } from 'react';
import { GenerationStatus, FormData } from '@/types';

export function usePPTGenerator() {
  const [status, setStatus] = useState<GenerationStatus>({ status: 'idle' });

  const generatePPT = async (formData: FormData) => {
    setStatus({ status: 'generating' });

    try {
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

      return result;
    } catch (error) {
      setStatus({
        status: 'error',
        message: error instanceof Error ? error.message : '生成失败，请重试',
      });
      throw error;
    }
  };

  const resetStatus = () => {
    setStatus({ status: 'idle' });
  };

  return {
    status,
    generatePPT,
    resetStatus,
  };
} 