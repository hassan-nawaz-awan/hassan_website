'use client';

import { motion } from 'framer-motion';
import profile from '@/data/profile.json';
import { withBasePath } from '@/lib/utils';

export default function About() {
  return (
    <section id="about" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">01 — About</span>
        </div>

        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-10"
          >
            Researching where chemistry meets machine learning.
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-[200px_1fr] sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-sm border border-hairline bg-surface shadow-card dark:border-hairline-dark dark:bg-surface-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(profile.photo)}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="space-y-5 text-[18px] leading-8 text-ink-muted dark:text-ink-muted-dark">
              {profile.about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={i === 0 ? 'drop-cap' : undefined}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: 'Research focus',
                value: 'AI for molecular discovery',
              },
              {
                label: 'Approach',
                value: 'Interpretable, data-driven models',
              },
              {
                label: 'Vision',
                value: 'Open, collaborative science',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-sm border border-hairline bg-surface p-6 shadow-sm dark:border-hairline-dark dark:bg-surface-dark"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-muted dark:text-ink-muted-dark">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink dark:text-ink-dark">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 rounded-none border-l-4 border-accent bg-accent/10 p-6 dark:border-accent-dark dark:bg-accent-dark/10"
          >
            <p className="font-display text-lg italic text-ink dark:text-ink-dark">
              &ldquo;{profile.careerGoal}&rdquo;
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {profile.researchInterests.map((interest) => (
              <span key={interest} className="pill">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
