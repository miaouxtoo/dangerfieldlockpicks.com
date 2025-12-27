import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG, BRAND_STATS, TRUST_BADGES } from '@/lib/constants';
import { generateUTMLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Chris Dangerfield - The Story Behind the Brand',
  description: 'Discover the story of Chris Dangerfield, the British lock pick designer with over 20 years of experience. Learn about the innovations, philosophy, and passion behind Dangerfield Lock Picks.',
  openGraph: {
    title: 'About Chris Dangerfield - Dangerfield Lock Picks',
    description: 'The story of 20+ years of British engineering excellence in lock picking tools.',
  },
};

export default function AboutPage() {
  const timeline = [
    {
      year: '1990s',
      title: 'The First Pick',
      description: 'At age nine, Chris picked his first lock using nothing but a nail clipper. The fascination with locks and security was born.',
    },
    {
      year: 'Early 2000s',
      title: 'The Journey Begins',
      description: 'After years of frustration with poor-quality suppliers, Chris began designing his own tools. UK Bump Keys was established.',
    },
    {
      year: '2005',
      title: 'Innovation Era',
      description: 'Introduction of shoulderless bump keys and bump key dampeners revolutionized the bumping technique.',
    },
    {
      year: '2010',
      title: 'The Praxis System',
      description: 'Launch of the dual-gauge Praxis lock pick set, offering two thicknesses for versatility and skill development.',
    },
    {
      year: '2015',
      title: 'TOK Revolution',
      description: 'Top-of-Keyway tension tools brought a new level of control to the picking community.',
    },
    {
      year: '2020+',
      title: 'The MACHINA',
      description: 'The Dangerfield MACHINA EPG launches, challenging established competitors with superior performance.',
    },
  ];

  const innovations = [
    {
      title: 'Shoulderless Bump Keys',
      description: 'Improved bump key design for faster, more reliable lock bumping.',
    },
    {
      title: 'Bump Key Dampeners',
      description: 'Revolutionary dampening system for consistent bumping performance.',
    },
    {
      title: 'Dual-Gauge Praxis System',
      description: 'Two pick thicknesses in one set for maximum versatility.',
    },
    {
      title: 'TOK Tension Tools',
      description: 'Top-of-keyway tensioners for superior feedback and control.',
    },
    {
      title: 'SKELETON EDC Multi-Tool',
      description: 'Aerospace aluminum EDC system with quick-release customization.',
    },
    {
      title: 'MACHINA Electric Pick Gun',
      description: 'Professional-grade EPG that outperforms the competition.',
    },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="default" className="mb-6">
                Est. {SITE_CONFIG.foundedYear}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6">
                The Story Behind
                <span className="text-gradient"> Dangerfield</span>
              </h1>

              <p className="text-xl text-[var(--foreground-muted)] mb-8">
                Over 20 years of British engineering excellence, born from a childhood
                fascination and refined through decades of innovation.
              </p>

              <div className="flex flex-wrap gap-4">
                {TRUST_BADGES.map((badge, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-[var(--background-secondary)] rounded-lg border border-[var(--border)]"
                  >
                    <span className="text-sm text-[var(--foreground-muted)]">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-[var(--background-secondary)] rounded-3xl border border-[var(--border)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-[var(--accent)] flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl font-brand text-[var(--background)]">CD</span>
                  </div>
                  <div className="text-2xl font-bold text-[var(--foreground)]">Chris Dangerfield</div>
                  <div className="text-[var(--foreground-muted)]">Founder & Designer</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Origin Story */}
      <section id="story" className="py-16 lg:py-24 bg-[var(--background)]">
        <Container size="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
              The Origin Story
            </h2>

            <div className="prose prose-invert max-w-none space-y-6 text-[var(--foreground-muted)]">
              <p className="text-lg">
                It all started when Chris was eight years old. His mother installed an old-fashioned
                telephone with a rotary dial, and he discovered the joy of prank calling. To stop the fun,
                his mum added a lock to the phone.
              </p>

              <p className="text-lg">
                That was his first encounter with lock picking. Using nothing more than a nail clipper&apos;s
                gunk scraper, young Chris managed to unlock the phone. A lifelong fascination was born.
              </p>

              <p className="text-lg">
                His interest deepened as he learned about Harry Houdini. On trips to central London,
                he would stand outside a shop under Charing Cross, admiring a set of lock picks in the window.
                They wouldn&apos;t let him in, but he was captivated by the possibilities.
              </p>

              <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-4 my-8 bg-[var(--background-secondary)] rounded-r-lg">
                <p className="text-xl italic text-[var(--foreground)]">
                  &ldquo;Twenty years later, when the internet finally gave me access to real lock picks,
                  I ordered them immediately. After months of dealing with unresponsive suppliers and
                  poor-quality tools, I knew there had to be a better way.&rdquo;
                </p>
                <footer className="mt-3 text-sm">
                  &mdash; Chris Dangerfield
                </footer>
              </blockquote>

              <p className="text-lg">
                That frustrating experience with poor suppliers became the catalyst for creating
                UK Bump Keys, and eventually the Dangerfield brand. The mission was simple:
                provide quality tools with genuine customer service and proper education.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              20+ Years of Innovation
            </h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              A journey of continuous improvement and breakthrough designs
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--background)] font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-[var(--border)] mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm text-[var(--accent)] font-medium">{item.year}</div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mt-1">{item.title}</h3>
                  <p className="text-[var(--foreground-muted)] mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Innovations */}
      <section id="innovations" className="py-16 lg:py-24 bg-[var(--background)]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Key Innovations
            </h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              Designs that have shaped the locksport industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[var(--background-secondary)] rounded-xl border border-[var(--border)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">
              Our Philosophy
            </h2>

            <blockquote className="text-2xl lg:text-3xl text-[var(--foreground)] font-medium mb-8 leading-relaxed">
              &ldquo;I believe it&apos;s unethical to sell lock picks without providing the knowledge
              to use them properly. Education is at the heart of everything we do.&rdquo;
            </blockquote>

            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Every Dangerfield product comes with comprehensive guides and resources.
              We don&apos;t just sell tools &mdash; we help you master them.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--foreground)]">Education First</h3>
                <p className="text-sm text-[var(--foreground-muted)] mt-1">
                  Every product includes guides and tutorials
                </p>
              </div>
              <div className="p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--foreground)]">Tested Extensively</h3>
                <p className="text-sm text-[var(--foreground-muted)] mt-1">
                  On hundreds of real-world locks
                </p>
              </div>
              <div className="p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--foreground)]">Community Driven</h3>
                <p className="text-sm text-[var(--foreground-muted)] mt-1">
                  Refined with feedback from professionals
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--background)]">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Experience the Dangerfield Difference
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Discover why professionals worldwide choose our tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products">
                Browse Products
              </Button>
              <Button
                href={generateUTMLink(`${SITE_CONFIG.lockpickworldUrl}/collections/dangerfield`, 'about')}
                external
                variant="outline"
              >
                Shop at LockPickWorld
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
