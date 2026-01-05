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
        // data.items contains the articles
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
    <div className="max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Welcome Home 👋
        </h1>
        <p className="text-lg text-slate-600">
          I write about engineering, life, and building things. Here are my
          latest essays from Substack.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          Latest Writings
          {/* Simple badge showing count */}
          {!loading && (
            <span className="text-sm font-normal bg-slate-200 px-2 py-1 rounded-full text-slate-600">
              {posts.length}
            </span>
          )}
        </h2>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20 text-blue-600">
            <Loader2 className="animate-spin" size={48} />
          </div>
        )}

        {/* Error/Empty State */}
        {!loading && posts.length === 0 && (
          <p className="text-slate-500">No posts found. Check back later!</p>
        )}

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.guid} // Unique ID from RSS
              title={post.title}
              pubDate={post.pubDate}
              link={post.link}
              description={post.description}
              thumbnail={post.thumbnail}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
