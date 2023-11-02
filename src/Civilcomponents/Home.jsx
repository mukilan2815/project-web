import React, { useEffect } from "react";
import Windmill from "../Images/homepiccivil.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${Windmill})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    position: "relative", // Add this to allow overlay positioning
  };

  // Add an overlay div to create a dark layer
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="civilhome"
      className="relative flex flex-col md:flex-row md:items-center h-screen"
      style={sectionStyle}
      data-aos="fade-up"
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={overlayStyle}
      ></div>
      <div className="mt-6 md:mt-24" data-aos="fade-up">
        <div className="text-4xl font-medium ml-10 md:ml-20 bg-windmill text-white">
          {" "}
          <h1>CIVIL</h1>
          <h1 className="ml-4 md:ml-12">CONSULTANCY</h1>
          <h1 className="ml-8 md:ml-32">SERVICES</h1>
        </div>
        <br />
        <br />
        <h1 className="text-white text-2xl md:text-4xl font-bold ml-10 md:ml-20">
          {" "}
          Building tomorrow's <br />{" "}
          <span className="space-y-2 text-blue-500">world</span>, today with
          <span className="text-yellow-400"> expertise.</span>
        </h1>
        <br /> <br />
        <div className="md:pl-2 ml-4 md:ml-20" data-aos="fade-up">
          <button className="bg-green-400 rounded-3xl p-3 md:p-4 px-8 md:px-10 flex items-center border-none hover:bg-green-500 transition-colors">
            Know More
            <div>
              <AiOutlineArrowRight />
            </div>
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;