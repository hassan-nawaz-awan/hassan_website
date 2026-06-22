'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { navItems } from '@/lib/site-config';
import profile from '@/data/profile.json';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas/97 backdrop-blur transition-colors duration-300 dark:bg-canvas-dark/97">
      <nav className="container-content flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink dark:text-ink-dark"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-[12px] font-medium uppercase tracking-[0.14em]"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-hairline bg-surface transition-all duration-200 dark:border-hairline-dark dark:bg-surface-dark"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <div className="h-px w-full bg-hairline dark:bg-hairline-dark" />
      <div className="h-px w-full bg-hairline/40 dark:bg-hairline-dark/40" />

      {open && (
        <div className="border-b border-hairline bg-canvas px-6 py-4 dark:border-hairline-dark dark:bg-canvas-dark md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.1em] text-ink dark:text-ink-dark"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
