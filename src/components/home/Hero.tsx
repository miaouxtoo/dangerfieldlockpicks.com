import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG, BRAND_STATS } from '@/lib/constants';
import { getHeroProduct } from '@/data/products';
import { generateUTMLink, formatPrice } from '@/lib/utils';

export function Hero() {
  const heroProduct = getHeroProduct();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full" />

      <Container size="lg" className="relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="professional" className="mb-6">
              20+ Years of British Engineering
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="text-[var(--foreground)]">Professional</span>
              <br />
              <span className="text-gradient">Lock Pick Sets</span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto lg:mx-0">
              Precision-engineered lock picking tools designed by{' '}
              <span className="text-[var(--foreground)]">Chris Dangerfield</span>.
              Trusted by locksmiths, security professionals, and enthusiasts worldwide.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--accent)]">
                  {BRAND_STATS.yearsExperience}+
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                  {BRAND_STATS.fiveStarReviews.toLocaleString()}+
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">5-Star Reviews</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                  {BRAND_STATS.countriesShipped}+
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">Countries</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                href={generateUTMLink(`${SITE_CONFIG.lockpickworldUrl}/collections/dangerfield`, 'hero')}
                external
                size="lg"
              >
                Shop All Products
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Featured Product Card */}
          <div className="relative">
            <div className="relative bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)] p-6 sm:p-8 hover-lift">
              {/* Product Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="professional">Professional Grade</Badge>
              </div>

              {/* Product Image */}
              <div className="aspect-[4/3] bg-[var(--background-tertiary)] rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
                <Image
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-1">
                    {heroProduct.name}
                  </h2>
                  <p className="text-[var(--accent)] font-medium">
                    {heroProduct.tagline}
                  </p>
                </div>

                <p className="text-[var(--foreground-muted)] text-sm line-clamp-2">
                  {heroProduct.description}
                </p>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2">
                  {heroProduct.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-[var(--background-tertiary)] rounded text-[var(--foreground-muted)]"
                    >
                      {feature.split(' ').slice(0, 3).join(' ')}...
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <div>
                    <div className="text-2xl font-bold text-[var(--foreground)]">
                      {formatPrice(heroProduct.price)}
                    </div>
                    {heroProduct.originalPrice && (
                      <div className="text-sm text-[var(--foreground-subtle)] line-through">
                        {formatPrice(heroProduct.originalPrice)}
                      </div>
                    )}
                  </div>
                  <Button
                    href="/machina"
                    variant="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--accent)] opacity-5 blur-2xl rounded-full" />
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[var(--foreground-subtle)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
