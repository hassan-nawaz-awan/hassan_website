import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (path.startsWith('http')) return path;
  return `${basePath}${path}`;
}
