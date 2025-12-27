import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'All Products - Professional Lock Pick Sets & Tools',
  description: 'Browse the complete Dangerfield collection. Professional lock pick sets, practice locks, tension tools, and the revolutionary Machina EPG. British-engineered precision.',
  openGraph: {
    title: 'All Products - Dangerfield Lock Picks',
    description: 'Browse the complete Dangerfield collection of professional lock picking tools.',
  },
};

export default function ProductsPage() {
  // Group products by tier for organization
  const tierLabels = {
    1: 'Professional Grade',
    2: 'Core Collection',
    3: 'Practice & Learning',
    4: 'Tools & Accessories',
  };

  const productsByTier = products.reduce((acc, product) => {
    const tier = product.tier;
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push(product);
    return acc;
  }, {} as Record<number, typeof products>);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <Container size="lg">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
              All Products
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Professional lock picking tools designed by Chris Dangerfield.
              Over 20 years of British engineering excellence.
            </p>
          </div>

          {/* Category Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.id}
                href={`/collections/${category.id}`}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  'bg-[var(--background-secondary)] text-[var(--foreground-muted)]',
                  'hover:bg-[var(--background-tertiary)] hover:text-[var(--foreground)]',
                  'border border-[var(--border)]'
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Products by Tier */}
      {([1, 2, 3, 4] as const).map((tier) => (
        productsByTier[tier] && productsByTier[tier].length > 0 && (
          <section key={tier} className="py-12 lg:py-16">
            <Container size="lg">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--foreground)]">
                    {tierLabels[tier]}
                  </h2>
                  <p className="text-[var(--foreground-muted)] mt-1">
                    {tier === 1 && 'Our flagship products for serious professionals'}
                    {tier === 2 && 'Essential sets for every lock picker'}
                    {tier === 3 && 'Perfect for developing your skills'}
                    {tier === 4 && 'Complete your toolkit'}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsByTier[tier].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Container>
          </section>
        )
      ))}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
              Shop the complete Dangerfield collection at LockPickWorld.com
            </p>
            <a
              href={`${SITE_CONFIG.lockpickworldUrl}/collections/dangerfield?utm_source=dangerfieldlockpicks&utm_medium=website&utm_campaign=products`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--background)] rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Shop at LockPickWorld
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
