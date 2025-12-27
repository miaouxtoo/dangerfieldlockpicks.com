import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ProductBadge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { formatPrice, generateUTMLink } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={`/products/${product.slug}`}
        className="group flex gap-4 p-4 bg-[var(--background-secondary)] rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors"
      >
        <div className="w-20 h-20 bg-[var(--background-tertiary)] rounded-lg relative shrink-0 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2"
            sizes="80px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
            {product.shortName || product.name}
          </h3>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" className="mt-1" />
          <div className="mt-2 font-bold text-[var(--foreground)]">
            {product.priceFrom ? 'From ' : ''}{formatPrice(product.price)}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="group bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] overflow-hidden hover-lift">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/3] bg-[var(--background-tertiary)] overflow-hidden" aria-label={`View ${product.name} details`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <ProductBadge type={product.badge} />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
            {product.shortName || product.name}
          </h3>
        </Link>

        <p className="text-sm text-[var(--foreground-muted)] mt-1 line-clamp-2 min-h-[2.5rem]">
          {product.tagline}
        </p>

        <div className="mt-3">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)]">
          <div>
            <span className="text-lg font-bold text-[var(--foreground)]">
              {product.priceFrom ? 'From ' : ''}{formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-[var(--foreground-subtle)] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button
            href={generateUTMLink(product.lockpickworldUrl, 'product-card')}
            external
            size="sm"
            className="flex-1"
          >
            Buy Now
          </Button>
          <Button
            href={`/products/${product.slug}`}
            variant="ghost"
            size="sm"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
