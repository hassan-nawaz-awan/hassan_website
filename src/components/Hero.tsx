'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import profile from '@/data/profile.json';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline dark:border-hairline-dark">
      <MolecularBackground />

      <div className="container-content relative flex min-h-[88vh] flex-col justify-center py-28">
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
          className="max-w-3xl font-display text-5xl leading-[1.05] text-ink dark:text-ink-dark sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-xl font-display text-xl italic text-ink-muted dark:text-ink-muted-dark sm:text-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-4 max-w-2xl font-mono text-sm text-ink-muted dark:text-ink-muted-dark"
        >
          {profile.shortFocus}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3.4}
          className="mt-2 max-w-2xl text-sm text-ink-muted dark:text-ink-muted-dark"
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
          <a href={profile.social.cv} className="btn-primary">
            <FileText size={16} />
            Curriculum Vitae
          </a>
          <a
            href={profile.social.googleScholar}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Google Scholar
            <ArrowUpRight size={14} />
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
