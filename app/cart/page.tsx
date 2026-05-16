"use client";

import Link from "next/link";

import styles from "./Cart.module.css";

import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartPage() {

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    // TOTAL
    const totalPrice = cartItems.reduce(
        (acc, item) =>
            acc +
            item.price * item.quantity,

        0
    );



    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Heading */}
                <div className={styles.heading}>
                    <p>SHOPPING CART</p>

                    <h1>Your Luxury Cart</h1>
                </div>

                {/* EMPTY */}
                {cartItems.length === 0 && (
                    <div className={styles.empty}>
                        <h2>
                            Your cart is currently empty
                        </h2>

                        <Link href="/products">
                            Go To Shop
                        </Link>
                    </div>
                )}

                {/* PRODUCTS */}
                {cartItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={styles.card}
                    >
                        <div className={styles.left}>
                            <img
                                src={item.images[0]}
                                alt={item.name}
                            />

                            <div className={styles.content}>
                                <p>{item.category}</p>

                                <h3>{item.name}</h3>

                                <div className={styles.quantityBox}>

                                    <button
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                    >
                                        -
                                    </button>

                                    <span>
                                        Qty: {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                                <span>
                                    Premium handcrafted
                                    luxury eyewear with
                                    elegant modern styling.
                                </span>
                            </div>
                        </div>

                        <h2>
                            ₹ {item.price * item.quantity}
                        </h2>
                        <button
                            className={styles.removeBtn}
                            onClick={() =>
                                removeFromCart(index)
                            }
                        >
                            <Trash2 size={18} />
                        </button>

                    </div>
                ))}

                {/* TOTAL */}
                {cartItems.length > 0 && (
                    <div className={styles.bottom}>
                        <div>
                            <p>Total Amount</p>

                            <h3>
                                ₹ {totalPrice}
                            </h3>
                        </div>

                        <Link href="/checkout">
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}