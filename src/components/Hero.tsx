'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronDown, FileText } from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import profile from '@/data/profile.json';
import { withBasePath } from '@/lib/utils';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.09 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const textLinks = [
  { key: 'googleScholar', label: 'Google Scholar' },
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-masthead text-masthead-ink"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <MolecularBackground variant="masthead" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-masthead/10 via-transparent to-masthead" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="container-content relative w-full py-32"
      >
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-8 h-[3px] w-20 bg-accent-dark"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.26em] text-accent-dark"
          >
            {profile.currentPosition} &middot; {profile.institution}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 font-display leading-[0.96] tracking-tight text-masthead-ink"
            style={{ fontSize: 'clamp(3.25rem, 8.5vw, 7rem)' }}
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex items-start gap-5"
          >
            <span className="mt-3 h-px w-12 shrink-0 bg-masthead-line" />
            <p className="max-w-2xl font-display text-xl italic leading-relaxed text-masthead-ink/85 sm:text-2xl">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-7 max-w-2xl text-sm uppercase tracking-[0.16em] text-masthead-ink/50"
          >
            {profile.shortFocus}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4.4}
            className="mt-3 max-w-2xl text-sm leading-6 text-masthead-ink/50"
          >
            Incoming Ph.D. Student, {profile.futureInstitution}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {profile.social.cv && (
              <a
                href={withBasePath(profile.social.cv)}
                className="inline-flex items-center gap-2 border border-masthead-ink/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-masthead-ink transition-colors duration-300 hover:border-accent-dark hover:text-accent-dark"
              >
                <FileText size={15} strokeWidth={1.5} />
                Curriculum Vitae
              </a>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {textLinks.map(({ key, label }) => {
                const href = profile.social[key];
                if (!href) return null;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-sm text-masthead-ink/75 hover:text-accent-dark"
                  >
                    {label}
                    <ArrowUpRight size={12} />
                  </a>
                );
              })}
              <a
                href="#contact"
                className="link-underline text-sm text-masthead-ink/75 hover:text-accent-dark"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="h-px w-full bg-masthead-line" />
        <div className="mt-1 h-px w-full bg-masthead-line/40" />
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-masthead-ink/50 transition-colors hover:text-accent-dark sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.22em]">
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
