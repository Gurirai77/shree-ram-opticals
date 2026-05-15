import Image from "next/image";
import styles from "./CategorySection.module.css";

const categories = [
  {
    id: 1,
    title: "Eyeglasses",
    subtitle: "Classic & Modern Frames",

    image: "/eyeglasses_premium.png",

    large: true,
  },

  {
    id: 2,
    title: "Sunglasses",
    subtitle: "Luxury Sun Protection",

    image: "/sunglasses_premium.png",
  },

  {
    id: 3,
    title: "Contact Lens",
    subtitle: "Comfort Vision",

    image: "/contact_lens_premium.png",
  },

  {
    id: 4,
    title: "Smart Glasses",
    subtitle: "Future Eyewear",

    image: "/smart_glasses_premium.png",

    large: true,
  },
];

export default function CategorySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p>PREMIUM COLLECTION</p>

          <h2>Find Your Perfect Style</h2>

          <span>
            Premium eyewear crafted for every look and lifestyle.
          </span>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {categories.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${item.large ? styles.largeCard : ""
                }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.content}>
                <p>{item.subtitle}</p>

                <h3>{item.title}</h3>

                <button>
                  Explore Collection
                  <span>→</span>
                </button>
              </div>

              {item.id === 2 && (
                <div className={styles.badge}>
                  NEW ARRIVAL
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}