import styles from "./Checkout.module.css";

export default function CheckoutPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          {/* Heading */}
          <div className={styles.heading}>
            <p>CHECKOUT</p>

            <h1>Complete Your Order</h1>

            <span>
              Fill in your details and continue
              your order directly on WhatsApp.
            </span>
          </div>

          {/* Form */}
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Address</label>

              <textarea
                placeholder="Enter your address"
              />
            </div>

            <a
              href="https://wa.me/917206881771"
              target="_blank"
              className={styles.button}
            >
              Continue on WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}