'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* 汉堡菜单按钮 */}
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-blue-600 p-2"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              功能特性
            </a>
            <a
              href="#templates"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              模板
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              价格
            </a>
            <Link
              href="/generator"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              开始使用
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 