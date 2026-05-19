import Link from "next/link";
import Image from "next/image";

import styles from "./ProductGrid.module.css";

export default function ProductGrid({
  title,
  products,
}: any) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {title}
        </h1>

        <div className={styles.grid}>
          {products.map((product: any) => (
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
                  className={styles.image}
                />
              </div>

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