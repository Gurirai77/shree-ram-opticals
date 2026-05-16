import Link from "next/link";

import { products } from "@/data/products";

import styles from "./Offers.module.css";

const offers = [
  {
    title: "BUY 1 GET 1",

    desc:
      "Purchase premium frames and get another pair absolutely free.",

    tag: "LIMITED TIME",
  },

  {
    title: "FLAT 20% OFF",

    desc:
      "Luxury eyewear collection now available at exclusive prices.",

    tag: "HOT DEAL",
  },

  {
    title: "FREE LENS UPGRADE",

    desc:
      "Get premium anti-glare lenses on selected frames.",

    tag: "PREMIUM",
  },

  {
    title: "FREE EYE CHECKUP",

    desc:
      "Complimentary professional eye testing with every purchase.",

    tag: "EXCLUSIVE",
  },
];

export default function OffersPage() {

  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.hero}>

        <div className={styles.overlay} />

        <img
          src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1600&auto=format&fit=crop"
          alt="Offers"
        />

        <div className={styles.heroContent}>

          <p>
            PREMIUM FESTIVAL SALE
          </p>

          <h1>
            Up To 40% OFF
          </h1>

          <span>
            Luxury eyewear offers crafted
            for style, comfort and premium
            vision experiences.
          </span>

        </div>
      </div>

      <div className={styles.container}>

        {/* OFFERS */}
        <div className={styles.offerGrid}>

          {offers.map((item) => (

            <div
              key={item.title}
              className={styles.offerCard}
            >

              <span className={styles.badge}>
                {item.tag}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className={styles.productsHeader}>

          <p>
            TRENDING DEALS
          </p>

          <h2>
            Featured Luxury Offers
          </h2>

        </div>

        <div className={styles.grid}>

          {products.slice(0, 4).map(
            (product) => (

              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className={styles.card}
              >

                <div className={styles.imageWrapper}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                  />
                </div>

                <div className={styles.content}>

                  <p>
                    {product.category}
                  </p>

                  <h3>
                    {product.name}
                  </h3>

                  <div className={styles.priceRow}>

                    <span>
                      ₹ {product.price}
                    </span>

                    <small>
                      20% OFF
                    </small>

                  </div>

                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}