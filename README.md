# PPT 生成器

一个允许上传文件或粘贴文本、选择 PPT 模板并生成下载链接的智能 PPT 生成工具。

## 功能特性

- 📁 **文件上传**: 支持上传 PDF、TXT 或 DOCX 文件
- 📝 **文本输入**: 直接粘贴纯文本作为内容
- 🎨 **模板选择**: 多种预设 PPT 模板（卡片展示）
- 🖱️ **拖拽上传**: 支持拖拽文件到上传区域
- 📱 **响应式设计**: 完美适配桌面端和移动端
- ⚡ **实时状态**: 显示生成进度和结果状态
- 🔗 **下载链接**: 生成成功后提供直接下载链接
- 🏠 **现代化首页**: 专业的营销页面设计
- 💰 **价格页面**: 完整的定价方案展示
- 📱 **移动端优化**: 专门的移动端导航组件

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **文件上传**: react-dropzone
- **图标库**: Lucide React
- **状态管理**: React Hooks

## 项目结构

```
ppt-generator/
├── app/                          # Next.js App Router
│   ├── api/                      # API 路由
│   │   ├── generate-ppt/         # PPT 生成 API
│   │   └── download/[filename]/  # 文件下载 API
│   ├── home/                     # 首页
│   │   └── page.tsx              # 现代化首页设计
│   ├── generator/                # PPT 生成器
│   │   └── page.tsx              # 生成器主页面
│   ├── pricing/                  # 价格页面
│   │   └── page.tsx              # 定价方案页面
│   ├── globals.css               # 全局样式
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 主页面（重定向）
├── components/                   # React 组件
│   ├── FileUpload.tsx           # 文件上传组件
│   ├── TextInput.tsx            # 文本输入组件
│   ├── TemplateSelector.tsx     # 模板选择组件
│   ├── StatusIndicator.tsx      # 状态指示器组件
│   └── MobileNav.tsx            # 移动端导航组件
├── hooks/                       # 自定义 Hooks
│   └── usePPTGenerator.ts       # PPT 生成状态管理
├── lib/                         # 工具库
│   ├── constants.ts             # 常量定义
│   └── utils.ts                 # 工具函数
├── types/                       # TypeScript 类型定义
│   └── index.ts                 # 类型接口
└── public/                      # 静态资源
    └── templates/               # 模板预览图片
```

## 核心组件说明

### 1. FileUpload 组件
- 支持拖拽上传和点击上传
- 文件类型和大小验证
- 文件预览和删除功能
- 错误提示和状态反馈

### 2. TemplateSelector 组件
- 卡片式模板展示
- 模板选择和状态管理
- 响应式网格布局
- 视觉反馈和交互效果

### 3. TextInput 组件
- 多行文本输入
- 字符计数显示
- 占位符和提示文本
- 实时内容更新

### 4. StatusIndicator 组件
- 多状态显示（生成中、成功、错误）
- 动态图标和颜色
- 下载链接集成
- 用户友好的消息提示

### 5. MobileNav 组件
- 移动端汉堡菜单
- 响应式导航设计
- 平滑的展开/收起动画
- 触摸友好的交互体验

## 启动方法

```bash
# 克隆项目
git clone https://github.com/qqjack2012-sketch/ppt-generator.git
cd ppt-generator

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 开发指南

### 添加新模板
1. 在 `lib/constants.ts` 中的 `PPT_TEMPLATES` 数组添加新模板
2. 在 `public/templates/` 目录添加预览图片
3. 更新模板选择组件以支持新模板

### 自定义样式
- 主要样式在 `app/globals.css` 中定义
- 使用 Tailwind CSS 类名进行样式定制
- 组件级别的样式在各自的组件文件中

### API 集成
- PPT 生成 API: `/api/generate-ppt`
- 文件下载 API: `/api/download/[filename]`
- 支持自定义后端服务集成

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

### v1.0.0
- 初始版本发布
- 支持文件上传和文本输入
- 6 种预设模板
- 完整的用户界面和交互
