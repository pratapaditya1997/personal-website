import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import { getLocalArticles } from '../utils/articleLoader';
import { Loader2 } from 'lucide-react';

const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://pratapaditya1997.substack.com/feed`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let rssArticles = [];
        try {
          const response = await fetch(RSS_URL);
          const data = await response.json();
          if (data.items) {
            rssArticles = data.items.map((item) => ({
              ...item,
              isLocal: false,
            }));
          }
        } catch (rssError) {
          console.error('Error fetching Substack feed:', rssError);
        }

        const localArticles = getLocalArticles();

        const allArticles = [...rssArticles, ...localArticles].sort((a, b) => {
          return new Date(b.pubDate) - new Date(a.pubDate);
        });

        setPosts(allArticles);
      } catch (error) {
        console.error('Critical error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-5xl pt-4 pb-20">
      <SEO
        title="Home"
        description="Personal website of Aditya Pratap Singh, a Senior Software Engineer at Google. Writing about distributed systems and philosophy."
      />
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-100">
          Aditya Pratap Singh
        </h1>
        <p className="max-w-3xl text-xl leading-relaxed text-slate-400">
          Senior Software Engineer. I write about distributed systems,
          engineering leadership, and philosophy. Welcome to my digital garden.
        </p>
      </header>

      {/* Posts Section */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-green-400">
            Latest Essays
          </h2>
          {!loading && (
            <span className="rounded border border-slate-700 px-2 py-1 font-mono text-xs text-slate-500">
              {posts.length} posts
            </span>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20 text-green-400">
            <Loader2 className="animate-spin" size={32} />
          </div>
        )}

        {/* GRID LAYOUT */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            // We use 'index' as fallback key because RSS guids might collide with local slugs in rare edge cases
            <PostCard key={post.guid || index} article={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
