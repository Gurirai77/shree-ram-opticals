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
          <button>Online Order</button>
          <button>Visit Store</button>
        </div>
      </div>
    </div>
  );
}