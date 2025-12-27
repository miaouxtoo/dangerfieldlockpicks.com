import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/Button';
import { categories, getProductsByCategory } from '@/data/products';
import { SITE_CONFIG } from '@/lib/constants';
import { generateUTMLink } from '@/lib/utils';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = categories.find((c) => c.id === category);

  if (!categoryData) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${categoryData.name} - Professional Lock Picking Tools`,
    description: categoryData.description,
    openGraph: {
      title: `${categoryData.name} - Dangerfield Lock Picks`,
      description: categoryData.description,
    },
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { category } = await params;
  const categoryData = categories.find((c) => c.id === category);

  if (!categoryData) {
    notFound();
  }

  const products = getProductsByCategory(category);

  const categoryDescriptions: Record<string, string> = {
    'lock-pick-sets': 'Complete lock pick sets for every skill level. From beginner-friendly starter kits to professional-grade tools trusted by locksmiths worldwide.',
    'electric-pick-guns': 'Professional electric lock pick guns for rapid, reliable entry. The MACHINA leads the way with unmatched power and precision.',
    'practice-locks': 'Training locks designed to accelerate your learning. See and feel the mechanisms as you develop your picking skills.',
    'tension-tools': 'Premium tension wrenches and tools for optimal control. Top-of-keyway and bottom-of-keyway options for every situation.',
    'individual-picks': 'Individual picks and specialty tools to expand and customize your toolkit.',
    'accessories': 'Cases, tools, and accessories to protect and organize your lock picking equipment.',
    'books': 'Educational guides and resources to master the art and science of lock picking.',
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-12 lg:py-20 bg-gradient-hero">
        <Container size="lg">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
              {categoryData.name}
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {categoryDescriptions[category] || categoryData.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-12 lg:py-16">
        <Container size="lg">
          {products.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-[var(--foreground-muted)]">
                  {products.length} product{products.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-[var(--foreground-muted)] mb-4">
                No products found in this category.
              </p>
              <Button href="/products">View All Products</Button>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Shop the Full Collection
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Browse all Dangerfield products at LockPickWorld.com
            </p>
            <Button
              href={generateUTMLink(`${SITE_CONFIG.lockpickworldUrl}/collections/dangerfield`, 'collection')}
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
