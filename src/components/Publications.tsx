'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Search } from 'lucide-react';
import publications from '@/data/publications.json';

type PubType = 'all' | 'journal' | 'preprint' | 'conference';

const filters: { label: string; value: PubType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Journal', value: 'journal' },
  { label: 'Preprints', value: 'preprint' },
  { label: 'Conference', value: 'conference' },
];

export default function Publications() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<PubType>('all');

  const filtered = useMemo(() => {
    return publications
      .filter((p) => !p.hidden)
      .filter((p) => (type === 'all' ? true : p.type === type))
      .filter((p) => {
        if (!query.trim()) return true;
        const haystack =
          `${p.title} ${p.authors.join(' ')} ${p.venue} ${p.tags.join(' ')}`.toLowerCase();
        return haystack.includes(query.toLowerCase());
      })
      .sort((a, b) => b.year - a.year);
  }, [query, type]);

  const featuredPub = filtered[0];

  return (
    <section id="publications" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">05 — Publications</span>
        </div>

        <div>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="section-heading">Selected publications</h2>
              <p className="mt-2 text-sm text-ink-muted dark:text-ink-muted-dark">
                Representative work in machine learning, chemistry, and scientific computing.
              </p>
            </div>

            <div className="relative">
              <Search
                size={14}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted dark:text-ink-muted-dark"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search publications…"
                className="w-full rounded-full border border-hairline bg-surface py-2 pl-9 pr-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent dark:border-hairline-dark dark:bg-surface-dark dark:text-ink-dark dark:placeholder:text-ink-muted-dark sm:w-64"
              />
            </div>
          </div>

          {featuredPub && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="mb-8 rounded-2xl border border-accent/15 bg-accent/5 p-6 dark:border-accent-dark/15 dark:bg-accent-dark/5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent dark:text-accent-dark">
                    Featured paper
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink dark:text-ink-dark">
                    {featuredPub.title}
                  </h3>
                </div>
                <span className="pill">{featuredPub.type}</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted dark:text-ink-muted-dark">
                {featuredPub.authors.join(', ')} · {featuredPub.year}
              </p>
              <p className="mt-2 text-sm italic text-ink-muted dark:text-ink-muted-dark">
                {featuredPub.venue}
              </p>
              <div className="mt-4 flex gap-4">
                {featuredPub.doi && (
                  <a
                    href={`https://doi.org/${featuredPub.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent dark:text-accent-dark"
                  >
                    DOI <ExternalLink size={11} />
                  </a>
                )}
                {featuredPub.pdf && (
                  <a
                    href={featuredPub.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent dark:text-accent-dark"
                  >
                    <FileText size={11} /> PDF
                  </a>
                )}
              </div>
            </motion.div>
          )}

          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setType(f.value)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
                  type === f.value
                    ? 'border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-canvas-dark'
                    : 'border-hairline text-ink-muted hover:border-accent hover:text-accent dark:border-hairline-dark dark:text-ink-muted-dark dark:hover:border-accent-dark dark:hover:text-accent-dark'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-sm text-ink-muted dark:text-ink-muted-dark">
              No publications match that search yet.
            </p>
          ) : (
            <ul className="space-y-4">
              {filtered.map((pub, i) => (
                <motion.li
                  key={pub.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.05 }}
                  className="rounded-2xl border border-hairline bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-hairline-dark dark:bg-surface-dark"
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="font-display text-lg text-ink dark:text-ink-dark">
                        {pub.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-ink-muted dark:text-ink-muted-dark">
                        {pub.authors.join(', ')}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                      {pub.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm italic text-ink-muted dark:text-ink-muted-dark">
                    {pub.venue}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="pill">{pub.type}</span>
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-ink-muted dark:text-ink-muted-dark"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent dark:text-accent-dark"
                      >
                        DOI <ExternalLink size={11} />
                      </a>
                    )}
                    {pub.pdf && (
                      <a
                        href={pub.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent dark:text-accent-dark"
                      >
                        <FileText size={11} /> PDF
                      </a>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
