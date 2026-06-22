'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import news from '@/data/news.json';
import { withBasePath } from '@/lib/utils';

export default function News() {
  const sorted = news
    .filter((item) => !item.hidden)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section id="news" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">02 — News</span>
        </div>

        <div>
          <h2 className="section-heading mb-12">Latest updates</h2>

          {sorted.length === 0 ? (
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
              No updates yet — check back soon.
            </p>
          ) : (
          <ul className="space-y-8">
            {sorted.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.05 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-start"
              >
                {item.image && (
                  <div className="h-20 w-28 shrink-0 overflow-hidden rounded-sm border border-hairline dark:border-hairline-dark">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBasePath(item.image)}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-sans text-xs text-ink-muted dark:text-ink-muted-dark">
                      {item.date}
                    </span>
                    <span className="pill">{item.tag}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl text-ink dark:text-ink-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs text-accent dark:text-accent-dark"
                    >
                      Read more <ArrowUpRight size={11} />
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
