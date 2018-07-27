import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="logo-container footer-item">
                <img className="logo-img" src={require("../assets/images/logos/colored_logo_left.png")}/>
                <div className="copyright">Alexandria Books {'\u00A9'}</div>
            </div>
            <div className="links-container footer-item">
                <div className="column-container">
                    <h3 className="column-header">Service</h3>
                    <ul className="column">
                        <li className="column-item">Overview</li>
                        <li className="column-item">Rent</li>
                        <li className="column-item">Sell</li>
                    </ul>
                </div>
                <div className="column-container">
                    <h3 className="column-header">Company</h3>
                    <ul className="column">
                        <li className="column-item"><Link exact to="/Contact">Contact</Link></li>
                        <li className="column-item"><Link exact to="/About">About</Link></li>
                        <li className="column-item"><Link exact to="/Jobs">Jobs</Link></li>
                    </ul>
                </div>
                <div className="column-container">
                    <h3 className="column-header">Support</h3>
                    <ul className="column">
                        <li className="column-item">Help</li>
                        <li className="column-item">FAQ</li>
                    </ul>
                </div>
                <div className="social-media-container footer-item">
                    <img className="social-media-img" src={require("../assets/images/social_media/instagram.png")} alt="instagram-logo"/>
                    <img className="social-media-img" src={require("../assets/images/social_media/facebook.png")} alt="facebook-logo"/>
                    <img className="social-media-img" src={require("../assets/images/social_media/twitter.png")} alt="twitter-logo"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;