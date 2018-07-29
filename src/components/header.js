import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/header.css'

function Header(props) {

    return (
        <div className={styles.main}>
            <div className={styles.gradient}>
                <div className={styles.graphic}>
                    <div className={styles.graphicBackground}>

                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className="logo header-item">
                        <img className={styles.logo} src={require("../assets/images/logos/full_logo_white.png")} alt="whiteLogo"/>
                    </div>
                    <nav className="nav header-item" id="xyz">
                        <div className="icon-bar bar-one"></div>
                        <div className="icon-bar bar-two"></div>
                        <div className="icon-bar bar-three"></div>
                    </nav>
                </div>
                {props.headerContent()}
            </div>
        </div>
    )
}

export default Header