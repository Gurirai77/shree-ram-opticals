// brand-collection/page.tsx

import ProductGrid from "@/components/ProductGrid";

import { brandCollection } from "@/data/eyeglasses/brandCollection";

export default function BrandCollectionPage() {
  return (
    <ProductGrid
      title="Brand Collection"
      products={brandCollection}
    />
  );
}