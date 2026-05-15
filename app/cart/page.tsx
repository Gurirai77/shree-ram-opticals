"use client";

import Link from "next/link";

import styles from "./Cart.module.css";

import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const { cartItems } = useCart();

  // TOTAL
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.heading}>
          <p>SHOPPING CART</p>

          <h1>Your Luxury Cart</h1>
        </div>

        {/* EMPTY */}
        {cartItems.length === 0 && (
          <div className={styles.empty}>
            <h2>
              Your cart is empty
            </h2>

            <Link href="/products">
              Continue Shopping
            </Link>
          </div>
        )}

        {/* PRODUCTS */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className={styles.card}
          >
            <div className={styles.left}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className={styles.content}>
                <p>{item.category}</p>

                <h3>{item.name}</h3>

                <span>
                  Premium handcrafted
                  luxury eyewear with
                  elegant modern styling.
                </span>
              </div>
            </div>

            <h2>
              ₹ {item.price}
            </h2>
          </div>
        ))}

        {/* TOTAL */}
        {cartItems.length > 0 && (
          <div className={styles.bottom}>
            <div>
              <p>Total Amount</p>

              <h3>
                ₹ {totalPrice}
              </h3>
            </div>

            <Link href="/checkout">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}