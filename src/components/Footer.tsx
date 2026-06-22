import Link from 'next/link';
import profile from '@/data/profile.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-rule bg-canvas/95 dark:bg-canvas-dark/95">
      <div className="container-content flex flex-col items-start justify-between gap-4 py-10 text-sm text-ink-muted dark:text-ink-muted-dark sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}.
        </p>
        <div className="flex gap-6">
          {profile.social.github && (
            <Link href={profile.social.github} className="link-underline">
              GitHub
            </Link>
          )}
          {profile.social.googleScholar && (
            <Link
              href={profile.social.googleScholar}
              className="link-underline"
            >
              Scholar
            </Link>
          )}
          {profile.social.linkedin && (
            <Link href={profile.social.linkedin} className="link-underline">
              LinkedIn
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
