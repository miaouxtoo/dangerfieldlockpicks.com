import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import { SITE_CONFIG } from '@/lib/constants';
import { getTotalReviews } from '@/data/products';
import { generateUTMLink } from '@/lib/utils';

const testimonials = [
  {
    quote: "The PRAXIS set is incredibly well-made. The dual-gauge design gives you options for any lock you encounter. Best investment I've made for my toolkit.",
    author: "Mike R.",
    role: "Professional Locksmith",
    rating: 5,
    product: "PRAXIS Dual-Gauge Set",
  },
  {
    quote: "As a security consultant, I need tools I can rely on. Dangerfield picks have never let me down. The quality is evident from the first pick.",
    author: "Sarah T.",
    role: "Security Consultant",
    rating: 5,
    product: "SKELETON EDC Multi-Tool",
  },
  {
    quote: "Started with the Serenity set as a beginner. The included guide and quality picks made learning so much easier. Now I'm hooked on the hobby!",
    author: "James L.",
    role: "Locksport Enthusiast",
    rating: 5,
    product: "Serenity Lock Pick Set",
  },
];

const trustedBy = [
  "Locksmiths",
  "Security Professionals",
  "Law Enforcement",
  "Locksport Champions",
  "Educational Institutions",
];

export function SocialProof() {
  const totalReviews = getTotalReviews();

  return (
    <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
      <Container size="lg">
        {/* Stats Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-[var(--background)] rounded-full px-6 py-3 border border-[var(--border)]">
            <StarRating rating={5} showCount={false} size="lg" />
            <div className="h-6 w-px bg-[var(--border)]" />
            <span className="text-[var(--foreground)]">
              <strong>{totalReviews.toLocaleString()}+</strong> 5-Star Reviews
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Dangerfield for their lock picking needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-6"
            >
              <StarRating rating={testimonial.rating} showCount={false} size="sm" className="mb-4" />
              <p className="text-[var(--foreground)] mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-[var(--border)]">
                <div className="font-medium text-[var(--foreground)]">{testimonial.author}</div>
                <div className="text-sm text-[var(--foreground-muted)]">{testimonial.role}</div>
                <div className="text-xs text-[var(--accent)] mt-1">{testimonial.product}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="text-center mb-12">
          <p className="text-sm text-[var(--foreground-muted)] mb-4">Trusted by</p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustedBy.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[var(--background)] rounded-full border border-[var(--border)] text-sm text-[var(--foreground-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-[var(--background)] rounded-xl border border-[var(--border)] p-8">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
              Ready to Experience the Difference?
            </h3>
            <p className="text-[var(--foreground-muted)] mb-6">
              Shop the complete Dangerfield collection at LockPickWorld.
            </p>
            <Button
              href={generateUTMLink(`${SITE_CONFIG.lockpickworldUrl}/collections/dangerfield`, 'social-proof')}
              external
              size="lg"
            >
              Shop Now at LockPickWorld
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
