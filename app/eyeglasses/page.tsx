import Link from "next/link";
import Image from "next/image";

import styles from "./Eyeglasses.module.css";

import { homeCollection } from "@/data/eyeglasses/homeCollection";
import { brandCollection } from "@/data/eyeglasses/brandCollection";
import { premiumCollection } from "@/data/eyeglasses/premiumCollection";
import { internationalCollection } from "@/data/eyeglasses/internationalCollection";

const categories = [
  {
    title: "Home Collection",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    slug: "home-collection",
    data: homeCollection,
  },
  {
    title: "Brand Collection",
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200&auto=format&fit=crop",
    slug: "brand-collection",
    data: brandCollection,
  },
  {
    title: "Premium Brands",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
    slug: "premium-brands",
    data: premiumCollection,
  },
  {
    title: "International Brands",
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1200&auto=format&fit=crop",
    slug: "international-brands",
    data: internationalCollection,
  },
];

export default function EyeglassesPage() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.overlay} />

        <img
          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1400&auto=format&fit=crop"
          alt="Eyeglasses"
        />

        <div className={styles.heroContent}>
          <p>PREMIUM COLLECTION</p>

          <h1>Luxury Eyeglasses</h1>

          <span>
            Timeless frames crafted for modern elegance and crystal clear
            vision.
          </span>
        </div>
      </div>

      {/* CATEGORY POSTERS */}
      <div className={styles.container}>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/eyeglasses/${category.slug}`}
              className={styles.categoryCard}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className={styles.categoryImage}
                />

                <div className={styles.categoryOverlay} />

                <div className={styles.categoryContent}>
                  <p>Explore Collection</p>

                  <h2>{category.title}</h2>

                  <span>
                    {category.data.length} Products
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}