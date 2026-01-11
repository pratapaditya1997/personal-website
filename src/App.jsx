import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import { Menu } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-900 text-slate-200">
        {/* MOBILE HEADER (Visible only on small screens) */}
        <div className="fixed top-0 right-0 left-0 z-40 flex h-16 items-center border-b border-slate-800 bg-slate-900 px-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-slate-400 hover:text-green-400"
          >
            <Menu size={24} />
          </button>
          <span className="ml-4 font-bold text-slate-100">
            Aditya Pratap Singh
          </span>
        </div>

        {/* OVERLAY (Darkens background when menu is open on mobile) */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* SIDEBAR (We pass the state and closer function to it) */}
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* MAIN CONTENT AREA */}
        {/* ml-0 on mobile (no margin), ml-80 on desktop (sidebar width) */}
        {/* pt-20 on mobile (to clear header), pt-12 on desktop */}
        <main className="ml-0 w-full flex-1 overflow-y-auto p-6 pt-20 md:ml-80 md:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
