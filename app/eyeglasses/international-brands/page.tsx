// international-brands/page.tsx

import ProductGrid from "@/components/ProductGrid";

import { internationalCollection } from "@/data/eyeglasses/internationalCollection";

export default function InternationalBrandsPage() {
  return (
    <ProductGrid
      title="International Brands"
      products={internationalCollection}
    />
  );
}