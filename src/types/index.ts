export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  priceFrom?: boolean;
  category: ProductCategory;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  features: string[];
  specifications?: Record<string, string>;
  badge?: 'bestseller' | 'new' | 'popular' | 'professional';
  inStock: boolean;
  tier: 1 | 2 | 3 | 4;
  lockpickworldUrl: string;
}

export type ProductCategory =
  | 'lock-pick-sets'
  | 'electric-pick-guns'
  | 'practice-locks'
  | 'tension-tools'
  | 'individual-picks'
  | 'accessories'
  | 'books';

export interface Category {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  productId?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BrandStats {
  yearsExperience: number;
  productsDesigned: number;
  countriesShipped: number;
  fiveStarReviews: number;
}
