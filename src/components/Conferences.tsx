'use client';

import { motion } from 'framer-motion';
import conferences from '@/data/conferences.json';
import { withBasePath } from '@/lib/utils';

export default function Conferences() {
  return (
    <section className="hairline-rule">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">10 — Conferences</span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline dark:border-hairline-dark dark:bg-hairline-dark sm:grid-cols-2">
          {conferences.map((conf, i) => (
            <motion.div
              key={conf.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-surface p-7 dark:bg-surface-dark"
            >
              <p className="font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                {conf.year} · {conf.role}
              </p>
              <h3 className="mt-2 font-display text-lg text-ink dark:text-ink-dark">
                {conf.name}
              </h3>
              <p className="mt-2 text-sm text-ink-muted dark:text-ink-muted-dark">
                {conf.description}
              </p>

              {conf.images && conf.images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {conf.images.slice(0, 6).map((src, idx) => (
                    <div
                      key={idx}
                      className="aspect-square overflow-hidden rounded-sm border border-hairline dark:border-hairline-dark"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={withBasePath(src)}
                        alt={`${conf.name} photo ${idx + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
