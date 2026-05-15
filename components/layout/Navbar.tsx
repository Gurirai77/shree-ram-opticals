"use client";

import { useState } from "react";

import styles from "./Navbar.module.css";

import {
  Menu,
  X,
  ShoppingBag,
} from "lucide-react";

export default function Navbar() {
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
          <a href="#">Eyeglasses</a>
          <a href="#">Sunglasses</a>
          <a href="#">Contact Lenses</a>
          <a href="#">Brands</a>
          <a href="#">Accessories</a>

          <a
            href="#"
            className={styles.offerLink}
          >
            Offers
          </a>
        </nav>

        {/* Right Icons */}
        <div className={styles.icons}>
          <button className={styles.cartButton}>
            <ShoppingBag size={22} />

            <span className={styles.cartCount}>
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${styles.mobileNav} ${
          open ? styles.showMenu : ""
        }`}
      >
        <a href="#">Eyeglasses</a>
        <a href="#">Sunglasses</a>
        <a href="#">Contact Lenses</a>
        <a href="#">Brands</a>
        <a href="#">Accessories</a>

        <a
          href="#"
          className={styles.offerLink}
        >
          Offers
        </a>
      </div>
    </header>
  );
}