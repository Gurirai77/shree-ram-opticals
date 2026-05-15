"use client";

import styles from "./HeroSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "./shree_ram_offer_desktop_1.png",
    link: "/eyeglasses",
  },

  {
    id: 2,
    image:
      "./shree_ram_offer_desktop_2.png",

    link: "/sunglasses",
  },

  {
    id: 3,
    image:
      "./shree_ram_offer_desktop_3.png",

    link: "/offers",
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
                <img
                  src={slide.image}
                  alt="Banner"
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}