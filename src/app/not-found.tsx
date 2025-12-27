import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen flex items-center">
      <Container size="lg">
        <div className="text-center py-20">
          <div className="text-8xl font-brand text-[var(--accent)] mb-6">404</div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">
              Back to Home
            </Button>
            <Button href="/products" variant="outline">
              Browse Products
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
