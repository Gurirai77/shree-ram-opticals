"use client";

import React from "react";

import Link from "next/link";

import styles from "./Brands.module.css";

interface BrandItem {
  id: number;

  name: string;

  tag: string;

  link: string;
}

const brandData: BrandItem[] = [
  {
    id: 1,

    name: "RAY-BAN",

    tag: "ICONIC STYLES",

    link: "/brands",
  },

  {
    id: 2,

    name: "OAKLEY",

    tag: "SPORTS PERFORMANCE",

    link: "/brands",
  },

  {
    id: 3,

    name: "GUCCI",

    tag: "HIGH FASHION",

    link: "/brands",
  },

  {
    id: 4,

    name: "DIOR",

    tag: "LUXURY EYEWEAR",

    link: "/brands",
  },

  {
    id: 5,

    name: "PRADA",

    tag: "MODERN ELEGANCE",

    link: "/brands",
  },

  {
    id: 6,

    name: "VERSACE",

    tag: "HIGH STYLE",

    link: "/brands",
  },
];

const Brands: React.FC = () => {

  // Infinite scroll
  const infiniteBrands = [
    ...brandData,
    ...brandData,
  ];

  return (
    <section id="Brands" className={styles.brandsSection}>

      <div className={styles.header}>

        <h2 className={styles.mainTitle}>
          EXPLORE OUR LUXURY BRANDS
        </h2>

      </div>

      <div className={styles.marqueeContainer}>

        <div className={styles.marqueeContent}>

          {infiniteBrands.map(
            (brand, index) => (

              <div
                key={`${brand.id}-${index}`}
                className={styles.brandCard}
              >

                <span className={styles.tag}>
                  {brand.tag}
                </span>

                <h3 className={styles.brandName}>
                  {brand.name}
                </h3>

              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;