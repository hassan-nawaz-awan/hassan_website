'use client';

import { motion } from 'framer-motion';
import { Activity, Clock, FlaskConical, Newspaper } from 'lucide-react';
import dashboard from '@/data/dashboard.json';
import profile from '@/data/profile.json';
import publications from '@/data/publications.json';

function getStatusStyle(status: string) {
  const normalized = status.toLowerCase();

  if (normalized.includes('published') || normalized.includes('accepted')) {
    return 'border-emerald-500/15 bg-emerald-500/5 text-emerald-700 dark:border-emerald-400/15 dark:bg-emerald-400/5 dark:text-emerald-200';
  }

  if (normalized.includes('in progress') || normalized.includes('ongoing')) {
    return 'border-amber-500/15 bg-amber-500/5 text-amber-700 dark:border-amber-400/15 dark:bg-amber-400/5 dark:text-amber-200';
  }

  return 'border-hairline bg-canvas text-ink-muted dark:border-hairline-dark dark:bg-canvas-dark dark:text-ink-muted-dark';
}

export default function Dashboard() {
  const recentPubs = [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  return (
    <section id="dashboard" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">12 — Live Dashboard</span>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="section-heading mb-3">Research dashboard</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
              A concise view of current projects, publications, and updates.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Panel icon={FlaskConical} title="Active Projects">
              <ul className="space-y-3">
                {dashboard.activeProjects.map((p) => (
                  <li
                    key={p.id}
                    className="rounded-xl border border-hairline bg-canvas/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-canvas dark:border-hairline-dark dark:bg-canvas-dark/60 dark:hover:border-accent-dark/40 dark:hover:bg-canvas-dark"
                  >
                    <div className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium leading-snug text-ink dark:text-ink-dark">
                          {p.name}
                        </p>
                        {p.description && (
                          <p className="mt-1.5 text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                            {p.description}
                          </p>
                        )}
                      </div>
                      <span
                        className={`inline-flex max-w-[170px] whitespace-normal break-words rounded-full border px-2.5 py-1 text-center font-mono text-[10px] uppercase tracking-[0.16em] ${getStatusStyle(p.status)}`}
                      >
                        {p.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel icon={Activity} title="Current Research Interests">
              <div className="flex flex-wrap gap-2">
                {profile.researchInterests.slice(0, 7).map((interest) => (
                  <span key={interest} className="pill">
                    {interest}
                  </span>
                ))}
              </div>
            </Panel>

            <Panel icon={Newspaper} title="Recent Publications">
              <ul className="space-y-3">
                {recentPubs.map((p) => (
                  <li
                    key={p.id}
                    className="rounded-xl border border-hairline bg-canvas/50 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 dark:border-hairline-dark dark:bg-canvas-dark/50 dark:hover:border-accent-dark/40"
                  >
                    <p className="text-sm leading-snug text-ink dark:text-ink-dark">
                      {p.title}
                    </p>
                    <p className="mt-1 font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                      {p.venue} · {p.year}
                    </p>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel icon={Clock} title="Latest Updates">
              <ul className="space-y-3">
                {dashboard.latestUpdates.map((u) => (
                  <li key={u.id} className="flex gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                      {u.date}
                    </span>
                    <span className="leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                      {u.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}

function Panel({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-hairline bg-surface p-6 shadow-sm transition-shadow duration-300 dark:border-hairline-dark dark:bg-surface-dark"
    >
      <div className="mb-5 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/5 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
          <Icon size={16} strokeWidth={1.5} />
        </span>
        <h3 className="font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
          {title}
        </h3>
      </div>
      {children}
    </motion.div>
  );
}
