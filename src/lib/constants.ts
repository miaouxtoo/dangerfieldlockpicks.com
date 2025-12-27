import type { BrandStats, NavItem } from '@/types';

export const SITE_CONFIG = {
  name: 'Dangerfield Lock Picks',
  tagline: 'British Engineered Precision',
  description: 'Professional lock pick sets designed by Chris Dangerfield. Over 20 years of British engineering excellence. Trusted by locksmiths, security professionals, and enthusiasts worldwide.',
  url: 'https://dangerfieldlockpicks.com',
  lockpickworldUrl: 'https://www.lockpickworld.com',
  founder: 'Chris Dangerfield',
  foundedYear: 2000,
} as const;

export const BRAND_STATS: BrandStats = {
  yearsExperience: 24,
  productsDesigned: 50,
  countriesShipped: 85,
  fiveStarReviews: 2500,
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'All Products', href: '/products' },
      { label: 'Lock Pick Sets', href: '/collections/lock-pick-sets' },
      { label: 'Machina EPG', href: '/machina' },
      { label: 'Practice Locks', href: '/collections/practice-locks' },
      { label: 'Tension Tools', href: '/collections/tension-tools' },
      { label: 'Accessories', href: '/collections/accessories' },
    ],
  },
  { label: 'Machina', href: '/machina' },
  { label: 'About', href: '/about' },
  { label: 'Guide', href: '/guide' },
];

export const FOOTER_LINKS = {
  products: [
    { label: 'All Products', href: '/products' },
    { label: 'Lock Pick Sets', href: '/collections/lock-pick-sets' },
    { label: 'Machina EPG', href: '/machina' },
    { label: 'Practice Locks', href: '/collections/practice-locks' },
    { label: 'Tension Tools', href: '/collections/tension-tools' },
  ],
  company: [
    { label: 'About Chris Dangerfield', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Innovations', href: '/about#innovations' },
  ],
  resources: [
    { label: 'Lock Picking Guide', href: '/guide' },
    { label: 'Shop at LockPickWorld', href: 'https://www.lockpickworld.com/collections/dangerfield' },
  ],
};

export const TRUST_BADGES = [
  { label: 'British Designed' },
  { label: '301 Stainless Steel' },
  { label: '20+ Years Experience' },
  { label: '2500+ 5-Star Reviews' },
];
