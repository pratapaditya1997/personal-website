import React from 'react';
import SEO from '../components/SEO';
import {
  MapPin,
  Terminal,
  Activity,
  BookOpen,
  ExternalLink,
  Dumbbell,
  Tv,
  Cpu,
} from 'lucide-react';

const Section = ({ icon: Icon, title, children }) => (
  <div className="mb-10">
    <div className="mb-4 flex items-center gap-3 text-green-400">
      <Icon size={24} />
      <h2 className="text-xl font-bold text-slate-100">{title}</h2>
    </div>
    <div className="space-y-4 pl-9 leading-relaxed text-slate-400">
      {children}
    </div>
  </div>
);

const Link = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-1 inline-flex items-center gap-1 border-b border-slate-700 pb-0.5 text-slate-200 transition-colors hover:border-green-400 hover:text-green-400"
  >
    {children}
    <ExternalLink size={12} />
  </a>
);

const Now = () => {
  return (
    <div className="mx-auto max-w-3xl pt-4 pb-12">
      <SEO
        title="Now"
        description="Current focus: Google Search AI, 10k training, and recovery."
        url="https://pratapaditya.com/now"
      />

      <header className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-100">
          What I'm up to these days.
        </h1>
        <p className="font-mono text-sm text-slate-500">Updated January 2026</p>
      </header>

      <div className="animate-fade-in-up">
        {/* 1. LOCATION */}
        <Section icon={MapPin} title="Living in Bangalore">
          <p>
            I moved here in July 2025. Still exploring the city's parks, cafes,
            and infamous traffic. It feels like home now.
          </p>
        </Section>

        {/* 2. TECH */}
        <Section icon={Terminal} title="Tech">
          <div>
            <strong className="mb-1 block text-slate-200">
              Building at Google
            </strong>
            <p>
              I am working on <strong>Personalization in Search</strong>,
              specifically for AI Mode.
            </p>
          </div>

          <div>
            <strong className="mb-1 block text-slate-200">Tinkering</strong>
            <p>
              I am actively exploring the latest developments in AI and building
              experimental projects to test new ideas. You can find my code on
              <Link href="https://github.com/pratapaditya1997">GitHub</Link>.
            </p>
          </div>
        </Section>

        {/* 3. FITNESS */}
        <Section icon={Activity} title="Fitness">
          <div>
            <strong className="mb-1 block text-slate-200">Running</strong>
            <p>
              After finishing my first Half Marathon in December 2025, I am
              currently optimizing for speed over distance. Chasing new PBs in
              the 5k and 10k. Follow my training on{' '}
              <Link href="https://www.strava.com/athletes/96690326">
                Strava
              </Link>
              .
            </p>
          </div>

          <div>
            <strong className="mb-1 block text-slate-200">
              Strength Training
            </strong>
            <p>
              Now that the hand plaster is finally off, I am back in the gym.
              The goal is straightforward: regaining the muscle mass lost during
              recovery and building a stronger foundation.
            </p>
          </div>
        </Section>

        {/* 4. CONSUMPTION */}
        <Section icon={BookOpen} title="Reading & Watching">
          <div>
            <strong className="mb-1 block text-slate-200">Books</strong>
            <p>
              I recently finished <em>Early Indians</em> and{' '}
              <em>Freakonomics</em>. Next on my list is{' '}
              <em>How to Fail at Almost Everything and Still Win Big</em>. Check
              out my shelf on{' '}
              <Link href="https://www.goodreads.com/user/show/134880711-aditya-pratap-singh">
                Goodreads
              </Link>
              .
            </p>
          </div>

          <div>
            <strong className="mb-1 block text-slate-200">Watching</strong>
            <p>
              Currently watching <em>Explained</em> on Netflix. I am also
              planning to watch the <em>The Thinking Game</em> documentary on
              Demis Hassabis next.
            </p>
          </div>
        </Section>
      </div>

      <div className="mt-16 border-t border-slate-800 pt-8 text-sm text-slate-500 italic">
        <p>
          This is a "
          <a
            href="https://nownownow.com/about"
            target="_blank"
            className="underline hover:text-green-400"
            rel="noopener noreferrer"
          >
            now page
          </a>
          ", and you should make one too.
        </p>
      </div>
    </div>
  );
};

export default Now;
