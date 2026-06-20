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
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/85 backdrop-blur-md dark:border-hairline-dark dark:bg-canvas-dark/85">
      <nav className="container-content flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg italic text-ink dark:text-ink-dark"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm"
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
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-hairline dark:border-hairline-dark"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-canvas px-6 py-4 dark:border-hairline-dark dark:bg-canvas-dark md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink dark:text-ink-dark"
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
