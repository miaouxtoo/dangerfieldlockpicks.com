import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { getProductBySlug } from '@/data/products';
import { formatPrice, generateUTMLink } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'MACHINA Electric Lock Pick Gun - Professional EPG',
  description: 'The Dangerfield MACHINA is a revolution in electric lock pick guns. Professional-grade power with 13,000 RPM motor, adjustable swing, and whisper-quiet operation. The choice of locksmiths worldwide.',
  openGraph: {
    title: 'Dangerfield MACHINA - The Ultimate Electric Lock Pick Gun',
    description: 'Professional-grade EPG trusted by locksmiths worldwide. 13,000 RPM, adjustable swing, ultra-quiet operation.',
  },
};

export default function MachinaPage() {
  const machina = getProductBySlug('machina-electric-lock-pick-gun')!;

  const specs = [
    { label: 'Motor Speed', value: '13,000 RPM' },
    { label: 'Needle Swing', value: '0-8mm' },
    { label: 'Noise Level', value: '~80 dB' },
    { label: 'Battery', value: '2900mAh Li-ion' },
    { label: 'Weight', value: '400g' },
    { label: 'Warranty', value: '2 Years' },
  ];

  const whyMachina = [
    {
      title: 'Unmatched Power',
      description: 'The 13,000 RPM motor delivers consistent, powerful vibrations that work on standard, spool-pinned, and security-pinned locks.',
    },
    {
      title: 'Precision Control',
      description: 'Adjustable needle swing from 0-8mm lets you fine-tune performance for any lock type.',
    },
    {
      title: 'Whisper Quiet',
      description: 'At only ~80 decibels, the MACHINA operates quietly for discreet professional use.',
    },
    {
      title: 'All-Day Battery',
      description: 'The high-capacity 2900mAh Li-ion battery provides hours of continuous use with fast USB-C charging.',
    },
    {
      title: 'Professional Build',
      description: 'Precision-manufactured in Taiwan with premium materials for durability in demanding environments.',
    },
    {
      title: 'Complete Kit',
      description: 'Includes 5 pick needles, 2 tension tools, intelligent LED charger, and multilingual manual.',
    },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.05] blur-[150px] rounded-full" />

        <Container size="lg" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="professional" className="mb-6">
                Professional Grade EPG
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--foreground)]">Dangerfield</span>
                <br />
                <span className="text-gradient">MACHINA</span>
              </h1>

              <p className="text-xl text-[var(--accent)] font-medium mb-4">
                The Revolution in Electric Lock Pick Guns
              </p>

              <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-xl">
                Designed by Chris Dangerfield, the MACHINA delivers professional-grade performance
                that beats all competitors in opening more locks. Fast, reliable, and built to last.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  href={generateUTMLink(machina.lockpickworldUrl, 'machina-hero')}
                  external
                  size="lg"
                >
                  Buy Now - {formatPrice(machina.price)}
                </Button>
                <Button href="#specs" variant="outline" size="lg">
                  View Specifications
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <StarRating rating={machina.rating} reviewCount={machina.reviewCount} size="lg" />
                <span className="text-[var(--foreground-muted)]">from professionals worldwide</span>
              </div>
            </div>

            {/* Product Visual */}
            <div className="relative">
              <div className="aspect-square bg-[var(--background-secondary)] rounded-3xl border border-[var(--border)] overflow-hidden relative">
                <Image
                  src={machina.image}
                  alt={machina.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--accent)] opacity-20 blur-3xl rounded-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Specs */}
      <section id="specs" className="py-16 lg:py-24 bg-[var(--background)]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              Engineered for professional performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((spec, i) => (
              <div
                key={i}
                className="bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] p-6 text-center"
              >
                <div className="text-2xl font-bold text-[var(--foreground)] mb-1">{spec.value}</div>
                <div className="text-sm text-[var(--foreground-muted)]">{spec.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why MACHINA */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              Why Choose MACHINA
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              The MACHINA was designed without compromise. Every feature exists for one purpose:
              to help you open more locks, faster, with complete reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMachina.map((item, i) => (
              <div
                key={i}
                className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-6"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-24 bg-[var(--background)]">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">&ldquo;</div>
            <blockquote className="text-2xl lg:text-3xl text-[var(--foreground)] font-medium mb-6 leading-relaxed">
              The mark of a great car is its absence of compromise.
              I applied this principle to create an EPG without design compromises
              in performance, materials, or build quality.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <span className="text-lg font-brand text-[var(--background)]">CD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-[var(--foreground)]">Chris Dangerfield</div>
                <div className="text-sm text-[var(--foreground-muted)]">Designer & Founder</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              Complete Professional Kit
            </h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              Everything you need to start picking immediately
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'MACHINA Electric Pick Gun', desc: 'Gunmetal grey finish' },
              { name: 'Rechargeable Battery', desc: '3.7V/2900mAh Li-ion' },
              { name: 'LED Charging Cradle', desc: 'Digital display, USB-C' },
              { name: '5 Pick Needles', desc: '0.02" thickness' },
              { name: '2 Tension Tools', desc: 'For lock rotation' },
              { name: 'Hex Key', desc: 'For needle replacement' },
              { name: 'Instruction Manual', desc: '4 languages' },
              { name: '2-Year Warranty', desc: 'Full coverage' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]"
              >
                <svg
                  className="w-5 h-5 text-[var(--accent)] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-medium text-[var(--foreground)]">{item.name}</div>
                  <div className="text-sm text-[var(--foreground-muted)]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6">
              Ready to Experience the MACHINA?
            </h2>
            <p className="text-xl text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              Join professional locksmiths worldwide who trust the MACHINA
              for fast, reliable lock entry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href={generateUTMLink(machina.lockpickworldUrl, 'machina-cta')}
                external
                size="lg"
              >
                Buy Now at LockPickWorld
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-[var(--foreground-muted)]">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                2-Year Warranty
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Secure Checkout
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Professional Support
              </span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
