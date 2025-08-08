export default function Navbar() {
    return (
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">📊 PPT Generator</h1>
          <nav className="text-sm text-gray-600 hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-600 transition">模板选择</a>
            <a href="#" className="hover:text-blue-600 transition">上传内容</a>
            <a href="#" className="hover:text-blue-600 transition">联系我们</a>
          </nav>
        </div>
      </header>
    );
  }
  