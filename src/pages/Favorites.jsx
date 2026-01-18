import React from 'react';
import SEO from '../components/SEO';
import { ExternalLink, Mic, BookOpen, Feather, Users } from 'lucide-react';

const FAVORITES_DATA = [
  {
    category: 'Poems',
    icon: Feather,
    items: [
      {
        title: 'If',
        author: 'Rudyard Kipling',
        link: 'https://www.poetryfoundation.org/poems/46473/if---',
      },
      {
        title: 'Stopping by Woods on a Snowy Evening',
        author: 'Robert Frost',
        link: 'https://www.poetryfoundation.org/poems/42891/stopping-by-woods-on-a-snowy-evening',
      },
      {
        title: 'Aadminama',
        author: 'Nazeer Akbarabadi',
        link: 'https://www.rekhta.org/nazms/aadmii-naama-duniyaa-men-paadshah-hai-so-hai-vo-bhii-aadmii-nazeer-akbarabadi-nazms?lang=hi',
      },
    ],
  },
  {
    category: 'Podcasts',
    icon: Mic,
    items: [
      {
        title: 'Everything is Everything',
        author: 'Amit Varma & Ajay Shah',
        link: 'https://www.youtube.com/@amitvarma/videos',
      },
    ],
  },
  {
    category: 'Essays',
    icon: BookOpen,
    items: [
      {
        title: 'Paul Graham Essays',
        author: 'Paul Graham',
        link: 'https://www.paulgraham.com/articles.html',
      },
    ],
  },
  {
    category: 'Storytellers',
    icon: Users,
    items: [
      { title: 'Joy Bhattacharya', link: 'https://twitter.com/joybhattacharj' },
      { title: 'Amit Varma', link: 'https://twitter.com/amitvarma' },
      { title: 'Ajay Shah', link: 'https://twitter.com/ajay_shah' },
    ],
  },
];

export default function Favorites() {
  return (
    <div className="mx-auto max-w-4xl pt-4">
      <SEO
        title="Favorites"
        description="A curated list of my favorite essays, podcasts, and books."
        url="https://pratapaditya.com/favorites"
      />
      <h1 className="mb-2 text-3xl font-bold text-slate-100">Favorites</h1>
      <p className="mb-10 text-lg text-slate-400">
        A curated list of things I love and recommend.
      </p>

      <div className="grid gap-12">
        {FAVORITES_DATA.map((section) => (
          <div key={section.category}>
            {/* Section Header */}
            <h2 className="mb-6 flex items-center gap-2 border-b border-slate-800 pb-2 text-xl font-bold text-green-400">
              <section.icon size={20} />
              {section.category}
            </h2>

            {/* List Items */}
            <div className="grid gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg bg-slate-800 p-4 transition-all hover:bg-slate-700/80 hover:ring-1 hover:ring-green-400"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-slate-200 transition-colors group-hover:text-green-400">
                      {item.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-slate-500 group-hover:text-green-400"
                    />
                  </div>

                  {item.author && (
                    <p className="mt-1 font-mono text-sm text-slate-400">
                      by {item.author}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
