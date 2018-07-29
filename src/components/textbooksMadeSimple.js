import React from "react";
import styles from "../assets/css/textbooksMadeSimple.css";

function TextbooksMadeSimple() {
    return (
        <section className={styles.sectionStructure}>
            <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeader}>Textbooks made simple.</h2>
                <div className={styles.textBlock}>
                    <h3 className={styles.subHeader}>Selection</h3>
                    <p className={styles.text}>
                        Simply search for books by title, isbn or subject. Alexandria
                        features a clean and simplified interface. No reviews. No
                        recommendations. Can't find what you're looking for? Fill out
                        the request form and we'll order it for you.
                    </p>
                </div>
                <div className={styles.textBlock}>
                    <h3 className={styles.subHeader}>Payment</h3>
                    <p className={styles.text}>
                        For rentals, we accept all major credit cards in addition to
                        Paypal, Venmo, Square Cash and Bitcoin. Alexandria will buyback
                        textbooks with your preferred payments platform.
                    </p>
                </div>
                <div className={styles.textBlock}>
                    <h3 className={styles.subHeader}>Delivery/Pickup</h3>
                    <p className={styles.text}>
                        Unless otherwise specified, all pick-ups and deliveries will be
                        made on Saturdays. When completing your order choose the best 3
                        hr block that works for you. In a hurry? Contact us for special
                        deliveries and expedited rates.
                    </p>
                </div>
            </div>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={require('../assets/images/misc_logos/visa_logo.png')}  alt="visa-logo"/>
                <img className={styles.logo} src={require('../assets/images/misc_logos/mastercard_logo.png')} alt="master-logo"/>
                <img className={styles.logo} src={require('../assets/images/misc_logos/paypal_logo.png')} alt="paypal-logo"/>
                <img className={styles.logo} src={require('../assets/images/misc_logos/venmo_logo.png')} alt="venmo-logo"/>
                <img className={styles.logo} src={require('../assets/images/misc_logos/square_logo.png')} alt="square-logo"/>
                <img className={styles.logo} src={require('../assets/images/misc_logos/bitcoin_logo.png')} alt="bitcoin-logo"/>
            </div>
        </section>
    )
}

export default TextbooksMadeSimple