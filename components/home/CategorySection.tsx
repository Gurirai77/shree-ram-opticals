import styles from "./CategorySection.module.css";

const categories = [
  {
    id: 1,
    title: "Eyeglasses",
    subtitle: "Classic & Modern Frames",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    large: true,
  },

  {
    id: 2,
    title: "Sunglasses",
    subtitle: "Luxury Sun Protection",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Contact Lens",
    subtitle: "Comfort Vision",
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Smart Glasses",
    subtitle: "Future Eyewear",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop",
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
              className={`${styles.card} ${
                item.large ? styles.largeCard : ""
              }`}
            >
              <img src={item.image} alt={item.title} />

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