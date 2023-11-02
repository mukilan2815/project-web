// import Navbar from "./Civilcomponents/Navbar";
import Home from "./Civilcomponents/Home";
import Aboutus from "./Civilcomponents/Aboutus";
import Ourservices from "./Civilcomponents/Ourservices";
import Ourworks from "./Civilcomponents/Ourworks";
import Footer from "./Civilcomponents/Footer";
import Faculties from "./Civilcomponents/Faculties";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import the AOS CSS file for styling

function Civil() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="bg-slate-50">
            {/* <Navbar /> */}
            <Home />
            <Aboutus />
            <Faculties />
            <Ourservices />
            <Ourworks />
            <Footer />
        </div >
    );
}

export default Civil;
