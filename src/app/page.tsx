import { HeroSection } from "@/components/home/hero-section";
import { CollectionGrid } from "@/components/home/collection-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { GarmentAnatomy } from "@/components/home/garment-anatomy";
import { StudioToStreet } from "@/components/home/studio-to-street";
import { StyleQuiz } from "@/components/home/style-quiz";
import { BrandStory } from "@/components/home/brand-story";
import { CitySpotlight } from "@/components/home/city-spotlight";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero with lifestyle proposition & primary CTA */}
      <HeroSection />

      {/* 2. Collection discovery by category */}
      <CollectionGrid />

      {/* 3. Featured products with quick-add */}
      <FeaturedProducts />

      {/* 4. Interactive fit & fabric close-up */}
      <GarmentAnatomy />

      {/* 5. Studio-to-street lifestyle band */}
      <StudioToStreet />

      {/* 6. "Find your fit" style quiz */}
      <StyleQuiz />

      {/* 7. Brand philosophy */}
      <BrandStory />

      {/* 8. Launch cities */}
      <CitySpotlight />
    </div>
  );
}
