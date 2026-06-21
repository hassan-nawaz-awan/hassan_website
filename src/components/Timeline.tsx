'use client';

import { motion } from 'framer-motion';
import timeline from '@/data/timeline.json';
import { withBasePath } from '@/lib/utils';

const statusLabel: Record<string, string> = {
  complete: 'Completed',
  current: 'In progress',
  upcoming: 'Upcoming',
  future: 'Long-term',
};

export default function Timeline() {
  return (
    <section id="timeline" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">06 — Timeline</span>
        </div>

        <div>
          <h2 className="section-heading mb-14">Academic trajectory</h2>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline dark:bg-hairline-dark" />

            <ol className="space-y-12">
              {timeline.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative pl-8"
                >
                  <span
                    className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                      item.status === 'current'
                        ? 'border-accent bg-accent dark:border-accent-dark dark:bg-accent-dark'
                        : item.status === 'future'
                          ? 'border-hairline bg-canvas dark:border-hairline-dark dark:bg-canvas-dark'
                          : 'border-accent bg-canvas dark:border-accent-dark dark:bg-canvas-dark'
                    }`}
                  />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    {item.image && (
                      <div className="h-20 w-28 shrink-0 overflow-hidden rounded-sm border border-hairline dark:border-hairline-dark sm:order-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={withBasePath(item.image)}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    <div className="sm:order-1">
                      <p className="font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
                        {item.period} · {statusLabel[item.status]}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl text-ink dark:text-ink-dark">
                        {item.title}
                      </h3>
                      {item.institution && (
                        <p className="mt-1 text-sm font-medium text-accent dark:text-accent-dark">
                          {item.institution}
                        </p>
                      )}
                      {item.description && (
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
