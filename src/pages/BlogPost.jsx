import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getArticleBySlug } from '../utils/articleLoader';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getArticleBySlug(slug);

  // Redirect if not found
  useEffect(() => {
    if (!article) navigate('/');
  }, [article, navigate]);

  if (!article) return null;

  // Simple reading time estimate
  const words = article.content.split(' ').length;
  const readTime = Math.ceil(words / 200);

  return (
    <div className="mx-auto max-w-3xl px-4 pt-4 pb-20">
      <SEO
        title={article.title}
        description={article.description}
        url={`https://pratapaditya.com/blog/${slug}`}
      />

      <button
        onClick={() =>
          window.history.length > 1 ? navigate(-1) : navigate('/')
        }
        className="group mb-8 flex items-center gap-2 text-slate-400 transition-colors hover:text-green-400"
      >
        <ArrowLeft
          size={20}
          className="transition-transform group-hover:-translate-x-1"
        />
        <span>Back</span>
      </button>

      <article>
        {/* Header */}
        <header className="mb-10 border-b border-slate-800 pb-10">
          <div className="mb-6 flex items-center gap-6 font-mono text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {new Date(article.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {readTime} min read
            </span>
          </div>

          <h1 className="mb-6 text-3xl leading-tight font-bold text-slate-100 md:text-5xl">
            {article.title}
          </h1>
        </header>

        {/* Markdown Content */}
        <div className="prose prose-invert prose-lg prose-headings:text-slate-100 prose-headings:font-bold prose-p:text-slate-400 prose-p:leading-relaxed prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-200 prose-code:text-green-300 prose-code:bg-slate-800/50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-green-400 prose-blockquote:text-slate-400 prose-blockquote:italic prose-li:text-slate-400 prose-img:rounded-lg max-w-none">
          <Markdown>{article.content}</Markdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
