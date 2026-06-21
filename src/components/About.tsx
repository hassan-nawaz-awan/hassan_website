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

        <div className="max-w-3xl">
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
              <div className="aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-md border border-hairline dark:border-hairline-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(profile.photo)}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="space-y-5 text-[17px] leading-relaxed text-ink-muted dark:text-ink-muted-dark">
              {profile.about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 border-l-2 border-accent dark:border-accent-dark pl-5"
          >
            <p className="font-display italic text-lg text-ink dark:text-ink-dark">
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
