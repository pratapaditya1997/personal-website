import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Twitter, Linkedin, Home, User, Star, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => `
    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium
    ${
      isActive(path)
        ? 'text-green-400 bg-slate-800'
        : 'text-slate-400 hover:text-green-400 hover:bg-slate-800/50'
    }
  `;

  const SocialLink = ({ href, icon: Icon }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 transition-colors duration-200 hover:text-green-400"
    >
      <Icon size={24} /> {/* Increased Icon Size */}
    </a>
  );

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-80 flex-col border-r border-slate-800 bg-slate-900 p-8 pt-16 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* CLOSE BUTTON (Mobile Only) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white md:hidden"
        >
          <X size={24} />
        </button>

        {/* 1. Profile Section (Larger & Pushed Down) */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="group relative mb-6">
            <div className="absolute -inset-1 rounded-full bg-green-400 opacity-75 blur transition duration-200 group-hover:opacity-100"></div>
            {/* Increased Size: w-28 -> w-40 */}
            <img
              src="/avatar.jpg"
              alt="Aditya Pratap Singh"
              className="relative h-40 w-40 rounded-full border-4 border-slate-900 bg-slate-800 object-cover"
            />
          </div>

          {/* Increased Text Size */}
          <h1 className="text-2xl leading-tight font-bold tracking-wide text-white">
            Aditya Pratap <br /> Singh
          </h1>
          <p className="mt-2 font-mono text-base text-green-400">
            Software Engineer
          </p>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/pratapaditya1997"
              icon={Github}
            />
            <SocialLink
              href="https://twitter.com/pratapaditya97_"
              icon={Twitter}
            />
            <SocialLink
              href="https://linkedin.com/in/pratapaditya1997/"
              icon={Linkedin}
            />
          </div>
        </div>

        {/* 2. Navigation */}
        <nav className="flex w-full flex-1 flex-col gap-2">
          <Link to="/" className={linkClass('/')} onClick={onClose}>
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/about" className={linkClass('/about')} onClick={onClose}>
            <User size={20} />
            <span>About</span>
          </Link>
          <Link
            to="/favorites"
            className={linkClass('/favorites')}
            onClick={onClose}
          >
            <Star size={20} />
            <span>Favorites</span>
          </Link>
        </nav>

        {/* 3. Footer */}
        <div className="mt-auto border-t border-slate-800 pt-6 text-center">
          <p className="font-mono text-xs text-slate-500">© 2026 Aditya P.S.</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
