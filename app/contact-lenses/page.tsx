import Link from "next/link";

import { products } from "@/data/products";

import styles from "./ContactLenses.module.css";

export default function ContactLensesPage() {

    const contactLensProducts =
        products.filter(
            (item) =>
                item.category === "Contact Lens"
        );

    return (
        <section className={styles.section}>

            {/* HERO */}
            <div className={styles.hero}>

                <div className={styles.overlay} />

                <img
                    src="https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/16905012/2025/5/24/04020bd5-a154-4454-9dbc-0e240f3eb03b1748094600530-Voyage-Unisex-Black-Lens--Silver-Toned-Round-Sunglasses-with-1.jpg"
                    alt="Contact Lenses"
                />

                <div className={styles.heroContent}>

                    <p>
                        PREMIUM COLLECTION
                    </p>

                    <h1>
                        Premium Contact Lenses
                    </h1>

                    <span>
                        Experience crystal clear
                        vision with ultra-comfortable
                        contact lenses designed for
                        everyday confidence.
                    </span>

                </div>
            </div>

            {/* PRODUCTS */}
            <div className={styles.container}>

                <div className={styles.grid}>

                    {contactLensProducts.map(
                        (product) => (

                            <Link
                                key={product.id}
                                href={`/product/${product.id}`}
                                className={styles.card}
                            >

                                <div className={styles.imageWrapper}>
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                    />
                                </div>

                                <div className={styles.content}>

                                    <p>
                                        {product.category}
                                    </p>

                                    <h3>
                                        {product.name}
                                    </h3>

                                    <h4>
                                        ₹ {product.price}
                                    </h4>

                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </section>
    );
}