// app/eyeglasses/home-collection/page.tsx

import ProductGrid from "@/components/ProductGrid";

import { homeCollection } from "@/data/eyeglasses/homeCollection";

export default function HomeCollectionPage() {
  return (
    <ProductGrid
      title="Home Collection"
      products={homeCollection}
    />
  );
}