import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Twitter, Linkedin, Home, User, Tag, Star } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => `
    flex items-center gap-3 p-3 rounded-lg transition-all duration-200 font-medium
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
      rel="noreferrer"
      className="text-slate-400 transition-colors duration-200 hover:text-green-400"
    >
      <Icon size={20} />
    </a>
  );

  return (
    <aside className="fixed top-0 left-0 flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-900 p-8">
      {/* 1. Profile Section */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="group relative mb-4">
          {/* Neon Ring Effect */}
          <div className="absolute -inset-1 rounded-full bg-green-400 opacity-75 blur transition duration-200 group-hover:opacity-100"></div>

          {/* Profile Image */}
          <img
            src="/avatar.jpg"
            alt="Aditya Pratap Singh"
            className="relative h-28 w-28 rounded-full border-4 border-slate-900 bg-slate-800 object-cover"
          />
        </div>

        <h1 className="text-xl font-bold tracking-wide text-white">
          Aditya Pratap <br /> Singh
        </h1>
        <p className="mt-1 font-mono text-sm text-green-400">
          Software Engineer
        </p>

        {/* Social Icons (Moved here) */}
        <div className="mt-4 flex gap-5">
          <SocialLink
            href="https://github.com/pratapaditya1997"
            icon={Github}
          />
          <SocialLink href="https://x.com/pratapaditya97_" icon={Twitter} />
          <SocialLink href="https://www.linkedin.com/in/pratapaditya1997/" icon={Linkedin} />
        </div>
      </div>

      {/* 2. Navigation */}
      <nav className="flex w-full flex-1 flex-col gap-2">
        <Link to="/" className={linkClass('/')}>
          <Home size={18} />
          <span>Home</span>
        </Link>
        <Link to="/about" className={linkClass('/about')}>
          <User size={18} />
          <span>About</span>
        </Link>
        <Link to="/tags" className={linkClass('/tags')}>
          <Tag size={18} />
          <span>Tags</span>
        </Link>
        <Link to="/favorites" className={linkClass('/favorites')}>
          <Star size={18} />
          <span>Favorites</span>
        </Link>
      </nav>

      {/* 3. Footer / Status */}
      <div className="mt-auto border-t border-slate-800 pt-6 text-center">
        <p className="font-mono text-xs text-slate-500">© 2026 A.P.S.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
