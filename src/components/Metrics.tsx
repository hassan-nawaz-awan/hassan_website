'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import metrics from '@/data/metrics.json';

const items = [
  { label: 'Publications', value: metrics.publications },
  { label: 'Citations', value: metrics.citations },
  { label: 'h-index', value: metrics.hIndex },
  { label: 'Projects', value: metrics.projects },
  { label: 'Conference Talks', value: metrics.conferenceTalks },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl text-ink dark:text-ink-dark">
      {display}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="hairline-rule">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">07 — By the Numbers</span>
        </div>

        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-5">
          {items.map((item) => (
            <div key={item.label}>
              <Counter value={item.value} />
              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
