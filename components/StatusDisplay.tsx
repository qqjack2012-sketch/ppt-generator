interface Props {
    status: 'idle' | 'generating' | 'done';
    downloadUrl: string;
  }
  
  export default function StatusDisplay({ status, downloadUrl }: Props) {
    if (status === 'idle') return null;
  
    if (status === 'generating') {
      return (
        <div className="flex items-center justify-center mt-6 text-blue-600 space-x-2 animate-pulse">
          <svg
            className="w-5 h-5 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 4v1m0 14v1m8-8h1M4 12H3m15.36-6.36l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"
            />
          </svg>
          <p className="text-sm font-medium">正在生成 PPT，请稍候...</p>
        </div>
      );
    }
  
    if (status === 'done') {
      return (
        <div className="mt-6 text-center text-green-600 font-medium">
          ✅ 生成成功！<a href={downloadUrl} className="underline ml-2 hover:text-green-800">点击下载 PPT</a>
        </div>
      );
    }
  
    return null;
  }
  