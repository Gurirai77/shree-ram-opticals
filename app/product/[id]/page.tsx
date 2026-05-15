"use client";
import { products } from "@/data/products";

import styles from "./ProductDetails.module.css";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { useState } from "react";

export default function ProductDetailsPage() {

    const params = useParams();

    const [showModal, setShowModal] =
        useState(false);

    const router = useRouter();

    const { addToCart } = useCart();

    const id = params.id as string;

    const product = products.find(
        (item) => item.id === id
    );

    if (!product) {
        return <div>Product Not Found</div>;
    }

    const whatsappMessage =
        `I want to order ${product.name}`;

    const categoryPath = `/${product.category.toLowerCase()}`;

    // const categoryPath = "/products";

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Image */}
                    <div className={styles.imageWrapper}>
                        <img
                            src={product.image}
                            alt={product.name}
                        />
                    </div>

                    {/* Content */}
                    <div className={styles.content}>
                        <p>{product.category}</p>

                        <h1>{product.name}</h1>

                        <h2>₹ {product.price}</h2>

                        <span>
                            Premium handcrafted luxury eyewear
                            designed for modern comfort,
                            timeless elegance and crystal
                            clear vision.
                        </span>

                        <div className={styles.buttons}>
                            <button
                                className={styles.cartBtn}
                                onClick={() => {

                                    addToCart(product);

                                    setShowModal(true);
                                }}
                            >
                                Add To Cart
                            </button>

                            <button
                                className={styles.buyBtn}
                                onClick={() => {

                                    setShowModal(false);

                                    router.push(categoryPath);
                                }}
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
                {showModal && (
                    <div className={styles.modalOverlay}>

                        <div className={styles.modal}>

                            <div className={styles.checkIcon}>
                                <Check size={34} />
                            </div>

                            <h3>
                                Product Added
                            </h3>

                            <p>
                                Your premium eyewear has
                                been added to cart.
                            </p>

                            <div className={styles.modalButtons}>

                                <button
                                    onClick={() => {

                                        setShowModal(false);

                                        router.push(categoryPath);
                                    }}
                                    className={styles.continueBtn}
                                >
                                    Continue Shopping
                                </button>

                                <button
                                    onClick={() =>
                                        router.push("/cart")
                                    }
                                    className={styles.checkoutBtn}
                                >
                                    Go To Cart
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}