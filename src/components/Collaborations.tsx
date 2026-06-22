'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Handshake, Mail } from 'lucide-react';
import collaborations from '@/data/collaborations.json';
import { withBasePath } from '@/lib/utils';

export default function Collaborations() {
  return (
    <section id="collaborations" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">11 — Collaborations</span>
        </div>

        <div>
          <h2 className="section-heading mb-5">Working together</h2>
          <p className="mb-12 max-w-xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            {collaborations.intro}
          </p>

          <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline dark:border-hairline-dark dark:bg-hairline-dark sm:grid-cols-2">
            {collaborations.collaborators.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-4 bg-surface p-7 dark:bg-surface-dark"
              >
                {c.image ? (
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm border border-hairline dark:border-hairline-dark">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBasePath(c.image)}
                      alt={c.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-hairline text-accent dark:border-hairline-dark dark:text-accent-dark">
                    <Handshake size={20} strokeWidth={1.5} />
                  </div>
                )}

                <div>
                  <h3 className="font-display text-lg text-ink dark:text-ink-dark">
                    {c.name}
                  </h3>
                  <p className="text-xs font-sans uppercase tracking-wide text-accent dark:text-accent-dark">
                    {c.role}
                    {c.institution ? ` · ${c.institution}` : ''}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                    {c.description}
                  </p>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs text-accent dark:text-accent-dark"
                    >
                      Visit <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-between gap-4 border-l-2 border-accent bg-surface px-6 py-5 dark:border-accent-dark dark:bg-surface-dark"
          >
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
              Interested in collaborating? I&rsquo;d love to hear from you.
            </p>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
