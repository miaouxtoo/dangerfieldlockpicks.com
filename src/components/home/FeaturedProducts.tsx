import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge, ProductBadge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { getFeaturedProducts } from '@/data/products';
import { formatPrice, generateUTMLink } from '@/lib/utils';
import type { Product } from '@/types';

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] overflow-hidden hover-lift">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-[var(--background-tertiary)] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <ProductBadge type={product.badge} />
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <Button
            href={generateUTMLink(product.lockpickworldUrl, 'featured')}
            external
            size="sm"
          >
            Buy at LockPickWorld
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
            {product.shortName || product.name}
          </h3>
        </Link>

        <p className="text-sm text-[var(--foreground-muted)] mt-1 line-clamp-1">
          {product.tagline}
        </p>

        <div className="mt-3">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--border)]">
          <div>
            <span className="font-bold text-[var(--foreground)]">
              {product.priceFrom ? 'From ' : ''}{formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-[var(--foreground-subtle)] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {!product.inStock && (
            <Badge variant="default">Out of Stock</Badge>
          )}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16 lg:py-24 bg-[var(--background)]">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">Featured Collection</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Professional-Grade Lock Picks
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Discover our most popular lock pick sets and tools, trusted by professionals worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button href="/products" variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
