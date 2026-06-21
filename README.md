# Hassan — Academic Personal Website

A modern, research-focused academic portfolio site built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, designed for static deployment on **GitHub Pages**.

Live structure: hero, about, research overview, a flagship project (Aitomia), publications with search/filter, an academic timeline, animated research metrics, skills, awards, conferences, a research dashboard, a Markdown blog, dark/light mode, and a contact section.

---

## 1. Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 2. Project structure

```
src/
  app/                 Next.js App Router pages (page.tsx, blog/, layout.tsx)
  components/          All UI sections (Hero, About, Publications, etc.)
  data/                Editable JSON content — this is what you'll update
  content/blog/        Markdown blog posts
  lib/                 Site config, blog parsing, utilities
public/
  cv/                  Your CV PDF
  images/              Project images / screenshots
  favicon.svg
.github/workflows/
  deploy.yml           GitHub Actions workflow that builds & deploys automatically
```

**You almost never need to touch component code to update content.** Everything text-based lives in `src/data/*.json` or `src/content/blog/*.md`.

---

## 3. Editing your content

| What to change                          | File                                  |
| ---------------------------------------- | -------------------------------------- |
| Name, tagline, bio, social links, email  | `src/data/profile.json`                |
| **Your photo**                           | replace `public/images/profile-placeholder.svg` with your photo (e.g. `profile.jpg`), then update the `"photo"` field in `src/data/profile.json` to match the new filename |
| Research focus cards                     | `src/data/research-areas.json`         |
| Featured project (Aitomia)               | `src/data/featured-project.json`       |
| Publications                             | `src/data/publications.json`           |
| Academic timeline                        | `src/data/timeline.json`               |
| Metrics counters (citations, h-index…)   | `src/data/metrics.json`                |
| Skills                                   | `src/data/skills.json`                 |
| Awards                                   | `src/data/awards.json`                 |
| Conferences                              | `src/data/conferences.json`            |
| Research dashboard (active projects etc) | `src/data/dashboard.json`              |
| News / updates feed                      | `src/data/news.json`                   |
| Collaborations & collaborators           | `src/data/collaborations.json`         |
| Blog posts                               | new `.md` file in `src/content/blog/`  |
| Site title / SEO description / nav links | `src/lib/site-config.ts`               |
| CV file                                  | replace `public/cv/hassan-cv.pdf`      |
| Project screenshot                       | replace `public/images/aitomia-placeholder.svg` with a PNG/JPG and update the `image` path in `featured-project.json` |

### Adding a blog post

Create a new file in `src/content/blog/`, e.g. `my-new-post.md`:

```markdown
---
title: "Your Post Title"
date: "2026-07-01"
category: "AI for Chemistry"
excerpt: "One or two sentence summary shown on the blog index."
---

Your Markdown content here. Headings, lists, links, and **bold** text
are all supported.
```

It will automatically appear on `/blog` and get its own page at `/blog/my-new-post`. No code changes needed.

### News entry schema

```json
{
  "id": "unique-id",
  "date": "2026-07",
  "tag": "Milestone",          // any short label: "Milestone", "Publication", "Award", "Talk"...
  "title": "Started my PhD at HKUST",
  "description": "A sentence or two about it.",
  "image": "",                 // optional, path under public/images/news/
  "link": ""                   // optional, link to more detail
}
```

### Collaborations entry schema

`src/data/collaborations.json` has two parts: an `"intro"` string (the paragraph inviting people to collaborate) and a `"collaborators"` list:

```json
{
  "id": "unique-id",
  "name": "Dr. Jane Smith",
  "role": "Collaborator",       // or "Advisor", "Co-author", etc.
  "institution": "MIT",
  "description": "What you worked on together.",
  "image": "",                  // optional, path under public/images/collaborations/
  "link": ""                    // optional, their website/profile
}
```



```json
{
  "id": "unique-id",
  "title": "Paper title",
  "authors": ["Author One", "Author Two"],
  "venue": "Journal or Conference Name",
  "year": 2026,
  "type": "journal",            // "journal" | "preprint" | "conference"
  "doi": "10.xxxx/xxxxx",       // leave empty string if none yet
  "pdf": "/papers/your-pdf.pdf",// or external URL, or empty string
  "abstract": "Optional abstract text.",
  "tags": ["tag-one", "tag-two"]
}
```

