import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { SITE_CONFIG } from '@/lib/constants';
import { generateUTMLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Lock Picking Guide - Learn from the Experts',
  description: 'Learn lock picking from the experts. Comprehensive guides, tutorials, and product recommendations for beginners to advanced pickers.',
  openGraph: {
    title: 'Lock Picking Guide - Dangerfield Lock Picks',
    description: 'Master the art of lock picking with our comprehensive guides and tutorials.',
  },
};

export default function GuidePage() {
  // Get beginner-friendly products
  const beginnerProducts = products.filter(
    p => p.id === 'serenity' || p.id === 'clear-locks-3pack' || p.id === 'guidebook'
  );

  const skillLevels = [
    {
      level: 'Beginner',
      description: 'Just starting out? These products will help you build a solid foundation.',
      products: ['serenity', 'clear-locks-3pack', 'guidebook'],
    },
    {
      level: 'Intermediate',
      description: 'Ready to advance? Upgrade your toolkit with professional-grade options.',
      products: ['praxis', 'aluminum-repinnable', 'tok-set-5pc'],
    },
    {
      level: 'Professional',
      description: 'For serious practitioners who demand the best tools available.',
      products: ['machina', 'skeleton', 'polaris'],
    },
  ];

  const basics = [
    {
      title: 'Understanding Lock Mechanisms',
      description: 'Learn how pin tumbler locks work and why they can be picked.',
    },
    {
      title: 'Tension Control',
      description: 'Master the most important skill in lock picking: proper tension application.',
    },
    {
      title: 'Pick Selection',
      description: 'Choose the right pick for each lock type and situation.',
    },
    {
      title: 'Single Pin Picking',
      description: 'The fundamental technique for opening any pin tumbler lock.',
    },
    {
      title: 'Raking Techniques',
      description: 'Fast entry methods for standard security locks.',
    },
    {
      title: 'Security Pin Recognition',
      description: 'Identify and defeat spool, serrated, and other security pins.',
    },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <Container size="lg">
          <div className="text-center">
            <Badge variant="default" className="mb-6">
              Learn from the Experts
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Lock Picking Guide
            </h1>

            <p className="text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8">
              Master the art and science of lock picking with guidance from
              Chris Dangerfield and the Dangerfield community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#basics">
                Start Learning
              </Button>
              <Button
                href={generateUTMLink(`${SITE_CONFIG.lockpickworldUrl}/products/dangerfield-how-to-pick-locks-guidebook`, 'guide')}
                external
                variant="outline"
              >
                Get the Guidebook
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-12 lg:py-16 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl lg:text-2xl text-[var(--foreground)] italic mb-6">
              &ldquo;I believe it&apos;s unethical to sell lock picks without providing
              clear guidance on how to use them. Education is at the heart of everything we do.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <span className="text-sm font-brand text-[var(--background)]">CD</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-[var(--foreground)]">Chris Dangerfield</div>
                <div className="text-sm text-[var(--foreground-muted)]">Founder</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Basics */}
      <section id="basics" className="py-16 lg:py-24 bg-[var(--background)]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              The Fundamentals
            </h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              Essential concepts every lock picker should understand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basics.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[var(--background-secondary)] rounded-xl border border-[var(--border)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-[var(--accent)]">{i + 1}</span>
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

      {/* Products by Skill Level */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Products by Skill Level
            </h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              Find the right tools for your experience level
            </p>
          </div>

          <div className="space-y-12">
            {skillLevels.map((level, i) => {
              const levelProducts = products.filter(p => level.products.includes(p.id));
              return (
                <div key={i}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                      {level.level}
                    </h3>
                    <p className="text-[var(--foreground-muted)]">{level.description}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {levelProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Resources */}
      <section className="py-16 lg:py-24 bg-[var(--background)]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Additional Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a
              href="https://www.youtube.com/@LockPickingLegend"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                LockPickingLegend YouTube
              </h3>
              <p className="text-[var(--foreground-muted)]">
                Video tutorials, product reviews, and picking demonstrations from Chris Dangerfield.
              </p>
            </a>

            <Link
              href="/products"
              className="p-6 bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                Browse All Products
              </h3>
              <p className="text-[var(--foreground-muted)]">
                Explore the complete Dangerfield collection of professional lock picking tools.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
              Get everything you need to begin learning at LockPickWorld.com
            </p>
            <Button
              href={generateUTMLink(`${SITE_CONFIG.lockpickworldUrl}/collections/dangerfield`, 'guide-cta')}
              external
              size="lg"
            >
              Shop at LockPickWorld
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
