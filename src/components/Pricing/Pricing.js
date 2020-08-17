import React from "react";

import "./Pricing.css";

const Pricing = () => {
    return (
        <section className="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-3 pricing-tag">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Normal Hosting</h5>
                                <p className="card-text">Better for beginners</p>
                                <h3 className="price-normal">0.80$ <span className="price-normal">/month</span></h3>
                                <ul className="config-list">
                                    <li className="configs">
                                        1 Site Web
                                    </li>
                                    <li className="configs">
                                        1 Email Compte
                                    </li>
                                    <li className="configs">
                                        Free SSL Certificat
                                    </li>
                                    <li className="configs">
                                        10 GB Free Storage
                                    </li>
                                    <li className="configs">
                                        500 MB Atlas DB
                                    </li>
                                </ul>
                                <button className="btn btn-checkout">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 pricing-tag">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Premium Hosting</h5>
                                <p className="card-text">Best for multiple websites</p>
                                <h3 className="price-normal">3.65$ <span className="price-normal">/month</span></h3>
                                <ul className="config-list">
                                    <li className="configs">
                                        Unlimited amount of websites
                                    </li>
                                    <li className="configs">
                                        Unlimited amount of Email accounts
                                    </li>
                                    <li className="configs">
                                        Free SSL Certificat
                                    </li>
                                    <li className="configs">
                                        1TB Free Storage
                                    </li>
                                    <li className="configs">
                                        10GB  Atlas DB
                                    </li>
                                    <li className="configs">
                                        WordPress Acceleration
                                    </li>
                                    <li className="configs">
                                        10 free domains
                                    </li>
                                    <li className="configs">
                                        100 Sub-domains
                                    </li>
                                    <li className="configs">
                                        Full premium support
                                    </li>
                                </ul>
                                <button className="btn btn-checkout">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 pricing-tag">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Busniss Hosting</h5>
                                <p className="card-text">Best for big companys</p>
                                <h3 className="price-normal">6$ + <span className="price-normal">/month</span></h3>
                                <ul className="config-list">
                                    <li className="configs">
                                        Contact Us for more details
                                    </li>
                                </ul>
                                <button className="btn btn-checkout">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;