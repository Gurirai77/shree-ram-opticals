"use client";

import { useState } from "react";

import styles from "./Checkout.module.css";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {

  const { cartItems } = useCart();

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
                  src={item.image}
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

            <div className={styles.inputGroup}>
              <label>
                Payment Method
              </label>

              <select
                value={payment}
                onChange={(e) =>
                  setPayment(
                    e.target.value
                  )
                }
              >
                <option>
                  Cash On Delivery
                </option>

                <option>
                  Online Payment
                </option>
              </select>
            </div>

            {/* BUTTON */}
            <a
              href={`https://wa.me/917206881771?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              className={styles.button}
            >
              Confirm Order
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}