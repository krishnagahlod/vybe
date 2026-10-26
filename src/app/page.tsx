import { HeroSection } from "@/components/home/hero-section";
import { FabricFeatures } from "@/components/home/fabric-features";
import { CollectionGrid } from "@/components/home/collection-grid";
import { GarmentAnatomy } from "@/components/home/garment-anatomy";
import { FeaturedProducts } from "@/components/home/featured-products";
import { MidnightEdit } from "@/components/home/midnight-edit";
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

      {/* 4. Interactive Garment Anatomy with Pulsating Hotspots */}
      <GarmentAnatomy />

      {/* 5. Featured Curated Products with 1-Tap Quick-Size Selector */}
      <FeaturedProducts />

      {/* 6. Cinematic Obsidian Dark-Mode Section (The Midnight Capsule) */}
      <MidnightEdit />

      {/* 7. Interactive "Find Your Vibe" Style Quiz */}
      <StyleQuiz />

      {/* 8. Brand Philosophy & Editorial Tone */}
      <BrandStory />

      {/* 9. Campaign Cities Spotlight & Academic Demo Notice */}
      <CitySpotlight />
    </div>
  );
}
