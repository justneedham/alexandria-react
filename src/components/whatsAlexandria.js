import React from "react";
import styles from "../assets/css/whatsAlexandria.css";


function WhatsAlexandria() {
    return (
        <section className={styles.sectionStructure}>
            <img className={styles.bookImg} src={require('../assets/elements/book.png')} alt="white_logo"/>
            <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeader}>What's Alexandria?</h2>
                <div id="rentals" className={styles.textBlock}>
                    <h3 className={styles.subHeader}>Rentals</h3>
                    <p className={styles.text}>
                        Rent textbooks from Alexandria Books and have them delivered to
                        your door. Don't worry about shipping your books back, we'll
                        pick them up at the end of the semester.
                    </p>
                </div>
                <div id="buyback" className={styles.textBlock}>
                    <h3 className={styles.subHeader}>Textbook Buy Back</h3>
                    <p className={styles.text}>
                        Have old textbooks sitting around? Done with classes and need
                        some spending money? Alexandria will give you cash for you
                        used books. We'll pick those up too.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhatsAlexandria;