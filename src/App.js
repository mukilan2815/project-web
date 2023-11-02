import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
// import Faculties from "./components/Faculties";
import Ourservices from "./components/Ourservices";
import Ourworks from "./components/Ourworks";
import Footer from "./components/Footer";
import Faculties from "./components/Faculties";
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
