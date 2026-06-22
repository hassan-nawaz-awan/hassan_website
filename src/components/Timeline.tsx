'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import timeline from '@/data/timeline.json';
import { withBasePath } from '@/lib/utils';
import Lightbox, { type GalleryImage } from './Lightbox';

const statusLabel: Record<string, string> = {
  complete: 'Completed',
  current: 'In progress',
  upcoming: 'Upcoming',
  future: 'Long-term',
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });
  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });

  const [activeGallery, setActiveGallery] = useState<GalleryImage[] | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openGallery = (images: GalleryImage[], index: number) => {
    setActiveGallery(images);
    setActiveIndex(index);
  };

  return (
    <section id="timeline" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">06 — Timeline</span>
        </div>

        <div ref={containerRef}>
          <h2 className="section-heading mb-3">Academic trajectory</h2>
          <p className="mb-14 max-w-xl text-sm text-ink-muted dark:text-ink-muted-dark">
            From school to where I&rsquo;m headed next — with a few photos
            along the way.
          </p>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline dark:bg-hairline-dark" />
            <motion.div
              className="absolute left-[7px] top-2 w-px origin-top bg-accent dark:bg-accent-dark"
              style={{ scaleY: pathProgress, height: 'calc(100% - 1rem)' }}
            />

            <ol className="space-y-16">
              {timeline.map((item, i) => {
                const gallery: GalleryImage[] = item.gallery || [];

                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: i * 0.05 }}
                    className="relative pl-8"
                  >
                    <motion.span
                      initial={{ scale: 0.6 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.4, delay: i * 0.05 + 0.1 }}
                      className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                        item.status === 'current'
                          ? 'border-accent bg-accent dark:border-accent-dark dark:bg-accent-dark'
                          : item.status === 'future'
                            ? 'border-hairline bg-canvas dark:border-hairline-dark dark:bg-canvas-dark'
                            : 'border-accent bg-canvas dark:border-accent-dark dark:bg-canvas-dark'
                      }`}
                    />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      {item.image && (
                        <div className="h-20 w-28 shrink-0 overflow-hidden rounded-sm border border-hairline dark:border-hairline-dark sm:order-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={withBasePath(item.image)}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="sm:order-1">
                        <p className="font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
                          {item.period} · {statusLabel[item.status]}
                        </p>
                        <h3 className="mt-1.5 font-display text-xl text-ink dark:text-ink-dark">
                          {item.title}
                        </h3>
                        {item.institution && (
                          <p className="mt-1 text-sm font-medium text-accent dark:text-accent-dark">
                            {item.institution}
                          </p>
                        )}
                        {item.description && (
                          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                            {item.description}
                          </p>
                        )}

                        <div className="mt-3 space-y-1">
                          {item.supervisor && item.supervisor !== '--' && (
                            <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
                              <span className="font-medium text-ink dark:text-ink-dark">
                                Supervisor:
                              </span>{' '}
                              {item.supervisor}
                            </p>
                          )}
                          {item.thesisTitle && item.thesisTitle !== '--' && (
                            <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
                              <span className="font-medium text-ink dark:text-ink-dark">
                                Thesis title:
                              </span>{' '}
                              {item.thesisTitle}
                            </p>
                          )}
                          {item.grade && item.grade !== '--' && (
                            <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
                              <span className="font-medium text-ink dark:text-ink-dark">
                                Grade obtained:
                              </span>{' '}
                              {item.grade}
                            </p>
                          )}
                        </div>

                        {gallery.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {gallery.map((img, idx) => (
                              <motion.button
                                key={img.src}
                                type="button"
                                whileHover={{ y: -2 }}
                                onClick={() => openGallery(gallery, idx)}
                                className="h-16 w-16 overflow-hidden rounded-sm border border-hairline transition-colors hover:border-accent dark:border-hairline-dark dark:hover:border-accent-dark"
                                aria-label={`Open photo: ${img.caption || item.title}`}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={withBasePath(img.src)}
                                  alt={img.caption || item.title}
                                  className="h-full w-full object-cover"
                                />
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      <Lightbox
        images={activeGallery || []}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
