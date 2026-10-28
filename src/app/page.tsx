import { HeroSection } from "@/components/home/hero-section";
import { ShopByActivity } from "@/components/home/shop-by-activity";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FlareEdit } from "@/components/home/flare-edit";
import { MadeForYou } from "@/components/home/made-for-you";
import { GarmentAnatomy } from "@/components/home/garment-anatomy";
import { StudioToStreet } from "@/components/home/studio-to-street";
import { ShopBySize } from "@/components/home/shop-by-size";
import { StyleQuiz } from "@/components/home/style-quiz";
import { BrandStory } from "@/components/home/brand-story";
import { CitySpotlight } from "@/components/home/city-spotlight";
import { InstagramMosaic } from "@/components/home/instagram-mosaic";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero with lifestyle proposition & primary CTA */}
      <HeroSection />

      {/* 2. Discovery by activity */}
      <ShopByActivity />

      {/* 3. Founder's favourites with quick-add */}
      <FeaturedProducts />

      {/* 3b. New launch: the Flare Edit */}
      <FlareEdit />

      {/* 4. Fit for Indian bodies: leg lengths and core fabrics */}
      <MadeForYou />

      {/* 5. Interactive fit & fabric close-up */}
      <GarmentAnatomy />

      {/* 6. Studio-to-street lifestyle band */}
      <StudioToStreet />

      {/* 7. Shop by size */}
      <ShopBySize />

      {/* 8. "Find your fit" style quiz */}
      <StyleQuiz />

      {/* 9. Brand philosophy */}
      <BrandStory />

      {/* 10. Launch cities */}
      <CitySpotlight />

      {/* 11. Instagram */}
      <InstagramMosaic />
    </div>
  );
}
