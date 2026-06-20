'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, FileText, Github } from 'lucide-react';
import project from '@/data/featured-project.json';

export default function FeaturedProject() {
  return (
    <section className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">03 — Flagship Project</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="card overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-8 sm:p-10">
              <p className="eyebrow">{project.subtitle}</p>
              <h3 className="mt-3 font-display text-3xl text-ink dark:text-ink-dark sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                {project.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm text-ink-muted dark:text-ink-muted-dark"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Github size={16} />
                  GitHub
                </a>
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

            <div className="relative min-h-[280px] border-t border-hairline bg-canvas dark:border-hairline-dark dark:bg-canvas-dark lg:border-l lg:border-t-0">
              <ProjectGraphic />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectGraphic() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <g
        className="text-accent dark:text-accent-dark"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
      >
        <circle cx="120" cy="120" r="34" opacity="0.8" />
        <circle cx="240" cy="90" r="20" opacity="0.6" />
        <circle cx="270" cy="200" r="44" opacity="0.5" />
        <circle cx="150" cy="230" r="14" opacity="0.7" />
        <line x1="120" y1="120" x2="240" y2="90" opacity="0.4" />
        <line x1="120" y1="120" x2="150" y2="230" opacity="0.4" />
        <line x1="240" y1="90" x2="270" y2="200" opacity="0.4" />
        <line x1="270" y1="200" x2="150" y2="230" opacity="0.4" />
      </g>
      <g
        className="text-ember dark:text-ember-dark"
        fill="currentColor"
        opacity="0.85"
      >
        <circle cx="120" cy="120" r="3" />
        <circle cx="240" cy="90" r="3" />
        <circle cx="270" cy="200" r="3" />
        <circle cx="150" cy="230" r="3" />
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
