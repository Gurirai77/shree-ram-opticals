import styles from "./BestSellers.module.css";
import { Heart, Plus, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    tag: "BEST SELLER",
    category: "EYEGLASSES",
    name: "Classic Acetate Frame",
    price: "₹4,999",
    oldPrice: "₹7,499",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    tag: "NEW",
    category: "RIMLESS",
    name: "Titanium Rimless Pro",
    price: "₹6,499",
    oldPrice: "₹9,499",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    tag: "BEST SELLER",
    category: "SUNGLASSES",
    name: "Aviator Polarized",
    price: "₹5,499",
    oldPrice: "₹8,499",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    tag: "NEW",
    category: "EYEGLASSES",
    name: "Minimal Gold Frame",
    price: "₹4,299",
    oldPrice: "₹6,499",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BestSellers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.top}>
          <div>
            <p>BEST SELLERS</p>

            <h2>Our Most Loved Styles</h2>

            <span>
              Discover eyewear loved by thousands of customers.
            </span>
          </div>

          <button>
            VIEW ALL COLLECTIONS →
          </button>
        </div>

        {/* Products */}
        <div className={styles.grid}>
          {products.map((item) => (
            <div className={styles.card} key={item.id}>
              {/* Top */}
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.name} />

                <div className={styles.tag}>
                  {item.tag}
                </div>

                <button className={styles.wishlist}>
                  <Heart size={18} />
                </button>

                <button className={styles.quickView}>
                  <Eye size={16} />
                  QUICK VIEW
                </button>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <p className={styles.category}>
                  {item.category}
                </p>

                <h3>{item.name}</h3>

                <div className={styles.rating}>
                  ⭐⭐⭐⭐⭐
                  <span>({item.rating})</span>
                </div>

                <div className={styles.priceRow}>
                  <div>
                    <strong>{item.price}</strong>

                    <span>{item.oldPrice}</span>
                  </div>

                  <button className={styles.addBtn}>
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className={styles.banner}>
          <img
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1400&auto=format&fit=crop"
            alt="Premium"
          />

          <div className={styles.bannerOverlay} />

          <div className={styles.bannerContent}>
            <p>PREMIUM CRAFTSMANSHIP</p>

            <h3>Quality You Can Feel</h3>

            <span>
              Every frame is crafted with precision,
              passion and premium materials.
            </span>
          </div>

          <div className={styles.features}>
            <div>
              <h4>UV</h4>
              <p>Protection</p>
            </div>

            <div>
              <h4>Premium</h4>
              <p>Materials</p>
            </div>

            <div>
              <h4>1 Year</h4>
              <p>Warranty</p>
            </div>

            <div>
              <h4>Free</h4>
              <p>Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}