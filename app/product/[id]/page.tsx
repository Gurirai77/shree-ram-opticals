"use client";
import { products } from "@/data/products";

import styles from "./ProductDetails.module.css";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetailsPage() {

    const params = useParams();

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
                                onClick={() => addToCart(product)}
                            >
                                Add To Cart
                            </button>

                            <Link
                                href="/checkout"
                                className={styles.buyBtn}
                            >
                                Order Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}