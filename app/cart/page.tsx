import Link from "next/link";

import styles from "./Cart.module.css";

export default function CartPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p>SHOPPING CART</p>

          <h1>Your Luxury Cart</h1>
        </div>

        {/* Cart Card */}
        <div className={styles.card}>
          <div className={styles.left}>
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop"
              alt="Product"
            />

            <div className={styles.content}>
              <p>Premium Eyeglasses</p>

              <h3>Rayban Black Frame</h3>

              <span>
                Luxury handcrafted frame with
                premium finish.
              </span>
            </div>
          </div>

          <h2>₹ 4999</h2>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <div>
            <p>Total Amount</p>

            <h3>₹ 4999</h3>
          </div>

          <Link href="/checkout">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}