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

const isPlaceholderPublication = (pub: (typeof publications)[number]) => {
  const title = pub.title.toLowerCase();
  const venue = pub.venue.toLowerCase();

  return (
    Boolean((pub as { isPlaceholder?: boolean }).isPlaceholder) ||
    title.startsWith('placeholder') ||
    venue.includes('placeholder')
  );
};

export default function Publications() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<PubType>('all');

  const filtered = useMemo(() => {
    return publications
      .filter((p) => !isPlaceholderPublication(p))
      .filter((p) => (type === 'all' ? true : p.type === type))
      .filter((p) => {
        if (!query.trim()) return true;
        const haystack =
          `${p.title} ${p.authors.join(' ')} ${p.venue} ${p.tags.join(' ')}`.toLowerCase();
        return haystack.includes(query.toLowerCase());
      })
      .sort((a, b) => b.year - a.year);
  }, [query, type]);

  return (
    <section id="publications" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">05 — Publications</span>
        </div>

        <div>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="section-heading">Selected publications</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
                  className="w-full rounded-sm border border-hairline bg-surface py-2 pl-9 pr-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent dark:border-hairline-dark dark:bg-surface-dark dark:text-ink-dark dark:placeholder:text-ink-muted-dark sm:w-56"
                />
              </div>
            </div>
          </div>

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
            <ul className="divide-y divide-hairline dark:divide-hairline-dark">
              {filtered.map((pub, i) => (
                <motion.li
                  key={pub.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.05 }}
                  className="py-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg text-ink dark:text-ink-dark">
                      {pub.title}
                    </h3>
                    <span className="font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                      {pub.year}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-ink-muted dark:text-ink-muted-dark">
                    {pub.authors.join(', ')}
                  </p>
                  <p className="mt-1 text-sm italic text-ink-muted dark:text-ink-muted-dark">
                    {pub.venue}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
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

                  <div className="mt-3 flex gap-4">
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
