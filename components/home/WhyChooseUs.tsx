"use client";

import React from "react";

import Image from "next/image";

import styles from "./WhyChooseUs.module.css";

const WhyChooseUs: React.FC = () => {

  const cards = [
    {
      id: 1,

      title:
        "100% Authentic Products",

      desc:
        "We guarantee original branded eyewear with official packaging.",

      texture:
        "/authentic_products.png",

      icon: "🏆",
    },

    {
      id: 2,

      title: "Free Shipping",

      desc:
        "Enjoy free shipping on all orders across India with secure delivery.",

      texture:
        "/free_shipping.png",

      icon: "🚚",
    },

    {
      id: 3,

      title: "1 Year Warranty",

      desc:
        "All our products come with 1 year warranty for added peace of mind.",

      texture:
        "/warranty_peace.png",

      icon: "🛡️",
    },

    {
      id: 4,

      title: "Easy Returns",

      desc:
        "Hassle-free returns within 7 days if you're not satisfied.",

      texture:
        "/easy_returns.png",

      icon: "🔄",
    },
  ];

  return (
    <section id="WhyChooseUs" className={styles.section}>

      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.imageBlock}>

          <div className={styles.mainImgWrapper}>

            <Image
              src="/whychoseus.jpeg"
              alt="Premium Model"
              fill
              className={styles.mainImg}
            />

            <div className={styles.imageOverlay}>

              <span>
                OUR PROMISE
              </span>

              <h2>
                Style You Trust,
                <br />
                Service You Deserve.
              </h2>

              <div className={styles.goldLine}></div>

              <p>
                From authentic eyewear to
                exceptional service, we ensure
                a premium experience.
              </p>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.contentBlock}>

          <div className={styles.header}>

            <span className={styles.upperTitle}>
              Why Choose Us
            </span>

            <h2 className={styles.mainTitle}>
              Why Customers Love Us
            </h2>

            <p className={styles.subTitle}>
              Premium craftsmanship with trusted service.
            </p>

          </div>

          {/* GRID */}
          <div className={styles.grid}>

            {cards.map((card) => (

              <div
                key={card.id}
                className={styles.card}
              >

                <Image
                  src={card.texture}
                  alt={card.title}
                  fill
                  className={styles.cardBg}
                />

                <div className={styles.cardOverlay}></div>

                <div className={styles.cardContent}>

                  <div className={styles.iconBox}>
                    {card.icon}
                  </div>

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;