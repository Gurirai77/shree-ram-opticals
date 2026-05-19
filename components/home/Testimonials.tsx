"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,

    name: "Rahul Mehta",

    city: "New Delhi",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",

    review:
      "The quality and finish of the eyewear feels incredibly premium. Easily the best eyewear experience I’ve had.",

    rating: "★★★★★",
  },

  {
    id: 2,

    name: "Priya Sharma",

    city: "Mumbai",

    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",

    review:
      "Absolutely in love with my new frames. Stylish, lightweight and super comfortable for daily use.",

    rating: "★★★★★",
  },

  {
    id: 3,

    name: "Aman Verma",

    city: "Chandigarh",

    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",

    review:
      "Premium packaging, smooth delivery and the frame quality exceeded my expectations completely.",

    rating: "★★★★★",
  },

  {
    id: 4,

    name: "Sneha Kapoor",

    city: "Delhi",

    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",

    review:
      "Elegant designs with luxury comfort. The sunglasses instantly upgraded my everyday style.",

    rating: "★★★★★",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="CustomerReviews" className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p>CUSTOMER REVIEWS</p>

          <h2>Loved By Thousands</h2>

          <span>
            Real stories from customers who trust
            Shree Ram Opticals.
          </span>
        </div>

        {/* Main Layout */}
        <div className={styles.grid}>
          {/* LEFT SIDE */}
          <div className={styles.leftSide}>
            <div className={styles.imageWrapper}>
              <img
                src="/revis.jpeg"
                alt="Luxury"
              />

              <div className={styles.overlay} />

              <div className={styles.leftContent}>
                <p>OUR PROMISE</p>

                <h3>
                  Quality You Can See.
                  <br />
                  Trust You Can Feel.
                </h3>

                <span>
                  Premium eyewear crafted with precision,
                  luxury and comfort for everyday elegance.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.rightSide}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className={styles.reviewCard}
              >
                {/* Stars */}
                <div className={styles.stars}>
                  {testimonials[active].rating}
                </div>

                {/* Review */}
                <p className={styles.review}>
                  “{testimonials[active].review}”
                </p>

                {/* User */}
                <div className={styles.user}>
                  <img
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                  />

                  <div>
                    <h4>
                      {testimonials[active].name}
                    </h4>

                    <span>
                      {testimonials[active].city}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className={styles.indicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={
                    active === index
                      ? styles.activeIndicator
                      : ""
                  }
                >
                  0{index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}