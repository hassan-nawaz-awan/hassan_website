'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import awards from '@/data/awards.json';
import { withBasePath } from '@/lib/utils';

export default function Awards() {
  return (
    <section id="awards" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">09 — Awards</span>
        </div>

        <ul className="space-y-6">
          {awards.map((award, i) => (
            <motion.li
              key={award.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-4"
            >
              {award.image ? (
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-sm border border-hairline dark:border-hairline-dark">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBasePath(award.image)}
                    alt={award.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <Award
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-ember dark:text-ember-dark"
                />
              )}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-lg text-ink dark:text-ink-dark">
                    {award.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                    {award.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-muted dark:text-ink-muted-dark">
                  {award.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
