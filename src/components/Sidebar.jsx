import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, ExternalLink } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => `
    flex items-center gap-3 p-3 rounded-lg transition-all duration-200
    ${
      isActive(path)
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }
  `;

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 flex flex-col p-6 border-r border-slate-800">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10 mt-4">
        <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full mb-4 flex items-center justify-center text-3xl shadow-lg">
          {/* Placeholder Avatar */}
          🚀
        </div>
        <h1 className="text-xl font-bold text-center tracking-tight">
          Aditya Pratap Singh
        </h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
          Software Engineer
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 flex-1">
        <Link to="/" className={linkClass('/')}>
          <Home size={20} />
          <span className="font-medium">Home</span>
        </Link>
        <Link to="/about" className={linkClass('/about')}>
          <User size={20} />
          <span className="font-medium">About</span>
        </Link>
        <Link to="/projects" className={linkClass('/projects')}>
          <Briefcase size={20} />
          <span className="font-medium">Projects</span>
        </Link>
      </nav>

      {/* Footer / Socials Placeholder */}
      <div className="pt-6 border-t border-slate-800">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-sm text-slate-500 hover:text-white transition-colors"
        >
          <ExternalLink size={16} />
          <span>GitHub Profile</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
