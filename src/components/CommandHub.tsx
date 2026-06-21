'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  FlaskConical,
  Layers,
  Mail,
  Mic,
  Newspaper,
  Route,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';

interface HubItem {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const hubItems: HubItem[] = [
  {
    label: 'About',
    description: 'Who I am & what I work on',
    href: '#about',
    icon: Sparkles,
  },
  {
    label: 'Research',
    description: 'Focus areas & methods',
    href: '#research',
    icon: FlaskConical,
  },
  {
    label: 'Publications',
    description: 'Papers, preprints, talks',
    href: '#publications',
    icon: BookOpen,
  },
  {
    label: 'Timeline',
    description: 'School to PhD & beyond',
    href: '#timeline',
    icon: Route,
  },
  {
    label: 'Conferences',
    description: 'Talks, posters, memories',
    href: '#conferences',
    icon: Mic,
  },
  {
    label: 'Awards',
    description: 'Honors & recognitions',
    href: '#awards',
    icon: Award,
  },
  {
    label: 'Collaborate',
    description: 'People & partnerships',
    href: '#collaborations',
    icon: Users,
  },
  {
    label: 'News',
    description: 'Latest milestones',
    href: '#news',
    icon: Newspaper,
  },
  {
    label: 'Projects',
    description: 'What I\u2019m building now',
    href: '#dashboard',
    icon: Layers,
  },
  {
    label: 'Blog',
    description: 'Notes & writing',
    href: '/blog',
    icon: Calendar,
  },
  {
    label: 'Contact',
    description: 'Get in touch',
    href: '#contact',
    icon: Mail,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CommandHub() {
  return (
    <section className="hairline-rule">
      <div className="container-content py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>
            <span className="eyebrow">Explore</span>
            <h2 className="mt-2 font-display text-2xl text-ink dark:text-ink-dark sm:text-3xl">
              Jump to any part of my research life
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {hubItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col gap-3 rounded-md border border-hairline bg-surface p-5 transition-colors hover:border-accent dark:border-hairline-dark dark:bg-surface-dark dark:hover:border-accent-dark"
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-accent transition-transform duration-300 group-hover:scale-110 dark:text-accent-dark"
                />
                <div>
                  <p className="font-display text-base text-ink dark:text-ink-dark">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-ink-muted dark:text-ink-muted-dark">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
