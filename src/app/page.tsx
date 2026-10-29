import { products } from "@/data/products";
import { CategoryTiles } from "@/components/home/category-tiles";
import { HeroSection } from "@/components/home/hero-section";
import { ProductRow } from "@/components/home/product-row";
import { PromiseStrip } from "@/components/home/promise-strip";
import { ShopByActivity } from "@/components/home/shop-by-activity";
import { ShopYourShade } from "@/components/home/shop-your-shade";
import { GarmentAnatomy } from "@/components/home/garment-anatomy";
import { ShopBySize } from "@/components/home/shop-by-size";
import { BrandStory } from "@/components/home/brand-story";
import { StyleQuiz } from "@/components/home/style-quiz";
import { InstagramMosaic } from "@/components/home/instagram-mosaic";

// Founder's picks first, then the rest of the studio line, so the row is never short
const favourites = [...products.filter((p) => p.featured), ...products.filter((p) => !p.featured && !p.isNew)].slice(0, 8);
const newIn = products.filter((p) => p.isNew);

export default function Home() {
  return (
    <div className="w-full">
      <CategoryTiles />
      <HeroSection />
      <ProductRow title="Founder's Favourites" products={favourites} viewAllHref="/shop?category=favourites" />
      <PromiseStrip />
      <ShopByActivity />
      <ProductRow title="New in" products={newIn} viewAllHref="/shop?category=new" />
      <ShopYourShade />
      <GarmentAnatomy />
      <ShopBySize />
      <BrandStory />
      <StyleQuiz />
      <InstagramMosaic />
    </div>
  );
}
