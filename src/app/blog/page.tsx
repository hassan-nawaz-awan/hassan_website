import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Research notes on AI for chemistry, quantum chemistry, machine learning potentials, and the PhD journey.',
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="scroll-mt-16">
      <div className="container-content py-24">
        <span className="eyebrow">Research Notes</span>
        <h1 className="section-heading mt-4 mb-4">Blog</h1>
        <p className="mb-16 max-w-prose text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
          Notes on AI for chemistry, quantum chemistry, machine learning
          potentials, and reflections on the path through graduate school.
          Written in Markdown — add a new file to{' '}
          <code className="font-mono text-xs">src/content/blog</code> to
          publish a new post.
        </p>

        {posts.length === 0 ? (
          <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
            No posts yet.
          </p>
        ) : (
          <ul className="divide-y divide-hairline dark:divide-hairline-dark">
            {posts.map((post) => (
              <li key={post.slug} className="py-8">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="font-display text-2xl text-ink transition-colors group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
                      {post.title}
                    </h2>
                    <span className="font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                      {post.date}
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-accent dark:text-accent-dark">
                    {post.category}
                  </p>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                    {post.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
