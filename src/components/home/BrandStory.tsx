import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TRUST_BADGES } from '@/lib/constants';

export function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square bg-[var(--background-tertiary)] rounded-2xl overflow-hidden relative">
              <Image
                src="https://www.lockpickworld.com/cdn/shop/products/praxis-stainless-steel-picks-1000x1000.jpg"
                alt="Dangerfield Lock Picks - British Engineered"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-lg font-semibold text-[var(--foreground)]">Chris Dangerfield</div>
                <div className="text-sm text-[var(--foreground-muted)]">Founder & Designer</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="absolute -bottom-6 left-4 right-4 lg:left-8 lg:right-8">
              <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-4 shadow-xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {TRUST_BADGES.map((badge, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs text-[var(--foreground-muted)]">{badge.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:py-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6">
              20+ Years of British
              <span className="text-gradient"> Engineering Excellence</span>
            </h2>

            <div className="space-y-4 text-[var(--foreground-muted)] mb-8">
              <p>
                It all started at age nine, when Chris Dangerfield picked his first lock with a nail clipper.
                That moment sparked a lifelong passion for understanding the mechanics of security.
              </p>
              <p>
                Fast forward two decades, and that curiosity has evolved into <strong className="text-[var(--foreground)]">Dangerfield Lock Picks</strong> &mdash;
                a brand synonymous with precision, quality, and innovation in the locksport community.
              </p>
              <p>
                Every tool is designed in Britain, tested on hundreds of locks, and refined with input from
                world champion pickers, professional locksmiths, and security experts.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-4 mb-8 bg-[var(--background-tertiary)] rounded-r-lg">
              <p className="text-lg italic text-[var(--foreground)]">
                &ldquo;I believe it&apos;s unethical to sell lock picks without providing the knowledge to use them properly.
                That&apos;s why education is at the heart of everything we do.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-[var(--foreground-muted)]">
                &mdash; Chris Dangerfield, Founder
              </footer>
            </blockquote>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Precision Materials', desc: '301 Stainless Steel & Aerospace Aluminum' },
                { title: 'Tested Extensively', desc: 'On hundreds of real-world locks' },
                { title: 'Pro Approved', desc: 'Used by locksmiths & security experts' },
                { title: 'Education First', desc: 'Guides & tutorials included' },
              ].map((point, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[var(--accent)]" />
                  <div>
                    <div className="font-medium text-[var(--foreground)]">{point.title}</div>
                    <div className="text-sm text-[var(--foreground-muted)]">{point.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/about" variant="outline">
              Read Our Full Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
