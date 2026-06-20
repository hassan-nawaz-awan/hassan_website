import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[70vh] flex-col items-start justify-center py-24">
      <span className="eyebrow">404</span>
      <h1 className="section-heading mt-4">This page wasn&rsquo;t found.</h1>
      <p className="mt-4 max-w-md text-sm text-ink-muted dark:text-ink-muted-dark">
        The page you&rsquo;re looking for may have moved or no longer exists.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
