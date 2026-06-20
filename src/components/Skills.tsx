'use client';

import { motion } from 'framer-motion';
import skills from '@/data/skills.json';

export default function Skills() {
  return (
    <section className="hairline-rule">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">07 — Skills & Tools</span>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-hairline px-3 py-1.5 text-sm text-ink dark:border-hairline-dark dark:text-ink-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
