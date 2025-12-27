import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'bestseller' | 'new' | 'popular' | 'professional' | 'sale';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-[var(--background-tertiary)] text-[var(--foreground-muted)]',
  bestseller: 'bg-[var(--accent)] text-[var(--background)]',
  new: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  popular: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  professional: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
  sale: 'bg-red-500/20 text-red-400 border border-red-500/30',
};

const labels: Record<string, string> = {
  bestseller: 'Bestseller',
  new: 'New',
  popular: 'Popular',
  professional: 'Professional',
};

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function ProductBadge({ type }: { type: 'bestseller' | 'new' | 'popular' | 'professional' }) {
  return <Badge variant={type}>{labels[type]}</Badge>;
}
