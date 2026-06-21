'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import conferences from '@/data/conferences.json';
import { withBasePath } from '@/lib/utils';
import Lightbox, { type GalleryImage } from './Lightbox';

export default function Conferences() {
  const [activeGallery, setActiveGallery] = useState<GalleryImage[] | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openGallery = (images: GalleryImage[], index: number) => {
    setActiveGallery(images);
    setActiveIndex(index);
  };

  return (
    <section id="conferences" className="hairline-rule scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">10 — Conferences</span>
        </div>

        <div>
          <h2 className="section-heading mb-3">Conferences & talks</h2>
          <p className="mb-10 max-w-xl text-sm text-ink-muted dark:text-ink-muted-dark">
            Where I&rsquo;ve presented, attended, and met people doing
            similar work — with photos from along the way.
          </p>

          <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline dark:border-hairline-dark dark:bg-hairline-dark sm:grid-cols-2">
            {conferences.map((conf, i) => {
              const images: GalleryImage[] = conf.images || [];

              return (
                <motion.div
                  key={conf.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="bg-surface p-7 dark:bg-surface-dark"
                >
                  <p className="font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                    {conf.year} · {conf.role}
                  </p>
                  <h3 className="mt-2 font-display text-lg text-ink dark:text-ink-dark">
                    {conf.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted dark:text-ink-muted-dark">
                    {conf.description}
                  </p>

                  {images.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {images.slice(0, 6).map((img, idx) => (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => openGallery(images, idx)}
                          className="aspect-square overflow-hidden rounded-sm border border-hairline dark:border-hairline-dark"
                          aria-label={`Open photo: ${img.caption || conf.name}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={withBasePath(img.src)}
                            alt={img.caption || `${conf.name} photo ${idx + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
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
