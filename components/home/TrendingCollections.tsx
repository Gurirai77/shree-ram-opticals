import styles from "./TrendingCollections.module.css";

export default function TrendingCollections() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p>TRENDING COLLECTIONS</p>

          <h2>Luxury Styles For Every Look</h2>

          <span>
            Discover premium eyewear crafted for modern fashion.
          </span>
        </div>

        {/* Layout */}
        <div className={styles.grid}>
          {/* Left Large Banner */}
          <div className={styles.largeCard}>
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Eyewear"
            />

            <div className={styles.overlay} />

            <div className={styles.content}>
              <p>LUXURY VISION</p>

              <h3>
                Crafted For <br /> Modern Style
              </h3>

              <button>
                Explore Collection
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className={styles.rightSide}>
            {/* Card 1 */}
            <div className={styles.smallCard}>
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop"
                alt="Frames"
              />

              <div className={styles.overlay} />

              <div className={styles.smallContent}>
                <p>MINIMAL FRAMES</p>

                <h4>Timeless Elegance</h4>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.smallCard}>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
                alt="Sunglasses"
              />

              <div className={styles.overlay} />

              <div className={styles.smallContent}>
                <p>PREMIUM SUNGLASSES</p>

                <h4>Bold Luxury Looks</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}