'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import profile from '@/data/profile.json';
import { withBasePath } from '@/lib/utils';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-hairline bg-hero-fade dark:border-hairline-dark dark:bg-slate-950/90"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <MolecularBackground />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-content relative grid min-h-[88vh] gap-12 py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
      >
        <div className="pointer-events-none absolute inset-x-0 top-6 hidden h-72 overflow-hidden lg:block">
          <div className="absolute left-[12%] top-0 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
        </div>
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow mb-6"
          >
            {profile.currentPosition} · {profile.institution}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="max-w-3xl font-display text-5xl leading-[1.02] text-ink dark:text-ink-dark sm:text-6xl lg:text-[5.25rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-ink-muted dark:text-ink-muted-dark sm:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-4 max-w-2xl font-mono text-sm leading-6 text-ink-muted dark:text-ink-muted-dark"
          >
            {profile.shortFocus}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3.4}
            className="mt-2 max-w-2xl text-sm leading-6 text-ink-muted dark:text-ink-muted-dark"
          >
            Incoming Ph.D. Student, {profile.futureInstitution}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {profile.social.cv && (
              <a href={withBasePath(profile.social.cv)} className="btn-primary">
                <FileText size={16} />
                Curriculum Vitae
              </a>
            )}
            {profile.social.googleScholar && (
              <a
                href={profile.social.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Google Scholar
                <ArrowUpRight size={14} />
              </a>
            )}
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            )}
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-8 flex flex-wrap gap-2"
          >
            {profile.researchInterests.slice(0, 4).map((interest) => (
              <span key={interest} className="pill">
                {interest}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4.5}
          className="hidden lg:block"
        >
          <div className="ml-auto max-w-md rounded-2xl border border-hairline bg-surface/85 p-8 shadow-sm backdrop-blur dark:border-hairline-dark dark:bg-surface-dark/80">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent dark:text-accent-dark">
              Research Snapshot
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm text-ink-muted dark:text-ink-muted-dark">Core themes</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {profile.researchInterests.slice(0, 3).map((interest) => (
                    <span key={interest} className="pill">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-hairline bg-canvas/50 p-4 dark:border-hairline-dark dark:bg-canvas-dark/50">
                <p className="text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                  Currently building machine learning potentials and AI agents that accelerate molecular discovery, advised by Prof. Pavlo Dral.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-ink-muted dark:text-ink-muted-dark sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
