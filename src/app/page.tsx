import { HeroSection } from "@/components/home/hero-section";
import { CollectionGrid } from "@/components/home/collection-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { BrandStory } from "@/components/home/brand-story";
import { CitySpotlight } from "@/components/home/city-spotlight";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero with Lifestyle Proposition & Primary CTA */}
      <HeroSection />

      {/* 2. Clear Collection Discovery by Movement / Category */}
      <CollectionGrid />

      {/* 3. Featured 4 Curated Products with ProductCards */}
      <FeaturedProducts />

      {/* 4. Brand Philosophy & Editorial Tone */}
      <BrandStory />

      {/* 5. Campaign Cities Spotlight & Academic Demo Notice */}
      <CitySpotlight />
    </div>
  );
}
