'use client';

import { motion } from 'framer-motion';
import { Atom, Bot, Network, Sparkles, type LucideIcon } from 'lucide-react';
import researchAreas from '@/data/research-areas.json';

const iconMap: Record<string, LucideIcon> = {
  network: Network,
  atom: Atom,
  bot: Bot,
  sparkles: Sparkles,
};

export default function ResearchOverview() {
  return (
    <section id="research" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">03 — Research</span>
        </div>

        <div>
          <h2 className="section-heading mb-12 max-w-xl">
            Four threads, one question: how should a machine learn
            chemistry?
          </h2>

          <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline dark:border-hairline-dark dark:bg-hairline-dark sm:grid-cols-2">
            {researchAreas.map((area, i) => {
              const Icon = iconMap[area.icon] ?? Atom;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group bg-surface p-8 transition-colors hover:bg-canvas dark:bg-surface-dark dark:hover:bg-canvas-dark"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-accent dark:text-accent-dark"
                  />
                  <h3 className="mt-5 font-display text-xl text-ink dark:text-ink-dark">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
