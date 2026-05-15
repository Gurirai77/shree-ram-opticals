"use client";

import styles from "./BrandsPage.module.css";

const brands = [
  {
    id: 1,
    name: "Ray Ban",
    tag: "ICONIC STYLE",
    image: "/brands/rayban.jpg",
  },

  {
    id: 2,
    name: "Gucci",
    tag: "HIGH FASHION",
    image: "/brands/gucci.jpg",
  },

  {
    id: 3,
    name: "Prada",
    tag: "MODERN ELEGANCE",
    image: "/brands/prada.jpg",
  },

  {
    id: 4,
    name: "Versace",
    tag: "LUXURY DESIGN",
    image: "/brands/versace.jpg",
  },

  {
    id: 5,
    name: "Dior",
    tag: "PREMIUM EYEWEAR",
    image: "/brands/dior.jpg",
  },

  {
    id: 6,
    name: "Tom Ford",
    tag: "TIMELESS LUXURY",
    image: "/brands/tomford.jpg",
  },
];

export default function BrandsPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Heading */}

        <div className={styles.heading}>
          <p>LUXURY COLLECTION</p>

          <h1>
            Explore Our Premium Brands
          </h1>

          <span>
            Discover world-class luxury
            eyewear crafted for elegance,
            comfort and timeless fashion.
          </span>
        </div>

        {/* Grid */}

        <div className={styles.grid}>
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={styles.card}
            >
              <img
                src={brand.image}
                alt={brand.name}
              />

              <div className={styles.overlay}>
                <p>{brand.tag}</p>

                <h2>{brand.name}</h2>

                <button>
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}