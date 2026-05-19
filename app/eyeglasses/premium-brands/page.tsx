// premium-brands/page.tsx

import ProductGrid from "@/components/ProductGrid";

import { premiumCollection } from "@/data/eyeglasses/premiumCollection";

export default function PremiumBrandsPage() {
  return (
    <ProductGrid
      title="Premium Brands"
      products={premiumCollection}
    />
  );
}