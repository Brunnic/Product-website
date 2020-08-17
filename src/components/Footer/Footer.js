import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="footer-links">
                            <p className="footer-header-link">HOST</p>
                            <li className="footer-link">Website host</li>
                            <li className="footer-link">VPS Host</li>
                            <li className="footer-link">Dedicated Server Host</li>
                            <li className="footer-link">Cloud Host</li>
                            <li className="footer-link">Wordpress Host</li>
                            <li className="footer-link">ECommerce Host</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="footer-links">
                            <p className="footer-header-link">DOMAINS</p>
                            <li className="footer-link">Domain verification</li>
                            <li className="footer-link">Domain transfer</li>
                            <li className="footer-link">Buy Domain name</li>
                            <li className="footer-link">Buy SSL</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="footer-links">
                            <p className="footer-header-link">Host</p>
                            <li className="footer-link">Website host</li>
                            <li className="footer-link">VPS Host</li>
                            <li className="footer-link">Dedicated Server Host</li>
                            <li className="footer-link">Cloud Host</li>
                            <li className="footer-link">Wordpress Host</li>
                            <li className="footer-link">ECommerce Host</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="footer-links">
                            <p className="footer-header-link">Help</p>
                            <li className="footer-link">About us</li>
                            <li className="footer-link">Contact</li>
                            <li className="footer-link">Support</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2020 Host.com - Best Hosting website.
                </div>
            </div>
        </section>
    );
}

export default Footer;