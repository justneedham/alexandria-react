import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/footer.css'

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={[styles.footerItem, styles.logoContainer].join(' ')}>
                <img className={styles.logoImg} src={require("../assets/images/logos/colored_logo_left.png")} alt="color-logo"/>
                <div className={styles.copyright}>Alexandria Books {'\u00A9'} 2018</div>
            </div>
            <div className={[styles.linksContainer, styles.footerItem].join(' ')}>
                <div className={styles.columnContainer}>
                    <h3 className={styles.columnHeader}>Service</h3>
                    <ul className={styles.column}>
                        <li className={styles.columnItem}><Link exact="true" to="/">Overview</Link></li>
                        <li className={styles.columnItem}><Link exact="true" to="/rent">Rent</Link></li>
                        <li className={styles.columnItem}><Link exact="true" to="/sell">Sell</Link></li>
                    </ul>
                </div>
                <div className={styles.columnContainer}>
                    <h3 className={styles.columnHeader}>Company</h3>
                    <ul className={styles.column}>
                        <li className={styles.columnItem}><Link exact="true" to="/contact">Contact</Link></li>
                        <li className={styles.columnItem}><Link exact="true" to="/about">About</Link></li>
                        <li className={styles.columnItem}><Link exact="true" to="/jobs">Jobs</Link></li>
                    </ul>
                </div>
                <div className={styles.columnContainer}>
                    <h3 className={styles.columnHeader}>Support</h3>
                    <ul className={styles.column}>
                        <li className={styles.columnItem}><Link exact="true" to="/help">Help</Link></li>
                        <li className={styles.columnItem}><Link exact="true" to="/faq">FAQ</Link></li>
                    </ul>
                </div>
            </div>
            <div className={[styles.socialMediaContainer, styles.footerItem].join(' ')}>
                <img className={styles.socialMediaImg} src={require("../assets/images/social_media/instagram.png")} alt="instagram-logo"/>
                <img className={styles.socialMediaImg} src={require("../assets/images/social_media/facebook.png")} alt="facebook-logo"/>
                <img className={styles.socialMediaImg} src={require("../assets/images/social_media/twitter.png")} alt="twitter-logo"/>
            </div>
        </div>
    )
}

export default Footer;