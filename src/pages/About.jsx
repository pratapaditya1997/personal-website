import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="mx-auto max-w-3xl pt-4">
      <SEO
        title="About Me"
        description="My journey from IIT to Google, and my philosophy on engineering and life."
        url="https://pratapaditya.com/about"
      />
      <h1 className="mb-8 flex items-center gap-3 text-3xl font-bold text-slate-100">
        About Me <span className="text-3xl">👋</span>
      </h1>

      <div className="prose prose-invert prose-lg leading-relaxed text-slate-300">
        <p className="mb-6">
          I am <strong>Aditya Pratap Singh</strong>.
        </p>

        <p className="mb-6">
          I am a{' '}
          <span className="font-semibold text-green-400">
            Senior Software Engineer
          </span>{' '}
          at <span className="font-semibold text-green-400">Google</span> by
          profession. Currently, I am working on the <strong>AI Mode</strong>{' '}
          product in <strong>Google Search</strong>. Before this, I used to work
          on the <strong>GPay India</strong> product.
        </p>

        <p className="mb-6">
          Work keeps me occupied and interested in the latest AI trends. Other
          than work, I like to read up on{' '}
          <span className="font-medium text-slate-100">Hindustani Poetry</span>,
          <span className="font-medium text-slate-100"> Sports</span>, and
          <span className="font-medium text-slate-100"> Philosophy</span>. You
          might find me writing articles around these topics on this website.
        </p>

        <p className="mb-6">
          Thanks for checking out my website. Have a great day 🤗
        </p>
      </div>
    </div>
  );
}
