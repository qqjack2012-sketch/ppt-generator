import { NextRequest, NextResponse } from 'next/server';
import { FormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();
    
    // 验证请求数据
    if (!body.content || !body.templateId) {
      return NextResponse.json(
        { error: '缺少必要参数' },
        { status: 400 }
      );
    }

    // 这里应该调用实际的 PPT 生成服务
    // 目前返回模拟的下载链接
    console.log('生成 PPT 请求:', {
      content: body.content.substring(0, 100) + '...',
      templateId: body.templateId,
      fileName: body.fileName,
    });

    // 模拟处理时间
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 返回模拟的下载链接
    const downloadUrl = `/api/download/ppt-${Date.now()}.pptx`;

    return NextResponse.json({
      success: true,
      downloadUrl,
      message: 'PPT 生成成功',
    });

  } catch (error) {
    console.error('PPT 生成错误:', error);
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    );
  }
} 