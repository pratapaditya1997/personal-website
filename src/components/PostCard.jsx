import React from 'react';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

const PostCard = ({ title, pubDate, link, description, content }) => {
  // Format the date nicely
  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const calculateReadingTime = (html) => {
    const text = html.replace(/<[^>]+>/g, ''); // Strip HTML tags
    const words = text.trim().split(/\s+/).length;
    const wordsPerMinute = 200; // Average reading speed
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const readingTime = calculateReadingTime(content || '');

  // Strip HTML tags from description for a cleaner preview
  const cleanDescription =
    description.replace(/<[^>]+>/g, '').substring(0, 160) + '...';

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-transparent bg-slate-800 p-6 transition-all duration-300 hover:bg-slate-800/80 hover:shadow-lg hover:ring-1 hover:shadow-green-900/20 hover:ring-green-400"
    >
      {/* Title */}
      <h3 className="mb-3 text-xl leading-tight font-bold text-slate-100 transition-colors group-hover:text-green-400">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
        {cleanDescription}
      </p>

      {/* Metadata Footer */}
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
    </a>
  );
};

export default PostCard;
