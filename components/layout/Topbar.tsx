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
          Flat 25% OFF on Sunglasses
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