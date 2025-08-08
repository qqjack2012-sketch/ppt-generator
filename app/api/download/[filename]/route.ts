import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename;
    
    // 这里应该返回实际的 PPT 文件
    // 目前返回一个模拟的响应
    const mockContent = 'Mock PPT content';
    
    return new NextResponse(mockContent, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });

  } catch (error) {
    console.error('文件下载错误:', error);
    return NextResponse.json(
      { error: '文件下载失败' },
      { status: 500 }
    );
  }
} 