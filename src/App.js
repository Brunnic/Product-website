import React from 'react';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/Layouts/Navbar/Navbar";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
