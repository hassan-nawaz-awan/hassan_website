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
                className="card overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
