"use client";

import styles from "./HeroSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/ultra_premium_banner_1.png",
    link: "/products",
  },

  {
    id: 2,
    image: "/ultra_premium_banner_2.png",
    link: "/product/rayban-black-frame",
  },

  {
    id: 3,
    image: "/ultra_premium_banner_3.png",
    link: "/products",
  },
];

export default function HeroSlider() {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[
          Autoplay,
          Pagination,
        ]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a
              href={slide.link}
              className={styles.bannerLink}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.image}
                  alt="Banner"
                  fill
                  className={styles.bannerImage}
                  priority
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}