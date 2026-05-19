"use client";
import styles from "./Footer.module.css";

import {
    Phone,
    Mail,
    MapPin,
    ArrowUp,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Newsletter */}
                <div className={styles.newsletter}>
                    {/* Left */}
                    <div className={styles.newsLeft}>
                        <p>JOIN THE VISION CLUB</p>

                        <h2>
                            Get Premium Style
                            <br />
                            Updates & Offers
                        </h2>

                        <span>
                            Discover exclusive collections,
                            luxury launches and premium eyewear trends.
                        </span>
                    </div>

                    {/* Right */}
                    <div className={styles.newsRight}>
                        <div className={styles.inputBox}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                            />

                            <button>
                                SUBSCRIBE →
                            </button>
                        </div>

                        <div className={styles.features}>
                            <div>
                                ✦ Exclusive Offers
                            </div>

                            <div>
                                ✦ New Arrivals
                            </div>

                            <div>
                                ✦ VIP Access
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}>
                    <span>SR</span>
                </div>

                {/* Main Footer */}
                <div className={styles.mainFooter}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <h2>
                            SHREE RAM
                            <br />
                            <span>OPTICALS</span>
                        </h2>

                        <p>
                            Crafting clarity, luxury and confidence
                            since 1959. Premium eyewear for every
                            vision and every moment.
                        </p>

                        <div className={styles.socials}>
                            <a href="#">
                                <FaInstagram size={18} />
                            </a>

                            <a href="#">
                                <FaFacebookF size={18} />
                            </a>

                            <a href="#">
                                <FaYoutube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.links}>
                        <h4>QUICK LINKS</h4>

                        <a href="/">Home</a>
                        <a href="/eyeglasses">Eyeglasses</a>
                        <a href="/sunglasses">Sunglasses</a>
                        <a href="/brands">Brands</a>
                        <a href="/contact">Contact Us</a>
                    </div>

                    {/* Support */}
                    <div className={styles.links}>
                        <h4>CUSTOMER SUPPORT</h4>

                        {/* <a href="#">Contact</a> */}
                        {/* <a href="#">Shipping Policy</a> */}
                        <a href="#">Return Policy</a>
                        <a href="#">FAQs</a>
                        {/* <a href="#">Privacy Policy</a> */}
                    </div>

                    {/* Contact */}
                    <div className={styles.contact}>
                        <h4>CONTACT US</h4>

                        <div>
                            <Phone size={18} />
                            <span>+91 98765 43210</span>
                        </div>

                        <div>
                            <Mail size={18} />
                            <span>info@shreeramopticals.com</span>
                        </div>

                        <div>
                            <MapPin size={18} />
                            <span>
                                Sirsa, Haryana,
                                India
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className={styles.bottom}>
                    {/* Left */}
                    <div className={styles.bottomLeft}>
                        <p>
                            © 2026 Shree Ram Opticals.
                            All Rights Reserved.
                        </p>

                        <span>
                            Design & Developed by{" "}

                            <a
                                href="https://gurirai.online"
                                target="_blank"
                            >
                                gurirai.online
                            </a>
                        </span>
                    </div>

                    {/* Center */}
                    {/* <div className={styles.bottomLinks}>
                        <a href="#">Privacy Policy</a>

                        <a href="#">Terms & Conditions</a>

                        <a href="#">Sitemap</a>
                    </div> */}

                    {/* Right */}
                    <button
                        className={styles.topBtn}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
}