import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      category: data.category ?? 'Research Notes',
      excerpt: data.excerpt ?? '',
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(): string[] {
  return getPostSlugs();
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    category: data.category ?? 'Research Notes',
    excerpt: data.excerpt ?? '',
    contentHtml,
  };
}
