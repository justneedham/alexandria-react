import React, { component } from 'react';
import Link from 'react-router-dom'
import styles from '../assets/css/menu.css'

function Menu(props) {
    return (
        <div className="menu-container">
            <h2 className="title title--two menu-title dark">Menu.</h2>
            <div className="flex-container menu-nav">
                <a className="title title-three dark" id="sign-in" href="{% url 'login_page' %}">Sign In</a>
                <div className="flex-container flex-container--cart">
                    <img id="menu-cart-img" src={require('../assets/images/chart_icons/Cart Icon (Gray).png')} alt="cartIcon"/>
                    <a className="text cart-number" href="{% url 'cart_page' %}">(0)</a>
                </div>
            </div>
            <ul className="column column-container menu">
                <li className="menu-item menu-item--top">
                    <a className="text text--menu" href="{% url 'search_page' %}">Search</a>
                </li>
                <li className="menu-item">
                    <a className="text text--menu">Request Textbooks</a>
                </li>
                <li className="menu-item">
                    <a className="text text--menu">Schedule Pick Up</a>
                </li>
                <li className="menu-item">
                    <a className="text text--menu">Find Rentals</a>
                </li>
                <li className="menu-item">
                    <a className="text text--menu">Sell Textbooks</a>
                </li>
                <li className="menu-item">
                    <a className="text text--menu">Account</a>
                </li>
                <li className="menu-item">
                    <a className="text text--menu">Support</a>
                </li>
                <li className="menu-item menu-item--bottom">
                    <a className="text text--menu">Sign Out</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu