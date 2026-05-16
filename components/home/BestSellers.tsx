"use client";

import styles from "./BestSellers.module.css";

import Link from "next/link";

import Image from "next/image";

import {
  Plus,
} from "lucide-react";

import { products } from "@/data/products";

import { useCart } from "@/context/CartContext";

const tags = [
  "BEST SELLER",
  "NEW ARRIVAL",
  "TRENDING",
  "LIMITED",
];

export default function BestSellers() {

  const { addToCart } = useCart();

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.top}>

          <div>

            <p>
              BEST SELLERS
            </p>

            <h2>
              Our Most Loved Styles
            </h2>

            <span>
              Discover eyewear loved by
              thousands of customers.
            </span>

          </div>

          <Link
            href="/products"
            className={styles.viewBtn}
          >
            VIEW ALL COLLECTIONS →
          </Link>

        </div>

        {/* Products */}
        <div className={styles.grid}>

          {products.slice(0, 4).map(
            (item, index) => (

              <Link
                href={`/product/${item.id}`}
                className={styles.card}
                key={item.id}
              >

                {/* Image */}
                <div className={styles.imageWrapper}>

                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className={styles.image}
                  />

                  <div className={styles.tag}>
                    {tags[index]}
                  </div>

                </div>

                {/* Content */}
                <div className={styles.content}>

                  <p className={styles.category}>
                    {item.category}
                  </p>

                  <h3>
                    {item.name}
                  </h3>

                  <div className={styles.priceRow}>

                    <strong>
                      ₹ {item.price}
                    </strong>

                    <span>
                      ₹ {item.price + 2000}
                    </span>

                  </div>
                </div>

              </Link>
            ))}
        </div>

        {/* Bottom Banner */}
        <div className={styles.banner}>

          <Image
            src="/premium_banner.png"
            alt="Premium"
            fill
            className={styles.bannerImage}
          />

          <div className={styles.bannerOverlay} />

          <div className={styles.bannerContent}>

            <p>
              PREMIUM CRAFTSMANSHIP
            </p>

            <h3>
              Quality You Can Feel
            </h3>

            <span>
              Every frame is crafted
              with precision, passion
              and premium materials.
            </span>

          </div>

          <div className={styles.features}>

            <div>
              <h4>UV</h4>

              <p>
                Protection
              </p>
            </div>

            <div>
              <h4>
                Premium
              </h4>

              <p>
                Materials
              </p>
            </div>

            <div>
              <h4>
                1 Year
              </h4>

              <p>
                Warranty
              </p>
            </div>

            <div>
              <h4>
                Free
              </h4>

              <p>
                Shipping
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}