import Navbar from "./EEEcomponents/Navbar";
import Home from "./EEEcomponents/Home";
import Aboutus from "./EEEcomponents/Aboutus";
import Ourservices from "./EEEcomponents/Ourservices";
import Ourworks from "./EEEcomponents/Ourworks";
import Footer from "./EEEcomponents/Footer";
import Faculties from "./EEEcomponents/Faculties";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import the AOS CSS file for styling

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Home />
      <Aboutus />
      <Faculties />
      <Ourservices />
      <Ourworks />
      <Footer />
    </div >
  );
}

export default App;