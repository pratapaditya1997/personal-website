import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import { Loader2 } from 'lucide-react';

const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://pratapaditya1997.substack.com/feed`;

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch(RSS_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setPosts(data.items);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Substack feed:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto max-w-5xl pt-4">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-100">
          Welcome Home 👋
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          Software Engineer. I write about engineering, life, and building
          things. Here are my latest essays from Substack.
        </p>
      </header>

      {/* Posts Section */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-green-400">
            Latest Writings
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

        {/* GRID LAYOUT (2 Columns) */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.guid}
              title={post.title}
              pubDate={post.pubDate}
              link={post.link}
              content={post.content}
              description={post.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
