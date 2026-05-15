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
          <a href="/eyeglasses">
            Eyeglasses
          </a>

          <a href="/sunglasses">
            Sunglasses
          </a>

          <a href="/contact-lenses">
            Contact Lenses
          </a>

          <a href="/brands">Brands</a>

          <a href="/accessories">
            Accessories
          </a>

          <a
            href="/offers"
            className={styles.offerLink}
          >
            Offers
          </a>
        </nav>

        {/* Right Icons */}
        <div className={styles.icons}>
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
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${styles.mobileNav} ${open ? styles.showMenu : ""
          }`}
      >
        <a href="/eyeglasses">
          Eyeglasses
        </a>

        <a href="/sunglasses">
          Sunglasses
        </a>

        <a href="/contact-lenses">
          Contact Lenses
        </a>

        <a href="/brands">Brands</a>

        <a href="/accessories">
          Accessories
        </a>

        <a
          href="/offers"
          className={styles.offerLink}
        >
          Offers
        </a>
      </div>
    </header>
  );
}