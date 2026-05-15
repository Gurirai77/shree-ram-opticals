import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "100% Authentic Products",
      desc: "We guarantee original branded eyewear with official packaging.",
      texture: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=500&auto=format&fit=crop", // White Marble
      icon: "🏆"
    },
    {
      id: 2,
      title: "Free Shipping",
      desc: "Enjoy free shipping on all orders across India with secure delivery.",
      texture: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=500&auto=format&fit=crop", // Green Malachite/Texture
      icon: "🚚"
    },
    {
      id: 3,
      title: "1 Year Warranty",
      desc: "All our products come with 1 year warranty for added peace of mind.",
      texture: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=500&auto=format&fit=crop", // Dark Stone/Marble
      icon: "🛡️"
    },
    {
      id: 4,
      title: "Easy Returns",
      desc: "Hassle-free returns within 7 days if you're not satisfied.",
      texture: "https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?q=80&w=500&auto=format&fit=crop", // Light Travertine
      icon: "🔄"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side: Main Feature Image */}
        <div className={styles.imageBlock}>
          <div className={styles.mainImgWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1614713568397-b31b779d0498?q=80&w=800&auto=format&fit=crop" 
              alt="Premium Model" 
              className={styles.mainImg}
            />
            <div className={styles.imageOverlay}>
              <span>OUR PROMISE</span>
              <h2>Style You Trust, <br/> Service You Deserve.</h2>
              <div className={styles.goldLine}></div>
              <p>From authentic eyewear to exceptional service, we ensure a premium experience.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Header & Grid */}
        <div className={styles.contentBlock}>
          <div className={styles.header}>
            <span className={styles.upperTitle}>Why Choose Us</span>
            <h2 className={styles.mainTitle}>Why Customers Love Us</h2>
            <p className={styles.subTitle}>Premium craftsmanship with trusted service.</p>
          </div>

          <div className={styles.grid}>
            {cards.map((card) => (
              <div key={card.id} className={styles.card} style={{ backgroundImage: `url(${card.texture})` }}>
                <div className={styles.cardOverlay}></div>
                <div className={styles.cardContent}>
                  <div className={styles.iconBox}>{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;