import Image from "next/image";

import Link from "next/link";

import styles from "./TrendingCollections.module.css";

export default function TrendingCollections() {

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.heading}>

          <p>
            TRENDING COLLECTIONS
          </p>

          <h2>
            Luxury Styles For Every Look
          </h2>

          <span>
            Discover premium eyewear
            crafted for modern fashion.
          </span>

        </div>

        {/* Layout */}
        <div className={styles.grid}>

          {/* Left Large Banner */}
          <Link
            href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.largeCard}
          >

            <Image
              src="/luxury_vision_modern.webp"
              alt="Luxury Eyewear"
              fill
              className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>

              <p>
                LUXURY VISION
              </p>

              <h3>
                Crafted For
                <br />
                Modern Style
              </h3>

              <button>
                Explore Collection

                <span>→</span>
              </button>

            </div>
          </Link>

          {/* Right Side */}
          <div className={styles.rightSide}>

            {/* Card 1 */}
            <Link
              href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.smallCard}
            >

              <Image
                src="/minimal_frames_elegance.webp"
                alt="Frames"
                fill
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.smallContent}>

                <p>
                  MINIMAL FRAMES
                </p>

                <h4>
                  Timeless Elegance
                </h4>

              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.smallCard}
            >

              <Image
                src="/premium_sunglasses_bold.webp"
                alt="Sunglasses"
                fill
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.smallContent}>

                <p>
                  PREMIUM SUNGLASSES
                </p>

                <h4>
                  Bold Luxury Looks
                </h4>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}