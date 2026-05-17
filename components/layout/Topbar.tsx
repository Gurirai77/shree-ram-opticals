import Link from "next/link";
import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <p className={styles.leftText}>
          Premium Eyewear Collection
        </p>

        <p className={styles.centerText}>
          <Link href="/offers" className={styles.offerLink}>
            Flat 25% OFF on Sunglasses
          </Link>
        </p>

        <div className={styles.rightSection}>
          <Link href="/products">
            <button>
              Online Order
            </button>
          </Link>
          <a
            href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitBtn}
          >
            Visit Store
          </a>
        </div>
      </div>
    </div>
  );
}