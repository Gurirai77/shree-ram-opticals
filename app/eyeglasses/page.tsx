import Link from "next/link";

import { products } from "@/data/products";

import styles from "./Eyeglasses.module.css";
import Image from "next/image";

export default function EyeglassesPage() {

  const eyewearProducts =
    products.filter(
      (item) =>
        item.category ===
        "Eyeglasses"
    );

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

          <p>
            PREMIUM COLLECTION
          </p>

          <h1>
            Luxury Eyeglasses
          </h1>

          <span>
            Timeless frames crafted
            for modern elegance and
            crystal clear vision.
          </span>

        </div>
      </div>

      {/* PRODUCTS */}
      <div className={styles.container}>

        <div className={styles.grid}>

          {eyewearProducts.map(
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

                <h4>
                  ₹ {product.price}
                </h4>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}