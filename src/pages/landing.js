import React from 'react'
import { render } from 'react-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import Menu from '../components/menu'
import styles from '../assets/css/landing.css'
import WhatsAlexandria from '../components/whatsAlexandria'
import TextbooksMadeSimple from '../components/textbooksMadeSimple'
import HowItWorks from '../components/howitworks'
import Search from '../components/search'

function renderHeaderContent() {
    return (
        <div className={styles.container}>
            <h1 className={styles.headline}>Rentals. Delivered.</h1>
            <div className={styles.flexContainer}>
                <a className={styles.buttonRental}>Find Rentals</a>
                <a className={styles.buttonSell}>Sell Textbooks</a>
            </div>
        </div>
    )
}

function LandingPage(props) {
    return (
        <div>
            <Header headerContent={renderHeaderContent}/>
            <WhatsAlexandria />
            <TextbooksMadeSimple />
            <HowItWorks />
            <Search />
            <Footer />
        </div>
    )
}

export default LandingPage