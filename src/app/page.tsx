import { getProductBySlug } from "@/data/products";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { ProductRow } from "@/components/home/product-row";
import { ShopByPrint } from "@/components/home/shop-by-print";
import { ShopByActivity } from "@/components/home/shop-by-activity";
import { ShopBySize } from "@/components/home/shop-by-size";
import { StyleQuiz } from "@/components/home/style-quiz";
import { BrandStory } from "@/components/home/brand-story";
import { InstagramMosaic } from "@/components/home/instagram-mosaic";

const heroProducts = ["motion-racerback-tank", "flow-high-rise-leggings", "studio-support-bra", "baseline-skort"]
  .map(getProductBySlug)
  .filter((p) => p !== undefined);

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <MarqueeStrip />
      <ProductRow title="Fit, built in" products={heroProducts} viewAllHref="/shop" />
      <ShopByPrint />
      <ShopByActivity />
      <ShopBySize />
      <StyleQuiz />
      <BrandStory />
      <InstagramMosaic />
    </div>
  );
}
