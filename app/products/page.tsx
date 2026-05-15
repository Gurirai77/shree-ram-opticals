import Link from "next/link";

import { products } from "@/data/products";

import styles from "./Products.module.css";

export default function ProductsPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p>PREMIUM COLLECTION</p>

          <h1>Luxury Eyewear Collection</h1>

          <span>
            Discover premium frames crafted for
            style, comfort and modern vision.
          </span>
        </div>

        {/* Products */}
        <div className={styles.grid}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={styles.card}
            >
              {/* Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <p>{product.category}</p>

                <h3>{product.name}</h3>

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