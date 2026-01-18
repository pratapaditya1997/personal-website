import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const PostCard = ({ article }) => {
  const { title, pubDate, link, description, content, isLocal } = article;

  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const calculateReadingTime = (text) => {
    if (!text) return '1 min read';
    const stripped = text.replace(/<[^>]+>/g, '');
    const words = stripped.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const readingTime = calculateReadingTime(content || '');

  const cleanDescription = (() => {
    if (!description) return '';
    const stripped = description.replace(/<[^>]+>/g, '');
    return stripped.length > 160
      ? stripped.substring(0, 160) + '...'
      : stripped;
  })();

  // Shared CSS Classes
  const cardClasses =
    'group flex flex-col h-full rounded-xl border border-transparent bg-slate-800 p-6 transition-all duration-300 hover:bg-slate-800/80 hover:shadow-lg hover:ring-1 hover:shadow-green-900/20 hover:ring-green-400 cursor-pointer';

  // The Inner Content
  const cardContent = (
    <>
      <div className="flex-1">
        <h3 className="mb-3 text-xl leading-tight font-bold text-slate-100 transition-colors group-hover:text-green-400">
          {title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          {cleanDescription}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-700 pt-4 font-mono text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Calendar size={12} />
          <span>{formattedDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={12} />
          <span>{readingTime}</span>
        </div>
      </div>
    </>
  );

  // 6. Return correct Link type
  if (isLocal) {
    return (
      <Link to={link} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
    >
      {cardContent}
    </a>
  );
};

export default PostCard;
