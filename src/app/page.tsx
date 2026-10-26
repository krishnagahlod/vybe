import { HeroSection } from "@/components/home/hero-section";
import { FabricFeatures } from "@/components/home/fabric-features";
import { CollectionGrid } from "@/components/home/collection-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { StyleQuiz } from "@/components/home/style-quiz";
import { BrandStory } from "@/components/home/brand-story";
import { CitySpotlight } from "@/components/home/city-spotlight";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero with Lifestyle Proposition & Primary CTA */}
      <HeroSection />

      {/* 2. Fabric Engineering & Technical Ribbon */}
      <FabricFeatures />

      {/* 3. Clear Collection Discovery by Movement / Category */}
      <CollectionGrid />

      {/* 4. Featured 4 Curated Products with ProductCards */}
      <FeaturedProducts />

      {/* 5. Interactive "Find Your Vibe" Style Quiz */}
      <StyleQuiz />

      {/* 6. Brand Philosophy & Editorial Tone */}
      <BrandStory />

      {/* 7. Campaign Cities Spotlight & Academic Demo Notice */}
      <CitySpotlight />
    </div>
  );
}
