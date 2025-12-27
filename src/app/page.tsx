import { Hero } from '@/components/home/Hero';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { BrandStory } from '@/components/home/BrandStory';
import { Categories } from '@/components/home/Categories';
import { SocialProof } from '@/components/home/SocialProof';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BrandStory />
      <Categories />
      <SocialProof />
    </>
  );
}
