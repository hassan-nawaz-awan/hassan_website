'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, FileText, Github } from 'lucide-react';
import projects from '@/data/featured-project.json';

export default function FeaturedProject() {
  return (
    <section className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">04 — Flagship Project</span>
        </div>

        <div>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            Selected highlights from the most ambitious research directions.
          </p>

          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-hairline-dark dark:bg-surface-dark"
              >
                <div className="grid items-stretch lg:grid-cols-[1.15fr_0.95fr]">
                  <div className="p-8 sm:p-10">
                    <p className="eyebrow">{project.subtitle}</p>
                    <h3 className="mt-3 font-display text-3xl text-ink dark:text-ink-dark sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                      {project.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.links.paper && (
                        <a
                          href={project.links.paper}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          <FileText size={16} />
                          Paper
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="relative min-h-[320px] overflow-hidden border-t border-hairline bg-gradient-to-br from-canvas via-canvas to-canvas/80 dark:border-hairline-dark dark:from-canvas-dark dark:via-canvas-dark dark:to-canvas-dark/80 lg:border-l lg:border-t-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,112,255,0.08),transparent_25%)]" />
                    <ProjectGraphic />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectGraphic() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="relative z-10 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="graphGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect x="30" y="26" width="340" height="268" rx="18" fill="url(#graphGlow)" />
      <g
        className="text-accent dark:text-accent-dark"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.2"
      >
        <circle cx="120" cy="120" r="36" opacity="0.8" />
        <circle cx="240" cy="90" r="22" opacity="0.6" />
        <circle cx="270" cy="200" r="48" opacity="0.5" />
        <circle cx="150" cy="230" r="16" opacity="0.7" />
        <line x1="120" y1="120" x2="240" y2="90" opacity="0.43" />
        <line x1="120" y1="120" x2="150" y2="230" opacity="0.43" />
        <line x1="240" y1="90" x2="270" y2="200" opacity="0.43" />
        <line x1="270" y1="200" x2="150" y2="230" opacity="0.43" />
      </g>
      <g
        className="text-ember dark:text-ember-dark"
        fill="currentColor"
        opacity="0.88"
      >
        <circle cx="120" cy="120" r="3.5" />
        <circle cx="240" cy="90" r="3.5" />
        <circle cx="270" cy="200" r="3.5" />
        <circle cx="150" cy="230" r="3.5" />
      </g>
      <text
        x="50%"
        y="92%"
        textAnchor="middle"
        className="fill-ink-muted dark:fill-ink-muted-dark font-mono"
        style={{ fontSize: '10px', letterSpacing: '0.08em' }}
      >
        workflow graph — illustrative
      </text>
    </svg>
  );
}
