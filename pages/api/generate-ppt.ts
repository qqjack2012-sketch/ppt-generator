import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await new Promise((r) => setTimeout(r, 2000)); // 模拟等待生成时间

  res.status(200).json({
    downloadUrl: '/dummy/generated-ppt.pptx',
  });
}
