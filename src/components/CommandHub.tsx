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
      <div className="container-content py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-6 eyebrow"
        >
          On this page
        </motion.div>

        <nav aria-label="Section index">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {hubItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <a
                    href={item.href}
                    className="link-underline group inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent dark:text-ink-muted-dark dark:hover:text-accent-dark"
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.5}
                      className="text-accent/70 dark:text-accent-dark/70"
                    />
                    {item.label}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
