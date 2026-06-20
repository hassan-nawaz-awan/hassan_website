import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: 'Post not found' };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="scroll-mt-16">
      <div className="container-content max-w-prose py-24">
        <Link
          href="/blog"
          className="link-underline inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide"
        >
          <ArrowLeft size={13} />
          All posts
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-wide text-accent dark:text-accent-dark">
          {post.category} · {post.date}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink dark:text-ink-dark sm:text-5xl">
          {post.title}
        </h1>

        <div
          className="prose-blog mt-12 text-[17px] leading-relaxed text-ink-muted dark:text-ink-muted-dark"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
