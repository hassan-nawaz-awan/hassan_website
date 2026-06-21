'use client';

import { motion } from 'framer-motion';
import { Activity, Clock, FlaskConical, Newspaper } from 'lucide-react';
import dashboard from '@/data/dashboard.json';
import profile from '@/data/profile.json';
import publications from '@/data/publications.json';

export default function Dashboard() {
  const recentPubs = [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  return (
    <section className="hairline-rule">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">12 — Live Dashboard</span>
        </div>

        <div>
          <h2 className="section-heading mb-3">Research dashboard</h2>
          <p className="mb-12 max-w-xl text-sm text-ink-muted dark:text-ink-muted-dark">
            A running snapshot of what I&rsquo;m working on, pulled from the
            same editable data files that power the rest of this site.
          </p>

          <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline dark:border-hairline-dark dark:bg-hairline-dark md:grid-cols-2">
            <Panel icon={FlaskConical} title="Active Projects">
              <ul className="space-y-4">
                {dashboard.activeProjects.map((p) => (
                  <li key={p.id}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-medium text-ink dark:text-ink-dark">
                        {p.name}
                      </p>
                      <span className="pill shrink-0">{p.status}</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                      {p.description}
                    </p>
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
                  <li key={p.id}>
                    <p className="text-sm text-ink dark:text-ink-dark">
                      {p.title}
                    </p>
                    <p className="font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
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
                    <span className="shrink-0 font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                      {u.date}
                    </span>
                    <span className="text-ink-muted dark:text-ink-muted-dark">
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
      className="bg-surface p-7 dark:bg-surface-dark"
    >
      <div className="mb-5 flex items-center gap-2.5">
        <Icon
          size={16}
          strokeWidth={1.5}
          className="text-accent dark:text-accent-dark"
        />
        <h3 className="font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
          {title}
        </h3>
      </div>
      {children}
    </motion.div>
  );
}
