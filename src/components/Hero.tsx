'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronDown, FileText } from 'lucide-react';
import profile from '@/data/profile.json';
import { withBasePath } from '@/lib/utils';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
};

const textLinks = [
  { key: 'googleScholar', label: 'Google Scholar' },
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
] as const;

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1400 900"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Blue glow — left basin */}
          <radialGradient id="hg-blue1" cx="30%" cy="44%" r="42%">
            <stop offset="0%" stopColor="#2563D0" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#1C4A96" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1C4A96" stopOpacity="0" />
          </radialGradient>
          {/* Gold glow — right basin */}
          <radialGradient id="hg-gold1" cx="72%" cy="64%" r="38%">
            <stop offset="0%" stopColor="#F0C54A" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#9B7520" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#9B7520" stopOpacity="0" />
          </radialGradient>
          {/* Subtle center brightening */}
          <radialGradient id="hg-center" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#1A3060" stopOpacity="0.40" />
            <stop offset="100%" stopColor="#060910" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow fills */}
        <rect width="1400" height="900" fill="url(#hg-blue1)" />
        <rect width="1400" height="900" fill="url(#hg-gold1)" />
        <rect width="1400" height="900" fill="url(#hg-center)" />

        {/* Stars / particles — denser on right to avoid text overlap */}
        <g fill="#DCE8F8">
          <circle cx="82" cy="130" r="0.9" opacity="0.35" />
          <circle cx="190" cy="62" r="1.1" opacity="0.28" />
          <circle cx="460" cy="95" r="0.7" opacity="0.32" />
          <circle cx="530" cy="780" r="0.8" opacity="0.30" />
          <circle cx="620" cy="48" r="0.9" opacity="0.40" />
          <circle cx="700" cy="820" r="1.0" opacity="0.28" />
          <circle cx="780" cy="40" r="0.8" opacity="0.45" />
          <circle cx="855" cy="105" r="1.2" opacity="0.55" />
          <circle cx="940" cy="170" r="0.9" opacity="0.50" />
          <circle cx="1010" cy="65" r="1.1" opacity="0.60" />
          <circle cx="1075" cy="200" r="0.8" opacity="0.45" />
          <circle cx="1140" cy="88" r="1.3" opacity="0.55" />
          <circle cx="1210" cy="155" r="0.9" opacity="0.50" />
          <circle cx="1280" cy="70" r="1.0" opacity="0.42" />
          <circle cx="1340" cy="240" r="0.7" opacity="0.48" />
          <circle cx="1380" cy="120" r="1.1" opacity="0.38" />
          <circle cx="830" cy="760" r="1.0" opacity="0.35" />
          <circle cx="950" cy="820" r="0.8" opacity="0.32" />
          <circle cx="1080" cy="840" r="1.1" opacity="0.38" />
          <circle cx="1200" cy="790" r="0.9" opacity="0.30" />
          <circle cx="1320" cy="700" r="0.7" opacity="0.28" />
          <circle cx="1360" cy="580" r="1.0" opacity="0.35" />
          <circle cx="1390" cy="420" r="0.8" opacity="0.40" />
        </g>

        {/* ── Blue basin (left-center) — vivid sapphire contours ── */}
        <g stroke="#4B8FE8" fill="none">
          <path d="M315,205 C200,242 162,342 192,428 C222,514 335,550 432,517 C529,484 564,382 524,302 C484,222 430,168 315,205 Z"
            strokeWidth="1.4" opacity="0.80" />
          <path d="M326,234 C232,262 206,348 228,418 C250,488 334,512 413,488 C492,464 518,380 490,314 C462,248 420,206 326,234 Z"
            strokeWidth="1.2" opacity="0.62" />
          <path d="M338,262 C268,280 248,346 265,397 C282,448 340,464 394,445 C448,426 466,370 446,322 C426,274 408,244 338,262 Z"
            strokeWidth="1.0" opacity="0.48" />
          <path d="M351,288 C308,300 294,342 306,373 C318,404 357,415 389,403 C421,391 431,354 416,326 C401,298 394,276 351,288 Z"
            strokeWidth="0.9" opacity="0.36" />
          {/* Core dot */}
          <circle cx="368" cy="344" r="5.5" fill="#4B8FE8" stroke="none" opacity="0.90" />
          <circle cx="368" cy="344" r="2.2" fill="#93C5FD" stroke="none" opacity="1" />
        </g>

        {/* Pulsing aura — blue minimum */}
        <circle cx="368" cy="344" r="26" fill="#2563D0" opacity="0.07">
          <animate attributeName="r" values="18;32;18" dur="4.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.09;0.03;0.09" dur="4.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="368" cy="344" r="52" fill="#1C4A96" opacity="0.04">
          <animate attributeName="r" values="40;62;40" dur="4.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.05;0.015;0.05" dur="4.2s" repeatCount="indefinite" />
        </circle>

        {/* ── Gold basin (right) — warm amber contours ── */}
        <g stroke="#E8B840" fill="none">
          <path d="M895,435 C778,458 720,558 754,648 C788,738 908,765 1002,728 C1096,691 1126,582 1082,494 C1038,406 1012,412 895,435 Z"
            strokeWidth="1.4" opacity="0.72" />
          <path d="M905,462 C808,480 766,568 790,642 C814,716 908,736 985,709 C1062,682 1086,596 1050,524 C1014,452 1002,444 905,462 Z"
            strokeWidth="1.2" opacity="0.56" />
          <path d="M916,488 C842,502 812,568 830,624 C848,680 916,697 975,676 C1034,655 1052,584 1026,532 C1000,480 990,474 916,488 Z"
            strokeWidth="1.0" opacity="0.43" />
          <path d="M926,510 C874,520 852,563 864,598 C876,633 918,646 955,632 C992,618 1004,573 988,542 C972,511 978,500 926,510 Z"
            strokeWidth="0.9" opacity="0.32" />
          {/* Core dot */}
          <circle cx="942" cy="572" r="7" fill="#E8B840" stroke="none" opacity="0.82" />
          <circle cx="942" cy="572" r="2.8" fill="#FDE68A" stroke="none" opacity="1" />
        </g>

        {/* Pulsing aura — gold minimum */}
        <circle cx="942" cy="572" r="32" fill="#F0C54A" opacity="0.05">
          <animate attributeName="r" values="22;40;22" dur="5.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.07;0.02;0.07" dur="5.2s" repeatCount="indefinite" />
        </circle>

        {/* Saddle / reaction path connecting the two minima */}
        <path
          d="M378,348 C465,368 570,422 638,462 C706,502 800,542 936,568"
          stroke="#7EB8FF"
          strokeWidth="1.3"
          strokeDasharray="3 9"
          opacity="0.45"
          fill="none"
        />

        {/* Outer faint field contours */}
        <g fill="none" strokeWidth="0.65">
          <path
            d="M178,138 C58,196 -2,336 58,462 C118,588 268,642 404,600 C540,558 614,442 574,322 C534,202 434,138 294,136 C260,136 216,126 178,138 Z"
            stroke="#4B8FE8"
            opacity="0.16"
          />
          <path
            d="M836,368 C698,406 638,548 694,668 C750,788 910,828 1026,784 C1142,740 1190,600 1136,480 C1082,360 972,332 836,368 Z"
            stroke="#E8B840"
            opacity="0.14"
          />
        </g>

        {/* Extra fine nodes along saddle path */}
        <g fill="#7EB8FF" opacity="0.55">
          <circle cx="520" cy="430" r="2.0" />
          <circle cx="680" cy="498" r="2.0" />
          <circle cx="820" cy="545" r="2.0" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-masthead text-masthead-ink"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <HeroBackground />
      </motion.div>
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-masthead/80 pointer-events-none" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="container-content relative w-full py-32"
      >
        <div className="max-w-4xl">

          {/* Accent bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-[2px] w-12 bg-accent-dark opacity-80" />
            <span className="h-[2px] w-4 bg-ember-dark opacity-50" />
          </motion.div>

          {/* Position & institution */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-dark/80"
          >
            {profile.currentPosition} &middot; {profile.institution}
          </motion.p>

          {/* Name — gradient text */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 font-display leading-[0.94] tracking-tight"
            style={{
              fontSize: 'clamp(3.4rem, 9vw, 7.5rem)',
              backgroundImage:
                'linear-gradient(135deg, #DCE8F8 0%, #93C5FD 38%, #E8C56A 72%, #F0C54A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {profile.name}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex items-start gap-5"
          >
            <span className="mt-3.5 h-px w-10 shrink-0 bg-accent-dark/40" />
            <p className="max-w-xl font-display text-xl italic leading-relaxed text-masthead-ink/80 sm:text-2xl">
              {profile.tagline}
            </p>
          </motion.div>

          {/* Focus line */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-7 max-w-2xl font-sans text-[11px] uppercase tracking-[0.22em] text-masthead-ink/45"
          >
            {profile.shortFocus}
          </motion.p>

          {/* Incoming PhD */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4.4}
            className="mt-2.5 max-w-2xl text-sm leading-relaxed text-masthead-ink/45"
          >
            Incoming Ph.D. Student, {profile.futureInstitution}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            {profile.social.cv && (
              <a
                href={withBasePath(profile.social.cv)}
                className="inline-flex items-center gap-2.5 border border-masthead-ink/50 px-7 py-3 text-sm font-semibold uppercase tracking-[0.10em] text-masthead-ink transition-all duration-300 hover:border-accent-dark hover:text-accent-dark hover:bg-accent-dark/5"
              >
                <FileText size={14} strokeWidth={1.5} />
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
                    className="inline-flex items-center gap-1 text-sm text-masthead-ink/60 transition-colors hover:text-accent-dark"
                  >
                    {label}
                    <ArrowUpRight size={11} />
                  </a>
                );
              })}
              <a
                href="#contact"
                className="text-sm text-masthead-ink/60 transition-colors hover:text-accent-dark"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom double rule */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <div className="h-px w-full bg-masthead-line" />
        <div className="mt-[3px] h-px w-full bg-masthead-line/35" />
      </div>

      {/* Scroll prompt */}
      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-masthead-ink/40 transition-colors hover:text-accent-dark sm:flex"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.24em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  );
}
