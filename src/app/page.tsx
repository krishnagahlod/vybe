import { getProductBySlug } from "@/data/products";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { ProductRow } from "@/components/home/product-row";
import { ShopByActivity } from "@/components/home/shop-by-activity";
import { ShopBySize } from "@/components/home/shop-by-size";
import { StyleQuiz } from "@/components/home/style-quiz";
import { BrandStory } from "@/components/home/brand-story";
import { InstagramMosaic } from "@/components/home/instagram-mosaic";

const bySlug = (slugs: string[]) => slugs.map(getProductBySlug).filter((p) => p !== undefined);

const heroProducts = bySlug(["built-in-bra-tank", "no-lines-legging", "strappy-back-sports-bra", "baseline-skort"]);

const newDrop = bySlug([
  "stripe-track-jacket",
  "zebra-seamless-set",
  "side-stripe-track-pants",
  "retro-stripe-set",
  "pinstripe-half-zip",
  "sunshine-tank-set",
  "tiger-bloom-track-set",
  "halter-ruched-set",
  "scoop-wide-leg-set",
  "ombre-run-shorts",
]);

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <MarqueeStrip />
      <ProductRow title="Fit, built in" products={heroProducts} viewAllHref="/shop" />
      <StyleQuiz />
      <ProductRow title="The new drop" products={newDrop} viewAllHref="/shop?category=new" />
      <ShopByActivity />
      <ShopBySize />
      <BrandStory />
      <InstagramMosaic />
    </div>
  );
}
