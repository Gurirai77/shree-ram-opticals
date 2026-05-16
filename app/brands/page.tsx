"use client";

import Image from "next/image";

import styles from "./BrandsPage.module.css";

const brands = [
  {
    id: 1,

    name: "Ray Ban",

    tag: "ICONIC STYLE",

    image: "/brands/rayban.png",
  },

  {
    id: 2,

    name: "Gucci",

    tag: "HIGH FASHION",

    image: "/brands/gucci.png",
  },

  {
    id: 3,

    name: "Prada",

    tag: "MODERN ELEGANCE",

    image: "/brands/prada.png",
  },

  {
    id: 4,

    name: "Versace",

    tag: "LUXURY DESIGN",

    image: "/brands/versace.png",
  },

  {
    id: 5,

    name: "Dior",

    tag: "PREMIUM EYEWEAR",

    image: "/brands/dior.png",
  },

  {
    id: 6,

    name: "Tom Ford",

    tag: "TIMELESS LUXURY",

    image: "/brands/tomford.png",
  },
];

export default function BrandsPage() {

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.heading}>

          <p>
            OUR BRANDS
          </p>

          <h1>
            Luxury Eyewear Brands
          </h1>

          <span>
            Explore premium global eyewear
            brands known for timeless style,
            innovation and luxury craftsmanship.
          </span>

        </div>

        {/* Grid */}
        <div className={styles.grid}>

          {brands.map((brand) => (

            <div
              key={brand.id}
              className={styles.card}
            >

              <div className={styles.imageWrapper}>

                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className={styles.image}
                />

              </div>

              <div className={styles.overlay}>

                <p>
                  {brand.tag}
                </p>

                <h2>
                  {brand.name}
                </h2>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}