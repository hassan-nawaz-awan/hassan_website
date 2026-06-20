/** @type {import('next').NextConfig} */

// ---------------------------------------------------------------------------
// GitHub Pages deployment notes
// ---------------------------------------------------------------------------
// A GitHub Pages *project* site (the default unless your repo is named
// "<username>.github.io") is served from a sub-path, e.g.
//   https://username.github.io/my-repo/
// Next.js needs to know that sub-path at build time so internal links and
// asset URLs resolve correctly. The included GitHub Actions workflow
// (.github/workflows/deploy.yml) sets the BASE_PATH environment variable
// automatically from the repository name, so in almost all cases you do
// NOT need to edit anything here.
//
// If you ever build locally for production (`npm run build`) and plan to
// upload the `out/` folder yourself, set BASE_PATH manually, e.g.:
//   BASE_PATH=/my-repo npm run build
//
// If your repository IS named "<username>.github.io" (a *user* site served
// from the domain root), leave BASE_PATH unset / empty.
// ---------------------------------------------------------------------------

const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
