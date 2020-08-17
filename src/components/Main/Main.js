import React from "react";

import "./Main.css";

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row align-items-center justify-content-end">
                    <div className="col-md-6 p-header">
                        <h1>The best hosting services are here!</h1>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum veniam odit autem laudantium tenetur ipsa libero impedit sint, nemo aperiam?</p>
                        <button className="btn btn-primary">Get it now!</button>
                    </div>
                    <div className="col-md-6">
                        <h1 className="price-header">From: </h1>
                        <h1 className="price">0.80$ <span className="per-m">/month</span></h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;