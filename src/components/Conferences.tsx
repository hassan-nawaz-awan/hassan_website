'use client';

import { useState } from 'react';
import { Camera, MapPin, Trophy, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import conferences from '@/data/conferences.json';
import { withBasePath } from '@/lib/utils';
import Lightbox, { type GalleryImage } from './Lightbox';

export default function Conferences() {
  const [activeGallery, setActiveGallery] = useState<GalleryImage[] | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalPhotos = conferences.reduce(
    (sum, conf) => sum + (conf.images?.length || 0),
    0
  );
  const awardCount = conferences.filter((conf) =>
    conf.role.toLowerCase().includes('award')
  ).length;

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
          <div className="mb-8 rounded-3xl border border-hairline bg-surface/95 p-6 shadow-sm dark:border-hairline-dark dark:bg-surface-dark/90">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="eyebrow">10 — Conferences</span>
                <h2 className="section-heading mt-3">Conferences & talks</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                  Selected moments from the world stage, featuring invited talks,
                  posters, workshop events, and the people who made them
                  memorable.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-hairline bg-canvas p-4 text-sm dark:border-hairline-dark dark:bg-canvas-dark">
                  <p className="text-ink-muted dark:text-ink-muted-dark">Total events</p>
                  <p className="mt-2 text-3xl font-semibold text-ink dark:text-ink-dark">
                    {conferences.length}
                  </p>
                </div>
                <div className="rounded-3xl border border-hairline bg-canvas p-4 text-sm dark:border-hairline-dark dark:bg-canvas-dark">
                  <p className="text-ink-muted dark:text-ink-muted-dark">Event photos</p>
                  <p className="mt-2 text-3xl font-semibold text-ink dark:text-ink-dark">
                    {totalPhotos}
                  </p>
                </div>
                <div className="rounded-3xl border border-hairline bg-canvas p-4 text-sm dark:border-hairline-dark dark:bg-canvas-dark">
                  <p className="text-ink-muted dark:text-ink-muted-dark">Awards / honors</p>
                  <p className="mt-2 text-3xl font-semibold text-ink dark:text-ink-dark">
                    {awardCount}
                  </p>
                </div>
                <div className="rounded-3xl border border-hairline bg-canvas p-4 text-sm dark:border-hairline-dark dark:bg-canvas-dark">
                  <p className="text-ink-muted dark:text-ink-muted-dark">Talk formats</p>
                  <p className="mt-2 text-3xl font-semibold text-ink dark:text-ink-dark">
                    {conferences.filter((conf) => conf.role.toLowerCase().includes('poster')).length} posters
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {conferences.map((conf, i) => {
              const images: GalleryImage[] = conf.images || [];
              const featuredImage = images[0];

              return (
                <motion.article
                  key={conf.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group overflow-hidden rounded-3xl border border-hairline bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-hairline-dark dark:bg-surface-dark"
                >
                  {featuredImage && (
                    <button
                      type="button"
                      onClick={() => openGallery(images, 0)}
                      className="relative block w-full overflow-hidden"
                      aria-label={`Open gallery for ${conf.name}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={withBasePath(featuredImage.src)}
                        alt={featuredImage.caption || conf.name}
                        className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-black/5" />
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                          {conf.year}
                        </span>
                        {images.length > 0 && (
                          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                            {images.length} photos
                          </span>
                        )}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="max-w-xs rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
                            Featured event
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">
                            {conf.location}
                          </p>
                        </div>
                      </div>
                    </button>
                  )}

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="pill">{conf.role}</span>
                      {conf.location && (
                        <span className="font-mono text-[11px] uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
                          {conf.location}
                        </span>
                      )}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-ink-muted dark:text-ink-muted-dark">
                      <span className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-[0.2em] dark:border-hairline-dark">
                        <MapPin size={12} />
                        {conf.location}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-[0.2em] dark:border-hairline-dark">
                        <Video size={12} />
                        {conf.role}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl leading-tight text-ink dark:text-ink-dark">
                      {conf.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                      {conf.description}
                    </p>

                    {images.length > 0 && (
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {images.slice(0, 6).map((img, idx) => (
                          <button
                            key={img.src}
                            type="button"
                            onClick={() => openGallery(images, idx)}
                            className="aspect-square overflow-hidden rounded-3xl border border-hairline transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-hairline-dark"
                            aria-label={`Open photo: ${img.caption || conf.name}`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={withBasePath(img.src)}
                              alt={img.caption || `${conf.name} photo ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
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
