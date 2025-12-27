import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';

export function Categories() {
  // Filter to main categories for display
  const displayCategories = categories.filter(
    cat => ['lock-pick-sets', 'electric-pick-guns', 'practice-locks', 'tension-tools'].includes(cat.id)
  );

  return (
    <section className="py-16 lg:py-24 bg-[var(--background)]">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Find the perfect tools for your skill level and needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={`/collections/${category.id}`}
              className={cn(
                'group relative bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] overflow-hidden',
                'hover:border-[var(--accent)]/50 hover:bg-[var(--background-tertiary)] transition-all duration-300',
                'hover-lift'
              )}
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] line-clamp-2 mb-4">
                  {category.description}
                </p>

                {/* Product Count & Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--foreground-subtle)]">
                    {category.productCount} products
                  </span>
                  <svg
                    className="w-5 h-5 text-[var(--foreground-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Machina Feature Card */}
        <Link
          href="/machina"
          className="mt-8 block group relative bg-gradient-to-r from-[var(--background-secondary)] to-[var(--background-tertiary)] rounded-xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)]/50 transition-all"
        >
          <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6">
            {/* Image */}
            <div className="w-20 h-20 rounded-xl bg-[var(--background)] overflow-hidden relative shrink-0">
              <Image
                src="https://www.lockpickworld.com/cdn/shop/files/base-machina-image-2000x2000.jpg?v=1765039534"
                alt="Dangerfield MACHINA"
                fill
                className="object-contain p-2"
                sizes="80px"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider mb-1">
                Featured Product
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                Dangerfield MACHINA Electric Lock Pick Gun
              </h3>
              <p className="text-[var(--foreground-muted)]">
                The revolution in EPGs. Professional-grade power, precision engineering, and unmatched reliability.
              </p>
            </div>

            {/* Arrow */}
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-[var(--background)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
