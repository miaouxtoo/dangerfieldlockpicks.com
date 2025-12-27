import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border)]">
      <Container size="lg">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center font-brand text-[var(--background)] text-2xl">
                  D
                </div>
                <div>
                  <div className="font-brand text-xl text-[var(--foreground)] tracking-wider">
                    DANGERFIELD
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)] -mt-1">
                    Lock Picks
                  </div>
                </div>
              </Link>
              <p className="text-sm text-[var(--foreground-muted)] mb-4">
                British-engineered precision lock picking tools. Designed by Chris Dangerfield with over 20 years of expertise.
              </p>
              <div className="flex items-center gap-2 text-sm text-[var(--foreground-subtle)]">
                <span>Designed in the United Kingdom</span>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-[var(--foreground)] mb-4">Products</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-[var(--foreground)] mb-4">Company</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-[var(--foreground)] mb-4">Resources</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Shop CTA */}
              <div className="mt-6 p-4 bg-[var(--background-tertiary)] rounded-lg">
                <p className="text-sm font-medium text-[var(--foreground)] mb-2">
                  Ready to buy?
                </p>
                <a
                  href={`${SITE_CONFIG.lockpickworldUrl}/collections/dangerfield`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium"
                >
                  Shop at LockPickWorld
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--foreground-subtle)]">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-sm text-[var(--foreground-subtle)]">
              Official showcase for{' '}
              <a
                href={SITE_CONFIG.lockpickworldUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--foreground-muted)] hover:text-[var(--accent)]"
              >
                LockPickWorld.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
