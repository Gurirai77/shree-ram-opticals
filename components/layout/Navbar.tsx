"use client";

import { useState } from "react";

import styles from "./Navbar.module.css";

import {
  Menu,
  X,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";


export default function Navbar() {

  const { totalItems } = useCart();
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenu}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

        {/* Logo */}
        <div className={styles.logo}>
          <h1>SHREE RAM</h1>
          <p>OPTICALS</p>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          <a href="#Home">
            Home
          </a>

          <a href="#COLLECTION">
            Collection
          </a>

          <a href="#WhyChooseUs">
            Why Choose Us
          </a>

          <a href="#CustomerReviews">
            Customer Reviews
          </a>

          <a href="#Brands">Brands</a>

          <a
            href="/#OurJourney"
            className={styles.offerLink}
          >
            Our Journey
          </a>
        </nav>

        {/* Right Icons */}
        {/* <div className={styles.icons}>
          <a
            href="/cart"
            className={`${styles.cartButton} ${totalItems > 0 ? styles.activeCart : ""
              }`}
          >
            <ShoppingBag size={22} />

            <span className={styles.cartCount}>
              {totalItems}
            </span>
          </a>
        </div> */}
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${styles.mobileNav} ${open ? styles.showMenu : ""
          }`}
      >
        <a
          href="#Home"
          onClick={() => setOpen(false)}
        >
          Home
        </a>

        <a
          href="#COLLECTION"
          onClick={() => setOpen(false)}
        >
          Collection
        </a>

        <a
          href="#WhyChooseUs"
          onClick={() => setOpen(false)}
        >
          Why Choose Us
        </a>

        <a
          href="#CustomerReviews"
          onClick={() => setOpen(false)}
        >
          Customer Reviews
        </a>
        <a
          href="#Brands"
          onClick={() => setOpen(false)}
        >
          Brands
        </a>

        <a
          href="/#OurJourney"
          className={styles.offerLink}
          onClick={() => setOpen(false)}
        >
          Our Journey
        </a>
      </div>
    </header>
  );
}