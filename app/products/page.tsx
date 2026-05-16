import Link from "next/link";

import { products } from "@/data/products";

import styles from "./Products.module.css";

import Image from "next/image";

const collections = [
  {
    title: "Eyeglasses",

    subtitle:
      "Timeless premium frames for modern elegance.",

    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1400&auto=format&fit=crop",

    link: "/eyeglasses",
  },

  {
    title: "Sunglasses",

    subtitle:
      "Luxury sunglasses crafted for fashion and protection.",

    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1400&auto=format&fit=crop",

    link: "/sunglasses",
  },

  {
    title: "Contact Lenses",

    subtitle:
      "Ultra comfort lenses for crystal clear everyday vision.",

    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop",

    link: "/contact-lenses",
  },
];

export default function ProductsPage() {

  const featuredProducts =
    products.slice(0, 4);

  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.hero}>

        <div className={styles.overlay} />

        <img
          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Eyewear"
        />

        <div className={styles.heroContent}>

          <p>
            PREMIUM COLLECTION
          </p>

          <h1>
            Luxury Eyewear
            Collections
          </h1>

          <span>
            Explore handcrafted premium
            eyewear collections designed
            for timeless style, comfort
            and modern vision.
          </span>

        </div>
      </div>

      <div className={styles.container}>

        {/* COLLECTIONS */}
        <div className={styles.collectionsHeader}>

          <p>
            SHOP BY CATEGORY
          </p>

          <h2>
            Discover Your Style
          </h2>

        </div>

        <div className={styles.collectionsGrid}>

          {collections.map((item) => (

            <Link
              key={item.title}
              href={item.link}
              className={styles.collectionCard}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className={styles.collectionOverlay} />

              <div className={styles.collectionContent}>

                <p>
                  PREMIUM COLLECTION
                </p>

                <h3>
                  {item.title}
                </h3>

                <span>
                  {item.subtitle}
                </span>

                <button>
                  Explore Collection
                </button>

              </div>
            </Link>
          ))}
        </div>

        {/* FEATURED */}
        <div className={styles.featuredHeader}>

          <p>
            FEATURED PRODUCTS
          </p>

          <h2>
            Trending Luxury Picks
          </h2>

        </div>

        <div className={styles.grid}>

          {featuredProducts.map(
            (product) => (

              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className={styles.card}
              >

                <div className={styles.imageWrapper}>

                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className={styles.productImage}
                  />

                </div>

                <div className={styles.content}>

                  <p>
                    {product.category}
                  </p>

                  <h3>
                    {product.name}
                  </h3>

                  <span>
                    ₹ {product.price}
                  </span>

                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}