### Adding photos to your timeline, conferences, and awards

These three sections support images:

- **Timeline** (`src/data/timeline.json`) — each entry has an `"image"` field. Drop a photo in `public/images/timeline/`, then set `"image": "/images/timeline/your-photo.jpg"` on that entry. Leave it as `""` for entries with no photo.
- **Conferences** (`src/data/conferences.json`) — each entry has an `"images"` array, so you can add several photos per conference. Drop photos in `public/images/conferences/`, then list them: `"images": ["/images/conferences/photo1.jpg", "/images/conferences/photo2.jpg"]`. Leave it as `[]` for none.
- **Awards** (`src/data/awards.json`) — each entry has an `"image"` field, same pattern as timeline, photos go in `public/images/awards/`.

A few practical tips:
- Keep filenames simple — lowercase, no spaces (use dashes: `acs-2026-presenting.jpg`).
- Compress photos before adding them (aim for under ~500KB each) so the site stays fast — any free tool like [squoosh.app](https://squoosh.app) works well.
- The path always starts with `/images/...` (matching the `public/images/...` folder), never `public/images/...`.

---

## 4. Design system

- **Colors**: defined as CSS-variable-backed Tailwind tokens in `tailwind.config.ts` (`canvas`, `surface`, `ink`, `hairline`, `accent`, `ember`) with light/dark variants. Change the hex values there to re-theme the whole site.
- **Fonts**: Newsreader (display/serif), IBM Plex Sans (body), IBM Plex Mono (data/labels) — all self-hosted via `@fontsource` packages, so the site makes **zero external font requests** (faster, more private, no Google Fonts dependency).
- **Signature graphic**: the hero background is an original SVG illustration of a potential-energy-surface contour map with two energy basins — a direct visual nod to conformer search / energy landscape exploration, your actual research area. It lives in `src/components/MolecularBackground.tsx`.

---

## 5. Deploying to GitHub Pages

### Step 1 — Push to a GitHub repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages via GitHub Actions

1. In your repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.

That's it. The included workflow (`.github/workflows/deploy.yml`) will run automatically on every push to `main`:

1. Installs dependencies
2. Builds the site as a fully static export (`next build` with `output: 'export'`)
3. Automatically figures out the correct base path for your repo name (see below)
4. Publishes the result to GitHub Pages

Your site will be live at:

- `https://<your-username>.github.io/<your-repo>/` — if your repo is a normal project repo, **or**
- `https://<your-username>.github.io/` — if your repo is literally named `<your-username>.github.io`

The first deployment can take 1–2 minutes. Check the **Actions** tab in your repo to watch progress.

### How the base path works

GitHub Pages serves project repos from a sub-path (e.g. `/my-repo/`), so all internal links and asset URLs need that prefix baked in at build time. The workflow handles this automatically by reading your repository name — you don't need to edit anything. If you ever build locally for production, pass it manually:

```bash
BASE_PATH=/my-repo npm run build
```

### Updating the live site

Just edit a JSON file (or add a blog post), commit, and push to `main` — the Action redeploys automatically.

---

## 6. Contact form note

GitHub Pages only serves static files — there's no server to receive form submissions. The contact form currently opens the visitor's email client with a pre-filled message (a `mailto:` link), which works with zero configuration.

If you'd like real in-page form submission instead, two easy options:

- **[Formspree](https://formspree.io)** — free tier, just point the form's `action` at your Formspree endpoint.
- **[Web3Forms](https://web3forms.com)** — free, no signup-only API key, works with a plain `fetch` POST.

Either can be dropped into `src/components/Contact.tsx` in place of the `mailto:` logic in `handleSubmit`.

---

## 7. Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- [gray-matter](https://github.com/jonschlinkert/gray-matter) + [remark](https://github.com/remarkjs/remark) for the Markdown blog
- [@fontsource](https://fontsource.org/) for self-hosted fonts
- [lucide-react](https://lucide.dev/) for icons

## 8. Accessibility & performance notes

- Semantic landmarks, a skip-to-content link, and visible focus states are built in.
- `prefers-reduced-motion` is respected — animations are disabled for users who request it.
- Images are unoptimized by config (`images.unoptimized: true`), which is required for static export; if you add large photos, compress them before adding to `public/images/`.
- Run `npm run build` locally any time to verify everything still compiles before pushing.
