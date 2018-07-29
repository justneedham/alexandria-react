import React, { Component } from 'react'
import styles from '../assets/css/howitworks.css'


export default class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'sell'
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.state.show === 'rent') {
            this.setState({show: 'sell'})
            } else {
            this.setState({show: 'rent'})
        }
    }

    getClasses() {
        let rentClasses = [styles.box];
        let sellClasses = [styles.box, styles.hidden];
        let rentButtonClasses = [styles.sliderButton, styles.rentButton];
        let sellButtonClasses = [styles.sliderButton, styles.sellButton, styles.active];
        if (this.state.show === 'rent') {
            // Chart
            rentClasses.push(styles.hidden);
            let classIndex = sellClasses.indexOf(styles.hidden);
            sellClasses.splice(classIndex, 1);

            // Slider
            sellButtonClasses.push(styles.active);
            let btnIndex = rentButtonClasses.indexOf(styles.active);
            if (btnIndex > 0 ) {
                rentButtonClasses.splice(btnIndex, 1);
            }
        } else {
            // Chart
            rentClasses.push(styles.hidden);
            let classIndex = rentClasses.indexOf(styles.hidden);
            rentClasses.splice(classIndex, 1);

            // Slider
            rentButtonClasses.push(styles.active);
            let btnIndex = sellButtonClasses.indexOf(styles.active);
            if (btnIndex > 0) {
                sellButtonClasses.splice(btnIndex, 1);
            }
        }
        return {
            rent: rentClasses.join(' '),
            sell: sellClasses.join(' '),
            rentBtn: rentButtonClasses.join(' '),
            sellBtn: sellButtonClasses.join(' '),
        };
    }

    render() {
        let classes = this.getClasses();

        return (
            <section id="how-it-works" className={styles.sectionStructure}>
                <h2 className={styles.sectionHeader}>How it works.</h2>
                <div className={styles.slider} onClick={this.onClick}>
                    <a className={classes.rentBtn}>Rent</a>
                    <a className={classes.sellBtn}>Sell</a>
                </div>
                <div className={styles.chart}>
                    {/*-----------Rent----------*/}
                    <div id={styles.boxOne} className={classes.rent}>
                        <img  className={styles.cartIcon} src={require('../assets/images/chart_icons/Cart Icon.png')} alt="cart-icon"/>
                        <h3 className={styles.subHeader}>Shop</h3>
                        <p className={styles.text}>
                            Selecting your rentals is easy. Search by title, category or isbn.
                            Can't find what you're looking for? Send us a request and we'll
                            order it for you.
                        </p>
                    </div>
                    <div id="item-2" className={classes.rent}>
                        <img className={styles.chartIcon} src={require('../assets/images/chart_icons/Truck Icon.png')} alt="truck-icon"/>
                        <h3 className={styles.subHeader}>Delivery</h3>
                        <p className={styles.text}>
                            While checking out, schedule your preferred delivery date and time.
                            Choose the best 3-hour block and we'll text you when we're close.
                        </p>
                    </div>
                    <div id={styles.boxThree} className={classes.rent}>
                        <img className={styles.formIcon} src={require('../assets/images/chart_icons/Form Icon.png')} alt="form-icon"/>
                        <h3 className={styles.subHeader}>Return</h3>
                        <p className={styles.text}>
                            When your return date approaches we'll send you a reminder. If
                            your payment method required a deposit, you'll be refunded at
                            that time.
                        </p>
                    </div>
                    <div id="item-4" className={classes.rent}>
                        <img className={styles.chartIcon} src={require('../assets/images/chart_icons/Truck Icon 2.png')} alt="truck-icon-two"/>
                        <h3 className={styles.subHeader}>Pick Up</h3>
                        <p className={styles.text}>
                            We'll send you a form to schedule the most convenient pick up time.
                            Simply pick a 3-hour time block and we'll text you when we're nearby.
                        </p>
                    </div>

                    {/*---------Sell--------*/}
                    <div id={styles.boxFive} className={classes.sell}>
                        <img className={styles.searchIcon} src={require('../assets/images/chart_icons/Search Icon (Colored).png')} alt="search-icon"/>
                        <h3 className={styles.subHeader}>Search</h3>
                        <p className={styles.text}>
                            Enter the isbn of your textbook into the search bar. The isbn
                            is your 13-digit number typically found in the cover or near
                            the barcode.
                        </p>
                    </div>
                    <div id="item-6" className={classes.sell}>
                        <img className={styles.quoteIcon} src={require('../assets/images/chart_icons/Quote Icon.png')} alt="quote-icon"/>
                        <h3 className={styles.subHeader}>Quote</h3>
                        <p className={styles.text}>
                            It may take a moment but our website will calculate your book's
                            value. If you accept, you'll be directed to a form to provide
                            additional information.
                        </p>
                    </div>
                    <div id={styles.boxSeven} className={classes.sell}>
                        <img className={styles.chartIcon} src={require('../assets/images/chart_icons/Truck Icon 2.png')} alt="truck-icon-two"
                             />
                        <h3 className={styles.subHeader}>Pick Up</h3>
                        <p className={styles.text}>
                            You'll be asked to provide your preferred pick up date and time. Choose
                            the best 3-hour block and we'll text you when we're close.
                        </p>
                    </div>
                    <div id="item-8" className={classes.sell}>
                        <img className={styles.moneyIcon} src={require('../assets/images/chart_icons/Money Icon.png')} alt="money-icon"/>
                        <h3 className={styles.subHeader}>Payment</h3>
                        <p className={styles.text}>
                            Payment will be processed at the time of pick-up. We currently payout
                            via: Paypal, Venmo and Square Cash.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

