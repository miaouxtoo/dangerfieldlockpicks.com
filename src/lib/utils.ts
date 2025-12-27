import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function formatPriceRange(price: number, hasVariants: boolean = false): string {
  if (hasVariants) {
    return `From ${formatPrice(price)}`;
  }
  return formatPrice(price);
}

export function calculateDiscount(price: number, originalPrice: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function generateUTMLink(baseUrl: string, campaign: string = 'showcase'): string {
  const params = new URLSearchParams({
    utm_source: 'dangerfieldlockpicks',
    utm_medium: 'website',
    utm_campaign: campaign,
  });
  return `${baseUrl}?${params.toString()}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
