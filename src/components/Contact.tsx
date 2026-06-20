'use client';

import { useState } from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import profile from '@/data/profile.json';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || 'your website'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="container-content grid gap-10 py-24 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">11 — Contact</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="section-heading mb-5">Get in touch</h2>
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
              Open to research collaborations, questions about the work
              above, or conversations about AI for chemistry. The fastest way
              to reach me is email.
            </p>

            <ul className="mt-8 space-y-3">
              <ContactLink
                icon={Mail}
                label={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactLink
                icon={Github}
                label="GitHub"
                href={profile.social.github}
                external
              />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn"
                href={profile.social.linkedin}
                external
              />
              <ContactLink
                icon={ExternalLink}
                label="Google Scholar"
                href={profile.social.googleScholar}
                external
              />
              <ContactLink
                icon={ExternalLink}
                label="ORCID"
                href={profile.social.orcid}
                external
              />
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark"
              >
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-sm border border-hairline bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-accent dark:border-hairline-dark dark:bg-surface-dark dark:text-ink-dark"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-sm border border-hairline bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-accent dark:border-hairline-dark dark:bg-surface-dark dark:text-ink-dark"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="mt-2 w-full rounded-sm border border-hairline bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-accent dark:border-hairline-dark dark:bg-surface-dark dark:text-ink-dark"
              />
            </div>
            <button type="submit" className="btn-primary">
              <Mail size={16} />
              Send message
            </button>
            <p className="text-xs text-ink-muted dark:text-ink-muted-dark">
              This opens your email client with the message pre-filled —
              GitHub Pages can&rsquo;t run a server-side form. See the README
              for how to wire this up to a form service instead.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  href,
  external,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className="link-underline flex items-center gap-3 text-sm"
      >
        <Icon size={16} strokeWidth={1.5} className="text-accent dark:text-accent-dark" />
        {label}
      </a>
    </li>
  );
}
