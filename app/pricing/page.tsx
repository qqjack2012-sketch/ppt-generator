'use client';

import React from 'react';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: '免费版',
      price: '0',
      period: '月',
      description: '适合个人用户和小型项目',
      features: [
        '每月生成 3 个 PPT',
        '基础模板库',
        '标准导出格式',
        '社区支持',
        '文件大小限制 10MB'
      ],
      popular: false,
      buttonText: '免费开始',
      buttonVariant: 'outline'
    },
    {
      name: '专业版',
      price: '29',
      period: '月',
      description: '适合专业用户和团队',
      features: [
        '每月生成 50 个 PPT',
        '完整模板库',
        '高级导出格式',
        '优先客服支持',
        '文件大小限制 50MB',
        '自定义品牌',
        '团队协作',
        'API 访问'
      ],
      popular: true,
      buttonText: '开始试用',
      buttonVariant: 'primary'
    },
    {
      name: '企业版',
      price: '99',
      period: '月',
      description: '适合大型企业和组织',
      features: [
        '无限生成 PPT',
        '专属定制模板',
        '所有导出格式',
        '24/7 专属支持',
        '无文件大小限制',
        '企业级安全',
        '高级分析报告',
        'SLA 保障'
      ],
      popular: false,
      buttonText: '联系销售',
      buttonVariant: 'outline'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 导航栏 */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/home" className="text-2xl font-bold text-gray-900">
                PPT生成器
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/home#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  功能特性
                </Link>
                <Link href="/home#templates" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  模板
                </Link>
                <Link href="/pricing" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  价格
                </Link>
                <Link href="/generator" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  开始使用
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            选择适合您的方案
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            从免费版到企业版，我们为不同需求的用户提供灵活的定价方案
          </p>
        </div>

        {/* 价格卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    最受欢迎
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">¥{plan.price}</span>
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === '企业版' ? '/contact' : '/generator'}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ 部分 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
            <p className="text-lg text-gray-600">
              关于我们的定价和服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                可以随时取消订阅吗？
              </h3>
              <p className="text-gray-600">
                是的，您可以随时取消订阅。取消后，您仍可以使用服务直到当前计费周期结束。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                支持哪些支付方式？
              </h3>
              <p className="text-gray-600">
                我们支持支付宝、微信支付、银行卡等多种支付方式，确保您的支付安全便捷。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                有免费试用期吗？
              </h3>
              <p className="text-gray-600">
                专业版提供7天免费试用，让您充分体验所有功能后再决定是否订阅。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                企业版有什么特殊服务？
              </h3>
              <p className="text-gray-600">
                企业版提供专属客户经理、定制化服务、SLA保障等企业级服务，满足大型组织需求。
              </p>
            </div>
          </div>
        </div>

        {/* CTA 区域 */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              准备开始了吗？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              选择适合您的方案，开始创建精美的演示文稿
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/generator"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                免费开始
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                联系销售
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 