"use client";

import { useState } from "react";

import styles from "./Checkout.module.css";

import { useCart } from "@/context/CartContext";

import {
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function CheckoutPage() {

  const { cartItems } = useCart();


  const [showSuccess, setShowSuccess] =
    useState(false);

  const [paymentDone, setPaymentDone] =
    useState(false);

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [payment, setPayment] =
    useState("Cash On Delivery");

  // TOTAL
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity,

    0
  );

  // PRODUCTS TEXT
  const productsText = cartItems
    .map(
      (item) =>
        `• ${item.name}
Qty: ${item.quantity}
- ₹${item.price * item.quantity}`
    )
    .join("\n");

  const isFormValid =

    name.trim() !== "" &&

    phone.trim() !== "" &&

    address.trim() !== "" &&

    payment.trim() !== "";

  // WHATSAPP MESSAGE
  const whatsappMessage =


    `

  
✨ NEW ORDER

👤 Name: ${name}

📞 Phone: ${phone}

📍 Address:
${address}

💳 Payment:
${payment}

🛍 Products:
${productsText}

💰 Total:
₹${totalPrice}
`;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          {/* Heading */}
          <div className={styles.heading}>
            <p>CHECKOUT</p>

            <h1>
              Complete Your Order
            </h1>

            <span>
              Fill in your details and
              confirm your premium order.
            </span>
          </div>

          {/* PRODUCTS */}
          <div className={styles.products}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={styles.product}
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>

                  <span>
                    Qty: {item.quantity}
                  </span>

                  <p>
                    ₹ {item.price * item.quantity}
                  </p>


                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className={styles.totalBox}>
            <span>Total Amount</span>

            <h2>₹ {totalPrice}</h2>
          </div>

          {/* FORM */}
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <label>
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                  )
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <label>
                Address
              </label>

              <textarea
                placeholder="Enter your address"
                value={address}
                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }
              />
            </div>

            <div className={styles.paymentOptions}>

              {/* COD */}
              <div
                className={`${styles.paymentCard} ${payment ===
                  "Cash On Delivery"
                  ? styles.activePayment
                  : ""
                  }`}
                onClick={() =>
                  setPayment(
                    "Cash On Delivery"
                  )
                }
              >

                <div className={styles.radioCircle}>
                  {payment ===
                    "Cash On Delivery" && (
                      <div className={styles.radioDot} />
                    )}
                </div>

                <div>

                  <h4>
                    Cash On Delivery
                  </h4>

                  <p>
                    Pay when your order arrives
                  </p>

                </div>
              </div>

              {/* ONLINE */}
              <div
                className={`${styles.paymentCard} ${payment ===
                  "Online Payment"
                  ? styles.activePayment
                  : ""
                  }`}
                onClick={() =>
                  setPayment(
                    "Online Payment"
                  )
                }
              >

                <div className={styles.radioCircle}>
                  {payment ===
                    "Online Payment" && (
                      <div className={styles.radioDot} />
                    )}
                </div>

                <div>

                  <h4>
                    Online Payment
                  </h4>

                  <p>
                    Secure online transaction
                  </p>

                </div>
              </div>

            </div>

            {payment === "Online Payment" && (
              <div className={styles.onlinePaymentBox}>

                <a
                  href="https://razorpay.me/@shreeramopticals"
                  target="_blank"
                  className={styles.payNowBtn}
                >
                  Pay Now
                </a>

                <button
                  type="button"
                  className={styles.paymentDoneBtn}
                  onClick={() => setPaymentDone(true)}
                >
                  I Have Paid
                </button>

              </div>
            )}

            {showSuccess && (

              <div className={styles.successToast}>

                <div className={styles.successIcon}>
                  ✓
                </div>

                <div>

                  <h4>
                    Order Confirmed
                  </h4>

                  <p>
                    Your premium order has been received successfully.
                  </p>

                </div>
              </div>
            )}

            {/* BUTTON */}
            {/* ACTIONS */}
            <div className={styles.actionButtons}>

              {/* FAST TAG */}
              <div className={styles.fastTag}>
                ⚡ Very Fast Confirmation
              </div>

              {/* WHATSAPP BUTTON */}
              <button
                type="button"
                disabled={
                  !isFormValid ||
                  (payment === "Online Payment" && !paymentDone)
                }
                className={styles.button}
                onClick={() => {

                  window.open(
                    `https://wa.me/917206881771?text=${encodeURIComponent(
                      whatsappMessage
                    )}`,
                    "_blank"
                  );

                  // CLEAR INPUTS
                  setName("");

                  setPhone("");

                  setAddress("");

                  setPayment(
                    "Cash On Delivery"
                  );

                  // SUCCESS TOAST
                  setShowSuccess(true);

                  setTimeout(() => {
                    setShowSuccess(false);
                  }, 3000);

                }}
              >

                <MessageCircle size={20} />

                Confirm Order On WhatsApp

              </button>

              {/* SECOND BUTTON */}
             <button
  type="button"
  className={styles.secondaryBtn}

  disabled={
    payment === "Online Payment" &&
    !paymentDone
  }

  onClick={() => {

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

  }}
>

                <CheckCircle2 size={18} />

                Confirm Order

              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}