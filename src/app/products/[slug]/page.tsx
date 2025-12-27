import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge, ProductBadge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { ProductCard } from '@/components/products/ProductCard';
import { products, getProductBySlug, getProductsByCategory } from '@/data/products';
import { formatPrice, generateUTMLink, calculateDiscount } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} - Professional Lock Pick`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const discount = product.originalPrice
    ? calculateDiscount(product.price, product.originalPrice)
    : null;

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <section className="py-4 border-b border-[var(--border)]">
        <Container size="lg">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
              Home
            </Link>
            <span className="text-[var(--foreground-subtle)]">/</span>
            <Link href="/products" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
              Products
            </Link>
            <span className="text-[var(--foreground-subtle)]">/</span>
            <span className="text-[var(--foreground)]">{product.shortName || product.name}</span>
          </nav>
        </Container>
      </section>

      {/* Product Hero */}
      <section className="py-12 lg:py-16">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)] overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && <ProductBadge type={product.badge} />}
                {discount && <Badge variant="sale">{discount}% OFF</Badge>}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="flex-1">
                {/* Title & Rating */}
                <h1 className="text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-2">
                  {product.name}
                </h1>
                <p className="text-xl text-[var(--accent)] font-medium mb-4">
                  {product.tagline}
                </p>
                <StarRating
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  size="lg"
                  className="mb-6"
                />

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-[var(--foreground)]">
                    {product.priceFrom ? 'From ' : ''}{formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-[var(--foreground-subtle)] line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-semibold text-[var(--foreground)] mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--foreground-muted)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                <Button
                  href={generateUTMLink(product.lockpickworldUrl, 'product-detail')}
                  external
                  size="lg"
                  className="w-full"
                >
                  Buy at LockPickWorld - {formatPrice(product.price)}
                </Button>
                <p className="text-center text-sm text-[var(--foreground-muted)]">
                  Secure checkout at LockPickWorld.com
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specifications */}
      {product.specifications && (
        <section className="py-12 lg:py-16 bg-[var(--background-secondary)]">
          <Container size="lg">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              Technical Specifications
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]"
                >
                  <span className="text-[var(--foreground-muted)]">{key}</span>
                  <span className="font-medium text-[var(--foreground)]">{value}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 lg:py-16">
          <Container size="lg">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Ready to Experience {product.shortName || 'This Product'}?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Join thousands of professionals who trust Dangerfield.
            </p>
            <Button
              href={generateUTMLink(product.lockpickworldUrl, 'product-cta')}
              external
              size="lg"
            >
              Buy Now at LockPickWorld
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
