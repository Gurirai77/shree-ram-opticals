import styles from "./OurJourney.module.css";
import {
  Store,
  Users,
  Glasses,
  ShoppingCart,
  Globe,
} from "lucide-react";

const timeline = [
  {
    year: "1989",
    title: "Founded in Sirsa",
    text: "Started with a vision to provide premium eyewear for every generation.",
    icon: <Store size={22} />,
  },

  {
    year: "2000",
    title: "Premium Lens Expansion",
    text: "Expanded our lens technology and introduced high-performance lenses.",
    icon: <Glasses size={22} />,
  },

  {
    year: "2010",
    title: "Luxury Collection Launch",
    text: "Introduced premium international eyewear collections.",
    icon: <Users size={22} />,
  },

  {
    year: "2018",
    title: "Multi Store Presence",
    text: "Expanded across multiple cities with luxury experience stores.",
    icon: <ShoppingCart size={22} />,
  },

  {
    year: "2026",
    title: "Modern Ecommerce Launch",
    text: "Launched digital shopping experience for customers nationwide.",
    icon: <Globe size={22} />,
  },
];

export default function OurJourney() {
  return (
    <section id="OurJourney" className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p>OUR JOURNEY</p>

          <h2>A Legacy Built on Vision</h2>

          <span>
            From a small beginning to becoming a trusted
            premium eyewear destination.
          </span>
        </div>

        {/* Main Layout */}
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.leftCard}>
            <img
              src="/storefront_vertical.webp"
              alt="Journey"
            />

            <div className={styles.overlay} />

            <div className={styles.leftContent}>
              <p>CELEBRATING</p>

              <h3>50+</h3>

              <h4>Years of Trusted Vision</h4>

              <span>
                Half a century of innovation,
                craftsmanship and luxury eyewear experience.
              </span>

              {/* Stats */}
              <div className={styles.stats}>
                <div>
                  <strong>60+</strong>
                  <p>Stores</p>
                </div>

                <div>
                  <strong>2M+</strong>
                  <p>Customers</p>
                </div>

                <div>
                  <strong>5000+</strong>
                  <p>Styles</p>
                </div>
              </div>

              <button>
                Discover Our Story →
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div className={styles.timelineItem} key={index}>
                {/* Year */}
                <div className={styles.year}>
                  <span>{item.year}</span>
                </div>

                {/* Line */}
                <div className={styles.lineWrapper}>
                  <div className={styles.dot} />

                  {index !== timeline.length - 1 && (
                    <div className={styles.line} />
                  )}
                </div>

                {/* Card */}
                <div className={styles.card}>
                  <div className={styles.icon}>
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>

                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}