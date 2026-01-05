import React from 'react';
import { ExternalLink } from 'lucide-react';

const PostCard = ({ title, pubDate, link, thumbnail, description }) => {
  // Format the date nicely
  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Strip HTML tags from description for a cleaner preview
  const cleanDescription =
    description.replace(/<[^>]+>/g, '').substring(0, 150) + '...';

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {formattedDate}
        </span>
        <ExternalLink
          size={18}
          className="text-slate-400 group-hover:text-blue-600 transition-colors"
        />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-sm">
        {cleanDescription}
      </p>
    </a>
  );
};

export default PostCard;
