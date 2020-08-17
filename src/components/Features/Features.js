import React from "react";

import "./Features.css";
import feature1 from "../../images/feature1.jpg"
import feature2 from "../../images/feature2.jpg"

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="row feature align-items-center">
                    <div className="col-md-6">
                        <h2 className="feature-header">One Click Setup</h2>
                        <p className="feature-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquid, aliquam repellendus minima nesciunt cum commodi laudantium fugiat nostrum quod?</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={feature1} alt="" className="feature-img"/>
                    </div>
                    <div className="col-12">
                        <hr/>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={feature2} alt="" className="feature-img"/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="feature-header">Easy to configure</h2>
                        <p className="feature-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquid, aliquam repellendus minima nesciunt cum commodi laudantium fugiat nostrum quod?</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Features;